import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { Carddetails } from '../interfaces/carddetails';
import { PostService } from '../post.service';
import { Roomtype } from '../interfaces/roomtype';
import { RouterModule } from '@angular/router';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-rooms',
  imports: [FormsModule, ReactiveFormsModule, RouterModule, FilterComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {
  constructor(private api: ApiService, private post: PostService) {}

  ngOnInit(): void {
    this.getRooms()
    this.getTypes()
    this.getHotelInfo()
  }

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

  submit(response: any){
    this.post.filterRooms(response).subscribe({
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
  
  getHotelInfo() {
    this.api.getAllRooms().subscribe((data) => {
      if(Number(sessionStorage.getItem("hotelid")) > 0){
        this.rooms = data.filter(room => room.hotelId ===  Number(sessionStorage.getItem("hotelid")))
        sessionStorage.removeItem("hotelid")
      }
    })
  }
}
