import { Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { retry, catchError, finalize, tap } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from "@angular/common/http";


@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // add Authorization token to header
        request = request.clone({
            setHeaders: {
                Authorization: 'SSWS 00tRcBhKn9lIP4r9xeji7bedcP4oHfPPRNDMc2oPKT'
            }
        });

        return new Observable(observer => {
            next.handle(request).pipe(
                // if request fail try again
                retry(2),

                catchError((error: HttpErrorResponse) => {
                    alert(`HTTP Error: ${request.url}`);
                    return throwError(error);
                }),

                // Profile all Requests
                finalize(() => {
                    const monMessage = `${request.method} "${request.urlWithParams}"`;
                    console.log(monMessage);
                })
            )
                .subscribe(event => {
                    if (event instanceof HttpResponse) {
                        observer.next(event);
                    }
                });
        });
    }
}
