import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carddetails } from './interfaces/carddetails';
import { Roomtype } from './interfaces/roomtype';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getRoomById(id: number){
    return this.http.get<Carddetails>(`https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${id}`)
  }

  getAllRooms(){
    return this.http.get<Carddetails[]>(`https://hotelbooking.stepprojects.ge/api/Rooms/GetAll`)
  }

  getRoomTypes(){
    return this.http.get<Roomtype[]>("https://hotelbooking.stepprojects.ge/api/Rooms/GetRoomTypes")
  }
}
