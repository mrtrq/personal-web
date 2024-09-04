import React from 'react'

const HeroSection = () => {
  return (
    <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center">
                    <h1 className="text-4xl lg:text-6xl mb-4 font-extrabold">
                        Hi! I'm Tarreq
                    </h1>
                    <p className=" font-semibold text-lg lg:text-xl">
                        A generalist
                    </p>
                </div>
            </div>
    </section>
  )
}

export default HeroSection