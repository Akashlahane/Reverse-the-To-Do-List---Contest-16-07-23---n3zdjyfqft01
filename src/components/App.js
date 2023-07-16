import React, { useState } from 'react'
import '../styles/App.css';

function ToDo(obj) {
  return (<tr>
    <td>
      <p>{obj.id}</p>
    </td>
    <td>
      <input />
    </td>
    <td>
      <p>{obj.createdAt}</p>
    </td>
  </tr>)
}

function reverseOrder(){
  

  
}

function App() {
  const [todos, setTodos] = useState([{
    id: 'todo1',
    createdAt: '20:30',
  }, {
    id: 'todo2',
    createdAt: '18:00',
  }
  ]);

  return (
    <div id="main">
      <button onClick="reverseOrder">Reverse</button>
      <table>
        <tbody>
             <>
             <ToDo  obj = {todos[0]}/>
             <ToDo obj = {todos[1]}/>
             </>
        </tbody>
      </table>
    </div>
  )
}


export default App;
