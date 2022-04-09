import { Box, Center, Flex } from '@chakra-ui/react';
import Link from 'next/link';

import { SliderVelocidad } from '../../seccion/detalles/SliderVelocidad';
import { GLOBAL_BORDER_RADIUS, FONT_SIZE, GLOBAL_CONTENT_COLOR } from '../../../pages';
import { TituloSeccion } from '../TituloSeccion';

// ********************************************************************************
export interface SeccionDetallesProps { velocidad: number; setVelocidad: React.Dispatch<React.SetStateAction<number>> };
export const SeccionDetalles: React.FC<SeccionDetallesProps> = ({velocidad, setVelocidad}) => {

    // --- UI ---------------------------------------------------------------------
    return (
        <Box w={'100%'} h={'100%'} py={2} borderColor={'gray.300'}>
            <Flex mt={50} flexDir={'column'}>
                <TituloSeccion nombreSeccion={`Velocidad y Detalles`} />
                <Box
                    bgColor={GLOBAL_CONTENT_COLOR}
                    fontSize={FONT_SIZE + 5}
                    mt={1}
                    borderRadius={GLOBAL_BORDER_RADIUS}
                >
                    <Flex gap={1} flexDir={'column'}>
                        <Box padding={2}>
                            <SliderVelocidad  velocidad={velocidad} setVelocidad={setVelocidad}/>
                        </Box>
                        <Center>
                            <Box>
                                Programa Productor - Consumidor
                            </Box>
                        </Center>
                        <Box color={'blue'}>
                            <Center>
                                <Link href={'https://www.linkedin.com/in/alan-rodriguez-16b074192/'}>
                                    Alan Ramiro Rodríguez González
                                </Link>
                            </Center>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}