import React, { useEffect } from 'react'

export default function ApiMain() {
 
const apiKode = "bf50efed1f67407f9bb3dcef2eefac27";

useEffect(() => {
  
    fetch(`https://api.spoonacular.com/recipes/complexSearch?query=pizza&apiKey=${apiKode}&number=50`)
	.then(response => response.json())
	.then(data =>console.log(data))
	.catch(err => console.error(err));

}, [])



  return (
    <div>ApiMain</div>
  )
}
