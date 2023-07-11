import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  links: {id: number, path: string, name: string}[] = [
    {
      id: 1,
      path: '/todos',
      name: 'Home'
    },
    {
      id: 2,
      path: '/about',
      name: 'About'
    }
  ];
}
