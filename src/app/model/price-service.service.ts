import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  number: string;
}

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  projects: Project[] = [
    {id: 0, number: '50000 ₾'},
    {id: 1, number: '100000 ₾'},
    {id: 2, number: '150000 ₾'},
    {id: 3, number: '200000 ₾'},
    {id: 4, number: '300000 ₾'},
  ];

  constructor() { }

  
  getProjects(){
    return this.projects;
  }
  getProjectById(id: number): Project{
    let project= this.projects.find(project => project.id===id);

    if(project===undefined){
      throw new TypeError ('error')
    }
    return project;
  }

 

  
}
