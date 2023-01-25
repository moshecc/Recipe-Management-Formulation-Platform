import React from 'react'
import Nav from '../nav/Nav'

export default function NewRecipe() {



console.log(newRecipe.hhh);

function hey(){
  console.log(newRecipe.name);
  console.log("dedwsx");


}

  return (



    <div className='bgImg '>
        <Nav/>
        <div className='w-100 d-flex justify-content-center'>
        <div className='w-50 flex-column d-flex border mt-5'>
          <input type="text" onChange={(e)=>newRecipe.name = e.target.value } />
          <button onClick={hey()}>change</button>
          
       </div>
       </div>
    </div>
  )
}
