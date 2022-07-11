import React, {useState} from 'react';
import './Card.css';
import Modal from 'F:/PureBiz/JS/Work/React/cognitiva/src/Modal/Modal';

const records = [
  {
      "id": 1,
      "title": "ЭФФЕКТ ДАННИНГА - КРЮГЕРА",
      "content": "1Olala Contento Uno..."
  },
  {
      "id": 2,
      "title": "ОТКЛОНЕНИЕ В СТОРОНУ РЕЗУЛЬТАТА",
      "content": "2Olala Contento Due..."
  },
  {
      "id": 3,
      "title": "УКЛОН В СТОРОНУ ПОИСКА ИНФОРМАЦИИ",
      "content": "3Olala Contento Tree..."
  },
  {
    "id": 4,
    "title": "ЭФФЕКТ КОНТРАСТА",
    "content": "4Olala Contento Tree..."
  },
  {
    "id": 5,
    "title": "ОШИБКА ПЛАНИРОВАНИЯ",
    "content": "5Olala Contento Uno..."
  },
  {
    "id": 6,
    "title": "ИЛЛЮЗИЯ КОНЦА ИСТОРИИ",
    "content": "6Olala Contento Due..."
  },
  {
    "id": 7,
    "title": "АМПЛИФИКАЦИЯ",
    "content": "7Olala Contento Tree..."
  },
  {
    "id": 8,
    "title": "ИСКАЖЕНИЕ В ВОСПРИЯТИИ ВЫБОРА",
    "content": "8Olala Contento Tree..."
  }
]

function Card() {
  const [modalActive, setModalActive] = useState(false)
  let newX = 0
  
  return (
    <div className='cards-row'>
      {records.map(current => <button className='card' key={current.id} onClick={() => setModalActive(true)}>{current.title}</button>)}
      <Modal active={modalActive} setActive={setModalActive}>
        <p>{newX}</p>
      </Modal>      
    </div>    
  )
}

export default Card