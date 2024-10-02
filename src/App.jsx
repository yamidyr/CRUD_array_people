import { useState } from 'react';
import './App.css'
import { Person } from './components/Person';
import { People } from './components/People';

function App() {

  const [people, setPeople] = useState([
    {
      id: 1,
      name: "Yamid Yela",
      role: "Backen Developer",
      img: "https://bootdey.com/img/Content/avatar/avatar2.png"
    },
    {
      id: 2,
      name: "Jhonny Alejandro",
      role: "QA",
      img: "https://bootdey.com/img/Content/avatar/avatar6.png"},
    {
      id: 3,
      name: "Carolina",
      role: "Support",
      img: "https://bootdey.com/img/Content/avatar/avatar3.png"
    }
  ]);

  return (
    <div>
      <People
        people = { people }
        setPeople = { setPeople }
      />
    </div>
  )
}

export default App
