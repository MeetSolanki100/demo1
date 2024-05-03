import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
function Nice() {
  return (
    <div>
        <Parallax pages={2} style={{top:"0",left:"0"}} className='animationClass'>
          <ParallaxLayer offset={0} className='animationLayer parallax' speed={0.3}>
            <h1>Hello</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={1} className='animationLayer parallax' speed={2}>
            <h1>Namaste</h1>
          </ParallaxLayer>
        </Parallax>
    </div>
  )
}

export default Nice