import React from 'react'
import './home.css'
import background from '../Media/background.mp4'

export default function Home() {
  return (
    <>
    <div className='main'>
        <video id='myVideo' src={background} autoPlay loop muted />
        <h1 className='overlay text-center text-light'>WhatsNew</h1>
    </div>
    </>
  )
}
