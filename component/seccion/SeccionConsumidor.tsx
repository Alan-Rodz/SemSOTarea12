import { Box, Flex } from '@chakra-ui/react';

import { TituloSeccion } from './TituloSeccion';

// ********************************************************************************
export interface SeccionConsumidorProps {};

export const SeccionConsumidor: React.FC<SeccionConsumidorProps> = () => {
    return (
        <Box w={'100%'} h={'100%'} py={2} borderColor={'gray.300'}>
            <Flex mt={50} flexDir={'column'}>
                <TituloSeccion nombreSeccion={`Consumidor`} />
            </Flex>
        </Box>
    )
}