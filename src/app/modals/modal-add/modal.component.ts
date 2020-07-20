import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { StorageService } from 'src/app/shared/services/storage.service';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  newAssetForm: FormGroup;
  gotValues: object;
  valuesArr: any;

  constructor(
    private formBuilder: FormBuilder,
    private _storageService: StorageService) {

    if(_storageService.getData('Locations') === null){
      this.valuesArr = [];
    }
    else{
      this.valuesArr = JSON.parse(_storageService.getData('Locations'))
    }

  }

  ngOnInit(){
    this.newAssetForm = this.formBuilder.group({
      name: ['', [Validators.required,Validators.minLength(3)]],
      latitude: ['',[ Validators.required,Validators.minLength(3)] ],
      longitude: ['',[ Validators.required,Validators.minLength(3)] ],
    })

  }

  get form() { return this.newAssetForm.controls;}

  addLocation() {

    this.gotValues ={
      name: this.newAssetForm.value.name,
      latitude:  this.newAssetForm.value.latitude,
      longitude: this.newAssetForm.value.longitude
    }
    this.valuesArr.push(this.gotValues);
    this._storageService.setItem('Locations', JSON.stringify(this.valuesArr))

  }

}
