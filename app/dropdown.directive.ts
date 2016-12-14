import {Directive, HostBinding, HostListener} from '@angular/core';
 
@Directive({
    selector: '[dropdown]'
})
export class DropdownDirective{
      private isOpen: boolean = false;
    constructor(){
    }

    @HostBinding("class.open") get opened(){
         
        return this.isOpen;
    }
       
    @HostListener("mouseenter") onMouseEnter() {
        this.isOpen = true;
    }
 
    @HostListener("mouseleave") onMouseLeave() {
        this.isOpen = false;
    }
}