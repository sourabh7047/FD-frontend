import React from 'react'
import  "./home.css"
import StatsCard from '../../components/stats_card/StatsCard'
const Home = () => {
  return (
    <>
    <div className='widgets-wrapper'>
      <StatsCard/>
      <StatsCard/>
      <StatsCard/>
      <StatsCard/>
      <StatsCard/>
    </div>
    </>
  )
}

export default Home;
