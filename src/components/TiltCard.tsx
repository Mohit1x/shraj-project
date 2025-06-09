'use client'

import Image from 'next/image'
import Tilt from 'react-parallax-tilt'

type TitleCardProps = {
  img: string
}

export default function TiltCard({ img }: TitleCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      scale={1.01}
      transitionSpeed={1000}
      gyroscope={true}
      className="w-full max-w-sm aspect-[6/5] rounded-md overflow-hidden"
    >
      <div className="relative w-full h-full bg-white shadow-2xl p-20">
        <Image
          src={img}
          alt="image"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Tilt>
  )
}
