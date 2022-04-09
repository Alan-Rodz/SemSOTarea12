import { Box, Center, Flex } from '@chakra-ui/react';

import { FONT_SIZE, GLOBAL_BORDER_RADIUS, GLOBAL_CONTENT_COLOR, GLOBAL_SECONDARY_COLOR } from '../../pages';

// ********************************************************************************
export interface SeccionEstadoGeneralProps {
    isProduciendo: boolean;
    isConsumiendo: boolean;

    sueñoProductor: number;
    sueñoConsumidor: number;
};
export const SeccionEstadoGeneral: React.FC<SeccionEstadoGeneralProps> = ({ isProduciendo, isConsumiendo, sueñoProductor, sueñoConsumidor }) => {
    // --- State --------------------------------------------------------------------

    return (
        <Box w={'100%'} h={'100%'} py={1} borderColor={'gray.300'}>
            <Flex flexDir={'column'} gap={2}>
                <Box
                    bg={GLOBAL_SECONDARY_COLOR}
                    borderRadius={GLOBAL_BORDER_RADIUS}
                    padding={3}
                    fontSize={FONT_SIZE + 5}
                    color={'white'}
                >
                    <Center>
                        Estado General
                    </Center>
                </Box>
                <Flex gap={10}>
                <Box
                        backgroundColor={GLOBAL_CONTENT_COLOR}
                        fontSize={FONT_SIZE + 5}
                        flexBasis={'50%'}
                        borderRadius={GLOBAL_BORDER_RADIUS}
                        padding={5}
                    >
                        <Flex padding={3} gap={1}>
                            <Box padding={1}>
                                Trabajando: 
                            </Box>
                            <Box bgColor={GLOBAL_SECONDARY_COLOR} color={'white'} borderRadius={GLOBAL_BORDER_RADIUS} padding={isProduciendo  ? 1 : 0}>
                                {`${isProduciendo ? ' Productor' : ''}`}
                            </Box>
                            <Box bgColor={GLOBAL_SECONDARY_COLOR} color={'white'} borderRadius={GLOBAL_BORDER_RADIUS} padding={isConsumiendo ? 1 : 0}>
                                {`${isConsumiendo ? ' Consumidor' : ''}`}
                            </Box>
                        </Flex>
                    </Box>
                    <Box
                        backgroundColor={GLOBAL_CONTENT_COLOR}
                        fontSize={FONT_SIZE + 5}
                        flexBasis={'50%'}
                        borderRadius={GLOBAL_BORDER_RADIUS}
                        padding={5}
                    >
                        <Flex padding={3} gap={1}>
                            <Box padding={1}>
                                Durmiendo: 
                            </Box>
                            <Box bgColor={GLOBAL_SECONDARY_COLOR} color={'white'} borderRadius={GLOBAL_BORDER_RADIUS} padding={sueñoProductor > 0 ? 1 : 0}>
                                {`${sueñoProductor > 0 ? ' Productor' : ''}`}
                            </Box>
                            <Box bgColor={GLOBAL_SECONDARY_COLOR} color={'white'} borderRadius={GLOBAL_BORDER_RADIUS} padding={sueñoConsumidor > 0 ? 1 : 0}>
                                {`${sueñoConsumidor > 0 ? ' Consumidor' : ''}`}
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}