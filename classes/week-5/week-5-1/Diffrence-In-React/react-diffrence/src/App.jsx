import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)// 0 is there for initial value of state variable which is const ,
  // so , const  = 0; , setcout store the next value of count

  return (

    <>
      <div>
        {/* the first  time use saw that button , that was button(b is small) which is predefined in system */}
        <Button count={count} setCount={setCount}></Button>
        {/* here we need to define this Button(with big B)  as a component*/}
        {/* the thing i write inside "`<>`" , is prompt , which can be acces by promp.data */}
      </div>
    </>
  )
}

let Button = (prompt) => {
  let incCount = () => {
    prompt.setCount(prompt.count + 1);
  }

  //it can be get wrriten better in xml , using React
  // return <button onClick={incCount}>Counter {prompt.count}</button>
  return React.createElement(
    "button", //type of component
    { onClick: incCount },//its atributes
    `Counter ${ prompt.count }`//innerHTML
  )
}

export default App
