import { useEffect, useState } from 'react'


export const useTouchLockScroll = () => {

let active = false

const [swipe, setSwipe] = useState(false)

  const dragOn = () => {
    active = true
  }

  const dragOff = () => {
    active = false
  }

  const preventScroll = (e) => {
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

 return [dragOn, dragOff, () => setSwipe(true), () => setSwipe(false),]
}