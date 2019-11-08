import { useEffect, useState } from 'react'


export const useTouchLockScroll = () => {

let active = false

const [allSwipe, setAllSwipe] = useState(true)
let swipe = true

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

  const preventSlide = (e) => {

    if (!active) {
      setAllSwipe(false)
   /*  swipe = !swipe
    console.log('sw', swipe, active) */

    }
  }

   const allow = (e) => {

    if (!active) {
      setAllSwipe(true)
    swipe = !swipe
    console.log('sw', swipe, active)

    }
  }

  useEffect(() => {

    window.addEventListener('touchstart', preventSlide)
    window.addEventListener('touchend', allow)

    window.addEventListener('touchmove', preventScroll, {
      passive: false
    })

    return () => {
       window.removeEventListener('touchmove', preventScroll, {
      passive: false
    })
    }

  },[])

 return [dragOn, dragOff, allSwipe]
}