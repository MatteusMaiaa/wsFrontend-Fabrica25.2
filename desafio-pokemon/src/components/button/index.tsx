'use client'

import { useState } from "react"

export function Button() {
  const [clique, setClicado] = useState<"grid" | "lista">("grid")
  const [pesquisa, setPesquisa] = useState("")

  const alternarVisual = () => {
    setClicado(clique === "grid" ? "lista" : "grid")
  }

  return (
    <div className="bg-gray-800 rounded-md p-6">
      <input
        type="text"
        value={pesquisa}
        placeholder="Encontre o Pokemon"
        onChange={(e) => setPesquisa(e.target.value)}
        className="border p-2 mb-4 w-full max-w-sm rounded bg-gray-500 mt-6 ml-5 text-white"
      />

      <button
        onClick={alternarVisual}
        className="text-white bg-blue-500 p-2 rounded hover:bg-blue-600"
      >
        ALTERAR VISUAL
      </button>
    </div>
  )
}
