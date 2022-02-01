import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import './detail.css';
const Detail = (props) => {
  const [pet, setPet] = useState([]);
  const [like, setLike] = useState(0);
  const remove = (id) => {
    axios
      .delete(`http://localhost:8000/api/pet/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios.get('http://localhost:8000/api/pet/' + props.id).then((res) =>
      setPet({
        ...res.data,
      }),
    );
  });

  const Like = (e) => {
    setLike(like + 1);
  };

  return (
    <div className='keeper'>
      <div className='top-navbar'>
        <div className='top-words'>
          <h1>Pet Shelter</h1>
          <h2>Details about: {pet.name}</h2>
        </div>
        <div className='adopt-button'>
          <div className='adopt-control'>
            <Link to={'/'}>
              <input type='button' value='back to home' />
            </Link>
            <button
              onClick={(e) => {
                remove(pet._id);
              }}
            >
              Adopt {pet.name}
            </button>
          </div>
        </div>
      </div>
      <div className='bottom-box'>
        <p>Pet Type: {pet.type}</p>
        <p>Description: {pet.description}</p>
        <p>
          Skills:
          <div className='skills'>
            <p>{pet.skillOne}</p>
            <p>{pet.skillTwo}</p>
            <p>{pet.skillThree}</p>
          </div>
        </p>
        <div className='like-button'>
          <button
            style={{ marginRight: '20px' }}
            onClick={(e) => Like()}
            className='button is-primary is-outlined'
          >
            Like {pet.name}
          </button>
          <h3 style={{ display: 'inline-block', marginTop: '7px' }}>
            {like} like(s)
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Detail;
