import React, { useCallback, useEffect, useState } from 'react';
import { Box, Grid, GridItem, useDisclosure } from '@chakra-ui/react';
import { Observable } from 'rxjs'
import type { NextPage } from 'next';

import { ContenedorSeccion } from '../component/seccion/ContenedorSeccion';
import { SeccionEstadoGeneral } from '../component/seccion/SeccionEstadoGeneral';
import { SeccionProductor } from '../component/seccion/SeccionProductor';
import { SeccionConsumidor } from '../component/seccion/SeccionConsumidor';
import { SeccionContenedor } from '../component/seccion/SeccionContenedor';


// *****************************************************************************************************************************
export const GLOBAL_COLOR = '#ff8fa3';
export const GLOBAL_SECONDARY_COLOR = '#c9184a';
export const GLOBAL_BG_GAP_COLOR = 'white';
export const GLOBAL_CONTENT_COLOR = '#ffccd5';
export const GLOBAL_BORDER_RADIUS = 5;
export const FONT_SIZE = 16;

// === App =====================================================================================================================
const Home: NextPage = () => {

  // --- State ------------------------------------------------------------------------------------

  // --- Handlers --------------------------------------------------------------------------------------

  // --- Callbacks --------------------------------------------------------------------------------------

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
            <SeccionContenedor />
          </ContenedorSeccion>
      </GridItem>
    </Grid>
    );
}

export default Home;