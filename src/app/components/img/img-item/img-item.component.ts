import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CarouselImgInterface} from "@models/carousel-img.interface";

@Component({
  selector: 'app-img-item',
  template: `
    <a [routerLink]="['/view', img.id]">
      <p>{{ img.priority }}</p>
      <img [src]="img.image" alt="" appImgErrorHandler>
    </a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgItemComponent {
@Input() img!: CarouselImgInterface
}
