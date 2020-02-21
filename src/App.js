import React from 'react';
import './App.css';
import Customer from './components/Customer';

function App() {
  const customers = [
    {
      'id': 1,
      'image': 'https://placeimg.com/64/64/1',
      'name': '홍길동',
      'birthday': '961222',
      'gender': '남자',
      'job': '대학생'
    },
    {
      'id': 2,
      'image': 'https://placeimg.com/64/64/2',
      'name': '찹찹찹',
      'birthday': '961022',
      'gender': '남자',
      'job': '프로그래머'
    },
    {
      'id': 3,
      'image': 'https://placeimg.com/64/64/3',
      'name': '홍길밥',
      'birthday': '971222',
      'gender': '남자',
      'job': '회사원'
    }

  ]
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            ></Customer>
          )
        })
      }
    </div>
  );
}

export default App;
