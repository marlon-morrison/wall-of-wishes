import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { WishSymbol } from '../../shared/models/wishSymbol';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }

  private getStandardOptions() : any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  getWatermark() {
    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    })
    return this.http.get('assets/watermark.json', options).pipe(catchError(this.handleError));
  }

  getWishes() {
    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    })
    return this.http.get('assets/wishes.json', options).pipe(catchError(this.handleError));
  }

  getWish1() {
    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    })
    return this.http.get('assets/wish1.json', options).pipe(catchError(this.handleError));
  }

  getWish2() {
    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    })
    return this.http.get('assets/wish2.json', options).pipe(catchError(this.handleError));
  }

  getWish3() {
    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    })
    return this.http.get('assets/wish3.json', options).pipe(catchError(this.handleError));
  }

  getWish4() {
    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    })
    return this.http.get('assets/wish4.json', options).pipe(catchError(this.handleError));
  }

  getWish5() {
    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    })
    return this.http.get('assets/wish5.json', options).pipe(catchError(this.handleError));
  }

  getWish6() {
    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    })
    return this.http.get('assets/wish6.json', options).pipe(catchError(this.handleError));
  }

  getWish7() {
    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    })
    return this.http.get('assets/wish7.json', options).pipe(catchError(this.handleError));
  }

  getWish8() {
    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    })
    return this.http.get('assets/wish8.json', options).pipe(catchError(this.handleError));
  }

  getWish9() {
    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    })
    return this.http.get('assets/wish9.json', options).pipe(catchError(this.handleError));
  }

  getWish10() {
    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    })
    return this.http.get('assets/wish10.json', options).pipe(catchError(this.handleError));
  }

  getWish11() {
    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    })
    return this.http.get('assets/wish11.json', options).pipe(catchError(this.handleError));
  }

  getWish12() {
    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    })
    return this.http.get('assets/wish12.json', options).pipe(catchError(this.handleError));
  }

  getWish13() {
    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    })
    return this.http.get('assets/wish13.json', options).pipe(catchError(this.handleError));
  }

  getWish14() {
    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    })
    return this.http.get('assets/wish14.json', options).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('There is an issue with the client or network: ', error.error);
    }else {
      console.error('Sever-side error: ', error.error);
    }

    return throwError(() =>new Error('Cannot retrieve wishes from server. Please try again.'))
  }
  
  private addWish(wish: WishSymbol) {
    let options = this.getStandardOptions();

    options.headers = options.headers.set('Authotization', 'value-need-for-authotization');
    this.http.post('assets/wishes.json', wish, options)
  }
}
