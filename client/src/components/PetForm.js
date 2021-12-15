import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import './petForm.css';
const PetForm = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [skillOne, setSkillOne] = useState('');
  const [skillTwo, setSkillTwo] = useState('');
  const [skillThree, setSkillThree] = useState('');
  const [errors, setErrors] = useState({});

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8000/api/pet', {
        name,
        type,
        description,
        skillOne,
        skillTwo,
        skillThree,
      })
      .then((res) => {
        if (res.data.errors) {
          setErrors(res.data.errors);
        } else {
          navigate('/');
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className='box'>
        <h1>Pet Shelter</h1>
        <h2>Know a pet needing a home?</h2>
        <div className='border'>
          <div className='container'>
            <div className='form-control'>
              <p>
                <label>Pet Name:</label>
                <input type='text' onChange={(e) => setName(e.target.value)} />
                {errors.name ? (
                  <p class='error'>{errors.name.message}</p>
                ) : (
                  true
                )}
              </p>
              <p>
                <label>Pet Type:</label>
                <input type='text' onChange={(e) => setType(e.target.value)} />
                {errors.type ? (
                  <p class='error'>{errors.type.message}</p>
                ) : (
                  true
                )}
              </p>
              <p>
                <label>Pet Description:</label>
                <input
                  type='text'
                  onChange={(e) => setDescription(e.target.value)}
                />
                {errors.description ? (
                  <p class='error'>{errors.description.message}</p>
                ) : (
                  true
                )}
              </p>
            </div>
            <div className='skill-form-control'>
              <p>
                <label>Skill 1:</label>
                <input
                  type='text'
                  onChange={(e) => setSkillOne(e.target.value)}
                />
              </p>
              <p>
                <label>Skill 2:</label>
                <input
                  type='text'
                  onChange={(e) => setSkillTwo(e.target.value)}
                />
              </p>
              <p>
                <label>Skill 3:</label>
                <input
                  type='text'
                  onChange={(e) => setSkillThree(e.target.value)}
                />
              </p>
            </div>
          </div>
          <input className='button' type='submit' value='Add Pet' />
        </div>
      </div>
    </form>
  );
};

export default PetForm;
