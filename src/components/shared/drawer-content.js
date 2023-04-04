import {Box, Button, CardMedia, Divider, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import NavigationLink from "./navigation-link";
import {AnimatePresence, motion} from "framer-motion";
import {CloseOutlined, DarkModeOutlined, LightModeOutlined} from "@mui/icons-material";
import {selectUI, UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";
import {useDispatch, useSelector} from "react-redux";
import redLogo from "../../assets/images/logo/redLogo.png";
import blueLogo from "../../assets/images/logo/blueLogo.png";
import NavLink from "./nav-link";

const DrawerContent = () => {

    const {theme} = useSelector(selectUI);
    const dispatch = useDispatch();

    return (
        <Box sx={{py: 4}}>
            <Stack
                direction="column"
                divider={<Divider sx={{my: 2}} variant="fullWidth" light={true}/>}>
                <Stack
                    sx={{px: 4}}
                    direction="row"
                    spacing={4}
                    alignItems="center"
                    justifyContent="space-between">

                    <AnimatePresence initial={true} mode="wait">
                        {theme === "dark" && (
                            <Box component={motion.div} exit={{opacity: 0, transition: {duration: 0.5}}}>
                                <LightModeOutlined
                                    onClick={() => dispatch(UI_ACTION_CREATORS.toggleTheme())}
                                    sx={{
                                        color: "icon.secondary",
                                        padding: 1,
                                        fontSize: 32,
                                        borderRadius: "100%",
                                        cursor: "pointer",
                                        backgroundColor: "icon.secondaryBackground"
                                    }}/>
                            </Box>
                        )}
                    </AnimatePresence>
                    <AnimatePresence initial={true} mode="wait">
                        {theme === "light" && (
                            <Box component={motion.div} exit={{opacity: 0, transition: {duration: 0.5}}}>
                                <DarkModeOutlined
                                    onClick={() => dispatch(UI_ACTION_CREATORS.toggleTheme())}
                                    sx={{
                                        color: "icon.secondary",
                                        padding: 1,
                                        fontSize: 32,
                                        borderRadius: "100%",
                                        cursor: "pointer",
                                        backgroundColor: "icon.secondaryBackground"
                                    }}/>
                            </Box>
                        )}
                    </AnimatePresence>
                    <CloseOutlined
                        onClick={() => dispatch(UI_ACTION_CREATORS.toggleDrawer(false))}
                        sx={{
                            color: "icon.secondary",
                            padding: 1,
                            fontSize: 32,
                            borderRadius: "100%",
                            cursor: "pointer",
                            backgroundColor: "icon.secondaryBackground"
                        }}/>
                </Stack>

                <Box sx={{px: 4}}>
                    <Link to="/" style={{textDecoration: "none"}}>
                        <Typography
                            variant="h4"
                            sx={{
                                textTransform: "uppercase",
                                color: "icon.secondary",
                                fontWeight: 700,
                                fontFamily: "SatrevaNova",
                                letterSpacing: 1.4
                            }}>
                            PF Shelter
                        </Typography>
                    </Link>
                    <Stack direction="row" spacing={3} alignItems="center" justifyContent="center">
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

                <Box sx={{px: 4}}>
                    <Stack direction="column" spacing={3}>
                        <NavLink path="home" label="Home"/>
                        <NavigationLink path="about" label="About Us"/>
                        <NavigationLink path="adoption" label="Adoption"/>
                        <NavigationLink path="support" label="Shelter Support"/>
                    </Stack>
                </Box>

                <Box sx={{px: 4}}>
                    <Stack direction="column" spacing={2} alignItems="center">
                        <Link to="/adoptions" style={{textDecoration: "none"}}>
                            <Button
                                fullWidth={true}
                                variant="contained"
                                disableElevation={true}
                                size="large"
                                color="secondary"
                                sx={{
                                    textTransform: "capitalize",
                                    color: "white",
                                    borderWidth: 2,
                                    backgroundColor: "secondary.main",
                                    fontWeight: 700,
                                    fontFamily: "SatrevaNova"
                                }}>
                                Adopt a Friend
                            </Button>
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export default DrawerContent;