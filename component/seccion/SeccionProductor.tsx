import { Box, Flex } from '@chakra-ui/react';

import { TituloSeccion } from './TituloSeccion';

// ********************************************************************************
export interface SeccionProductorProps {};

export const SeccionProductor: React.FC<SeccionProductorProps> = () => {
    return (
        <Box w={'100%'} h={'100%'} py={2} borderColor={'gray.300'}>
            <Flex mt={50} flexDir={'column'}>
                <TituloSeccion nombreSeccion={`Productor`} />
            </Flex>
        </Box>
    )
}