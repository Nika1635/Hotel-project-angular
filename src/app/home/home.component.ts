import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Carddetails } from '../interfaces/carddetails';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.cardId()
  }

  cards: Carddetails[] = []

  cardId(){
    for (let i = 1; i < 7; i++) {
      this.api.getRoomById(i).subscribe((data) => {
        this.cards.push(data)
      })
    }
  }
}
