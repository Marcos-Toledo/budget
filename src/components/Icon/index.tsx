import Svg, { Path } from 'react-native-svg';
import { ICONS, IconName } from './icons';

interface Props {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export const SpriteIcon = ({ name, size = 24, color = '#000', strokeWidth = 1.5 }: Props) => {
  const paths = ICONS[name];

  if (!paths || !Array.isArray(paths)) {
    console.warn(`[SpriteIcon] O ícone "${name}" não foi encontrado ou está estruturado incorretamente.`);
    return null; 
  }

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {paths.map((path, index) => {
        if (path.type === 'stroke') {
          return (
            <Path
              key={index}
              d={path.d}
              stroke={color}
              strokeWidth={strokeWidth}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round" // Boa prática para evitar quinas vivas
            />
          );
        }

        // Se for do tipo 'fill' (preenchimento comum)
        return (
          <Path
            key={index}
            d={path.d}
            fill={color}
          />
        );
      })}
    </Svg>
  );
};
