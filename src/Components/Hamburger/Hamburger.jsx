import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Buttons from '../Button/Button'
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import './Hamburger.css'
import { useTranslation } from "react-i18next";
import { hamburger } from "../../assets";
export default function Hamburger() {
  const { t, i18n } = useTranslation();
  const language  = localStorage.getItem('i18nextLng')
  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  }
  const [open, setOpen] = React.useState(false);
  const toggleDrawer =  () => {
    setOpen(true);
  };
  const onCloseD = () =>{
    setOpen(false)
  }
  const DrawerList = (
    <Box sx={{ width: 250 }}  >
      <List className="hamburger-open">
           <ul className="hamburger-lists">
            <li onClick={onCloseD} className="hamburger-list"><a className="hamburger-link" href="#info">{t("home")}</a></li>
            <li  onClick={onCloseD} className="hamburger-list"><a className="hamburger-link" href="#news">{t("about")}</a></li>
            <li  onClick={onCloseD} className="hamburger-list"><a className="hamburger-link" href="#services">{t("service")}</a></li>
            <li   onClick={onCloseD} className="hamburger-list"><a className="hamburger-link" href="#advantages">{t("articles")}</a></li>
            <li  onClick={onCloseD} className="hamburger-list"><a className="hamburger-link" href="#news">{t("contact")}</a></li>
            <li  onClick={onCloseD} className="hamburger-list"><Buttons/></li>
           </ul>
           <select   className='navbar-select ' onClick={handleChange}  >
                                <option  value="en">En</option>
                                <option  value="uz">Uz</option>
            </select>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer}>
        <img src={hamburger} alt="hamburger-images "  style={{width: "50px" }}/>
      </Button>
      <Drawer open={open} onClose={onCloseD}>
        {DrawerList}
      </Drawer>
    </div>
  );
}