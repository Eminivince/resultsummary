import React from 'react'
import Stattile from './Stattile'

const Appcontainer = () => {

  return (
    <div className='bg-black'>
        {/* While App container */}

        <div className='container min-h-screen w-96 bg-white mx-auto md:flex md:container md:justify-center md:items-center'>
                {/* Upper Section Container */}
                <div className='h-96 w-auto rounded-b-2xl flex flex-col bg-blue-900 items-center justify-center text-white md:rounded-2xl md:w-80 md:mr-8'>
                    <h3 className='pb-6'>Your Result</h3>

                    <div className='flex flex-col w-40 h-40 rounded-full bg-blue-500 items-center justify-center mb-6'>
                        <h1 className='font-extrabold text-6xl'>76</h1>
                        <p>of 100</p>
                    </div>

                    <h1 className='mb-6'>Great</h1>
                    <p className='w-64 text-center font-light'>
                        Your Scored higher than {65}% of the people who have taken these tests
                    </p>
                </div>










                {/* Lower Section Container */}
                <div>
                <div className='pl-9 md:pl-1'>
                    <h1 className='font-bold pt-2'>Summary</h1>
                </div>

                <Stattile />

                <div className='flex justify-center'>
                <button className='bg-blue-500 py-2 w-80 rounded-3xl font-bold hover:bg-blue-600 hover:transition-colors mt-2'>Continue</button>
                </div>
                </div>

                
        
        </div>

    </div>
  )
}

export default Appcontainer