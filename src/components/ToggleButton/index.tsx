/* eslint-disable @next/next/no-img-element */
import { ButtonHTMLAttributes, useState } from 'react'
import { Checkmark } from '@styled-icons/evaicons-solid/Checkmark'
import * as S from './styles'

type ToggleButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ToggleButtonResult = {
  tag: string
  checked: boolean | undefined
}
export type ToggleButtonProps = {
  onCheck?: (result: ToggleButtonResult) => void
  size?: 'small' | 'medium' | 'large'
  checked?: boolean
  tag: string
  label: string
  icon: string
} & ToggleButtonTypes

const ToggleButton = ({
  onCheck,
  size = 'small',
  checked = false,
  tag,
  label,
  icon,
  ...props
}: ToggleButtonProps) => {
  const [isChecked, setIsChecked] = useState(checked)

  const handleClick = () => {
    const newValue = !isChecked
    !!onCheck && onCheck({ tag: tag, checked: newValue })
    setIsChecked(newValue)
  }
  return (
    <S.Wrapper size={size} checked={isChecked} onClick={handleClick} {...props}>
      {!!icon && (
        <S.Image checked={isChecked}>
          <use xlinkHref={icon} />
        </S.Image>
      )}
      <span>{label}</span>
      {isChecked ? (
        <span id="mark">
          <Checkmark id="mark" />
        </span>
      ) : (
        <span id="mark">&nbsp;</span>
      )}
    </S.Wrapper>
  )
}

export default ToggleButton
