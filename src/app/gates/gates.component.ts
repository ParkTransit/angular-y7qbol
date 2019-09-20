import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class GatesComponent {
  gates = GatesComponent;

  share() {
    window.alert('The product has been shared!');
  }
}
