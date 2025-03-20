import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { Carddetails } from '../interfaces/carddetails';
import { PostService } from '../post.service';
import { Roomtype } from '../interfaces/roomtype';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rooms',
  imports: [FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {
  constructor(private api: ApiService, private post: PostService) {
   }

  ngOnInit(): void {
    this.getRooms()
    this.getTypes()
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
  types: Roomtype[] = []

  getTypes(){
    this.api.getRoomTypes().subscribe((data) => {
      this.types = data
    })
  }

  getRooms() {
    this.api.getAllRooms().subscribe((data) => {
      this.rooms = data
    })
  }

  filterByType(typeId: number) {
    this.api.getAllRooms().subscribe((data) => {
      this.rooms = data.filter(room => room.roomTypeId === typeId)
    })
  }

  submit(){
    this.post.filterRooms(this.form.value).subscribe({
      next: (data: any) => {
        this.rooms = data
      },
      error: (errorr) => {
        if(errorr.status == 400){
          alert("Fill all input for filter")
        }
      }
    })
  }
}
