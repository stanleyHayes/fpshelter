import {Box, CardMedia, CircularProgress, Container, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";
import redLogo from "../../assets/images/logo/redLogo.png";
import blueLogo from "../../assets/images/logo/blueLogo.png";
import {useSelector} from "react-redux";
import {selectUI} from "../../redux/features/ui/ui-slice";

const Splash = () => {
    const {theme} = useSelector(selectUI);
    return (
        <Box sx={{maxHeight: "100vh", height: "100vh", display: "flex", alignItems: "center"}}>
            <Container>
                <Stack spacing={3} justifyContent="center">
                    <Box>
                        <Typography
                            variant="h4"
                            align="center"
                            sx={{
                                textTransform: "uppercase",
                                color: "secondary.main",
                                fontWeight: 700,
                                fontFamily: "SatrevaNova",
                                letterSpacing: 1.4,
                                mb: 3
                            }}>
                            PF Shelter
                        </Typography>

                        <Typography
                            variant="body1"
                            align="center"
                            sx={{
                                color: "secondary.main"
                            }}>
                            Keeping the planet clean is essential, but keeping your house cleaner is necessary
                        </Typography>
                    </Box>
                    <Box>
                        <Stack direction="column" spacing={3} alignItems="center">
                            <Typography
                                variant="h6"
                                sx={{
                                    textTransform: "uppercase",
                                    color: "secondary.main",
                                    fontWeight: 700,
                                    fontFamily: "SatrevaNova",
                                    letterSpacing: 1.4
                                }}>
                                PF Shelter
                            </Typography>
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
                    <Box>
                        <Stack justifyContent="center" direction="row" spacing={3}>
                            <CircularProgress variant="indeterminate" color="secondary" size={50}/>
                        </Stack>
                    </Box>
                    <Box>
                        <Typography
                            variant="h6"
                            align="center"
                            sx={{
                                textTransform: "none",
                                color: "secondary.main",
                                fontFamily: "SatrevaNova",
                                letterSpacing: 1.4,
                                fontWeight: 700
                            }}>
                            Setting up. Please wait...
                        </Typography>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default Splash;