import { Component, OnInit } from '@angular/core';

/* eslint-disable */

interface Item {
  label: string;
  link: string;
}

@Component({
  selector: 'finale-poc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  items: Item[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        link: '/'
      },
      {
        label: 'Employee',
        link: 'employee'
      },
      {
        label: 'Login',
        link: 'login'
      }
    ];
  }
}
