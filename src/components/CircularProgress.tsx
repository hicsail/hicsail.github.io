import React from 'react';
import { Circle } from './Circle';
import { TextComponent } from './Text';

interface PieProps {
  percentage: number;
  colour: string;
}

export const Pie: React.FC<PieProps> = (props) => {
  const cleanPercentage = (percentage: number) => {
    const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0; // we can set non-numbers to 0 here
    const isTooHigh = percentage > 100;
    return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
  };

  const pct = cleanPercentage(props.percentage);
  return (
    <svg width={200} height={200}>
      <g transform={`rotate(-90 ${'100 100'})`}>
        <Circle colour="lightgrey" percentage={pct} />
        <Circle colour={props.colour} percentage={pct} />
      </g>
      <TextComponent percentage={pct} />
    </svg>
  );
};
