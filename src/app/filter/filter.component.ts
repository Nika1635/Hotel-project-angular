import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApiService } from '../api.service';
import { PostService } from '../post.service';

@Component({
  selector: 'app-filter',
  imports: [FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  constructor(private api: ApiService, private post: PostService) {}

  public form: FormGroup = new FormGroup({
    roomTypeId: new FormControl(""),
    priceFrom: new FormControl(""),
    priceTo: new FormControl(""),
    maximumGuests: new FormControl(""),
    checkIn: new FormControl(""),
    checkOut: new FormControl("")
  })

  @Output() submitTrnsport: EventEmitter<any> = new EventEmitter()
  @Output() getall: EventEmitter<any> = new EventEmitter()

  submit(){
    this.submitTrnsport.emit(this.form.value)
  }

  getRooms() {
    this.getall.emit()
  }

}
