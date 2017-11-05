import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

export interface ISpinnerState {
  show: boolean;
}

@Injectable()
export class SpinnerService {
  private _spinnerSubject = new Subject();

  spinnerState = <Observable<ISpinnerState>>this._spinnerSubject.asObservable();

  show() {
    this._spinnerSubject.next(<ISpinnerState>{ show: true });
  }

  hide() {
    this._spinnerSubject.next(<ISpinnerState>{ show: false });
  }
}
