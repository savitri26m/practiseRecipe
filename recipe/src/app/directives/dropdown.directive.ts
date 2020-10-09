import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') dropDownOpen = false;

  @HostListener('click') toggleOpen() {
    this.dropDownOpen = !this.dropDownOpen;
  }

}
