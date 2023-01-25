import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from '../API.service';

@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.css']
})
export class CalendarEventComponent {
  public createForm: FormGroup;

  // public calendarEvents: Array<CalendarEvent> = [];

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
    /* fetch when app loads */
    // this.api.ListCalendarEvents().then((event) => {
    //   this.calendarEvents = event.items as CalendarEvent[];
    // });
  }

  // public onCreate(calendarEvent: CalendarEvent) {
  //   this.api
  //     .CreateCalendarEvent(calendarEvent)
  //     .then((event) => {
  //       console.log('item created!');
  //       this.createForm.reset();
  //     })
  //     .catch((e) => {
  //       console.log('error creating calendar event', e);
  //     });
  // }

  // public onCreateLoad() {
  //   const calEvent1: CalendarEvent = {
  //     __typename: 'CalendarEvent',
  //     id: '123',
  //     start: '',
  //     end: '',
  //     title: 'Louis',
  //     color: 'Purple',
  //     actions: [],
  //     allDay: false,
  //     resizable: {
  //       beforeStart: false,
  //       afterEnd: false
  //     },
  //     draggable: false
  //   }
  //   this.onCreate(calEvent1);
  // }
}
