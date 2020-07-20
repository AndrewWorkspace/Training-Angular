import {Component, OnInit} from '@angular/core';
import {StorageService} from "../../shared/services/storage.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit {

  private currentLang;

  constructor(
    public _storageService: StorageService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(){}

  remove(){
    this.currentLang = JSON.parse(this._storageService.getData('Locations'));
    this.currentLang.splice(this._storageService.selectedItem,1)
    this._storageService.setItem('Locations', JSON.stringify(this.currentLang))
    this.dialog.closeAll();
  }
}
