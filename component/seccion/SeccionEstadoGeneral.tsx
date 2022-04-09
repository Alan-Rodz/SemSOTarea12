import { Box, Center, Flex } from '@chakra-ui/react';

import { FONT_SIZE, GLOBAL_BORDER_RADIUS, GLOBAL_CONTENT_COLOR, GLOBAL_SECONDARY_COLOR } from '../../pages';
import { TituloSeccion } from './TituloSeccion';

// ********************************************************************************
export interface SeccionNuevosProps { };
export const SeccionEstadoGeneral: React.FC<SeccionNuevosProps> = () => {
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
                            Trabajando:
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
                            Durmiendo:
                        </Center>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}