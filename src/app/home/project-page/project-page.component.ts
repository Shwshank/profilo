import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../provider/project-service';
import { Project } from '../../provider/project-model';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  tempArray: any;
  projects = [];

  //i=1;

  constructor(private ProjectService : ProjectService) {
    this.ProjectService.getProjects().subscribe((response)=>{
      this.tempArray = response.json();
      for(var x in this.tempArray){
        this.projects.push(this.tempArray[x]);
      }
      console.log(this.projects);
    });

  }

  ngOnInit() {

  }

}
