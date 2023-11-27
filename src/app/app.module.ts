import {inject, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgServiceService } from "@services/img-service.service";
import { ImgComponent } from '@components/img/img.component';
import { ImgItemComponent } from '@components/img/img-item/img-item.component';
import { ImgViewComponent } from '@components/img-view/img-view.component';
import { NotFoundComponent } from '@components/not-found/not-found.component';
import {IMAGE_PATH,  PLACEHOLDER_IMG} from "@tokens";
import {ImgErrorHandlerDirective} from "./directives/img-erro-handler.directive";

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ImgItemComponent,
    ImgViewComponent,
    NotFoundComponent,
    ImgErrorHandlerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ImgServiceService,
    {
      provide: IMAGE_PATH,
      useValue: './assets/images/'
    },
    {
      provide: PLACEHOLDER_IMG,
      useFactory: ()=> {
        const imgPath = inject(IMAGE_PATH)
        return `${imgPath}placeholder.jpg`
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
