import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    CardMedia,
    Link as MUILink,
    Stack,
    Typography
} from "@mui/material";
import {Link} from "react-router-dom";
import {
    CallOutlined,
    Facebook,
    Instagram,
    LocationOnOutlined,
    MailOutline,
    South,
    Twitter,
    YouTube
} from "@mui/icons-material";
import {AnimatePresence, motion} from "framer-motion";
import redLogo from "../../assets/images/logo/redLogo.png";
import blueLogo from "../../assets/images/logo/blueLogo.png";
import {useSelector} from "react-redux";
import {selectUI} from "../../redux/features/ui/ui-slice";

const MobileFooter = () => {
    const {theme} = useSelector(selectUI);
    return (
        <Box>
            <Stack spacing={1}>
                <Accordion
                    elevation={0}
                    square={true}
                    sx={{backgroundColor: "background.paper"}}>
                    <AccordionSummary sx={{backgroundColor: "background.paper"}} expandIcon={<South
                        sx={{
                            color: "icon.secondary",
                            fontSize: 24,
                            padding: 0.4,
                            borderRadius: "100%",
                        }}
                    />}>
                        <Typography
                            variant="h4"
                            sx={{
                                textTransform: "uppercase",
                                color: "text.primary",
                                fontWeight: 700,
                                fontFamily: "SatrevaNova",
                                letterSpacing: 1.4
                            }}>
                            PF Shelter
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: "background.paper"}}>
                        <Stack direction="row" spacing={3} alignItems="center">
                            <AnimatePresence initial={true} mode="sync">
                                {theme === "dark" && (
                                    <Box component={motion.div} exit={{opacity: 0, transition: {duration: 0.5}}}>
                                        <Link to="/" style={{textDecoration: "none"}}>
                                            <CardMedia
                                                component="img"
                                                sx={{width: 70, height: 70, objectFit: "cover"}}
                                                src={redLogo}
                                            />
                                        </Link>
                                    </Box>
                                )}
                            </AnimatePresence>
                            <AnimatePresence initial={true} mode="sync">
                                {theme === "light" && (
                                    <Box component={motion.div} exit={{opacity: 0, transition: {duration: 0.5}}}>
                                        <Link to="/" style={{textDecoration: "none"}}>
                                            <CardMedia
                                                component="img"
                                                sx={{width: 70, height: 70, objectFit: "cover"}}
                                                src={blueLogo}
                                            />
                                        </Link>
                                    </Box>
                                )}
                            </AnimatePresence>
                        </Stack>
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    elevation={0}
                    square={true}
                    sx={{backgroundColor: "background.paper"}}>
                    <AccordionSummary sx={{backgroundColor: "background.paper"}} expandIcon={<South
                        sx={{
                            color: "icon.secondary",
                            fontSize: 24,
                            padding: 0.4,
                            borderRadius: "100%",
                        }}
                    />}>
                        <Typography variant="body1" sx={{color: "text.primary"}}>
                            Main
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: "background.paper"}}>
                        <Stack spacing={2}>
                            <Link to="#" style={{textDecoration: "none"}}>
                                <Typography variant="body2" sx={{color: "text.secondary"}}>
                                    Home
                                </Typography>
                            </Link>
                            <Link to="#" style={{textDecoration: "none"}}>
                                <Typography variant="body2" sx={{color: "text.secondary"}}>
                                    Adoption
                                </Typography>
                            </Link>
                            <Link to="#" style={{textDecoration: "none"}}>
                                <Typography variant="body2" sx={{color: "text.secondary"}}>
                                    Shelter Support
                                </Typography>
                            </Link>
                            <Link to="#" style={{textDecoration: "none"}}>
                                <Typography variant="body2" sx={{color: "text.secondary"}}>
                                    Contacts
                                </Typography>
                            </Link>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    elevation={0}
                    square={true} sx={{backgroundColor: "background.paper"}}>
                    <AccordionSummary
                        sx={{backgroundColor: "background.paper"}}
                        expandIcon={
                            <South
                                sx={{
                                    color: "icon.secondary",
                                    fontSize: 24,
                                    padding: 0.4,
                                    borderRadius: "100%",
                                }}
                            />}>
                        <Typography variant="body1" sx={{color: "text.primary"}}>
                            Contacts
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: "background.paper"}}>
                        <Stack spacing={2}>
                            <Box>
                                <Stack direction="row" spacing={4} alignItems="center">
                                    <CallOutlined
                                        sx={{
                                            color: "icon.secondary",
                                            fontSize: 24,
                                            padding: 0.4,
                                            cursor: "pointer"
                                        }}
                                    />
                                    <MUILink href="tel://+46123456789" style={{textDecoration: "none"}}>
                                        <Typography variant="body2" sx={{color: "text.secondary"}}>
                                            +46 123 456 789
                                        </Typography>
                                    </MUILink>
                                </Stack>
                            </Box>
                            <Box>
                                <Stack direction="row" spacing={4} alignItems="center">
                                    <LocationOnOutlined
                                        sx={{
                                            color: "icon.secondary",
                                            fontSize: 24,
                                            padding: 0.4,
                                            cursor: "pointer"
                                        }}
                                    />
                                    <MUILink href="#" style={{textDecoration: "none"}}>
                                        <Typography
                                            variant="body2"
                                            sx={{color: "text.secondary"}}>
                                            Sheilas Gata 58, Uppsala, Sweden
                                        </Typography>
                                    </MUILink>
                                </Stack>
                            </Box>
                            <Box>
                                <Stack direction="row" spacing={4} alignItems="center">
                                    <MailOutline
                                        sx={{
                                            color: "icon.secondary",
                                            fontSize: 24,
                                            padding: 0.4,
                                            cursor: "pointer"
                                        }}
                                    />
                                    <MUILink href="mailto://info@pfshelter.org" underline="none">
                                        <Typography
                                            variant="body2"
                                            sx={{color: "text.secondary"}}>
                                            info@pfshelter.org
                                        </Typography>
                                    </MUILink>
                                </Stack>
                            </Box>

                            <Box>
                                <Stack direction="row" spacing={4} alignItems="center">
                                    <MUILink href="#" style={{textDecoration: "none"}}>
                                        <Instagram
                                            sx={{
                                                color: "icon.secondary",
                                                fontSize: 24,
                                                padding: 0.4,
                                                cursor: "pointer"
                                            }}
                                        />
                                    </MUILink>
                                    <MUILink href="#" style={{textDecoration: "none"}}>
                                        <Facebook
                                            sx={{
                                                color: "icon.secondary",
                                                fontSize: 24,
                                                padding: 0.4,
                                                cursor: "pointer"
                                            }}
                                        />
                                    </MUILink>
                                    <MUILink href="#" style={{textDecoration: "none"}}>
                                        <YouTube
                                            sx={{
                                                color: "icon.secondary",
                                                fontSize: 24,
                                                padding: 0.4,
                                                cursor: "pointer"
                                            }}
                                        />
                                    </MUILink>
                                    <MUILink href="#" style={{textDecoration: "none"}}>
                                        <Twitter
                                            sx={{
                                                color: "icon.secondary",
                                                fontSize: 24,
                                                padding: 0.4,
                                                cursor: "pointer"
                                            }}
                                        />
                                    </MUILink>
                                </Stack>
                            </Box>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            </Stack>
        </Box>
    )
}

export default MobileFooter;