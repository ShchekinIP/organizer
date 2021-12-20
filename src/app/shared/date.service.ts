import {Injectable} from "@angular/core";
import * as moment from "moment";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DateService{
  public date: BehaviorSubject<any> = new BehaviorSubject<any>(moment())

  change(number:number){
    const value = this.date.value.add(number, 'month')
    this.date.next(value)
  }

  changeDate(date: moment.Moment){
    const value = this.date.value.set({
      date: date.date(),
      month: date.month()
    })
    this.date.next(value)
  }
}
