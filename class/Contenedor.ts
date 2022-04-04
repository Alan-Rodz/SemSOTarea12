
// ********************************************************************************
// --- Tipos ----------------------------------------------------------------------
type Estado = 'Ocupado'|'Vacío';

interface EntradaContenedor<K> {
  estado: Estado;
  contenido: K | undefined;
}

// --- Clase ----------------------------------------------------------------------
export class Contenedor<T> { 
  tamaño: number = 0;
  arreglo: EntradaContenedor<T>[] = [];
  indiceUltimaInsercion = 0;
  indiceUltimoConsumo = 0;

  // ... Constructor ..............................................................
  constructor(size: number) {
    this.indiceUltimaInsercion = 0;
    this.indiceUltimoConsumo = 0;

    this.tamaño = size;
    this.arreglo = [];

    for (let i = 0; i < this.tamaño; i++) {
      this.arreglo.push({estado:'Vacío', contenido: undefined})
    }
  }

  // ... Funcionamiento ...........................................................
  agregar(elem: T) {
    if (this.indiceUltimaInsercion >= this.tamaño) { this.indiceUltimaInsercion = 0; }
console.log('agregando')
    this.arreglo[this.indiceUltimaInsercion].estado = 'Ocupado';
    this.arreglo[this.indiceUltimaInsercion].contenido = elem;
    this.indiceUltimaInsercion++;

  }

  consumir() {
    if (this.indiceUltimoConsumo >= this.tamaño) { this.indiceUltimoConsumo = 0; }
    if(!this.arreglo[this.indiceUltimoConsumo].contenido) { return  'Contenedor Vacío'; }
console.log('consumiendo');
    const contenidoConsumido = this.arreglo[this.indiceUltimoConsumo].contenido;

    this.arreglo[this.indiceUltimoConsumo].estado = 'Vacío';
    this.arreglo[this.indiceUltimoConsumo].contenido = undefined;
    this.indiceUltimoConsumo++;
    
    return contenidoConsumido;
  }

  // ... Utilidades ...............................................................
  print() {
    console.log(this.arreglo);
  }

  copiar() {
    const copia = {...this};
    return copia;
  }
}
