import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [Count, setCount] = useState(0)
  const decHandler =()=>{
    setCount(Count-1)
  }
  const incHandler =()=>{
    setCount(Count+1)
  }
  const reHandler =()=>{
    setCount(0)
  }


  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10' >
      <div className='text-[#0398d4] font-medium text-2xl'>Increment && decrement</div>
      <div className='bg-white flex justify-center gap-12 py-3 rounded-[10px] text-[25px] text-[#344151]' >
        <button onClick={decHandler} className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl' >
          -
        </button>

        <div className='font-bold gap-12 text-5xl'>
        {Count}
        </div>

        <button onClick={incHandler} className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl' >
          +
        </button>
      </div>
      <button  onClick={reHandler} className='bg-[#bf4562] text-white px-5 py-2 rounded-lg text-lg' >
        Reset
      </button>
    </div>
  );
}

export default App;
