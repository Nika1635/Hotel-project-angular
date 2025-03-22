import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Bookedroom } from '../interfaces/bookedroom';
import { CommonModule } from '@angular/common';
import { PostService } from '../post.service';

@Component({
  selector: 'app-booked',
  imports: [CommonModule],
  templateUrl: './booked.component.html',
  styleUrl: './booked.component.css'
})
export class BookedComponent implements OnInit {
  constructor(private api: ApiService, private post: PostService){}

  ngOnInit(): void {
    this.getbooked()
  }

  booked: Bookedroom[] = []

  getbooked(){
    this.api.getBookedRooms().subscribe((dataall) => {
      this.booked = dataall
    })
  }

  deleteBooking(id: number, event: any){
    event.preventDefault()
    this.post.deleteRoom(id).subscribe({
      next: (data) => { 
        alert(data)
      },

      error: (errorr) => {
        if(errorr.statusText == "OK"){
          alert("Booking Succesfuly Deleted")
          this.api.getBookedRooms().subscribe((data) => {
            this.booked = data
          })
        }else{
          alert(errorr.error)
        }
      }
    })
  }

}
