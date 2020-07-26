import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.css']
})
export class LinksListComponent implements OnInit {

  constructor() { }
  expandYT:boolean = false;
  ngOnInit(): void {
  }

  expandYt()
  {
    this.expandYT = !this.expandYT
  }
}
