import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Hoteldetails } from '../interfaces/hoteldetails';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hotels',
  imports: [RouterModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent implements OnInit{
  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.getHotels()
  }

  hotels: Hoteldetails[] = []

  getHotels(){
    this.api.getHotels().subscribe((data) => {
      this.hotels = data
    })
  }

  sendInfo(id: number){
    sessionStorage.setItem("hotelid", `${id}`)
  }
}
