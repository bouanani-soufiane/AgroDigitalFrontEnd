import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Card } from "../components/Card";
import LineGraph from '../components/ChartComponent'

import { Line } from 'react-chartjs-2';

const AnyReactComponent = ({ text }) => <div>{ text }</div>;
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
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
      data: [65, 59, 80, 81, 56, 55, 40, 770, 120, 50, 70, 0]
    },
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(255,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(255,0,255,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [625, 59, 850, 81, 6, 525, 40, 0, 0, 0, 0, 0]
    }
  ]
};
export const Dashboard = () => {

  const defaultProps = {
    center: {
      lat: 31.7917, lng: -7.0926
    },
    zoom: 11
  }; return (
    <div className=" ">
      <div className="grid md:gap-8 grid-cols-1 md:grid-cols-4">
        <Card title="Total get free campaigns" number="17" color="#83E8E1" />
        <Card title="Needs approval" number="4" color="#83E8E1" />
        <Card title="Disputes" number="5" color="#FFBA79" />
        <Card title="Messages" number="8" color="#FFB2D3" />
      </div>
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
