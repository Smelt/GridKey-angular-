import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';
import 'rxjs/add/operator/finally';


@Injectable()
export class UberApiService {



  constructor(private http: Http) { }

   getUberPrice(origin: string, destination: string) {
     // console.log(this.serverURL + '/mapdata/' + origin + '/' + destination);
     return this.http.get( '/uber?' + 'origin=' + origin + '&destination=' + destination);
  }

}
