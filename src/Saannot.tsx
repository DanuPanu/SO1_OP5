import { Box } from '@mui/material';
import pilkki2 from './pilkki2.jpeg'
import Typography from '@mui/material/Typography';


function Saannot() {

  return (
    <>
    <Box sx={{padding : "0 1em", textAlign : "center"}}>
      <Typography variant="h4" sx={{textAlign : "center", textDecoration : "underline"}}>Säännöt</Typography>
      <Typography sx={{margin : "5px 0"}}>1 § Suomen pilkkimestaruuskilpailut ovat avoimet kaikille pilkinnän harrastajille.</Typography>
      <Typography sx={{margin : "5px 0"}}>1a § Henkilökohtaisista mestaruuksista kilpailevat kaikki kilpailuun ilmoittautuneet kilpailijat, mutta Suomenmestaruus voidaan myöntää vain Suomen kansalaiselle taikka Suomessa vakituisesti asuvalle tai sellaiselle ulkomaalaiselle, joka on SVK:n tai sen jäsenseuran jäsen.</Typography>
      <Typography sx={{margin : "5px 0"}}>2 § Kaikusarja Kaikusarjassa on yksi henkilökohtainen sarja sukupuoleen ja ikään katsomatta.</Typography>
      <Typography sx={{margin : "5px 0"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, dolorem aperiam tempora voluptate molestias enim eveniet est voluptas ipsa aut distinctio fuga perferendis minus aliquid. Repellendus perspiciatis perferendis illum aut.
      Itaque repellat ab labore, excepturi alias cupiditate nostrum, provident consectetur minima magni et veniam nam! Officiis ipsum eum nam sunt dolorem repellendus a, accusantium inventore voluptatum perferendis mollitia, sequi magnam!
      Voluptates sapiente illo cum totam? Amet vero aliquam maiores consequatur, dolores adipisci hic laborum fuga voluptatem consectetur eos repudiandae, optio vitae, magnam beatae minima error odio atque quae. Alias, nisi.
      Esse fuga ad qui. Animi consectetur voluptas est pariatur mollitia sunt? Alias cupiditate quis molestiae atque sapiente unde nobis ad officia, libero optio? Fugiat ipsa modi soluta quod consequuntur. Placeat.</Typography>
      <img style={{maxWidth : "100vh"}} src={pilkki2} alt="#"/>
    </Box>
    </>
  );
}

export default Saannot;