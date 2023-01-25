import { Component, OnDestroy, OnInit } from '@angular/core';
import { ZenObservable } from 'zen-observable-ts';
import { APIService, Restaurant } from './API.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'amplify-app';
  private subscription: ZenObservable.Subscription | null = null;
  public restaurants: Array<Restaurant> = [];
  // public calendarEvents: Array<CalendarEvent> = [];

  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.api.ListRestaurants().then(event => {
      this.restaurants = event.items as Restaurant[];
    });

    // this.api.ListCalendarEvents().then(event => {
    //   this.calendarEvents = event.items as CalendarEvent[];
    // });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }
}
