import React,{useEffect,useState} from 'react';
import DivAdd from '../../Components/DivAdd';
import DivTable from '../../Components/DivTable'
import { Link } from 'react-router-dom';
import {sendRequest, confirmation} from '../../functions';

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [classLoad, setClassLoad] = useState('');
  const [classTable, setClassTable] = useState('');

  useEffect(() => {
    getDepartments();
  }, []);

  const getDepartments = async() => {
    const res = await sendRequest('GET', '', '/api/departments', '');
    setDepartments(res);
    setClassTable('');
    setClassLoad('d-none');
  }

  const deleteDepartment = (id, name) => {
     confirmation(name, ('/api/departments/'+id, '/') ;
  }

  return (
    <div className='container-fluid'>
      <DivAdd>
        <Link to='create' className='btn btn-white'>
          <i className='fa-solid fa-circle-plus'></i> Add
        </Link>
      </DivAdd>
    </div>
  )
}

export default Departments