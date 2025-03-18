import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { Carddetails } from '../interfaces/carddetails';

@Component({
  selector: 'app-rooms',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getRooms()
  }

  public form: FormGroup = new FormGroup({
    roomTypeId: new FormControl(""),
    priceFrom: new FormControl(""),
    priceTo: new FormControl(""),
    maximumGuests: new FormControl(""),
    checkIn: new FormControl(""),
    checkOut: new FormControl("")
  })

  rooms: Carddetails[] = []

  getRooms() {
    this.api.getAllRooms().subscribe((data) => {
      this.rooms = data
      console.log(data)
    })
  }

  submit(){
    console.log(this.form)
  }
}
