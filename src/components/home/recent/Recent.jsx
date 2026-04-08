import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
      <Heading 
        title='Recent Property Listed' 
        subtitle='Explore our latest property listings, featuring modern homes, apartments, and commercial spaces in prime locations at competitive prices.' 
      />          
      <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
