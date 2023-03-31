import {Box, Container, Divider} from "@mui/material";
import DesktopFooter from "./desktop-footer";
import MobileFooter from "./mobile-footer";
import Copyright from "../shared/copyright";

const Footer = () => {
    return (
        <Box sx={{backgroundColor: "background.paper", pt: 4}}>
            <Box sx={{mb: 3}}>
                <Container maxWidth="lg" sx={{display: {xs: "none", lg: "block"}}}>
                    <DesktopFooter/>
                </Container>
                <Container maxWidth="lg" sx={{display: {xs: "block", lg: "none"}}}>
                    <MobileFooter/>
                </Container>
            </Box>
            <Divider variant="fullWidth" sx={{backgroundColor: "rgba(255, 255, 255, 0.1)"}} light={true}/>
            <Box>
                <Copyright/>
            </Box>
        </Box>
    )
}

export default Footer;