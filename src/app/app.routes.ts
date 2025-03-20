import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HotelsComponent } from './hotels/hotels.component';
import { BookedComponent } from './booked/booked.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "rooms", component: RoomsComponent},
    {path: "hotels", component: HotelsComponent},
    {path: "booked", component: BookedComponent},
    {path: "details/:id", component: DetailsComponent}
];
