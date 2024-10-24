import { Box, Button, Container, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import { SystemStyleObject } from '@mui/system';
import { useRef, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';


const tyyli : SystemStyleObject = {
  marginTop : "10px",
  width : "300px"
}

interface Props {
  children? : any
  paivitaEtunimi : (Etunimi : string) => void
  paivitaSukunimi : (Sukunimi : string) => void
  paivitaAsuinpaikka : (Asuinpaikka : string) => void
  paivitaPuhelin : (Puhelin : number | string) => void
  paivitaSposti : (Sposti : string) => void
  paivitaSarja : (Sarja : string) => void
}

interface Virheet extends Lomaketiedot {}

const Ilmoittautuminen : React.FC<Props> = (props : Props) : React.ReactElement =>{

  const navigate : NavigateFunction = useNavigate();

  const [virheIlmoitukset, setVirheIlmoitukset] = useState<Virheet>({});

  const lomakeTiedot : Lomaketiedot = useRef<Lomaketiedot>({});

  const lomakeKasittelija = (e : React.FormEvent) : void =>{
    e.preventDefault();

    let virheet : Virheet = {};

    if (!lomakeTiedot.current.sarja){
      virheet = {...virheet, sarja : "Valitse ikäsarja"};
    }

    if (!lomakeTiedot.current.etunimi || lomakeTiedot.current.etunimi.length < 2){
      virheet = {...virheet, etunimi : "Etunimi puuttuu"}
    }

    if (!lomakeTiedot.current.sukunimi || lomakeTiedot.current.sukunimi.length < 2){
      virheet = {...virheet, sukunimi : "Sukunimi puuttuu"}
    }

    if (!lomakeTiedot.current.puhelin && !lomakeTiedot.current.sposti){
      virheet = {...virheet, sposti : "Anna sähköpostiosoite tai puhelinnumero"}
      virheet = {...virheet, puhelin : "Anna sähköpostiosoite tai puhelinnumero"}
    }
  
    if (Object.entries(virheet).length > 0){
      setVirheIlmoitukset({...virheet});
    }else{
      props.paivitaEtunimi(`${lomakeTiedot.current.etunimi}`)
      props.paivitaSukunimi(`${lomakeTiedot.current.sukunimi}`)
      props.paivitaAsuinpaikka(`${lomakeTiedot.current.asuinpaikka}`)
      props.paivitaPuhelin(`${lomakeTiedot.current.puhelin}`)
      props.paivitaSposti(`${lomakeTiedot.current.sposti}`)
      props.paivitaSarja(`${lomakeTiedot.current.sarja}`)
      navigate("/kiitos");
    }
  }

  const syoteKasittelija = (e : React.ChangeEvent<HTMLInputElement>) : void =>{
    lomakeTiedot.current[e.target.name] = e.target.value;
  }

  return (
    <>
    <Typography  variant="h4" sx={{textAlign : "center", textDecoration : "underline"}}>Ilmoittaudu mukaan!</Typography>
    <Container>
      <form style={{display : "flex", alignItems : "center", justifyContent : "center"}} onSubmit={lomakeKasittelija}>
        <Box sx={{display : "flex", flexDirection : "column", marginRight : "3em"}}>
          <TextField sx={tyyli}
            name="etunimi"
            label="Etunimi..."
            placeholder="Etunimi"
            onChange={syoteKasittelija}
            error={Boolean(virheIlmoitukset.etunimi)}
            helperText={virheIlmoitukset.etunimi}/>
          <TextField sx={tyyli}
            name="sukunimi"
            label="Sukunimi..."
            placeholder="Sukunimi"
            onChange={syoteKasittelija}
            error={Boolean(virheIlmoitukset.sukunimi)}
            helperText={virheIlmoitukset.sukunimi}/>
          <TextField sx={tyyli}
            name="asuinpaikka"
            label="Asuinpaikkakunta..."
            placeholder="Asuinpaikkakunta"
            onChange={syoteKasittelija}
            helperText="Asuinpaikka vapaaehtoinen"/>
          <TextField sx={tyyli}
            name="puhelin"
            label="Puhelinnumero..."
            placeholder="Puhelinnumero"
            onChange={syoteKasittelija}
            error={Boolean(virheIlmoitukset.puhelin)}
            helperText={virheIlmoitukset.puhelin}/>
          <TextField sx={tyyli}
            name="sposti"
            label="Sähköpostiosoite..."
            placeholder="Sähköpostiosoite"
            onChange={syoteKasittelija}
            error={Boolean(virheIlmoitukset.sposti)}
            helperText={virheIlmoitukset.sposti}/>
          <Button variant="contained" sx={tyyli}
            onClick={lomakeKasittelija}
          >Lähetä ilmoittautuminen!</Button>
        </Box>
        <Box sx={{marginLeft : "3em"}}>
          <FormControl>
            <FormLabel id="sarja">Valitse ikäsarja</FormLabel>
            <RadioGroup
              aria-labelledby="sarja"
              name="sarja"
            >
              <FormControlLabel value="alle 15 vuotiaat" control={<Radio onChange={syoteKasittelija}/>} label="Alle 15 vuotiaat" />
              <FormControlLabel value="15-19 vuotiaat" control={<Radio onChange={syoteKasittelija}/>} label="15-19 vuotiaat" />
              <FormControlLabel value="20-39 vuotiaat" control={<Radio onChange={syoteKasittelija}/>} label="20-39 vuotiaat" />
              <FormControlLabel value="40-59 vuotiaat" control={<Radio onChange={syoteKasittelija}/>} label="40-59 vuotiaat" />
              <FormControlLabel value="60-69 vuotiaat" control={<Radio onChange={syoteKasittelija}/>} label="60-69 vuotiaat" />
              <FormControlLabel value="70-79 vuotiaat" control={<Radio onChange={syoteKasittelija}/>} label="70-79 vuotiaat" />
              <FormControlLabel value="yli 80 vuotiaat" control={<Radio onChange={syoteKasittelija}/>} label="yli 80 vuotiaat" />
            </RadioGroup>
            <FormHelperText error={Boolean(virheIlmoitukset.sarja)}>{virheIlmoitukset.sarja}</FormHelperText>
          </FormControl>
        </Box>
      </form>
    </Container>
    </>
  );
}

export default Ilmoittautuminen;