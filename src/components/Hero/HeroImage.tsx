import React from 'react'
import bradon_hero from "../../assets/images/bradon_hero.png"

function HeroImage() {
  return (
    <div>
      <img src={bradon_hero} alt="Bradon Profile" title="Bradon Profile" className="h-[80%] w-[80%] aspect-square object-center"/>
    </div>
  )
}

export default HeroImage
