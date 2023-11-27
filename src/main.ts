import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


let arr = [
  {priority: 1},
  {priority: 1},
  {priority: 2},
  {priority: 2},
  {priority: 3},
]

let sorting = arr.sort((acc, item)=> item.priority - acc.priority)
/*let res = sorting.reduce((acc, item, currentIndex)=> {
  acc.push(item)
   return acc
}, [] as Array<{priority: number}>)*/

type Priority = {
  priority: number
}

type PriorityImgList = {
  innerArr: Priority[];
  temp: Priority
}

/*let innerArr: Priority[] = []
let temp: Priority = <Priority>{}
sorting.forEach((item: {priority: number}, idx: number, array)=> {


  if(array[idx + 1] && item.priority == array[idx + 1].priority) {
    innerArr.push(item)
    innerArr.push(temp)
    return
  }
  if(array[idx + 1] && item.priority !== array[idx + 1].priority) {
    temp = item
  }
  innerArr.push(item)
})*/

/*
  {priority: 3}
  {priority: 2}
  {priority: 2}
  {priority: 1}
  {priority: 1}
*/

//console.log(innerArr)
/*

let res =  sorting.reduce((acc, item, idx, array): PriorityImgList => {
  if(array[idx + 1] && item.priority == array[idx + 1].priority) {
    acc.innerArr.push(item)
    acc.innerArr.push(acc.temp)
    return acc
  }
  if(array[idx + 1] && item.priority !== array[idx + 1].priority) {
    acc.temp = item
  }

  return {
    innerArr: acc.innerArr,
    temp: acc.temp
  }
}, {innerArr: <Priority[]>[], temp: <Priority>{} })


console.log(res)
*/
