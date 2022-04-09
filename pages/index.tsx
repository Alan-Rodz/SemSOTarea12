import React, { useEffect, useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { ContenedorSeccion } from '../component/seccion/ContenedorSeccion';
import { SeccionEstadoGeneral } from '../component/seccion/SeccionEstadoGeneral';
import { SeccionProductor } from '../component/seccion/SeccionProductor';
import { SeccionConsumidor } from '../component/seccion/SeccionConsumidor';
import { SeccionContenedor } from '../component/seccion/SeccionContenedor';
import { SeccionDetalles } from '../component/seccion/detalles/SeccionDetalles';
import { Contenedor } from '../class/Contenedor';
import { crearObservable } from '../class/Observar';
import { aleatorio } from '../util/aleatorio';

// *****************************************************************************************************************************
export const GLOBAL_COLOR = '#ff8fa3';
export const GLOBAL_SECONDARY_COLOR = '#c9184a';
export const GLOBAL_BG_GAP_COLOR = 'white';
export const GLOBAL_CONTENT_COLOR = '#ffccd5';
export const GLOBAL_BORDER_RADIUS = 5;
export const FONT_SIZE = 16;

// === App =====================================================================================================================
export const contenedor = new Contenedor<number>(20);

const Home: NextPage = () => {
  // --- State --------------------------------------------------------------------
  const [contenedorMostrado, setContenedorMostrado] = useState<Contenedor<number>>(contenedor);
  const [velocidad, setVelocidad] = useState(500);
  const [isTerminado, setIsTerminado] = useState(false);

  const [isProduciendo, setIsProduciendo] = useState(false);
  const [ultimaPosicionProductor, setUltimaPosicionProductor] = useState(0);
  const [sueñoProductor, setSueñoProductor] = useState(0);

  const [isConsumiendo, setIsConsumiendo] = useState(false);
  const [ultimaPosicionConsumidor, setUltimaPosicionConsumidor] = useState<string | number>(0);
  const [sueñoConsumidor, setSueñoConsumidor] = useState(0);


  // --- Effects ------------------------------------------------------------------
  useEffect(() => { // Effect Productor
    if(isTerminado) { return/*programa terminado*/; }
    if(isProduciendo) { return/*productor produciendo*/; }

    const interval = setInterval(() => {
      if(sueñoProductor > 0) { setSueñoProductor(sueñoProductor => sueñoProductor - 1); return/*productor durmiendo*/; }

      if(isProduciendo === false) {
        setIsProduciendo(true);
        const prod$ = crearObservable(aleatorio(), velocidad);
        prod$.subscribe({
          next: (val => {
            const ultimaPosicionInsertada = contenedor.agregar(val);
            setUltimaPosicionProductor(ultimaPosicionInsertada);

            const nuevoContenedorMostrado = contenedor.copiar();
            setContenedorMostrado(nuevoContenedorMostrado);
          }),
          error: (error) => console.log(error),
          complete: () => { setIsProduciendo(false); setSueñoProductor(aleatorio()); }
        });
      }

    }, velocidad);

    return () => clearInterval(interval);
  }, [sueñoProductor, isProduciendo]);


  useEffect(() => { // Effect Consumidor
    if(isTerminado) { return/*programa terminado*/; }
    if(isConsumiendo) { return/*consumidor consumiendo*/; }

    const interval = setInterval(() => {
      if(sueñoConsumidor > 0) { setSueñoConsumidor(sueñoConsumidor => sueñoConsumidor - 1); return/*consumidor durmiendo*/; }

      if(isConsumiendo === false) {
        setIsConsumiendo(true);
        const consume$ = crearObservable(aleatorio(), velocidad);
        consume$.subscribe({
          next: (val => {
            const ultimaPosicionConsumida = contenedor.consumir();
            setUltimaPosicionConsumidor(ultimaPosicionConsumida);

            const nuevoContenedorMostrado = contenedor.copiar();
            setContenedorMostrado(nuevoContenedorMostrado);
          }),
          error: (err) => { console.log(err) },
          complete: () => { setIsConsumiendo(false); setSueñoConsumidor(aleatorio()); }
        });
      }

    }, velocidad);

    return () => clearInterval(interval);
  }, [sueñoConsumidor, isConsumiendo]);

  useEffect(() => {
    const handleUserKeyPress = (e: KeyboardEvent) => {
      if(e.key==='Escape') {
        e.preventDefault();
        setIsTerminado(true);
      }
    }
    document.addEventListener('keydown', handleUserKeyPress);

    return () => { document.removeEventListener('keydown', handleUserKeyPress); };
  }, []);

  return (
    <Grid h={'100vh'} templateRows={'repeat(10, 1fr)'} templateColumns={'repeat(10, 1fr)'} backgroundColor={GLOBAL_SECONDARY_COLOR} gap={1}>
      {/* === Estado General ============================================================================================================== */}
      <GridItem
        overflowX={'scroll'}
        overflowY={'scroll'}
        gridAutoFlow={'column'}
        rowSpan={2}
        colSpan={5}
        bg={GLOBAL_COLOR}
        borderRadius={GLOBAL_BORDER_RADIUS}>
        <ContenedorSeccion>
          <SeccionEstadoGeneral isProduciendo={isProduciendo} isConsumiendo={isConsumiendo} sueñoProductor={sueñoProductor} sueñoConsumidor={sueñoConsumidor} />
        </ContenedorSeccion>
      </GridItem>

      {/* === Productor =================================================================================================================== */}
      <GridItem
        overflowX={'scroll'}
        overflowY={'scroll'}
        gridAutoFlow={'column'}
        rowStart={3}
        rowSpan={3}
        colSpan={5}
        bg={GLOBAL_COLOR}
        borderRadius={GLOBAL_BORDER_RADIUS}>
        <ContenedorSeccion>
          <SeccionProductor isProduciendo={isProduciendo} ultimaPosicion={ultimaPosicionProductor} tiempoRestanteDurmiendo={sueñoProductor} />
        </ContenedorSeccion>
      </GridItem>

      {/* === Consumidor ================================================================================================================== */}
      <GridItem
        overflowX={'scroll'}
        overflowY={'scroll'}
        gridAutoFlow={'column'}
        rowStart={6}
        rowSpan={3}
        colSpan={5}
        bg={GLOBAL_COLOR}
        borderRadius={GLOBAL_BORDER_RADIUS}>
        <ContenedorSeccion>
          <SeccionConsumidor isConsumiendo={isConsumiendo} ultimaPosicion={ultimaPosicionConsumidor} tiempoRestanteDurmiendo={sueñoConsumidor} />
        </ContenedorSeccion>
      </GridItem>

      {/* === Detalles ==================================================================================================================== */}
      <GridItem
        overflowX={'scroll'}
        overflowY={'scroll'}
        gridAutoFlow={'column'}
        rowStart={9}
        rowSpan={2}
        colSpan={5}
        bg={GLOBAL_COLOR}
        borderRadius={GLOBAL_BORDER_RADIUS}>
        <ContenedorSeccion>
          <SeccionDetalles velocidad={velocidad} setVelocidad={setVelocidad}/>
        </ContenedorSeccion>
      </GridItem>


      {/* === Contenedor ================================================================================================================== */}
      <GridItem
        overflowX={'scroll'}
        overflowY={'scroll'}
        gridAutoFlow={'column'}
        colStart={6}
        rowSpan={10}
        colSpan={5}
        bg={GLOBAL_COLOR}
        borderRadius={GLOBAL_BORDER_RADIUS}>
        <SeccionContenedor contenedor={contenedor} />
      </GridItem>
    </Grid>
  );
}

export default Home;