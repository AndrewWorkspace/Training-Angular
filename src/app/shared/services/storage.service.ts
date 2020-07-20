import { Injectable } from '@angular/core';
import {AsyncSubject, Observable, Subject} from "rxjs";


@Injectable()

export class StorageService {

  private storageSub = new Subject();
  public sharedValue;
  selectedItem;

  constructor() {
  }

  watchStorage(): Observable<any>{
    return this.storageSub.asObservable()
  }

  setItem(key: string, data: any) {
    localStorage.setItem(key, data);
    this.storageSub.next(data);
  }

  getData(key) {
    return localStorage.getItem(key);
  }
}
