import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {
    FacebookIcon,FacebookShareButton,EmailShareButton,EmailIcon,LinkedinIcon,LinkedinShareButton,WhatsappIcon,WhatsappShareButton,TwitterIcon,TwitterShareButton,TelegramIcon,TelegramShareButton
  } from "react-share";
const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

export default function BasicModal({title}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const url='https://docs-b596f.web.app/'
  return (
    <div>
        <div style={{display:'flex',flexDirection:'row'}} onClick={handleOpen}><div>Share</div></div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Share '{title}'
          </Typography>
          <div style={{display:'flex',flexDirection:'row'}}>
    <div style={{paddingRight:'10px'}}>  <FacebookShareButton
    url={url}
   
    hashtag="#programing joke">
    <FacebookIcon logoFillColor="white" size={40} />
</FacebookShareButton>
</div>
<div style={{paddingRight:'10px'}}><EmailShareButton
    url={url}
   
    hashtag="#programing joke">
    <EmailIcon logoFillColor="white" size={40} />
</EmailShareButton></div>
<div style={{paddingRight:'10px'}}><LinkedinShareButton
    url={url}
   
    hashtag="#programing joke">
    <LinkedinIcon logoFillColor="white" size={40} />
</LinkedinShareButton></div>
<div style={{paddingRight:'10px'}}><WhatsappShareButton
    url={url}
   
    hashtag="#programing joke">
    <WhatsappIcon logoFillColor="white" size={40} />
</WhatsappShareButton></div>
<div style={{paddingRight:'10px'}}><TwitterShareButton
    url={url}
   
    hashtag="#programing joke">
    <TwitterIcon logoFillColor="white" size={40} />
</TwitterShareButton></div>

</div>
<div style={{paddingRight:'10px'}}><TelegramShareButton
    url={url}
   
    hashtag="#programing joke">
    <TelegramIcon logoFillColor="white" size={40} />
</TelegramShareButton></div>

          
        </Box>
      </Modal>
    </div>
  );
}