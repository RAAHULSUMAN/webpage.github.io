import React,{useState,useEffect} from 'react'


function ScreenSize() {
  const [windowDimesnsion,detectHW]=useState({
    winWidth:window.innerWidth,
    winHeight:window.innerHeight,
  })
  const detectSize=()=>{
    detectHW({
        winWidth:window.innerWidth,
        winHeight:window.innerHeight,
    })
}
    useEffect(()=>{
       window.addEventListener('resize',detectSize)
       return()=>{
        window.removeEventListener('resize',detectSize)
       }
    },[windowDimesnsion])
  
  return (
    <div>
        
    </div>
  )
}

export default ScreenSize