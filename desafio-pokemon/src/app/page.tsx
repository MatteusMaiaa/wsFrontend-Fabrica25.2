"use client"

import { useState, useEffect } from "react"

export interface Pokemon {
  nome: string,
  id: number,
  imagem: string,// URL da imagem
}

export default function Pagina() { 



  const [Pokemons, setPokemons] = useState<Pokemon[]>([])
  const [pesquisa, setPesquisa] = useState("")
  const [clique, setClicado] = useState<"grid"| "lista">("grid")

  useEffect(() => {
    async function BuscandoPokemons() {




      const respossta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
      const data = await respossta.json()
  const listaDePokemon: Pokemon[] = data.results.map((p: any, index: number) => ({
        id: index + 1,
        nome: p.name,
      imagem: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    })
    )

       setPokemons(listaDePokemon)
    }

    BuscandoPokemons()
  }, [])

  const pokemonsDigitado = Pokemons.filter(p =>
    p.nome.toLowerCase().includes(pesquisa.toLowerCase())
  )

  return (
    
    <div className=" bg-gray-800 rounded-md p-6">
      <input
        type="text"
        value={pesquisa}
        placeholder="Encontre o Pokemon"
        onChange={(e) => setPesquisa(e.target.value)}
        className="border p-2 mb-4 w-full max-w-sm rounded bg-gray-500 mt-6 ml-5"
      />

      <button onClick={() => 
        {setClicado}} className="text-white ">ALTERAR VISUAL</button>

      
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 p-6 ">

        {pokemonsDigitado.map(pokemon =>
        (<div key={pokemon.id}
              className="border p-2 rounded text-center  bg-yellow-100">
            <img src={pokemon.imagem}  className="mx-auto" />
          <h2 className="font-bold mt-2 text-xl text-black">{ pokemon.nome} </h2>
            <p className="font-bold text-black">ID: {pokemon.id}</p>
          </div>
        ))}
      </div>
    </div>
  )
}