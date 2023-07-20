import Counter from './counter.js';
import * as d3 from 'd3';

const renderVisualizations = (data) => {
  const result = d3
    .rollups(
      data,
      (xs) => d3.sum(xs, (x) => x['Award Amount']),
      (d) => d.Dept,
    )
    .map(([k, v]) => ({ Dept: k, 'Total Awarded Amount': v }));

  console.log(result);
};

export default renderVisualizations;
