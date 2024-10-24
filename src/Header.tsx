import {Box, CssBaseline, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GavelIcon from '@mui/icons-material/Gavel';

function Header() {

  const [valikkoAuki, setValikkoAuki] = useState<boolean>(false)

  return (
    <>
    <CssBaseline>
      <Box sx={{ display : "flex", backgroundColor : "lightblue"}}>
        <IconButton className="ylaNavi" color="inherit" sx={{marginLeft:"1em"}}
          onClick = {() => setValikkoAuki(true)}>
          <MenuIcon/>
        </IconButton>
        <Drawer open={valikkoAuki} onClose={() => setValikkoAuki(false)}>
          <List sx={{width : "250px", marginTop : "50px"}}
            onClick={() => setValikkoAuki(false)}>

            <ListItemButton component={Link} to="/">
              <ListItemIcon>
                <HomeIcon></HomeIcon>
              </ListItemIcon>
              <ListItemText primary="Aloitus"></ListItemText>
            </ListItemButton>

            <ListItemButton component={Link} to="/ilmoittautuminen">
              <ListItemIcon>
                <AssignmentIcon></AssignmentIcon>
              </ListItemIcon>
              <ListItemText primary="Ilmoittautuminen"></ListItemText>
            </ListItemButton>

            <ListItemButton component={Link} to="/saannot">
              <ListItemIcon>
                <GavelIcon></GavelIcon>
              </ListItemIcon>
              <ListItemText primary="Säännöt"></ListItemText>
            </ListItemButton>

          </List>
        </Drawer>
        <Typography variant="h3" sx={{margin : "10px auto", fontWeight : "500"}}
        >Tervetuloa Pilkkimään!</Typography>
      </Box>
    </CssBaseline>  
    </>
  );
}

export default Header;