import { Component, OnInit, Input } from '@angular/core';
import { WishSymbol } from '../../../shared/models/wishSymbol';
import {EventService} from '../../../shared/services/EventService';



@Component({
  selector: 'wish-symbol-item',
  templateUrl: './wish-symbol-item.component.html',
  styleUrls: ['./wish-symbol-item.component.css']
})
export class WishSymbolItemComponent implements OnInit {
  @Input() wish! : WishSymbol;
  
  constructor(private events: EventService) { } 
  
  src = ['']
  link = '';
  value = 0
  Imgs = [
    { img: "fish-1.png/"},
    { img: "fish-2.png/"},
    { img: "fish-3.png/"},
    { img: "fish-4.png/"},
    { img: "snake-1.png/"},
    { img: "snake-2.png/"},
    { img: "snake-3.png/"},
    { img: "snake-4.png/"},
    { img: "draco-1.png/"},
    { img: "draco-2.png/"},
    { img: "draco-3.png/"},
    { img: "draco-4.png/"},
    { img: "bird-1.png/"},
    { img: "bird-2.webp/"},
    { img: "bird-3.png/"},
    { img: "bird-4.webp/"},
    { img: "black-space.png/"},
  ]
  
  ngOnInit(): void {
    
  }
  
  changeSymbol() {
    this.Imgs = this.Imgs.map( e  => {
      var originalLink = e.hasOwnProperty('img') ? e["img"] : e.img;
      for (let i = 0; i < originalLink.length; i++) {
        if(originalLink[i]=="/") {
          this.src.push(this.link);
          this.link = '';
          continue;
        }
        this.link = this.link.concat(originalLink[i]);
      }
      return {
        ...e
      }
    });
    this.value++;
    // console.log(this.value);
    this.wish.wishImg = this.src[this.value]
  }

}
