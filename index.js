import React, { Component, useState, useEffect, Memoized } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Carousel from 'nuka-carousel'
import ScrollLock, { TouchScrollable } from 'react-scrolllock';
import  { useTouchLockScroll } from './useTouchLockScroll'


const App = () => {

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

  },[active])


    return (
      <div>
     <p>
          Start editing to see some magic happen :)
        </p>
        <div>
       
        <div>
               

          <div onTouchCancel={dragOff} onTouchEnd={dragOff}  >
        <Carousel swiping={true} onDragStart={dragOn} >
             <img style={{ height: 400, width: '100%'}}  src="https://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
              <img style={{ height: 400, width: '100%'}}  src="https://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
             <img style={{ height: 400, width: '100%'}} src="https://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
            <img style={{ height: 400, width: '100%'}} src="https://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
            <img style={{ height: 400, width: '100%'}} src="https://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
            <img style={{ height: 400, width: '100%'}} src="https://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
        </Carousel>
        </div></div>
        </div> 

           fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds 
    
      </div>
    );
  
}

render(<App />, document.getElementById('root'));
