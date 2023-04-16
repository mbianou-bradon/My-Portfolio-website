import React from 'react'
import bradon_hero from "../../assets/images/bradon_hero.png"
import { typescript, react, tailwindcss, nodejs,} from "../../assets/icons/iconsfile"


function HeroImage() {
  return (
    <div className="relative">
      <div className="HeroIcon absolute top-0 -left-10">
        <img src={react} title="React" alt="React" width="50" height="50"/>
      </div>

      <div className="HeroIcon absolute -top-10 right-14">
        <img src={typescript} title="Typescript" alt="Typescript" width="50" height="50"/>
      </div>

      <div className="w-[15rem] sm:w-[25rem] h-[15rem] sm:h-[25rem] bg-blue-900 rounded-full flex items-center justify-center">
        <img src={bradon_hero} alt="Bradon Profile" title="Bradon Profile" className="h-full w-full aspect-square object-center rounded-full"/>
      </div>

      <div className="HeroIcon absolute bottom-0 left-10">
        <img src={tailwindcss} title="Tailwindcss" alt="Tailwindcss" width="50" height="50"/>
      </div>

      <div className="HeroIcon absolute -right-10 bottom-1/4">
        <img src={nodejs} title="NodeJS" alt="NodeJS" width="50" height="50"/>
      </div>
    </div>
  )
}

export default HeroImage
