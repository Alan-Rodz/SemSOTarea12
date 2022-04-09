import { Slider, SliderMark, SliderTrack, SliderFilledTrack, Tooltip, SliderThumb } from '@chakra-ui/react';
import { useState } from 'react';

import { GLOBAL_SECONDARY_COLOR } from '../../../pages';

// ********************************************************************************
// --- Funciones ------------------------------------------------------------------
const modificarVelocidad = (valorSlider: number): number => {
    if(valorSlider === 0) { return 1/*velocidad minima*/; }
    if(valorSlider === 100) { return 1000/*velocidad maxima*/; }
    
    return valorSlider*10;
}

// --- Componente -----------------------------------------------------------------
export interface SliderVelocidadProps { velocidad: number; setVelocidad: React.Dispatch<React.SetStateAction<number>> };
export const SliderVelocidad: React.FC<SliderVelocidadProps>= ({velocidad, setVelocidad}) => {
    // --- State --------------------------------------------------------------------
    const [sliderValue, setSliderValue] = useState(50)
    const [showTooltip, setShowTooltip] = useState(false)

    // --- UI ---------------------------------------------------------------------
    return (
        <Slider
            id={'slider'}
            defaultValue={50}
            min={0}
            max={100}
            colorScheme={'pink'}
            onChange={(v) => { setSliderValue(v); setVelocidad(modificarVelocidad(v)); } }
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <SliderMark value={25} mt={'1'} ml={'-2.5'} fontSize={'sm'}>
                Mayor Velocidad
            </SliderMark>
            <SliderMark value={75} mt={'1'} ml={'-2.5'} fontSize={'sm'}>
                Menor Velocidad
            </SliderMark>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <Tooltip
                hasArrow
                bg={GLOBAL_SECONDARY_COLOR}
                color={'white'}
                placement={'top'}
                isOpen={showTooltip}
                label={`${sliderValue}%`}
            >
                <SliderThumb />
            </Tooltip>
        </Slider>
    )
}