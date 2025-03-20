import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, } from '@angular/forms';
import { PostService } from '../post.service';
import { Carddetails } from '../interfaces/carddetails';
import { error } from 'console';



@Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  constructor(private api: ApiService, private route: ActivatedRoute, private post: PostService){}

  ngOnInit(): void {
    this.getRoomInfo()
  }

  activeTab: string = 'home'
  roominfo!: Carddetails
  photoarry: any[] = []
  photoIndex: number = 0
  roomid!: string
  checkInDate!: number
  checkOutDate!: number
  price: number = 0

  startdate: number = new Date().getTime()
  enddate: number = new Date().getTime()

  public form: FormGroup = new FormGroup({
    roomId: new FormControl(""),
    checkInDate: new FormControl("", [Validators.required]), 
    checkOutDate: new FormControl("", [Validators.required]),
    customerName: new FormControl("", [Validators.required]),
    customerPhone: new FormControl("", [Validators.required])
  })

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  timecalculate(){
    console.log(this.checkInDate, this.checkOutDate)
    let startTimestamp = new Date(this.checkInDate).getTime()
    let endTimestamp = new Date(this.checkOutDate).getTime()
    let difference = endTimestamp - startTimestamp
    let differenceInDays = Math.round(difference / (1000 * 60 * 60 * 24))
    this.price = this.roominfo.pricePerNight * differenceInDays
    console.log(this.price)
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
      this.roomid = id['id']
      this.api.getRoomById(id['id']).subscribe((data) =>{
        this.roominfo = data
        this.photoarry = this.roominfo.images
        this.form.get('roomId')?.setValue(this.roomid)
      })
    })
  }

  sendBookInfo(){
    this.post.bookRoom(this.form.value).subscribe({
      next: (data) =>{
      },
      error: (errorr) => {
        if(errorr.statusText == "OK"){
          alert("Room Succesfuly Booked")
          console.log(errorr)
        }else{
          console.log(errorr)
          alert(errorr.error)
        }
      }
    })
  }
}
