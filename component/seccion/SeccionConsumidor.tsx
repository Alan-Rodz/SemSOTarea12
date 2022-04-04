import { Box, Center, Flex } from '@chakra-ui/react';

import { GLOBAL_CONTENT_COLOR, FONT_SIZE } from '../../pages';
import { TituloSeccion } from './TituloSeccion';

// ********************************************************************************
export interface SeccionConsumidorProps {};

export const SeccionConsumidor: React.FC<SeccionConsumidorProps> = () => {
    return (
        <Box w={'100%'} h={'100%'} py={2} borderColor={'gray.300'}>
            <Flex mt={50} flexDir={'column'}>
                <TituloSeccion nombreSeccion={`Consumidor`} />
                <Box 
                  bgColor={GLOBAL_CONTENT_COLOR} 
                  fontSize={FONT_SIZE}
                  padding={5}
                  mt={7}
                >
                    <Center>Estado:</Center>
                    <Center>Última Posición:</Center>
                    <Center>Tiempo Restante:</Center>
                </Box> 
            </Flex>
        </Box>
    )
}