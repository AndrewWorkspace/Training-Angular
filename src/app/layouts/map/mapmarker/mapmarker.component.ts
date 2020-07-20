import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mapmarker',
  templateUrl: './mapmarker.component.html',
  styleUrls: ['./mapmarker.component.scss']
})
export class MapmarkerComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
