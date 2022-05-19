/* eslint-disable @next/next/no-img-element */
import { useEffect, useState, useRef } from 'react'
import { ArrowBackIos as ArrowLeft } from 'styled-icons/material-outlined'
import { ArrowForwardIos as ArrowRight } from 'styled-icons/material-outlined'
import { Close as CloseButton } from '@styled-icons/material-outlined'
import SlickSlider from 'react-slick'

import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

const commonSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ]
}

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1
}

export type GalleryImageProps = {
  src: string
  label: string
}
export type GalleryProps = {
  items: GalleryImageProps[]
  color?: 'black' | 'white'
}

// useEffect roda no momento que o componente é carregado
// effect é o que desejamos que aconteça
// cleanup é o que desejamos que aconteça quando da remoção do componente e isso É
// MUITO IMPORTANTE, senão EventListeners continuarão a ser executados
// , [input]) a partir de qual estado desejamos que o effect aconteça. se vazio
// rodará uma única vez quando a montagem do componente, ou a partir da mudança de algum
// estado com p.ex ,[isOpen]) que fará que effect rode quando isOpen alterar
// Análise: useEffect foi utilizado para adicionar um Event Listener no momento da montagem
//          do componente. o Cleanup acontece no return () => que faz a remoção do EventListener.
//          Uma vez que o input foi deixado vazio, []), o efeito acontecerá uma única vez: assim
//          que o componente for desmontado, return () => será executado, removendo o Event Listener
const Gallery = ({ items, color = 'white' }: GalleryProps) => {
  const sliderRef = useRef<SlickSlider>(null)
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key == 'Escape' && setIsOpen(false)
    }

    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  const fecha = () => {
    console.log('EU FUI CHAMADO')
    setIsOpen(false)
  }
  return (
    <S.Wrapper color={color}>
      <Slider ref={sliderRef} settings={settings}>
        {items.map((item, idx) => (
          <img
            width={295}
            height={165}
            role="button"
            key={`thumb-${idx}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
            onClick={() => {
              setIsOpen(true)
              sliderRef.current!.slickGoTo(idx, true)
            }}
          />
        ))}
      </Slider>

      <S.Modal isOpen={isOpen} aria-label="modal" aria-hidden={!isOpen}>
        <S.Close
          role="button"
          aria-expanded="true"
          aria-label="close modal"
          onClick={() => fecha()}
        >
          <CloseButton size={40} />
        </S.Close>

        <S.Content>
          <Slider ref={sliderRef} settings={modalSettings}>
            {items.map((item, idx) => (
              <img key={`gallery-${idx}`} src={item.src} alt={item.label} />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Wrapper>
  )
}
export default Gallery
