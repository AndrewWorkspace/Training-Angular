import {Component, OnInit} from '@angular/core';
import {ModalComponent} from "./modals/modal-add/modal.component";
import {ModalConfirmComponent} from "./modals/modal-confirm/modal-confirm.component";
import {MatDialog} from "@angular/material/dialog";
import {StorageService} from "./shared/services/storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public currentLang;
  public searchItem: string = '';
  constructor(
    public dialog: MatDialog,
    private _storageService: StorageService
  ) { }

  //Open Modal
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent);
  }
  OpenConfirm(index: number): void {
    const dialogRef = this.dialog.open(ModalConfirmComponent);
    this._storageService.sharedValue = this.currentLang[index];
    this._storageService.selectedItem = index;

  }
  ngOnInit(){
    this.currentLang = JSON.parse(this._storageService.getData('Locations'));

    this._storageService.watchStorage().subscribe((data:string) => {
      this.currentLang = JSON.parse(data);
    })
  }
}
