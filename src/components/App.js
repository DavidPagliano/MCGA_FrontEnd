import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './screens/Header';



function App () { 
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])
  return (
    <div className='App'> 
      {(toggleMenu || screenWidth > 500) && (toggleMenu || screenWidth > 850) && (
        <Header/>
        )
      }
          
    </div>
      
  );
  
  
}

export default App;
