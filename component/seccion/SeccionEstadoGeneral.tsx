import { Box, Center, Flex } from '@chakra-ui/react';

import { FONT_SIZE, GLOBAL_BORDER_RADIUS, GLOBAL_CONTENT_COLOR, GLOBAL_SECONDARY_COLOR } from '../../pages';

// ********************************************************************************
export interface SeccionEstadoGeneralProps {
    isProduciendo: boolean;
    isConsumiendo: boolean;
    
    sueñoProductor: number;
    sueñoConsumidor: number;
};
export const SeccionEstadoGeneral: React.FC<SeccionEstadoGeneralProps> = ({isProduciendo, isConsumiendo, sueñoProductor, sueñoConsumidor}) => {
    // --- State --------------------------------------------------------------------

    return (
        <Box w={'100%'} h={'100%'} py={1} borderColor={'gray.300'}>
            <Flex flexDir={'column'} gap={2}>
                <Box
                    bg={GLOBAL_SECONDARY_COLOR}
                    borderRadius={GLOBAL_BORDER_RADIUS}
                    padding={3}
                    fontSize={FONT_SIZE+5}
                    color={'white'}
                >
                    <Center>
                        Estado General
                    </Center>
                </Box>
                <Flex gap={10}>
                    <Box
                        backgroundColor={GLOBAL_CONTENT_COLOR}
                        fontSize={FONT_SIZE}
                        borderRadius={GLOBAL_BORDER_RADIUS}
                        flexBasis={'50%'}
                        padding={5}
                    >
                        <Center>
                            {`Trabajando: ${isProduciendo ? 'Productor' : ''} ${isConsumiendo ? 'Consumidor' : ''}`}
                        </Center>
                    </Box>
                    <Box
                        backgroundColor={GLOBAL_CONTENT_COLOR}
                        fontSize={FONT_SIZE}
                        flexBasis={'50%'}
                        borderRadius={GLOBAL_BORDER_RADIUS}
                        padding={5}
                        >
                        <Center>
                            {`Durmiendo: ${sueñoProductor > 0 ? 'Productor' : ''} ${sueñoConsumidor > 0 ? 'Consumidor' : ''}`}
                        </Center>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}