import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormGroupService } from '../../services/form-group.service';
import { RegionServiceService } from '../../services/region-service.service';
import { SityService } from '../../services/sity.service';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent implements OnInit {
listForm: FormGroup;
openAlert: boolean= false;
  result: any;
  data: any[] = [];
  data2: any[] = [];
constructor ( private formgroupService : FormGroupService, private regionServices: RegionServiceService, private sityService: SityService){

 }
 ngOnInit(): void {
  this.listForm = this.formgroupService.listRegistrationForm();
  
  this.regionServices.getData().subscribe(
    data => {
      this.result = data;
      this.data = data.map(item => item.name); 
      
      console.log('Extracted Names:', this.data);
    },
    error => {
      console.error('Error fetching data', error);
    }
  );

  this.sityService.getData().subscribe(
    data2=>{
      this.result = data2;
      this.data2 = data2.map(item2 => item2.name); 
      
      console.log('Extracted Names:', this.data2);
    }
  )
}

onSubmit() {
  if(this.listForm.invalid) {  
    this.openAlert = true;
    console.log('invalid');
    
  } 

}

selectedOption: string | null = null;

selectOption(option: string) {
  this.selectedOption = option;
  // Add your logic to handle the option selection, such as opening a modal or adding information
  console.log('Selected option:', option);
}
}
