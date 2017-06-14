import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  trigger,  state,  style,  animate,  transition, keyframes} from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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
export class HomeComponent implements OnInit {
  state : string = 'in';
  form_submit : string = "Send";
  form_name : string;
  form_message : string;
  @ViewChild('f') form_contact: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.form_name = this.form_contact.value.name;
    this.form_message = this.form_contact.value.message;
    console.log(this.form_name+ ' , ' +this.form_message );
    this.form_contact.reset();
    if(this.form_submit == "Thank you!"){
      this.form_submit = "Got the messaging again!";
    }
    else if(this.form_submit == "Got the messaging again!"){
      this.form_submit = "I'll be with you soon";
    }
    else if(this.form_submit == "I'll be with you soon"){
      this.form_submit = "M glad keep sending";
    }
    else{
      this.form_submit = "Thank you!";
    }

  }
}
