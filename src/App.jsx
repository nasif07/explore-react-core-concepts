
import './App.css'
import Counter from './countery'
import Team from './team'
import Users from './users'
import Friends from './friends'


function App() {
  function handleClick(){
    alert('button clicked')
  }
  const handleClick2 = () => {
    alert('handle button 2 clicked')
  }


  const addToFive = (num) => {
    alert (num +5);
  }
  return (
    <>
      <h3>React Core Concepts 2</h3>

      <Friends></Friends>

      <Users></Users>
      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Clicked 2</button>
      <button onClick={() => {alert('Third button clicked')}}>Third</button>
      <button onClick={() => addToFive(5)}>Four</button>
    </>
  )
}

export default App
