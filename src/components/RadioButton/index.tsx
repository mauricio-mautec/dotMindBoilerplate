import { ButtonHTMLAttributes, useState } from 'react'
import { Checkmark } from 'styled-icons/evaicons-solid'

import * as S from './styles'

// import styled from 'styled-components'
// const GreenCheckmark = styled(Checkmark)`
//   color: '#00FEB3';
// `

type RadioButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type RadioProps = {
  isChecked?: boolean
  size?: 'small' | 'medium' | 'large'
  tag: string
  label: string
  icon: string
} & RadioButtonTypes

export type RadioButtonProps = {
  items: RadioProps[]
  getResult?: (tag: string) => void
}

const RadioButton = ({ items, getResult }: RadioButtonProps) => {
  const radioState = items.map((item) => {
    const radio = { ...item }
    radio.isChecked = false
    return radio
  })
  const [RadioState, setRadioState] = useState(radioState)
  console.log('RadioState', RadioState)
  const handleClick = (index: number) => {
    const radioState = items.map((item) => {
      return { ...item, isChecked: false }
    })
    radioState[index].isChecked = true

    setRadioState(radioState)
    !!getResult && getResult(radioState[index].tag)
  }
  return (
    <S.Wrapper>
      {RadioState.map((item, idx) => (
        <S.Radio
          key={idx}
          size={item.size ? item.size : 'small'}
          onClick={() => {
            handleClick(idx)
          }}
          {...item}
        >
          {!!item.icon && (
            <S.Image isChecked={item.isChecked}>
              <use xlinkHref={item.icon} />
            </S.Image>
          )}
          <span>{item.label}</span>
          {item.isChecked ? (
            <span>
              <Checkmark id="mark" />
            </span>
          ) : (
            <span>&nbsp;</span>
          )}
        </S.Radio>
      ))}
    </S.Wrapper>
  )
}

export default RadioButton
