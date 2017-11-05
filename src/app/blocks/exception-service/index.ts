import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ToastService } from '../toast';

@Injectable()
export class ExceptionService {

    constructor(private _toastService: ToastService) { }

    catchBadResponse: (errorResponse: any) => Observable<any> = (errorResponse: any) => {
        const res = <Response>errorResponse;
        const err = res.json();
        let emsg = err ?
            (err.error ? err.error : JSON.stringify(err)) :
            (res.statusText || 'unknown error');
        this._toastService.activate(`Error - Bad Response - ${emsg}`);

        return Observable.of();
    }
}
