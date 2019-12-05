import { Component, OnInit } from '@angular/core';

export class Movie { 
  _id: string; 
  name: string; 
  image: string; 
  description: string; 
  rating: number;  
  }
  
  
@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  constructor() { }
  movie: Movie = {
    _id: '590d8dc7a7cb5b8e3f1bfc48',
    name: 'Avengers EndGame',
    image: '../images/poster.jpg',
    description: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe. ',
    rating: 3
  };

  ngOnInit() {
  }
}

