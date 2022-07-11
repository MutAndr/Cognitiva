import React, {useState} from 'react';
import './Card.css';
import {Records} from 'F:/PureBiz/JS/Work/React/cognitiva/src/Data';

function Card() {
  const [popupcontent, setpopupcontent] = useState([]);
  const [popuptogle, setpopuptogle] = useState(false);
  const changecontent = (current) => {
    setpopupcontent([current]);
    setpopuptogle(!popuptogle);
  }
  return (
    <div className='car-container'>
      <div className='cards-row'>
        {Records.map(current => <button className='card' key={current.id} onClick={() => changecontent(current)}>{current.title}</button>)}
      </div>
      {popuptogle && (
        <div className='popup-container' onClick={changecontent}>
          <div className='popup-body' onClick={e => e.stopPropagation()}>
            <div className='popup-header'>
              <button className='popup' onClick={changecontent}>X</button>
            </div>
            <div className='popup-content'>
              {popupcontent.map((pop) => {
                return (
                  <div className='popup-card' key={pop.id}>
                    <p className='popup-title'>{pop.title}</p>
                    <p>{pop.content}</p>
                  </div>
                )
              })}
            </div>
            <div className='popup-footer'>
              <button className='popup' onClick={changecontent}>X</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card