import { useEffect, useState } from 'react'


export const useTouchLockScroll = () => {

let active = false

const [swipe, setSwipe] = useState(true)

const [clientY, setClienY] = useState()
const [clientYAct, setClienYAct] = useState()

  const dragOn = () => {
    active = true
  }

  const dragOff = () => {
    active = false  
  }

  const afterSlide = () => {
setClienY(undefined)
    setClienYAct(undefined)
  }

  const onTouchStart = (e) => {
    console.log('ac', active)
    !active && setClienY(e.touches[0].clientY)
  }

  const onTouchMove = (e) => {
     !active && setClienYAct(e.touches[0].clientY)
        console.log(clientYAct - clientY > 15)
  }

  const preventScroll = (e) => {
    if (active) {
      e.preventDefault();
    }
  }

  const isDirection

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

 return [dragOn, dragOff, onTouchStart, onTouchMove, afterSlide, clientYAct &&  clientYAct - clientY > 10 || active]
}