import {Box, CardMedia, Grid, Link as MUILink, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {CallOutlined, LocationOnOutlined, MailOutline, ScheduleOutlined} from "@mui/icons-material";
import {AnimatePresence, motion} from "framer-motion";
import redLogo from "../../assets/images/logo/redLogo.png";
import blueLogo from "../../assets/images/logo/blueLogo.png";
import {useDispatch, useSelector} from "react-redux";
import {selectUI} from "../../redux/features/ui/ui-slice";

const DesktopFooter = () => {

    const {theme} = useSelector(selectUI);
    const dispatch = useDispatch();

    return (
        <Box>
            <Grid container={true} spacing={4}>
                <Grid item={true} lg={3}>
                    <Stack spacing={3}>
                        <Link to="/" style={{textDecoration: "none"}}>
                            <Typography
                                variant="h4"
                                align="center"
                                sx={{
                                    textTransform: "uppercase",
                                    color: "white",
                                    fontWeight: 700,
                                    fontFamily: "SatrevaNova",
                                    letterSpacing: 1.4,
                                }}>
                                PF Shelter
                            </Typography>
                        </Link>
                        <Box>
                            <Stack direction="row" spacing={3} alignItems="center">
                                <Link to="/" style={{textDecoration: "none"}}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            textTransform: "uppercase",
                                            color: "colors.accent",
                                            fontWeight: 700,
                                            fontFamily: "SatrevaNova",
                                            letterSpacing: 1.4
                                        }}>
                                        PF Shelter
                                    </Typography>
                                </Link>

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
                        </Box>
                    </Stack>
                </Grid>
                <Grid item={true} lg={3}>
                    <Stack spacing={2}>
                        <Typography variant="body1" sx={{color: "white", fontWeight: 700}}>
                            Main
                        </Typography>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                About company
                            </Typography>
                        </Link>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                Our chemicals
                            </Typography>
                        </Link>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                Our equipment
                            </Typography>
                        </Link>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                Work
                            </Typography>
                        </Link>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                Contacts
                            </Typography>
                        </Link>
                    </Stack>

                </Grid>
                <Grid item={true} lg={3}>
                    <Stack spacing={2}>
                        <Typography variant="body1" sx={{color: "white", fontWeight: 700}}>
                            Cleaning
                        </Typography>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                After pest control
                            </Typography>
                        </Link>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                Post-construction
                            </Typography>
                        </Link>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                After tenants
                            </Typography>
                        </Link>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                Premises
                            </Typography>
                        </Link>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "white"}}>
                                Dry cleaning of furniture
                            </Typography>
                        </Link>
                    </Stack>
                </Grid>
                <Grid item={true} lg={3}>
                    <Stack spacing={2}>
                        <Typography variant="body1" sx={{color: "white", fontWeight: 700}}>
                            Contact Info
                        </Typography>
                        <Box>
                            <Stack direction="row" spacing={4} alignItems="center">
                                <CallOutlined
                                    sx={{
                                        color: "colors.accent",
                                        fontSize: 24,
                                        cursor: "pointer"
                                    }}
                                />
                                <MUILink href="tel://+380334268644" style={{textDecoration: "none"}}>
                                    <Typography variant="body2" sx={{color: "white", fontFamily: "Urbanist"}}>
                                        +38 033-426 86 44
                                    </Typography>
                                </MUILink>
                            </Stack>
                        </Box>
                        <Box>
                            <Stack direction="row" spacing={4} alignItems="center">
                                <LocationOnOutlined
                                    sx={{
                                        color: "colors.accent",
                                        fontSize: 24,
                                        cursor: "pointer"
                                    }}
                                />
                                <MUILink href="#" style={{textDecoration: "none"}}>
                                    <Typography
                                        variant="body2"
                                        sx={{color: "white", fontFamily: "Urbanist"}}>
                                        Kyiv,Vidradnyi avenue 55
                                    </Typography>
                                </MUILink>
                            </Stack>
                        </Box>
                        <Box>
                            <Stack direction="row" spacing={4} alignItems="center">
                                <MailOutline
                                    sx={{
                                        color: "colors.accent",
                                        fontSize: 24,
                                        cursor: "pointer"
                                    }}
                                />
                                <MUILink href="mailto://info@unonacleaning.com" style={{textDecoration: "none"}}>
                                    <Typography
                                        variant="body2"
                                        sx={{color: "white", fontFamily: "Urbanist"}}>
                                        info@unonacleaning.com
                                    </Typography>
                                </MUILink>
                            </Stack>
                        </Box>

                        <Box>
                            <Stack direction="row" spacing={4} alignItems="center">
                                <ScheduleOutlined
                                    sx={{
                                        color: "colors.accent",
                                        fontSize: 24,
                                        cursor: "pointer"
                                    }}
                                />
                                <MUILink href="#" style={{textDecoration: "none"}}>
                                    <Typography
                                        variant="body2"
                                        sx={{color: "white", fontFamily: "Urbanist"}}>
                                        Mon-Fri: 09:.00 am - 05:00 pm
                                    </Typography>
                                </MUILink>
                            </Stack>
                        </Box>
                        <Box>
                            <Stack direction="row" spacing={4} alignItems="center">
                                <ScheduleOutlined
                                    sx={{
                                        color: "colors.accent",
                                        fontSize: 24,
                                        cursor: "pointer"
                                    }}
                                />
                                <Typography
                                    variant="body2"
                                    sx={{color: "white", fontFamily: "Urbanist"}}>
                                    Saturday, Sunday: closed
                                </Typography>
                            </Stack>
                        </Box>

                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default DesktopFooter;