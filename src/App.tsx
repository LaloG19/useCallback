import React, { useState } from 'react';
import './App.css';
import Kanban from './components/Kanban'
import FrmActivity from './components/FrmActivity';

function App() {

  const [frmActive, setFrmActive] = useState(false);

  return (
    <div className="App">
      <h1 className='bg-cyan-800 min-h-[7vh] w-full text-center justify-center items-center font-bold text-2xl tracking-[0.25vw] flex uppercase text-white'>Kanban</h1>
      <main className='w-full min-h-[93vh] h-full bg-cyan-950 flex flex-col justify-center items-center pt-[3vh]'>
        {frmActive ? (
          <FrmActivity setFrmActive={setFrmActive} />
        ) : (
          <button className='px-4 py-2 bg-green-500 mb-6 rounded-xl font-semibold uppercase' onClick={ () => { setFrmActive(!frmActive) } }> Nueva actividad </button>
        )}
        <Kanban/>
      </main>
    </div>
  );
}

export default App;
