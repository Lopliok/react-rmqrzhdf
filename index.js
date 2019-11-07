import React, { Component, useState, useEffect, Memoized } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Carousel from 'nuka-carousel'
import ScrollLock, { TouchScrollable } from 'react-scrolllock';



const App = () => {

  const ref = React.useRef()

  let firstX = null

  const [state, setState] = useState(false)

const [firstClientX, setFirstClientX] = useState();
  const [firstClientY, setFirstClientY] = useState();
  const [clientX, setClientX] = useState();

    const touchStart = e => {
      console.log('touchStart')
           firstX = e.touches[0].clientX

     setFirstClientX(e.touches[0].clientX);
      setFirstClientY(e.touches[0].clientY);

           console.log(e.touches[0].clientX, firstClientX, firstX)

    };

    const preventTouch = e => {
 
      const minValue = 5; // threshold

      setClientX(e.touches[0].clientX - firstClientX);

      const difference = e.touches[0].clientX - firstX

      // Vertical scrolling does not work when you start swiping horizontally.
      if (Math.abs(difference) > minValue) {
        e.preventDefault();
        e.stopPropagation();
        e.returnValue = false;
        return false;
      }
    };




    const bindEvents = (e) => {
    console.log('bind')
    e.preventDefault();
    e.stopPropagation();
    touchStart(e)
   
   // window.addEventListener('touchstart', touchStart);
     window.addEventListener('touchmove', preventTouch, true);
  //  window.addEventListener('touchforcechange', preventTouch, { passive: false });
      //d  window.addEventListener('touchend', unbindEvents);
 
    }
  
const unbindEvents = () => {
  console.log('unbind')

 // setFirstClientX(undefined);
 // setFirstClientY(undefined);

    //  window.removeEventListener('touchstart', touchStart);
     /*   window.removeEventListener('touchmove', preventTouch, {
        passive: false,
      }); */
  //    window.removeEventListener('touchforcechange', preventTouch, { passive: false });  
    //  window.removeEventListener('touchend', unbindEvents); 
}


    return (
      <div>
      fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda
        <p>
          Start editing to see some magic happen :)
        </p>
        <div>
       
        <div>
               

          <div onTouchStart={bindEvents} onTouchMove={preventTouch, true} onTouchEnd={unbindEvents}  >
        <Carousel swiping={true} onDragStart >
             <img style={{ height: 400, width: '100%'}}  src="https://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
              <img style={{ height: 400, width: '100%'}}  src="https://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
             <img style={{ height: 400, width: '100%'}} src="https://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
            <img style={{ height: 400, width: '100%'}} src="https://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
            <img style={{ height: 400, width: '100%'}} src="https://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
            <img style={{ height: 400, width: '100%'}} src="https://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
        </Carousel>
        </div></div>
        </div> 

           fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda   fsdfsdfsdfasf safd adsf asdfsda fdsa fdsafasdfds jfůadjslfůjasdlůfj ůlasdjf ůlkjadsůlfj dsůlfj lůasddjflů jsda
    
      </div>
    );
  
}

render(<App />, document.getElementById('root'));
