import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subcription : Subscription;
  constructor() { 

    

    this.subcription = this.regresarObservable()
    .subscribe(
       numero => console.log('Subs', numero),
       error => console.error('Error en el obs', error),
       () => console.error('Termino'),
    );

  }

  ngOnInit() {
  }
  
  ngOnDestroy(){
    this.subcription.unsubscribe();
  }
  regresarObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      
      let contador = 0;
      
      // tslint:disable-next-line:prefer-const
      let intervalo = setInterval(() => {
        contador += 1;

        const salida  = {
          valor: contador
        };
        observer.next( salida );

       

        

      }, 1000);

    }).pipe(

      map(resp => resp.valor),
      filter((resp, index) => {

        if((resp%2)===1){
          return true;
        }else{
          return false;
        }
        
      })

    )
  }

}
