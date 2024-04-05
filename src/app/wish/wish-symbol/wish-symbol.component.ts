import { Component, OnInit, Input } from '@angular/core';
import { WishSymbol } from '../../../shared/models/wishSymbol';


@Component({
  selector: 'wish-symbol',
  standalone: false,
  templateUrl: './wish-symbol.component.html',
  styleUrls: ['./wish-symbol.component.css']
}) 

export class WishSymbolComponent implements OnInit{
  @Input() wishes : WishSymbol[] = []

  constructor(){ 
  }

  ngOnInit(): void { 
      
  }

}
