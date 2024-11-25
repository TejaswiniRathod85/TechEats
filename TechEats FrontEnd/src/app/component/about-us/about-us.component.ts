import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  url:string='/';
  constructor(private route:Router){
    
  }
  openAdminMenu(url: string): void {
   this.route.navigate(["/"+url]);
 }
}
