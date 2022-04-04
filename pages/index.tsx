import React, { useEffect, useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { ContenedorSeccion } from '../component/seccion/ContenedorSeccion';
import { SeccionEstadoGeneral } from '../component/seccion/SeccionEstadoGeneral';
import { SeccionProductor } from '../component/seccion/SeccionProductor';
import { SeccionConsumidor } from '../component/seccion/SeccionConsumidor';
import { SeccionContenedor } from '../component/seccion/SeccionContenedor';
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
export const VELOCIDAD = 1000/*ms*/;


// === App =====================================================================================================================
export const contenedor = new Contenedor<number>(20);

const Home: NextPage = () => {
  // --- State --------------------------------------------------------------------
  const [contenedorMostrado, setContenedorMostrado] = useState<Contenedor<number>>(contenedor);

  const [isProduciendo, setIsProduciendo] = useState<boolean>(false);
  const [isConsumiendo, setIsConsumiendo] = useState<boolean>(false);

  const [producerSleep, setProducerSleep] = useState<number>(0);
  const [consumerSleep, setConsumerSleep] = useState<number>(0);

  // --- Handlers -----------------------------------------------------------------

  // --- Effects ------------------------------------------------------------------
  useEffect(() => { // Effect Productor
    if(isProduciendo) { return/*productor produciendo*/; }

    const interval = setInterval(()=>{
      if(producerSleep > 0) { setProducerSleep(producerSleep => producerSleep--); return/*productor durmiendo*/; }

      if(isProduciendo === false) {
        setIsProduciendo(true);
        const prod$ = crearObservable(aleatorio());
        prod$.subscribe({
            next: (val => {
              contenedor.agregar(val);
              const nuevoContenedorMostrado = contenedor.copiar();
              setContenedorMostrado(nuevoContenedorMostrado);
            }),
            error: undefined,
            complete: () => { setIsProduciendo(false); setProducerSleep(aleatorio()); }
          });
      }

    }, VELOCIDAD);

    return () => clearInterval(interval);
  }, [producerSleep, isProduciendo]);


  useEffect(() => { // Effect Consumidor
    if(isConsumiendo) { return/*consumidor consumiendo*/; }

    const interval = setInterval(()=>{
      if(consumerSleep > 0) { setConsumerSleep(consumerSleep => consumerSleep--); return/*productor durmiendo*/; }

      if(isConsumiendo === false) {
        setIsConsumiendo(true);
        const consume$ = crearObservable(aleatorio());
        consume$.subscribe({
            next: (val => {
              console.log(val)
              // contenedor.consumir();
              // const nuevoContenedorMostrado = contenedor.copiar();
              // setContenedorMostrado(nuevoContenedorMostrado);
            }),
  //           error: undefined,
  //           complete: () => { setIsConsumiendo(false); setConsumerSleep(aleatorio()); }
          });
      }

    }, VELOCIDAD);

    return () => clearInterval(interval);
  }, [consumerSleep, isConsumiendo]);

  return (
    <Grid h={'100vh'} templateRows={'repeat(10, 1fr)'} templateColumns={'repeat(10, 1fr)'} backgroundColor={GLOBAL_BG_GAP_COLOR} >
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
          <SeccionEstadoGeneral />
        </ContenedorSeccion>
      </GridItem>

      {/* === Productor =================================================================================================================== */}
      <GridItem
        overflowX={'scroll'}
        overflowY={'scroll'}
        gridAutoFlow={'column'}
        rowStart={3}
        rowSpan={4}
        colSpan={5}
        bg={GLOBAL_COLOR}
        borderRadius={GLOBAL_BORDER_RADIUS}>
        <ContenedorSeccion>
          <SeccionProductor />
        </ContenedorSeccion>
      </GridItem>

      {/* === Consumidor ================================================================================================================== */}
      <GridItem
        overflowX={'scroll'}
        overflowY={'scroll'}
        gridAutoFlow={'column'}
        rowStart={7}
        rowSpan={4}
        colSpan={5}
        bg={GLOBAL_COLOR}
        borderRadius={GLOBAL_BORDER_RADIUS}>
        <ContenedorSeccion>
          <SeccionConsumidor />
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
        <ContenedorSeccion>
          <SeccionContenedor contenedor={contenedor} />
        </ContenedorSeccion>
      </GridItem>
    </Grid>
  );
}

export default Home;