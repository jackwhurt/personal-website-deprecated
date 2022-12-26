import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, Restaurant } from '../API.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  public createForm: FormGroup;

  /* declare restaurants variable */
  public restaurants: Array<Restaurant> = [];

  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  async ngOnInit() {
    /* fetch restaurants when app loads */
    this.api.ListRestaurants().then((event) => {
      this.restaurants = event.items as Restaurant[];
    });
  }

  public onCreate(restaurant: Restaurant) {
    this.api
      .CreateRestaurant(restaurant)
      .then((event) => {
        console.log('item created!');
        this.createForm.reset();
      })
      .catch((e) => {
        console.log('error creating restaurant...', e);
      });
  }
}