import { Box, Center, Flex } from '@chakra-ui/react';

import { FONT_SIZE, GLOBAL_BORDER_RADIUS, GLOBAL_CONTENT_COLOR } from '../../pages';
import { TituloSeccion } from './TituloSeccion';

// ********************************************************************************
export interface SeccionNuevosProps { };
export const SeccionEstadoGeneral: React.FC<SeccionNuevosProps> = () => {
    return (
        <Box w={'100%'} h={'100%'} py={2} borderColor={'gray.300'}>
            <Flex mt={50} flexDir={'column'}>
                <TituloSeccion nombreSeccion={`Estado General`} />
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