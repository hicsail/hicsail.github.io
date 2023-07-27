import Counter from './counter.js';
import {
  frequencyGraph,
  frequencyGraphHorizontal,
  pieChart,
  groupedFrequencyGraph,
} from './graphs.js';
import * as d3 from 'd3';
import { pie } from 'd3';

const renderVisualizations = (data) => {
  const deptFunding = d3
    .rollups(
      data,
      (xs) => d3.sum(xs, (x) => x['Award Amount']),
      (d) => d.Dept,
    )
    .map(([k, v]) => ({ X: k, Y: v }));

  const deptFundingFiltered = deptFunding.filter(
    (d) => (d.Y > 0) & (d.X != null),
  );
  // get the top 5 objects with highest Y value
  deptFundingFiltered.sort((a, b) => b.Y - a.Y);
  deptFundingFiltered.splice(5, deptFundingFiltered.length - 5);

  const referred = d3.rollups(
    data,
    (xs) => xs.length,
    (d) => d['REFERRED BY'],
  );

  const referredFinal = {};
  referred.forEach((element) => {
    if (element[0] === null) {
      referredFinal['Hariri Director'] = element[1];
    } else {
      referredFinal[element[0]] = element[1];
    }
  });
  const awardAmounts = data.map((d) => d['Award Amount']);
  const estimatedValue = data.map((d) => d['Estimated Value']);

  const awardAmountxEstimatedValue = [];

  awardAmounts.forEach((value, index) => {
    awardAmountxEstimatedValue.push({
      group: index,
      'Award Amount': value,
      'Estimated Value': estimatedValue[index],
    });
  });

  const names = data.map((d) => d['name']);
  //combine awardAmounts and names
  const awardsNames = [];
  names.forEach((value, index) => {
    awardsNames.push({
      Y: awardAmounts[index] / 153000,
      X: value,
    });
  });

  const awardsNamesFiltered = awardsNames.filter(
    (d) => (d.Y > 0) & (d.X != null),
  );

  frequencyGraph('awards', awardsNames, 'Y', false, 'green', 800, 400);
  frequencyGraphHorizontal(
    'departmentFunding',
    deptFundingFiltered,
    'Y',
    false,
  );
  pieChart('referred', referredFinal, 'Y');
  groupedFrequencyGraph('award-estimated', awardAmountxEstimatedValue, [
    'Award Amount',
    'Estimated Value',
  ]);
};

export default renderVisualizations;
