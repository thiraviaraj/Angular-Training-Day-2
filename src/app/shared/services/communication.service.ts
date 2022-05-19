import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  public infoSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() { }
  public sendInfo() {
    return this.infoSubject.next(null);
  }
}
