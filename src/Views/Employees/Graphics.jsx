import React, {useEffect, useState} from 'react'
import { sendRequest } from '../../functions';
import {Pie, Bar} from 'react-chartjs-2';
import {Chart as chartjs, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement} from 'chart.js';

chartjs.register(ArcElement,Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Graphics = () => {
  const [info, setInfo] = useState([]);
  const [colors, setColors] = useState([]);
  
  let charOptions = { responsive: true};
  
  useEffect(() => {
    getData();
  },[]);

  const random = () => {
     return Math.floor(Math.random() * 256);
  };

  const getData = async() => {
    const res = await sendRequest('GET','','/api/employeesByDepartement', '');
    setInfo(res);
    res.map(() => (
       colors.push("rgb("+random()+","+random()+","+random()+")")
    ));
  }

  const charData = {
    labels: info.map(d=>d.name),
    datasets: [{label:'Employees', data:info.map(d=>d.count),backgroundColor:colors}]
  }

  return (
    <div className='container-fluid'>
      <div className='row mt-5'>
        <div className='col-md-6 offset-md-3'>
          <Bar options={charOptions} data={charData} />
        </div>
      </div>
    </div>
  )
}

export default Graphics