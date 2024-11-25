import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css'
})
export class AppHeaderComponent {
  url:string='/';
  constructor(private route:Router){
    
  }
  gotourl(url: string): void {
   this.route.navigate(["/"+url]);
 }
//  gotoReview() {
//   this.route.navigate([''], { fragment: 'Review' });
// }
// gotoReview() {
//   this.route.navigate([''], { fragment: 'Review' });
// }
}
