import React from 'react'
import data from './data.json'
import icon from '../assets/images/results-summary-component-main/assets/images/icon-verbal.svg'

const Stattile = (props) => {
    const mappedData = data.map(function(data){
        return (
            <div className='p-2 w-80 mx-auto rounded-xl mb-3 bg-slate-500 flex flex-row justify-between mt-4'>
                <div className='flex'>
                    <img src={icon} 
            
                    alt='icon'className='pr-2' />
                    <p> {data.category} </p>
                </div>

                <div>
                    <p> <span className='font-bold'>{data.score}</span> / {100}</p>
                </div>                
            </div>
        )
        
    })

  return (
    <div>
        {mappedData}
    </div>
  )
}

export default Stattile