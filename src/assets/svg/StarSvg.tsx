import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';
import {SvgProps} from '../../types/SvgProps.ts';

const StarSvg: FC<SvgProps> = props => {
  const {width = 24, height = 24, color = 'gray', style} = props;
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      style={style}>
      <Path
        d="M11.524 3.464a.5.5 0 01.952 0l1.657 5.1a.5.5 0 00.475.346h5.364a.5.5 0 01.294.904l-4.34 3.153a.5.5 0 00-.181.559l1.657 5.1a.5.5 0 01-.77.56l-4.338-3.153a.5.5 0 00-.588 0l-4.339 3.153a.5.5 0 01-.77-.56l1.658-5.1a.5.5 0 00-.182-.56L3.734 9.815a.5.5 0 01.294-.904h5.364a.5.5 0 00.475-.346l1.657-5.1z"
        fill={color}
      />
    </Svg>
  );
};

export default StarSvg;
