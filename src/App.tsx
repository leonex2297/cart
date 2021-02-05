import React from 'react';
import Appbar from "./Appbar/Appbar"
import CartContainer from "./Cart/CartContainer"
import {useGlobalContext} from "./Context"

function App() {
  const{loading}=useGlobalContext()
  if(loading){
    return(
      <div>
        <h2>Loading...</h2>
      </div>
    )
  }
  return (
   <div>
     <Appbar/>
     <CartContainer/>
   </div>
  );
}

export default App;
