import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carddetails } from './interfaces/carddetails';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getCardsById(id: number){
    return this.http.get<Carddetails>(`https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${id}`)
  }
}
