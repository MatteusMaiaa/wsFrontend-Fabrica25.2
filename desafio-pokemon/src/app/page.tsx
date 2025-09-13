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

  useEffect(() => {
    async function fetchPokemons() {




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

    fetchPokemons()
  }, [])

  const pokemonsDigitado = Pokemons.filter(p =>
    p.nome.toLowerCase().includes(pesquisa.toLowerCase())
  )

  return (
    <div>
      <input
        type="text"
        value={pesquisa}
        placeholder="CAPTURA TEU POKMONZERA"
        onChange={(e) => setPesquisa(e.target.value)}
        className="border p-2 mb-4 w-full max-w-sm rounded"
      />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

        {pokemonsDigitado.map(pokemon =>
        (<div key={pokemon.id}
              className="border p-2 rounded text-center">
            <img src={pokemon.imagem} alt={pokemon.nome} className="mx-auto" />
          <h2 className="font-bold mt-2 capitalize"> Nome do Pokemon:  { pokemon.nome} </h2>
            <p>ID: {pokemon.id}</p>
          </div>
        ))}
      </div>
    </div>
  )
}