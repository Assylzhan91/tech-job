import {ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import {ImgServiceService} from "@services/img-service.service";
import {Observable} from "rxjs";
import {CarouselImgInterface} from "@models/carousel-img.interface";

@Component({
  selector: 'app-img',
  template: `
        <ng-container *ngIf="(img | async) as img; else loading">
      <a [routerLink]="['/view', img.id]">
        <p>{{ img.priority }}</p>
        <img [src]="img.image" alt="" appImgErrorHandler>
      </a>
    </ng-container>
    <ng-template #loading>
      Loading...
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgComponent {
  @Input() intervalTime: number = 5000
  img: Observable<CarouselImgInterface> = inject(ImgServiceService).emittingEveryImg(this.intervalTime)
}
