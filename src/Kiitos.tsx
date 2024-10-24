import { Typography } from '@mui/material';
import { SystemStyleObject } from '@mui/system';

const tyyli : SystemStyleObject = {
    marginTop : "10px",
    textAlign : "center",
    fontSize : "24px"
  }

const Kiitos : React.FC<Lomaketiedot> = (props : Lomaketiedot) : React.ReactElement =>{


    return(
        <>
        <Typography variant="h4" sx={{marginTop : "1em", marginBottom : "1em", textAlign : "center", textDecoration : "underline"}}>Kiitos ilmoittautumisesta! Tietosi ovat alapuolella.</Typography>
        <Typography sx={tyyli}>Nimi: {props.etunimi} {props.sukunimi}</Typography>
        <Typography sx={tyyli}>Asuinpaikka: {props.asuinpaikka}</Typography>
        <Typography sx={tyyli}>Puhelin: {props.puhelin}</Typography>
        <Typography sx={tyyli}>Sähköpostiosoite: {props.sposti}</Typography>
        <Typography sx={tyyli}>Ikäsarja: {props.sarja}</Typography>
        <Typography></Typography>
        </>
    );
};

export default Kiitos;