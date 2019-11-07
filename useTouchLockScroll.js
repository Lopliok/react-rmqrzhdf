import { useEffect, useState } from 'react'

let active = false

export const useTouchLockScroll = () => {

  let [active, setActive] = useState(false)


  const dragOn = () => {
    active = true
    console.log('active', active)
   // setActive(true)
  }

  const dragOff = () => {
  // setActive(false)
    active = false
  }

  const preventScroll = (e) => {
    console.log(active)
    if (active) {
      e.preventDefault();
    }
  }

  useEffect(() => {

    window.addEventListener('touchmove', preventScroll, {
      passive: false
    })

    return () => {
       window.removeEventListener('touchmove', preventScroll, {
      passive: false
    })
    }

  },[])

 return [dragOn, dragOff]
}