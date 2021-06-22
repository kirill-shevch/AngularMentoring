import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpParams, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()

export class TimingInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // request interceptor
        const start = performance.now();
        let clonedRequest;
        if (req.url.includes('cart')) {
            clonedRequest = req.clone({
                params: new HttpParams()
                    .set('timing_interceptor', Date.now().toString())
            });
            console.log('took ' + (performance.now() - start) + 'ms');
        } else {
            clonedRequest = req;
        }
        return next.handle(clonedRequest);
    }
}
