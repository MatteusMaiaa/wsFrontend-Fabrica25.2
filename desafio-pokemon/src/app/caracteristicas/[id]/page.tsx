"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"

export default function DetalhesPokemon() {
  const { id } = useParams() // pega o id da URL
  const [pokemon, setPokemon] = useState<any>(null)

  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const data = await res.json()
      setPokemon(data)
    }
    fetchPokemon()
  }, [id])

  if (!pokemon) return <p className="text-white p-6">Carregando...</p>

  return (
    <div className="bg-gray-800 min-h-screen p-6 text-white">
      <Link href="/" className="text-blue-400 underline mb-4 inline-block">
        Voltar
      </Link>

      <h1 className="text-3xl font-bold mb-4 capitalize">{pokemon.name}</h1>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mb-4"
      />
      <p><span className="font-bold">ID:</span> {pokemon.id}</p>
      <p>
        <span className="font-bold">Tipos:</span>{" "}
        {pokemon.types.map((t: any) => t.type.name).join(", ")}
      </p>
      <p><span className="font-bold">Peso:</span> {pokemon.weight}</p>
      <p><span className="font-bold">Experiência Base:</span> {pokemon.base_experience}</p>
    </div>
  )
}