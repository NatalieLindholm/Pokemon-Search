import { useEffect, useState } from 'react'
import './index.css'

function App() {
const [data, setData] = useState();

  useEffect(() => {
    const api = async () => {
      const pokemonApi = await fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
        method: 'GET'
      })
      const pokemonData = await pokemonApi.json()
    console.log(pokemonData);
    
    }

    api()
  }, [])

  return (
    <>
      <div className="bg-blue-100 h-screen">
<h1>Pokemon Search</h1>
<input type="text" placeholder='Search pokemon...' />
<button>Search</button>

<div>
  {/* display search here */}
<h2>name</h2>
<img src="" alt="" />
<p>Height:</p>
<p>Weight:</p>
<p>Type:</p>
<p>Stats:</p>
<p>Abilities:</p>
<p>Moves:</p>
</div>

      </div>
    </>
  )
}

export default App
