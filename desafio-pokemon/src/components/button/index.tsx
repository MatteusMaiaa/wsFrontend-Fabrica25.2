'use client'

import { useState } from "react"

export  function Button () {

    const [clique, setClicado] = useState<"grid"| "lista">("grid")

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
    )
}