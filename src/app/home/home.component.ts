import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Carddetails } from '../interfaces/carddetails';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private api: ApiService){
    this.cardId()
  }

  cards: Carddetails[] = []

  cardId(){
    for (let i = 1; i < 7; i++) {
      this.api.getCardsById(i).subscribe((data) => {
        this.cards.push(data);
      });
    }
    console.log(this.cards)
  }
}
