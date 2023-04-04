import {Box, Button, CardMedia, Grid, Stack, Toolbar, Typography} from "@mui/material";
import NavigationLink from "../shared/navigation-link";
import {DarkModeOutlined, LightModeOutlined} from "@mui/icons-material";
import {AnimatePresence, motion} from "framer-motion";
import {selectUI, UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import redLogo from "./../../assets/images/logo/redLogo.png";
import blueLogo from "./../../assets/images/logo/blueLogo.png";
import NavLink from "../shared/nav-link";

const DesktopHeader = () => {

    const {theme} = useSelector(selectUI);
    const dispatch = useDispatch();

    return (
        <Toolbar
            sx={{
                borderBottomWidth: 2,
                borderBottomStyle: "solid",
                borderBottomColor: "divider"
            }}>
            <Grid container={true} alignItems="center" justifyContent="space-around">
                <Grid item={true}>
                    <Stack direction="row" spacing={3} alignItems="center">
                        <Link to="/" style={{textDecoration: "none"}}>
                            <Typography
                                variant="h4"
                                sx={{
                                    textTransform: "uppercase",
                                    color: "secondary.main",
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
                                            sx={{width: 40, height: 40, objectFit: "cover"}}
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
                                            sx={{width: 40, height: 40, objectFit: "cover"}}
                                            src={blueLogo}
                                        />
                                    </Link>
                                </Box>
                            )}
                        </AnimatePresence>
                    </Stack>
                </Grid>
                <Grid item={true}>
                    <Stack direction="row" spacing={3} alignItems="center">
                        <NavLink path="home" label="Home"/>
                        <NavigationLink path="us" label="About Us"/>
                        <NavigationLink path="adoption" label="Adoption"/>
                        <NavigationLink path="support" label="Shelter Support"/>
                    </Stack>
                </Grid>

                <Grid item={true}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <AnimatePresence initial={true} mode="sync">
                            {theme === "dark" && (
                                <Box component={motion.div} exit={{opacity: 0, transition: {duration: 0.5}}}>
                                    <LightModeOutlined
                                        onClick={() => dispatch(UI_ACTION_CREATORS.toggleTheme())}
                                        sx={{
                                            color: "icon.secondary",
                                            padding: 1,
                                            fontSize: 44,
                                            borderRadius: "100%",
                                            cursor: "pointer",
                                            backgroundColor: "icon.secondaryBackground"
                                        }}
                                    />
                                </Box>
                            )}
                        </AnimatePresence>
                        <AnimatePresence initial={true} mode="sync">
                            {theme === "light" && (
                                <Box component={motion.div} exit={{opacity: 0, transition: {duration: 0.5}}}>
                                    <DarkModeOutlined
                                        onClick={() => dispatch(UI_ACTION_CREATORS.toggleTheme())}
                                        sx={{
                                            color: "icon.secondary",
                                            padding: 1,
                                            fontSize: 44,
                                            borderRadius: "100%",
                                            cursor: "pointer",
                                            backgroundColor: "icon.accentBackground"
                                        }}/>
                                </Box>
                            )}
                        </AnimatePresence>
                        <Link to="/adoptions" style={{textDecoration: "none"}}>
                            <Button
                                variant="contained"
                                disableElevation={true}
                                size="large"
                                color="secondary"
                                sx={{
                                    textTransform: "capitalize",
                                    color: "white",
                                    borderRadius: 2,
                                    borderWidth: 2,
                                    backgroundColor: "secondary.main",
                                    fontWeight: 700,
                                    fontFamily: "SatrevaNova"
                                }}>
                                Adopt a Friend
                            </Button>
                        </Link>
                    </Stack>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default DesktopHeader