import React from 'react'
import './home.css'
import background from '../Media/background.mp4'

export default function Home() {
  return (
    <>
    <div className='main'>
        <video id='myVideo' src={background} autoPlay loop muted />
        <div className='home-text text-center'>
        <h1 className='overlay text-center text-light my-font'>WhatsNew</h1>
        <p className='text-light text-center fs-2 my-font'>Expore What is new around the world</p>
        <button class="btn-custom fs-4" href='#general' type="button">Browse</button>

        </div>
    </div>
    </>
  )
}
