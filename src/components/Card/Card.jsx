import React from 'react'

export default function Card() {
  return (
    <>
    <div className="bg-dark card col-3 m-1 p-1" style={{color:'black'}}>
        <img className='card-img'style={{opacity: 0.4}} width={150} height={150} src="https://i.imagesup.co/images2/4c7cc05dd420f94ff35456056d5a114499bbbb62.jpg" alt="card" />
  <div class="card-img-overlay">
    <h3 class="card-title">Card title</h3>
    <p class="card-text">Last updated 3 mins ago</p>
    <div>❤️</div>
    <i class="fa-solid fa-heart"></i>
    <i class="fa-regular fa-heart"></i>
  </div>
    </div>
    </>
  )
}

