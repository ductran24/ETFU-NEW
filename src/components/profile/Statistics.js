import React, { useState } from 'react';
import styled from 'styled-components';
import Chart from 'react-apexcharts';

const initialState = {
  options: {
    chart: {
      id: 'basic-bar'
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    }
  },
  series: [
    {
      name: 'Listening test',
      data: [30, 40, 45, 50, 49, 60, 70, 110, 56, 78, 32, 15]
    },
    {
      name: 'Reading test',
      data: [23, 24, 97, 60, 89, 30, 90, 130, 156, 48, 72, 25]
    }
  ]
};

const Statistics = () => {
  const [statistic, setStatistic] = useState(initialState);

  return (
    <Wrapper>
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart options={statistic.options} series={statistic.series} type="bar" width="900" />
          </div>
        </div>
      </div>
      <h3 className="progress-chart">The total number of tests you take in each month</h3>
    </Wrapper>
  );
};

export default Statistics;
const Wrapper = styled.section``;
