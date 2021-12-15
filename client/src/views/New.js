import React from 'react';
import PetForm from '../components/PetForm';
import './main.css';
import { Link } from '@reach/router';

const New = () => {
  return (
    <div>
      <div className='button-position'>
        <div className='shelter-link'>
          <Link to={'/'}>
            <input type='button' value='back to home' />
          </Link>
        </div>
      </div>
      <PetForm />
    </div>
  );
};

export default New;
