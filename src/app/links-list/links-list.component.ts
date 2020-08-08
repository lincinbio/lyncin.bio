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

  navigate(link)
  {
    if(link == "insta")
      window.open("intent://www.instagram.com/vivekgowdaa_/#Intent;package=com.instagram.android;scheme=https;end?igshid=plxe937czeaq")
    if(link == "fb")
      window.open("intent://profile/100005215591352#Intent;package=com.facebook.katana;scheme=fb;end")
    if("wp")
      window.open("https://api.whatsapp.com/send?phone=917760448418&text=Hi")
    }
}
