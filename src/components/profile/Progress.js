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

const Progress = () => {
  const [Progress, setProgress] = useState(initialState);

  return (
    <Wrapper>
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart options={Progress.options} series={Progress.series} type="line" width="900" />
          </div>
        </div>
      </div>
      <h3 className="progress-chart">The average number of test scores you get in each month</h3>
    </Wrapper>
  );
};

export default Progress;

const Wrapper = styled.section``;
