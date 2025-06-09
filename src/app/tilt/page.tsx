'use client'

import Image from 'next/image'
import Tilt from 'react-parallax-tilt'

export default function TiltCard() {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      scale={1.01} // reduced from 1.1 to 1.03
      transitionSpeed={1000}
      gyroscope={true}
      style={{
        height: 250,
        width: 250,
        borderRadius: 12,
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Image
          src="/about-img-1.jpg"
          alt="image"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    </Tilt>
  )
}
