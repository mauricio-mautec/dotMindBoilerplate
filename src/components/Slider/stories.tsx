import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Settings } from 'react-slick'
import styled from 'styled-components'

import Slider from '.'

export default {
  title: 'Slider',
  component: Slider
} as ComponentMeta<typeof Slider>

const horizontalSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

const Template: ComponentStory<typeof Slider> = (settings) => (
  <Slider settings={settings}>
    <Slide>Slide 01</Slide>
    <Slide>Slide 02</Slide>
    <Slide>Slide 03</Slide>
    <Slide>Slide 04</Slide>
    <Slide>Slide 05</Slide>
  </Slider>
)

export const Horizontal = Template.bind({})

Horizontal.args = horizontalSettings

export const Vertical = Template.bind({})

Vertical.args = verticalSettings
