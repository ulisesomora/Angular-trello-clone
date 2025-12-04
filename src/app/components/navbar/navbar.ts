import { Component } from '@angular/core';
import { Btn } from '../btn/btn';
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'app-navbar',
  standalone: true,    
  imports: [Btn, OverlayModule],
  templateUrl: './navbar.html',
  
})
export class Navbar {
  isOpen = false;
}
