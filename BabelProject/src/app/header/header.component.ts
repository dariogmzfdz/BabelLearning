import { Component, HostListener, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  screenWidth: number;
  computerWidthSize: boolean;

  constructor() {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;

    if (this.screenWidth >= 992){
      this.computerWidthSize = true;
    }else{
      this.computerWidthSize = false;
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.screenWidth = window.innerWidth;
    
    if (this.screenWidth >= 992){
      this.computerWidthSize = true;
    }else{
      this.computerWidthSize = false;
    }
  }

  openMyMenu(menuTrigger: MatMenuTrigger) {
    menuTrigger.openMenu();
  }   
  closeMyMenu(menuTrigger: MatMenuTrigger) {
    menuTrigger.closeMenu();
  } 

}
