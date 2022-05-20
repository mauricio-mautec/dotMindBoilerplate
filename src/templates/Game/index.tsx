import Base from 'templates/Base'

import * as S from './styles'

export type GameProps = {
  label?: string
}
const Game = ({ label }: GameProps) => (
  <Base>
    <h1>{label}</h1>
  </Base>
)

export default Game
