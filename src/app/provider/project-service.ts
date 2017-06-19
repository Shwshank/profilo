import { Http, Response } from '@angular/http';
import { EventEmitter, Injectable } from "@angular/core";

import { Project } from "./project-model";
import { Message } from "./message-modal";
import { TimeStamp } from './timeStamp-modal';

@Injectable()
export class ProjectService {

  serverProject : Project[];
  message: Message ;
  visitor = 0;
  projectURL : string = "https://profileminion-cfcae.firebaseio.com/data.json";
  visitorReturnedURL :string = 'https://profileminion-cfcae.firebaseio.com/visitor/return.json';
  visitorNewURL: string = 'https://profileminion-cfcae.firebaseio.com/visitor/new.json';
  messageURL: string = 'https://profileminion-cfcae.firebaseio.com/message.json';
  timeStamp :String;
  visitorStatus : String;
  timeStampData : TimeStamp;
  timeStampURL : string = "https://profileminion-cfcae.firebaseio.com/timestamp.json";

  projects : Project[] = [

    new Project('https://firebasestorage.googleapis.com/v0/b/profileminion-cfcae.appspot.com/o/project0.png?alt=media&token=f5aeb264-db5e-4331-9e31-e323b0f25b69',
    'Arbor Preparatory High School',
    'News posting portal',
    'Designing Application API',
    ' nodejs, MongoDb ',
    'Here goes the details'),

    new Project('https://firebasestorage.googleapis.com/v0/b/profileminion-cfcae.appspot.com/o/project1.png?alt=media&token=759bba3e-127a-4bcf-894b-31a21d209137',
    'Arbor Preparatory High School',
    'News posting portal',
    'Designing Application API',
    ' nodejs, MongoDb ',
    'Here goes the details')

  ];

  constructor( private http: Http ){
  }

  getProjects(){
    return this.http.get(this.projectURL);
  }

  getReturnedVisitorStatus(){
    return this.http.get(this.visitorReturnedURL);
  }

  getNewVisitorStatus(){
    return this.http.get(this.visitorNewURL);
  }

  setReturnedVisitorStatus(number: number){
    return this.http.put(this.visitorReturnedURL,number);
  }

  setNewVisitorStatus(number: number){
    //console.log("new status ",number);
    return this.http.put(this.visitorNewURL,number);
  }

  setMessage(message : Message){
    //console.log(message);
    return this.http.post(this.messageURL,message);
  }

  setTimestamp(timeStamp: TimeStamp){
      return this.http.post(this.timeStampURL,timeStamp);
  }

  cacheStatus(status:string){

    if(status=="positive+"){

      this.getReturnedVisitorStatus().subscribe((response)=>{
        this.visitor = response.json();
        console.log(this.visitor+1);
        ++this.visitor;
        this.setReturnedVisitorStatus(this.visitor).subscribe();
        this.timeStamp = new Date().toString();
        this.visitorStatus = " Returned Visitor ";
        this.timeStampData = new TimeStamp (this.timeStamp, this.visitorStatus);
        this.setTimestamp(this.timeStampData).subscribe();
      });

    }
    else{

      this.getNewVisitorStatus().subscribe((response)=>{
        this.visitor = response.json();
        console.log(this.visitor+1);
        ++this.visitor;
        this.setNewVisitorStatus(this.visitor).subscribe();
        this.timeStamp = new Date().toString();
        this.visitorStatus = " Returned Visitor ";
        this.timeStampData = new TimeStamp (this.timeStamp, this.visitorStatus);
        this.setTimestamp(this.timeStampData).subscribe();
      });

    }
  }

}
