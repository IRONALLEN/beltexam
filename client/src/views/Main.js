import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import PetList from '../components/PetList';
import './main.css';

const Main = () => {
  const [petList, setPetList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/pets')
      .then((res) => {
        setPetList(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const removeFromDom = (petId) => {
    setPetList(petList.filter((pet) => pet._id !== petId));
  };
  return (
    <div>
      <div className='button-position'>
        <div className='shelter-link'>
          <Link to={'/pets/new'}>
            <input type='button' value='add a pet to the shelter' />
          </Link>
        </div>
      </div>
      {loaded && <PetList removeFromDom={removeFromDom} petList={petList} />}
    </div>
  );
};

export default Main;
