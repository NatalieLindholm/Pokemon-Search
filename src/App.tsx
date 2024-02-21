import { useState } from 'react'
import './index.css'

function App() {
const [data, setData] = useState<any>(null);
const [search, setSearch] = useState('')

 const onSearch = () => {
  const api = async () => {
    // Request data from api
    const pokemonApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`, {
      method: 'GET'
    })

    // Check if request was valid, if not return error
if(pokemonApi.ok){
  const pokemonData = await pokemonApi.json()
  setData(pokemonData)
} else {
  console.error('Error no data', Error); 
}
  }
  api()
 }
  
console.log(data);

  return (
    <>
      <div className="bg-blue-100 h-screen flex flex-col justify-center items-center">
        <div className='shadow-md rounded-xl text-2xl w-2/3 bg-white h-16 flex justify-center items-center font-extrabold'>
          <h1>Pokemon Search</h1>
        </div>

<div className='m-3 flex'>
  <input className='mr-2 hover:bg-slate-100 pl-3 shadow-md rounded-xl text-1xl w-2/3 bg-white h-14 flex justify-center items-center font-extrabold' 
    type="text" 
    placeholder='Search pokemon...' 
    value={search} 
    onChange={(e) => setSearch(e.target.value)} 
  />

  <button  
    className='hover:bg-slate-100 shadow-md rounded-xl text-lg w-1/3 bg-white h-14 flex justify-center items-center font-extrabold' 
    onClick={onSearch}
    >Search</button>
</div>

{data != null && !data.count &&
 
<div  className='shadow-md rounded-xl text-1xl w-80 h-80 bg-white py-4 flex flex-row justify-evenly'>
 <div> 
<img className='m-3 w-28'
src={data.sprites.front_default} 
alt= {data.name} />

<h2 className='text-2xl text-gray-900 font-extrabold ml-3'>{data.name}</h2>
    <p className='ml-3'><b>Height:</b> {data.height}</p>
    <p className='ml-3'><b>Weight:</b> {data.weight}</p>
    <p className='ml-3'><b>Type:</b> {data.types.map((pokemonType:any) => <span>{pokemonType.type.name},</span>)}</p>
</div>

<div className='flex flex-col justify-center gap-5'>
    <p><b>Abilities:</b> {data.abilities.map((pokemonAbility:any) => <li>{pokemonAbility.ability.name}</li>)}</p>
    <p><b>Stats:</b> {data.stats.map((pokemonStats:any) => <li>{pokemonStats.stat.name} </li>)}</p>
</div>
</div>}
      </div>
    </>
  )
}

export default App
