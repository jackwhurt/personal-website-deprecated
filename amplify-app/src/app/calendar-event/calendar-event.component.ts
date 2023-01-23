import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, CalendarEvent } from '../API.service';

@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.css']
})
export class CalendarEventComponent {
  public createForm: FormGroup;

  /* declare restaurants variable */
  public calendarEvents: Array<CalendarEvent> = [];

  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  async ngOnInit() {
    /* fetch restaurants when app loads */
    this.api.ListCalendarEvents().then((event) => {
      this.calendarEvents = event.items as CalendarEvent[];
    });
  }

  public onCreate(calendarEvent: CalendarEvent) {
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
}
