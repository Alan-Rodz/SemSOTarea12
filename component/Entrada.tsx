import { Box, Center, Flex } from '@chakra-ui/react';
import { Contenedor, EntradaContenedor } from '../class/Contenedor';

import { GLOBAL_BORDER_RADIUS, GLOBAL_CONTENT_COLOR, GLOBAL_SECONDARY_COLOR } from '../pages/index';

// ********************************************************************************
export interface Props { entrada: EntradaContenedor<number> }
export const Entrada: React.FC<Props> = ({ entrada }) => {
  return (
    <>
      <Box
        width={'width'}
        borderRadius={GLOBAL_BORDER_RADIUS}
        padding={3}
        m={3}
        bg={GLOBAL_CONTENT_COLOR}
        fontSize={15}
      >
        <Flex gap={2}>
          <Box
            flexBasis={'50%'}
            bgColor={GLOBAL_SECONDARY_COLOR}
            borderRadius={GLOBAL_BORDER_RADIUS}
            padding={3}
            color={'white'}
          >
            <Center>
              {`Estado: ${entrada.estado}`}
            </Center>
          </Box>
          <Box
            flexBasis={'50%'}
            bgColor={GLOBAL_SECONDARY_COLOR}
            borderRadius={GLOBAL_BORDER_RADIUS}
            padding={3}
            color={'white'}
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