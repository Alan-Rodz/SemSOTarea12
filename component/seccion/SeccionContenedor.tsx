import { Box, Flex } from '@chakra-ui/react';

import { Contenedor } from '../../class/Contenedor';
import { GLOBAL_SECONDARY_COLOR, GLOBAL_BORDER_RADIUS, contenedor } from '../../pages';
import { Entrada } from '../Entrada';

// ********************************************************************************
export interface SeccionContenedorProps {  contenedor: Contenedor<number>; };
export const SeccionContenedor: React.FC<SeccionContenedorProps> = () => {
  return (
    <Box w={'100%'} h={'100%'} py={2} borderColor={'gray.300'}>
      <Box
        transform={'translateX(-50%) translateY(-155%)'}
        top={'0'}
        left={'50%'}
        position={'absolute'}
        bg={GLOBAL_SECONDARY_COLOR}
        borderRadius={GLOBAL_BORDER_RADIUS}
        padding={3}
        fontSize={15}
        color={'white'}
      >
        Contenedor
      </Box>
      <Flex flexDir={'column'}>
        {contenedor.arreglo.map((entrada, index) => (
          <Entrada key={index} entrada={entrada}/>
        ))}
      </Flex>
    </Box>
  )
}