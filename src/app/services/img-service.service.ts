import {inject, Injectable} from '@angular/core';
import {
  concatMap,
  interval,
  map,
  Observable,
  of,
  repeat,
  startWith,
  zip
} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CarouselImgInterface} from "@models/carousel-img.interface";

@Injectable({
  providedIn: 'root'
})
export class ImgServiceService{
  private dataUrl = '../assets/img-list.json';
  http = inject(HttpClient)
  innerArr: CarouselImgInterface[]
  temp: CarouselImgInterface

  constructor() {
    this.innerArr = []
    this.temp = <CarouselImgInterface>{}
  }

  emittingEveryImg(intervalTime: number): Observable<CarouselImgInterface> {
    return this.getImgList()
      .pipe(
        concatMap((imgList)=> {
          return zip(
            interval(intervalTime),
            of(...imgList)).pipe(map(([_, img])=> img),
            repeat(),
            startWith(this.innerArr[0])
          )
        }),
      )
  }

  getImgList(): Observable<CarouselImgInterface[]> {
    return this.http
      .get<CarouselImgInterface[]>(this.dataUrl)
      .pipe(
        map((imgList: CarouselImgInterface[])=> this.priorityImgList(imgList.sort(this.sortImgList))),
      )
  }

  sortImgList(a: CarouselImgInterface, b: CarouselImgInterface): number {
    return b.priority - a.priority
  }

  priorityImgList(listImg: CarouselImgInterface[]): CarouselImgInterface[] {
    listImg.forEach((item: CarouselImgInterface, idx: number, array)=> {
      if(array[idx + 1] && item.priority == array[idx + 1].priority) {
        this.innerArr.push(item)
        this.innerArr.push(<CarouselImgInterface>this.temp)
        return
      }
      if(array[idx + 1] && item.priority !== array[idx + 1].priority) {
          this.temp = item as CarouselImgInterface
      }
      this.innerArr.push(item)
    })
    return this.innerArr
  }

}
