"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export interface Pokemon {
  nome: string
  id: number
  imagem: string
  tipo?: string[]
}

export default function Pagina() {


  const [Pokemons, setPokemons] = useState<Pokemon[]>([])
  const [pesquisa, setPesquisa] = useState("")
  const [clique, setClicado] = useState<"grid" | "lista">("grid")
  const [filtros, setFiltros] = useState<string[]>([])

  useEffect(() => {
    async function BuscandoPokemons() {
      const resposta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=246")
      const data = await resposta.json()

      const lista = await Promise.all(
        data.results.map(async (p: any, i: number) => {
          const resDetalhe = await fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
          const detalhe = await resDetalhe.json()
          return {
            id: i + 1,
            nome: p.name,
            imagem: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`,
            tipo: detalhe.types.map((t: any) => t.type.name)
          }
        })
      )
     
      setPokemons(lista)
    }

    BuscandoPokemons()
  }, [])

  const pokemonsFiltrados = Pokemons.filter(p =>
    p.nome.toLowerCase().includes(pesquisa.toLowerCase()) && 
    (filtros.length === 0 || filtros.some(f => p.tipo?.includes(f)))
  )

  function handleCheckbox(tipo: string, checked: boolean) {
    if (checked) setFiltros([...filtros, tipo])
    else setFiltros(filtros.filter(f => f !== tipo))
  }

  const tiposDisponiveis = ["grass", "fire", "water", "bug", "electric"]

  return (
    <div className="bg-gray-800 min-h-screen p-6 text-white rounded-md">
      
      <input
        type="text"
        value={pesquisa}
        placeholder="Encontre o Pokémon"
        onChange={e => setPesquisa(e.target.value)}
        className="border p-2 mb-4 w-full max-w-sm rounded bg-gray-500 text-white"
      />

      
      <div className="mb-4">
        {tiposDisponiveis.map(tipo => (
          <label key={tipo} className="mr-4 capitalize">
            <input
              type="checkbox"
              checked={filtros.includes(tipo)}
              onChange={e => handleCheckbox(tipo, e.target.checked)}
              className="mr-1"
            />
            {tipo}
          </label>
        ))}
      </div>

      <button
        onClick={() => setClicado(clique === "grid" ? "lista" : "grid")}
        className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition mb-6"
      >ALTERAR VISUAL 
      </button>

      <div className={clique === "grid" ? "grid grid-cols-2 md:grid-cols-4 gap-4 p-5" : "flex flex-col gap-4 p-6"}>
        {pokemonsFiltrados.map(pokemon => (
          <Link key={pokemon.id} href={`/caracteristicas/${pokemon.id}`}>


            <div className={
                clique === "grid" ? "border p-2 rounded text-center bg-yellow-100 hover:scale-105 transition"  : "border p-5 rounded flex items-center gap-4 bg-yellow-100 hover:scale-105 transition"
}>
              <img
                src={pokemon.imagem}
                className={clique === "grid" ? "mx-auto" : "w-20 h-20"}
                alt={pokemon.nome}
              />
              <div className={clique === "grid" ? "" : "flex flex-col"}>
                <h2 className="font-bold mt-2 text-xl text-black capitalize">{pokemon.nome}</h2>
                <p className="font-bold text-black">ID: {pokemon.id}</p>
                {pokemon.tipo && <p className="text-black text-sm">Tipo: {pokemon.tipo.join(", ")}</p>}
              </div>
            </div>

          </Link>
        ))
        }


      </div>
    </div>)
}
