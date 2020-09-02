import _ from 'lodash';
import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines';

const average = data => _.round(_.sum(data) / data.length);

const Chart = ({ data, color, units }) => (
  <div>
    <Sparklines data={data} svgWidth={180} svgHeight={120}>
      <SparklinesLine color={color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>
      {average(data)}{units}
    </div>
  </div>
);

export default Chart;
