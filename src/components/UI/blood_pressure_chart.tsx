// src/components/BloodPressureChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BloodPressureChart: React.FC = () => {
  const data = {
    labels: ['2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25'],
    datasets: [
      {
        label: 'Systolic',
        data: [120, 130, 125, 140, 135],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Diastolic',
        data: [80, 85, 82, 88, 84],
        borderColor: 'rgba(153,102,255,1)',
        backgroundColor: 'rgba(153,102,255,0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Blood Pressure Over Time',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Blood Pressure (mmHg)',
        },
        suggestedMin: 0,
        suggestedMax: 200,
      },
    },
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: 1 }}>
        <Line data={data} options={options} />
      </div>
      <div style={{ width: '200px', paddingLeft: '20px' }}>
        <div>
          <h3>Systolic</h3>
          <p>160</p>
          <p>higher than average</p>
        </div>
        <hr />
        <div>
          <h3>Diastolic</h3>
          <p>80</p>
          <p>lower than average</p>
        </div>
      </div>
    </div>
  );
};

export default BloodPressureChart;
