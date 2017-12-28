﻿import { Component, OnInit } from '@angular/core';
import { PageListing } from '../_Objects/pageListing';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title:string =  "Valencia Summit Seals";
  pages: PageListing[] = [
    { name: 'Home', url: "/index" },
    { name: 'Create Account', url: "/createaccount" },
    { name: 'Registration', url: "/registration" }];

  constructor() { }

  ngOnInit() {
  }

}