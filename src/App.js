import React,{useState} from 'react'
import './App.css';

function App() {
  const [num,setNum] = useState(0);
  const [num2,setNum2] = useState(0);
  const [num3,setNum3] = useState(0);
  const [num4,setNum4] = useState(0);
  const [num5,setNum5] = useState(0);


  function random(min, max) {
    return Math.floor(Math.random() * 36);

  }
   const Click = () => {
    setNum(random());
    setNum2(random());
    setNum3(random());
    setNum4(random());
    setNum5(random());
   }
   
  return(
    <>
    <div className='div'>

    <h1>Добро пожаловать в </h1>
    <img src={'https://upload.wikimedia.org/wikipedia/commons/6/68/%D0%94%D0%BE%D0%BE%D1%88_%D0%B7%D0%B0%D0%B0%D1%81%D0%B0%D0%BD_%D1%83%D0%BB%D0%B0%D0%B0%D0%BD_%D1%81%D1%83%D0%BC.png'} />
      </div>
      <div className='random'>
      <h1>{num}</h1>
      <h1>{num2}</h1>
      <h1>{num3}</h1>
      <h1>{num4}</h1>
      <h1>{num5}</h1>
      
      </div>
      <div className='btn'>
      <button className='button-27' onClick={Click}>Крутить</button> 
     </div>
       </>
  )
}

export default App;
