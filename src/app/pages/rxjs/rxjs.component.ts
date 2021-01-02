import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;
  constructor() { 
 /*    let i = -1;
    
this.retornaObservable(i).pipe(
      retry(2)
    ).subscribe(
      valor => console.log('Subs:', valor),
      error => console.log('Error:', error),
      () => console.log('Obs terminado')
    ); */
    
    this.intervalSubs=this.retornaIntervalo().subscribe(console.log);

  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number>{
    const interval$ = interval(500)
                      .pipe(
                        take(10),
                        map( valor => valor+1),
                        filter(valor =>( valor % 2 ===0)? true: false),
                      );
    return interval$;
  };

  retornaObservable(i: number): Observable<number>{
    const obs$ = new Observable<number>(observer => {
      const intervalo =setInterval(()=>{
          i++;
          observer.next(i);
          if(i === 4){
            clearInterval(intervalo);
            observer.complete();
          }else if(i===2){
            observer.error('I llego a superar las expectatvas de vida! ');
          }
        }, 1000);
      });
      return obs$;
  }
}
