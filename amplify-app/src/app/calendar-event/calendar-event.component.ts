import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { startOfDay } from 'date-fns';
import { APIService, CalendarEvent, CreateCalendarEventInput } from '../API.service';

@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.css']
})
export class CalendarEventComponent {
  public createForm: FormGroup;

  public calendarEvents: Array<CalendarEvent> = [];

  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      start: ['', Validators.required],
      end: ['', Validators.required],
      title: ['', Validators.required],
      color: ['', Validators.required],
      actions: ['', Validators.required],
      allDay: ['', Validators.required],
      resizable: ['', Validators.required],
      draggable: ['', Validators.required],
    });
  }

  async ngOnInit() {
    this.api.ListCalendarEvents().then((event) => {
      this.calendarEvents = event.items as CalendarEvent[];
    });
  }

  public onCreate(calendarEvent: CreateCalendarEventInput) {
    this.api
      .CreateCalendarEvent(calendarEvent)
      .then((event) => {
        console.log('item created!');
        this.createForm.reset();
      })
      .catch((e) => {
        console.log('error creating calendar event', e);
      });
  }

  public onCreateLoad() {
    const calEvent1: CreateCalendarEventInput = {
      start: startOfDay(new Date()).toString(),
      title: 'Louis',
      colour: 'Blue',
      allDay: true,
      draggable: false,
    }
    this.onCreate(calEvent1);
  }
}
