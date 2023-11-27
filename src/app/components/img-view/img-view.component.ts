import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs";
import {IMAGE_PATH} from "@tokens";

@Component({
  selector: 'app-img-view',
  template: `
      <ng-container *ngIf="(id | async) as id; else loading">
        <img [src]="imgPath + id + '.jpg'">
      </ng-container>
        <ng-template #loading>
          <h1>Loading</h1>
        </ng-template>
      <button (click)="router.navigate(['/main'])">Go to back</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgViewComponent implements OnInit{
  router = inject( Router)
  imgPath = inject(IMAGE_PATH)
  route = inject( ActivatedRoute)
  id = this.route.params.pipe(map(({id})=> id))

  ngOnInit(): void {
     this.route.params.pipe(map(({id})=> id))
  }
}
