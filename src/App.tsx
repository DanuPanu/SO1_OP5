import './App.css';
import Header from './Header';
import Aloitus from './Aloitus';
import Ilmoittautuminen from './Ilmoittautuminen';
import Saannot from './Saannot';
import Kiitos from './Kiitos';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';


function App() {

  const [etunimi, setEtunimi] = useState<any>();
  const [sukunimi, setSukunimi] = useState<any>();
  const [asuinpaikka, setAsuinpaikka] = useState<any>();
  const [puhelin, setPuhelin] = useState<any>();
  const [sposti, setSposti] = useState<any>();
  const [sarja, setSarja] = useState<any>();
  const paivitaEtunimi = (Etunimi : string) : void => {
    setEtunimi(Etunimi);
  }
  const paivitaSukunimi = (Sukunimi : string) : void => {
    setSukunimi(Sukunimi);
  }
  const paivitaAsuinpaikka = (Asuinpaikka : string) : void => {
    setAsuinpaikka(Asuinpaikka);
  }
  const paivitaPuhelin = (Puhelin : number | string) : void => {
    setPuhelin(Puhelin);
  }
  const paivitaSposti = (Sposti : string) : void => {
    setSposti(Sposti);
  }
  const paivitaSarja = (Sarja : string) : void => {
    setSarja(Sarja);
  }
  

  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Aloitus/>}/>
      <Route path="/saannot" element={<Saannot/>}/>
      <Route path="/ilmoittautuminen" 
      element={<Ilmoittautuminen 
      paivitaEtunimi={paivitaEtunimi}
      paivitaSukunimi={paivitaSukunimi}
      paivitaAsuinpaikka={paivitaAsuinpaikka}
      paivitaPuhelin={paivitaPuhelin}
      paivitaSposti={paivitaSposti}
      paivitaSarja={paivitaSarja}
      />}/>
      <Route path="/kiitos" 
      element={<Kiitos 
      etunimi={etunimi}
      sukunimi={sukunimi}
      asuinpaikka={asuinpaikka}
      puhelin={puhelin}
      sposti={sposti}
      sarja={sarja}
      />}/>
    </Routes>                               

    </>
  );
}

export default App;
