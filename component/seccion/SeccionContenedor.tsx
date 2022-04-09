import { Box, Center, Flex } from '@chakra-ui/react';

import { Contenedor } from '../../class/Contenedor';
import { GLOBAL_SECONDARY_COLOR, GLOBAL_BORDER_RADIUS, contenedor } from '../../pages';
import { Entrada } from '../Entrada';

// ********************************************************************************
export interface SeccionContenedorProps { contenedor: Contenedor<number>; };
export const SeccionContenedor: React.FC<SeccionContenedorProps> = () => {
  return (
    <>
      <Box
        bg={GLOBAL_SECONDARY_COLOR}
        borderRadius={GLOBAL_BORDER_RADIUS}
        padding={3}
        m={3}
        fontSize={15}
        color={'white'}
      >
        <Center>
          Contenedor
        </Center>
      </Box>
      {contenedor.arreglo.map((entrada, index) => (
        <Entrada key={index} entrada={entrada} indice={index + 1/*empezar desde 1 en vez de 0*/} />
      ))}
    </>
  )
}