import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import storage from '../Storage/storage';

const Nav = () => {
  const go = useNavigate();
  const logout = async() => {
    storage.remove('authToken');
    storage.remove('authUser');
    await axios.get('/api/auth/logout', storage.get('authToken'));
    go('/login');
  }
  return (
    <nav className='navbar navbar-expand-lg navbar-white bg-info'>
      <div className='container-fluid'>
        <a className='navbar-brand'>MLA Plus</a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#nav' aria-controls='navbarSuppotedContent'>
          <span className='navbar-toggler-icon'></span>
        </button>
      </div>
    </nav>
  )
}

export default Nav