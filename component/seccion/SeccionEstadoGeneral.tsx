import { Box, Flex } from '@chakra-ui/react';
import { TituloSeccion } from './TituloSeccion';

// ********************************************************************************
export interface SeccionNuevosProps {};

export const SeccionEstadoGeneral: React.FC<SeccionNuevosProps> = () => {
    return (
        <Box w={'100%'} h={'100%'} py={2} borderColor={'gray.300'}>
            <Flex mt={50} flexDir={'column'}>
                <TituloSeccion nombreSeccion={`Estado General`} />
            </Flex>
        </Box>
    )
}