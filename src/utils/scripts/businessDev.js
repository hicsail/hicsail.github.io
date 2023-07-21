import Counter from './counter.js';
import { frequencyGraph, frequencyGraphHorizontal } from './graphs.js';
import * as d3 from 'd3';

const renderVisualizations = (data) => {
  const result = d3
    .rollups(
      data,
      (xs) => d3.sum(xs, (x) => x['Award Amount']),
      (d) => d.Dept,
    )
    .map(([k, v]) => ({ X: k, Y: v }));

  const resultFiltered = result.filter((d) => (d.Y > 0) & (d.X != null));
  // get the top 5 objects with highest Y value
  resultFiltered.sort((a, b) => b.Y - a.Y);
  resultFiltered.splice(5, resultFiltered.length - 5);

  //console.log("result", result);
  frequencyGraphHorizontal('departmentFunding', resultFiltered, 'Y', false);
};

export default renderVisualizations;
