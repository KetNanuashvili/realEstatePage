import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormGroupService } from '../../services/form-group.service';
import { RegionServiceService } from '../../services/region-service.service';
import { SityService } from '../../services/sity.service';
import { BackandService } from '../../services/backand.service';
import { RealEstatesService } from '../../services/real-estates.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  listForm: FormGroup;
  openAlert: boolean = false;
  result: any;
  data: any[] = [];
  data2: any[] = [];

  constructor(
    private formgroupService: FormGroupService,
    private regionServices: RegionServiceService,
    private sityService: SityService,
    private backendService: BackandService,
    private realEstatesService:RealEstatesService
  ) {}

  ngOnInit(): void {
    this.listForm = this.formgroupService.listRegistrationForm();

    console.log(this.listForm);

    this.regionServices.getData().subscribe(
      data => {
        this.result = data;
        this.data = data.map(item => item.name);
      },
      error => {
        console.error('Error fetching data', error);
      }
    );

    this.sityService.getData().subscribe(
      data2 => {
        this.result = data2;
        this.data2 = data2.map(item2 => item2.name);
      },
      error => {
        console.error('Error fetching data', error);
      }
    );

    

  }

  onSubmit(): void {
    if (this.listForm.valid) {
      // Convert form values to FormData
      const formData = new FormData();
      Object.keys(this.listForm.value).forEach(key => {
        formData.append(key, this.listForm.value[key]);
      });

      console.log('Form Data:', formData);

      // Send form data to backend using POST request
      this.backendService.sendFormData(formData).subscribe(
        response => {
          console.log('Data sent to backend successfully:', response);
        },
        error => {
          console.error('Error sending data to backend', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
