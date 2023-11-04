import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import icondice from './images/icondice.svg'
import patterndividermobile from './images/patterndividermobile.svg'
import patterndividerdesktop from './images/patterndividerdesktop.svg'
// Replace '.jpg' with the appropriate image file extension


import './App.css'

function App() {
  // Your challenge is to build out this advice generator app using the
  //  [Advice Slip API](https://api.adviceslip.com) and get it looking as close to the design as possible.


  const [advice,setAdvice]=useState([])

const newAdvice=()=>{
  fetch('	https://api.adviceslip.com/advice',{method:'Get'} )
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  })  
  .then((data) => {
    console.log(data);
    setAdvice(data.slip)
  })
  .catch(err=>{
    console.log(err)
  })

}






  useEffect(()=> {
   
    newAdvice()
  },[])

  return (
    <>
    <div className='bg-db container'>
      <div className='bg-dgb content'>
      <h4 className='text-neon'>Advice {`#${advice.id}`}</h4>
      <p className='quote text-md text-cyan'>{advice.advice}
      </p>
      <img className='divider' src={patterndividerdesktop} alt="" />
        <button className='dice bg-neon' onClick={newAdvice}>
            <img src={icondice} alt="" />
        </button>
      </div>



    </div>  
    </>
  )
}

export default App
