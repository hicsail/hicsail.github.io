import React from 'react';

interface TextProps {
  percentage: number;
}

export const TextComponent: React.FC<TextProps> = (props) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={'1.5em'}
    >
      {props.percentage.toFixed(0)}%
    </text>
  );
};
