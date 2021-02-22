import { isLoweredSymbol } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books =[
    {
      _id:1,
      cover: 'assets/Images/book.jpg',
      name: 'The Arrivals',
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus autem quas, debitis
      officiis, porro beatae, ratione optio consequuntur aspernatur laborum exercitationem`,
      unitValue:50000,  
    },

    {
      _id:1,
      cover: 'assets/Images/book.jpg',
      name: 'The Arrivals',
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus autem quas, debitis
      officiis, porro beatae, ratione optio consequuntur aspernatur laborum exercitationem`,
      unitValue:50000,  
    },

    {
      _id:1,
      cover: 'assets/Images/book.jpg',
      name: 'The Arrivals',
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus autem quas, debitis
      officiis, porro beatae, ratione optio consequuntur aspernatur laborum exercitationem`,
      unitValue:50000,  
    },

    {
      _id:1,
      cover: 'assets/Images/book.jpg',
      name: 'The Arrivals',
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus autem quas, debitis
      officiis, porro beatae, ratione optio consequuntur aspernatur laborum exercitationem`,
      unitValue:50000,  
    }
      
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
