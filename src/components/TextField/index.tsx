import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  wrong?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  icon,
  iconPosition = 'left',
  label,
  labelFor = '',
  initialValue = '',
  disabled = false,
  wrong = '',
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} wrong={!!wrong}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          disabled={disabled}
          iconPosition={iconPosition}
          id={labelFor}
          type="text"
          onChange={onChange}
          value={value}
          {...props}
        />
      </S.InputWrapper>
      {!!wrong && <S.Wrong>{wrong}</S.Wrong>}
    </S.Wrapper>
  )
}

export default TextField
