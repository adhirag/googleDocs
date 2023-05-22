import React, { useEffect, useState } from "react";
import Logo from "../images/docs.png";
import Star from "../images/starIcon.png";
import classes from "./Header.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import BasicModal from "../components/Modal";
import { VerticalDrawer } from "../components/Sidebar";
const Header = () => {
  const [icon, setIcon] = useState(false);
  const [title, setTitle] = useState("Untitled document");
  const navigate = useNavigate();
  
 
  

  return (
    <div className={classes.mainContainer}>
     
        <div className={`${classes.row} ${classes.headerMargin}`}>
          <span>
            {" "}
            
            <VerticalDrawer/>
          </span>
         
          <div className={classes.column}>
            <div className={classes.row}>
              <input
                type="text"
                placeholder={title}
                onChange={(event) => setTitle(event.target.value)}
                value={title}
                className={classes.title}
              />
              <div className={classes.starIconBackground}>
                <img src={Star} className={classes.starIcon} />
              </div>
              {/* <div className={classes.title}>{title}</div> */}
            </div>
            <div>
            <span className={classes.headerMenu}>File</span>
            <span className={classes.headerMenu}>Edit</span>
            <span className={classes.headerMenu}>View</span>
            <span className={classes.headerMenu}>Insert</span>
            <span className={classes.headerMenu}>Format</span>
            <span className={classes.headerMenu}>Tools</span>
            <span className={classes.headerMenu}>Extensions</span>
            <span className={classes.headerMenu}>Help</span>
            
            </div>
           
          </div>
          <div style={{display:'flex',marginLeft:'auto',marginRight:'20px'}}>
          
          <Button sx={{textTransform:'none',background:'#c2e7ff',color:'#001d35',borderRadius: '100px',fontWeight:'700'}}> <LockOpenIcon sx={{fontSize:'16px',fontWeight:'700'}}/><span style={{margin:'0 5px 0 5px'}}><BasicModal title={title}/></span></Button>
  
          </div>
          
        </div>
        
      </div>
   
  );
};

export default Header;
