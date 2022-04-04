import { Observable } from 'rxjs';
import { contenedor, VELOCIDAD } from '../pages';

// ********************************************************************************
export const crearObservable = (numeroLimite: number) => {
  const observable$ = new Observable<number>(observer => {
    let val = 0; /*closed over in closure*/
    
    const interval = setInterval(() => {
      if (val === numeroLimite) { observer.complete(); };

      // else
      observer.next(val);
      val++;
    }, VELOCIDAD);

    return () => clearInterval(interval);
  });

  return observable$;
}
