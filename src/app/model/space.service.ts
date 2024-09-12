import { Injectable } from '@angular/core';


export interface Space {
  id: number;
  number: string;
}

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  space: Space[] = [
    {id: 0, number: '50,000 მ2'},
    {id: 1, number: '50,000 მ2'},
    {id: 2, number: '50,000 მ2'},
    {id: 3, number: '50,000 მ2'},
    {id: 4, number: '50,000 მ2'},
  ];

  constructor() { }

  
  getProjects(){
    return this.space;
  }
  getProjectById(id: number): Space{
    let project= this.space.find(space => space.id===id);

    if(project===undefined){
      throw new TypeError ('error')
    }
    return project;
  }

 

}
