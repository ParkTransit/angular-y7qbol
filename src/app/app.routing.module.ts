import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <a routerLinkActive="active" 
       routerLink="/">Login</a> |

    <a routerLinkActive="active" 
       routerLink="/home">Home</a> | 

    <a routerLinkActive="active" 
      routerLink="/catalog">Cart</a> 
      
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

}
