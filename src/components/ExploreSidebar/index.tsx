import { Close, FilterList } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import { useState } from 'react'
import * as S from './styles'

type Field = {
  label: string
  name: string
}

export type ItemProps = {
  title: string
  name: string
  type: 'checkbox' | 'radio'
  fields: Field[]
}
// String Definition
export type Values = {
  [field: string]: boolean | string
}

export type ExploreSidebarProps = {
  items: ItemProps[]
  initialValues?: Values
  onFilter: (values: Values) => void
}

const ExploreSidebar = ({
  items,
  initialValues = {},
  onFilter
}: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues)
  const [isOpen, setIsOpen] = useState(false)

  const handleFilter = () => {
    onFilter(values)
    setIsOpen(false)
  }

  const handleChange = (name: string, value: string | boolean) => {
    setValues((valorAnterior) => ({ ...valorAnterior, [name]: value }))
  }

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Overlay aria-hidden={isOpen} />
      <S.IconWrapper>
        <FilterList aria-label="open filters" onClick={() => setIsOpen(true)} />
        <Close aria-label="close filters" onClick={() => setIsOpen(false)} />
      </S.IconWrapper>

      <S.Content>
        {items.map((item, idx) => (
          <S.Items key={idx}>
            <Heading
              lineBottom
              color="white"
              lineColor="secondary"
              size="small"
            >
              {item.title}
            </Heading>

            {item.type === 'checkbox' &&
              item.fields.map((field, idx) => (
                <S.Box key={idx}>
                  <Checkbox
                    key={field.name}
                    value={field.name}
                    name={field.name}
                    label={field.label}
                    labelFor={field.name}
                    labelColor="white"
                    isChecked={!!values[field.name]}
                    onCheck={(value) => handleChange(field.name, value)}
                  />
                </S.Box>
              ))}

            {item.type === 'radio' &&
              item.fields.map((field) => (
                <Radio
                  name={item.name}
                  key={field.name}
                  id={field.name}
                  value={field.name}
                  label={field.label}
                  labelFor={field.name}
                  labelColor="white"
                  defaultChecked={values[item.name] === field.name}
                  onChange={() => handleChange(item.name, field.name)}
                />
              ))}
          </S.Items>
        ))}
      </S.Content>
      <S.Footer>
        <Button size="medium" fullWidth onClick={handleFilter}>
          Filter
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default ExploreSidebar
