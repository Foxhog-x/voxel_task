import React from 'react'
import Cards from '../components/Cards'
import startupData from '../data/startup_Data.json'
export const Homepage = () => {
  return (
    <div className='main_container'>
    <div className='grid_card'>
        {startupData.map((element, index)=>{
            return <Cards cardData ={element}/>
        })}
    </div>

    </div>
  )
}
