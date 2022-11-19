import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('toggleMenu') toggleMenu!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;
    
  isMenuOpen = false;
  addClass:any;
  constructor(private renderer: Renderer2) { 
    //  click screen close menu
    this.renderer.listen('window', 'click',(e:Event)=>{
      if(!this.toggleMenu.nativeElement.contains(e.target) && !this.menu.nativeElement.contains(e.target)) {
          this.isMenuOpen=false;
      }
  });
    //  click screen  menu ends here

  }

  ngOnInit(): void {
  }
   //angular click anywhere in window and menu closed
   showMenu(id :String){
    this.isMenuOpen = !this.isMenuOpen;
    $(id).toggleClass('cr-overlay-show');
  }
}
