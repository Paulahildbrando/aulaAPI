import { useState } from "react"

const pokemonList = [
       {id:1, nome:"Bulbassauro"},
       {id:4, nome:"Charmander"},
       {id:5, nome:"Charmeleon"},
       {id:11, nome:"Metapod"},
       {id:100, nome:"Voltorb"},
       {id:150, nome:"Cyndaquil"},
       {id:301, nome:"Delcatty"}



]


function Pokemon(){
    return(
        <div>
            <h1>Lista de Pokémon</h1>
        </div>
    )
}

export default Pokemon