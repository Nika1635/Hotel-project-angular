import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {}

  filterRooms(data: any){
    return this.http.post("https://hotelbooking.stepprojects.ge/api/Rooms/GetFiltered", data)
  }

  bookRoom(data: any){
    return this.http.post("https://hotelbooking.stepprojects.ge/api/Booking", data)
  }
}
