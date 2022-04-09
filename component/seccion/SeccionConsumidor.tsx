import { Box, Center, Flex } from '@chakra-ui/react';
import { Estado } from '../../class/Contenedor';

import { GLOBAL_CONTENT_COLOR, FONT_SIZE } from '../../pages';
import { TituloSeccion } from './TituloSeccion';

// ********************************************************************************
export interface SeccionConsumidorProps {
    isConsumiendo: boolean;
    ultimaPosicion: string | number;
    tiempoRestanteDurmiendo: number;
};

export const SeccionConsumidor: React.FC<SeccionConsumidorProps> = ({isConsumiendo, ultimaPosicion, tiempoRestanteDurmiendo}) => {

    // --- UI -----------------------------------------------------------------------
    return (
        <Box w={'100%'} h={'100%'} py={2} borderColor={'gray.300'}>
            <Flex mt={50} flexDir={'column'}>
                <TituloSeccion nombreSeccion={`Consumidor`} />
                <Box 
                  bgColor={GLOBAL_CONTENT_COLOR} 
                  fontSize={FONT_SIZE+5}
                  padding={5}
                  mt={7}
                >
                    <Center>{`Estado: ${isConsumiendo ? 'Trabajando' : 'Durmiendo' }`}</Center>
                    <Center>{`Última Posición Consumida: ${ultimaPosicion}`}</Center>
                    <Center>{`Tiempo Restante Durmiendo: ${tiempoRestanteDurmiendo}`}</Center>
                </Box> 
            </Flex>
        </Box>
    )
}