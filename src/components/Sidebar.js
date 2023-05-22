import React, { useState, useEffect } from "react";
import classes from '../Layouts/Header.module.css'
import Logo from '../images/docs.png';
import sheet from '../images/sheets.jpeg'
import docs from '../images/docs.png'
import map from '../images/map.png'
import drive from '../images/drive.png'
import mail from '../images/mail.png'
import {
  Drawer,
  IconButton,
  List,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";


export const VerticalDrawer = () => {

  
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate= useNavigate();

  return (
    <React.Fragment>
        <div >
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <div style={{ paddingTop: "50px",width:'200px',display:'flex',justifyContent:'center'}}>
          <List>
              <ListItemButton>
                <a href='https://docs.google.com/spreadsheets/u/0/'>
                <img src={sheet} style={{width:'60px',height:'60px'}}/>
                </a>
              </ListItemButton>
              <ListItemButton>
                <a href='https://drive.google.com/drive/my-drive'>
                 <img src={drive} style={{width:'60px',height:'60px'}}/>
                 </a>
              </ListItemButton>
              <ListItemButton>
                <a href='https://www.google.com/maps?authuser=0'>
              <img src={map} style={{width:'60px',height:'60px'}}/>
              </a>
              </ListItemButton>
              <ListItemButton>
                <a href='https://docs.google.com/document/u/0/'>
              <img src={docs} style={{width:'60px',height:'60px'}}/>
              </a>
              </ListItemButton>
              <ListItemButton>
                <a href='https://mail.google.com/mail/u/0/#inbox'> 
              <img src={mail} style={{width:'60px',height:'60px'}}/>
              </a>
              </ListItemButton>
            </List>
         
        </div>
      </Drawer>
      <img src={Logo} className={classes.iconImage}  onClick={() => setOpenDrawer(!openDrawer)}/>
      </div>
    </React.Fragment>
  );
};
