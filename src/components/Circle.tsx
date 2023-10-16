import React from 'react';

interface CircleProps {
  colour: string;
  percentage: number;
}

export const Circle: React.FC<CircleProps> = (props) => {
  const r = 70;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - props.percentage) * circ) / 100; // where stroke will start, e.g. from 15% to 100%.
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? props.colour : ''} // remove colour as 0% sets full circumference
      strokeWidth={'2rem'}
      strokeDasharray={circ}
      strokeDashoffset={props.percentage ? strokePct : 0}
    ></circle>
  );
};
