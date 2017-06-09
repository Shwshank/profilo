import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  trigger,  state,  style,  animate,  transition, keyframes} from '@angular/animations';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  animations: [
  trigger('flyInOut', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      animate(700, keyframes([
        style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
        style({opacity: 1, transform: 'translateX(15px)',  offset: 0.5}),
        style({opacity: 1, transform: 'translateX(0)',     offset: 1.5})
      ]))
    ]),
    transition('* => void', [
      animate(500, style({transform: 'translateX(100%)'}))
    ])
  ])
]
})
export class PageComponent implements OnInit {
  state : string = 'in';

  constructor() { }

  ngOnInit() {
  }

}
