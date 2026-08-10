import Svg, { Path } from 'react-native-svg';
import { ICONS, IconName } from './icons';

interface Props {
  name: IconName
  size?: number
  color?: string
  strokeWidth?: number
}

export const SpriteIcon = ({ name, size = 24, color = "#000", strokeWidth = 1 }: Props) => {
  const d = ICONS[name]
  return (
    <Svg width={size} height={size} viewBox='0 0 24 24' fill="none">
      <Path d={d} stroke={color} strokeWidth={strokeWidth} />
    </Svg>
  )
}
