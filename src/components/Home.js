import React from 'react'
import './home.css'
import background from '../Media/background.mp4'

export default function Home() {
  return (
    <>
        <video id='myVideo' src={background} autoPlay loop muted />
        <div className='container home-container text-center'>
        <h1 className='heading w-100 text-center text-light my-font'>WhatsNew</h1>
        <p className='text-light text-center fs-2 my-font'>Expore What is new around the world</p>
        <a href='#news'><button class="btn-custom fs-4"  type="button">Browse</button></a>

        </div>
    </>
  )
}
