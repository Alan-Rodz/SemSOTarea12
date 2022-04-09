import { Box, Center, Flex } from '@chakra-ui/react';
import { EntradaContenedor } from '../class/Contenedor';

import { GLOBAL_BORDER_RADIUS, GLOBAL_COLOR, GLOBAL_CONTENT_COLOR, GLOBAL_SECONDARY_COLOR } from '../pages/index';

// ********************************************************************************
export interface Props {  entrada: EntradaContenedor<number>; indice: number; }
export const Entrada: React.FC<Props> = ({ entrada, indice }) => {
  // --- State --------------------------------------------------------------------
  const colorEntrada = entrada.estado === 'Vacío' ? GLOBAL_COLOR : GLOBAL_SECONDARY_COLOR;
  const colorTexto = entrada.estado === 'Vacío' ? 'black' : 'white';
  
  // --- UI -----------------------------------------------------------------------
  return (
    <>
      <Box
        borderRadius={GLOBAL_BORDER_RADIUS}
        padding={3}
        m={3}
        bg={GLOBAL_CONTENT_COLOR}
        fontSize={15}
      >
        <Flex gap={2}>
          <Box
            flexBasis={'10%'}
            bgColor={colorEntrada}
            borderRadius={GLOBAL_BORDER_RADIUS}
            padding={3}
            color={colorTexto}
          >
            <Center>
              {indice}
            </Center>
          </Box>

          <Box
            flexBasis={'50%'}
            bgColor={colorEntrada}
            borderRadius={GLOBAL_BORDER_RADIUS}
            padding={3}
            color={colorTexto}
          >
            <Center>
              {`Estado: ${entrada.estado}`}
            </Center>
          </Box>

          <Box
            flexBasis={'50%'}
            bgColor={colorEntrada}
            borderRadius={GLOBAL_BORDER_RADIUS}
            padding={3}
            color={colorTexto}
          >
            <Center>
              {`Contenido: ${entrada.contenido}`}
            </Center>
          </Box>
        </Flex>
      </Box>
    </>
  )
}