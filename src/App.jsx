import './App.css';
import {inventory} from "./constants/inventory.js";

function App() {

    const TvTypes = inventory.map(() => {
        return inventory.type
    })

    // console.log(TvTypes)
  return (
      <>
    <h1>Begin hier met met maken van de applicatie!</h1>
          <ul>
              {inventory.map(() => {
                  return (<li key={inventory.type} className={}></li>)
              })}
          </ul>
      </>
  )
}

export default App
