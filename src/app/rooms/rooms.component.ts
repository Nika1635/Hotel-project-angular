import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { Carddetails } from '../interfaces/carddetails';

@Component({
  selector: 'app-rooms',
  imports: [FormsModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit{
  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.getRooms()
  }

  rooms: Carddetails[] = []

  getRooms(){
    this.api.getAllRooms().subscribe((data) => {
      this.rooms = data
      console.log(data)
    })
  }

}
