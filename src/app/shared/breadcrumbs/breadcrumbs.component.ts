import { Component, OnDestroy } from '@angular/core';
import {  Router, ActivationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo?: string;
  public tituloSubs$: Subscription;
  constructor(private router: Router) {
   this.tituloSubs$ = this.getArgumentosRutas();
   }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentosRutas(){
    const titulos = this.router.events
    .pipe(
      filter((e): e is ActivationEnd=> e instanceof ActivationEnd),
      filter((e: ActivationEnd) => e.snapshot.firstChild === null ),
      map((e: ActivationEnd) => e.snapshot.data )

    )
    .subscribe(({titulo})=> {
      this.titulo = titulo;
      document.title = `AdminPro - ${titulo}`;
    });
    return titulos;
  }

}
