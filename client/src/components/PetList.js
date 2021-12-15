import React from 'react';
import { Link } from '@reach/router';
import './petList.css';
const PetList = (props) => {
  return (
    <div>
      <div className='box'>
        <h1>Pet Shelter</h1>
        <h2>These pets are looking for a good home</h2>
        <div className='container'>
          <div className='table'>
            <table>
              <thead>
                <tr>
                  <th>name</th>
                  <th>Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {props.petList.map((pet, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{pet.name}</td>
                      <td>{pet.type}</td>
                      <td>
                        <Link to={`/${pet._id}`}>details</Link> |
                        <Link to={'/pet/' + pet._id + '/edit'}>edit</Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className='form-control'></div>
          </div>
        </div>
        {props.petList[0] ? (
          <div>
            {props.petList.map((pet, index) => {
              return (
                <div key={index}>
                  <Link to={`/${pet._id}`}>{pet.title}</Link>
                </div>
              );
            })}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
export default PetList;
