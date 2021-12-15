import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';
import axios from 'axios';
import './update.css';
const Update = (props) => {
  const { id } = props;
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [description, setDescription] = useState();
  const [skillOne, setSkillOne] = useState();
  const [skillTwo, setSkillTwo] = useState();
  const [skillThree, setSkillThree] = useState();
  const [errors, setErrors] = useState({});
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/pet/' + id)
      .then((res) => {
        setName(res.data.name);
        setType(res.data.type);
        setDescription(res.data.description);
        setSkillOne(res.data.skillOne);
        setSkillTwo(res.data.skillTwo);
        setSkillThree(res.data.skillThree);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const updatePet = (e) => {
    e.preventDefault();
    axios
      .put('http://localhost:8000/api/pet/' + id, {
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
    <form onSubmit={updatePet}>
      <div className='home-link'>
        <Link to={'/'}>
          <input type='button' value='home' />
        </Link>
      </div>
      <h1>Pet Shelter</h1>
      <h1>Edit {name}</h1>
      <div className='box'>
        <div className='border'>
          <div className='container'>
            <div className='form-control'>
              <p>
                <label>Pet Name:</label>
                <input
                  type='text'
                  name='name'
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                {errors.name ? (
                  <p class='error'>{errors.name.message}</p>
                ) : (
                  true
                )}
              </p>
              <p>
                <label>Pet Type:</label>
                <input
                  type='text'
                  name='type'
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                />
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
                  name='description'
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
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
                  name='skillOne'
                  value={skillOne}
                  onChange={(e) => {
                    setSkillOne(e.target.value);
                  }}
                />
              </p>
              <p>
                <label>Skill 2:</label>
                <input
                  type='text'
                  name='skillTwo'
                  value={skillTwo}
                  onChange={(e) => {
                    setSkillTwo(e.target.value);
                  }}
                />
              </p>
              <p>
                <label>Skill 3:</label>
                <input
                  type='text'
                  name='skillThree'
                  value={skillThree}
                  onChange={(e) => {
                    setSkillThree(e.target.value);
                  }}
                />
              </p>
            </div>
          </div>
          <input className='button' type='submit' value='Edit Pet' />
        </div>
      </div>
    </form>
  );
};

export default Update;
