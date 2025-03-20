import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Carddetails } from '../interfaces/carddetails';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  constructor(private api: ApiService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getRoomInfo()
  }

  activeTab: string = 'home'
  roominfo!: any
  photoarry: any[] = []
  photoIndex: number = 0

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  nextPhoto(){
    if(this.photoIndex < this.photoarry.length - 1){
      this.photoIndex++
    } else {
      this.photoIndex = 0
    }
  }

  prevPhoto(){
    if(this.photoIndex > 0){
      this.photoIndex--
    } else {
      this.photoIndex = this.photoarry.length - 1
    }
  }

  getRoomInfo(){
    this.route.params.subscribe(id => {
      this.api.getRoomById(id['id']).subscribe((data) =>{
        this.roominfo = data
        this.photoarry = this.roominfo.images
      })
    })
  }
}
