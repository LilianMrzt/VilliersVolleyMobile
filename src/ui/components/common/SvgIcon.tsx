import React from "react";
import {LocalSvg} from "react-native-svg";

const SvgIcon = ({source, size, color = 'black'}) => {
  return (
      <LocalSvg asset={source} height={size} width={size} color={color}/>
  )
}

export default SvgIcon