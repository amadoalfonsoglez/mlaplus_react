import React,{useState, useEffect, useRef} from 'react'
import {sendRequest} from '../functions';
import DivInput from '../Components/DivInput'; 

const FormDep = (params) => {
  const [name, setName] = useState('');
  const nameInput = useRef();
  let method = 'POST';
  let url = '/api/departments';
  let redirect = ''

  useEffect(()=>{
    nameInput.current.focus();
    getDepartment();
  },[]);

  const getDepartment = async() =>{
    if(params.id !== null) {
        const res = await sendRequest('GET','', url+'/'+params.id );
        setName(res.data.name);
    }
  }

  const save = async(e) => {
      e.preventDefault();
      if(params.id !== null){
        method = 'PUT';
        url = '/api/departments/'+params.id;
        redirect = '/';
      }

      const res = await sendRequest(method, {name:name}, url, redirect);
      if(method == 'POST' && res.status == true){
            setName('');
      }
  }

  return (
    <div className='container-fluid'>
        <div className='row mt-5'>
            <div className='col-md-4 offset-md-4'>
                <div className='card border border-info'>
                    <div className='card-header bg-info border border-info'>
                        {params.title}
                    </div>
                    <div className='card-body'>
                        <form onSubmit={save}>
                            <DivInput  type='text' 
                                icon='fa-building' 
                                value={name} 
                                className='form-control' 
                                placeholder='Name' 
                                required='required' 
                                ref={nameInput} 
                                handleChange={(e)=>setName(e.target.value)}>
                            </DivInput>
                            <div className='d-grid col-10 mx-auto'>
                                <button className='btn btn-dark'>
                                    <i className='fa-solid fa-save'></i> Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormDep