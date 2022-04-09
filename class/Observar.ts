import { Observable } from 'rxjs';

// ********************************************************************************
export const crearObservable = (numeroLimite: number, velocidad: number) => {
  const observable$ = new Observable<number>(observer => {
    let val = 0; /*closed over in closure*/
    
    const interval = setInterval(() => {
      if(val === numeroLimite) { observer.complete(); };

      // else
      observer.next(val);
      val++;
    }, velocidad);

    return () => clearInterval(interval);
  });

  return observable$;
}
