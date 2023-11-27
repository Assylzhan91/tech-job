import {Directive, ElementRef, HostListener, inject} from '@angular/core';
import { PLACEHOLDER_IMG} from "@tokens";
import {Router} from "@angular/router";

@Directive({
  selector: 'img[appImgErrorHandler]'
})
export class ImgErrorHandlerDirective {
  placeholderImg =  inject(PLACEHOLDER_IMG)
  router =  inject( Router)

  constructor(private el: ElementRef) {}

  @HostListener("error")
  private onError() {
    this.el.nativeElement.src = this.placeholderImg
  }

}
