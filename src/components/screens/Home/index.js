import './style.css';
import React, {useState, useEffect} from 'react';

function Home() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const ToggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])
  return(
      
      <div className='contanier-app'>
         <div className='card-container'>
           <div className='card-Header'>
              <h2>Welcome a BelieWeb</h2>
           </div>
           <div className='card-content'>
              <p className='card-description'>
                  BelieWeb is a company that is dedicated to the development of web pages and the development of e-commerces, 
                  bringing an immediate solution and optimization of time to the use of interaction when working.
              </p>
           </div>
           <div className='card-footer'>

           </div>
         </div>
         
      </div>
      
  );
}

export default Home;
