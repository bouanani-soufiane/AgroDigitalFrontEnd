import React from 'react'
import GoogleMapReact from 'google-map-react';
import { fetchDiseaseStatistics } from '../feature/statistics';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import LineGraph from '../components/ChartComponent'


import { Line } from 'react-chartjs-2';
import { Statistics } from '../components/statistics';
const AnyReactComponent = ({ text }) => <div>{ text }</div>;

export const Dashboard = () => {
  const Month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const dispatch = useDispatch();
  const [disease, setDiseaseData] = useState(Array(12).fill(0));
  const { loading, diseaseStats, error, response } = useSelector(
    (state) => state.Statisics
  );

  useEffect(() => {
    dispatch(fetchDiseaseStatistics());
  }, [dispatch]);
  let diseaseData = []
  useEffect(() => {
    if (diseaseStats && diseaseStats.data) {
      console.log(diseaseStats.data); // Log the full data array
      const countsByMonth = new Map(diseaseStats.data.map(ele => [ele.month, ele.count]));
      const allMonths = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

      const monthlyCounts = allMonths.map(month =>
        countsByMonth.get(month) || 0
      );
      setDiseaseData(monthlyCounts);
      console.log("Monthly Counts:", monthlyCounts);

    }
  }, [diseaseStats]);

  console.log("Monthly Counts:", diseaseData);

  const defaultProps = {
    center: {
      lat: 31.7917, lng: -7.0926
    },
    zoom: 11
  };

  const data = {
    labels: Month
    ,
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: disease
      },

    ]
  };
  return (
    <div className=" ">
      <Statistics />
      <div className='gap-12 pt-12 py-12 mx-auto flex sm:flex-nowrap flex-wrap'>
        <div className=' w-full mx-auto flex sm:flex-nowrap flex-wrap'>
          <Line
            data={ data }
            width={ 300 }
            height={ 70 }
          />
        </div>
      </div>
      <GoogleMapReact
        bootstrapURLKeys={ { key: "" } }
        defaultCenter={ defaultProps.center }
        defaultZoom={ defaultProps.zoom }
      >
        <AnyReactComponent
          lat={ 31.7917 }
          lng={ -7.0926 }
        />
      </GoogleMapReact>
    </div>
  );
};
