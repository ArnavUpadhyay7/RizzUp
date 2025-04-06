import React from 'react'
import CardList from '../components/self-comp/CardList'
import Card from '../components/self-comp/Card'

const Cards = () => {
  return (
    <div className='pt-32 px-6 md:px-36 '>
      {/* Background Gradient Animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vh] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-3xl animate-gradientMove rounded-full pointer-events-none"></div>
      <div className="absolute top-[80vh] left-[60vw] w-[30vw] h-[25vh] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-3xl animate-gradientMove rounded-full pointer-events-none"></div>
      {/* <CardList /> */}
      <Card />
    </div>
  )
}

export default Cards