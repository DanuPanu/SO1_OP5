import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import pilkki1 from './pilkki1.jpeg'
import pilkki3 from './pilkki3.jpeg'

function Aloitus() {
  return (
    <>
    <Box sx={{textAlign : "center"}}>
        <Typography sx={{fontSize : "16pt", fontWeight : "400", marginTop : "1em", textDecoration : "underline"}}>Seuraava Mestarien kilpailu on 24.2.2023! Paikkana toimii Haukilahden satama.</Typography>
        <Typography sx={{fontSize : "16pt", fontWeight : "400", textDecoration : "underline"}}>Meillä pilkitään vain vonkaleita!</Typography>
        <img style={{maxWidth : "100vh"}} src={pilkki1} alt="#"/>
        <Typography sx={{margin : "1em"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae delectus nesciunt ut autem, ipsum fugiat. Magnam saepe error fuga nemo voluptas tenetur omnis dolore! Fugiat molestias nam fuga sequi sunt.
        Fugit nulla veritatis labore. Nesciunt magni nam, saepe impedit minus obcaecati iure fuga explicabo nobis. Reiciendis quas laboriosam ex aliquam, doloremque, ratione eligendi enim labore perferendis quidem pariatur odio fuga.
        Incidunt voluptas in culpa quae natus libero iusto, non, ullam facilis enim quidem numquam sed veniam! Vel, nemo repellat porro saepe voluptatibus dolor quasi! Laboriosam consequatur voluptate placeat quod expedita?</Typography>
        <img style={{maxWidth : "100vh"}} src={pilkki3} alt="#"/>
        <Typography sx={{margin : "1em"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consectetur nihil molestiae temporibus facilis optio provident quo nisi? Fugit, sit ullam placeat rem ex asperiores cupiditate? Perspiciatis dolor enim laborum.
        Illum voluptatem at itaque ipsum maiores. Autem, reiciendis aperiam! Praesentium quia magni tempora inventore corporis! Ipsum, repellendus minus. Temporibus sapiente repudiandae fugit eos debitis impedit cum iusto porro est animi?</Typography>
    </Box>
    </>
  );
}

export default Aloitus;