import React,{useState,useEffect} from 'react';


function App() {
  const [count, setCount]=useState(0);
  const clickPlus=(e)=>{
       setCount(count+1);
  };
  const clickMinus=(e)=>{
    setCount(count-1);
};
const clickReset=(e)=>{
  setCount(0);
};

useEffect(() =>{
  getLocalCount();
},[]);


useEffect(() =>{
  
  const saveLocalCount =() =>{
    localStorage.setItem("count",JSON.stringify(count)); 
  };
  saveLocalCount();
},[count]);

const getLocalCount =() =>{
  if(localStorage.getItem("count")==null){
   localStorage.setItem("count",JSON.stringify([]));
  }
   else{
    let countLocal= JSON.parse(localStorage.getItem('count'));
    setCount(countLocal);
   }
  
};
  return (
    <div className="App">
       <h1>Counter App</h1>
      
    <div className="Counter">{count}</div>
    <div className="ButtonContainer">
    
      <button className="Button Button1" onClick={clickMinus}>-
      </button>
      
    
      <button className="Button Button2" onClick={clickPlus}>+
      </button>
      
    </div>
    <button className="Button Reset" onClick={clickReset}>RESET
      </button>
    </div>
  );
}

export default App;
