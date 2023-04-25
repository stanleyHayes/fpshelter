import {Box, CardMedia, Grid, Link as MUILink, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {
    CallOutlined,
    Facebook,
    Instagram,
    LocationOnOutlined,
    MailOutline,
    Twitter,
    YouTube
} from "@mui/icons-material";
import {AnimatePresence, motion} from "framer-motion";
import redLogo from "../../assets/images/logo/redLogo.png";
import blueLogo from "../../assets/images/logo/blueLogo.png";
import {useSelector} from "react-redux";
import {selectUI} from "../../redux/features/ui/ui-slice";

const DesktopFooter = () => {

    const {theme} = useSelector(selectUI);

    return (
        <Box>
            <Grid container={true} spacing={4}>
                <Grid item={true} lg={4}>
                    <Stack spacing={3}>
                        <Box>
                            <Stack direction="column" spacing={3} alignItems="center">
                                <Link to="/" style={{textDecoration: "none"}}>
                                    <Typography
                                        variant="h4"
                                        sx={{
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
                                                    sx={{width: 50, height: 50, objectFit: "cover"}}
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
                                                    sx={{width: 50, height: 50, objectFit: "cover"}}
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
                <Grid item={true} lg={4}>
                    <Stack spacing={2}>
                        <Typography variant="body1" sx={{color: "text.primary"}}>
                            Main
                        </Typography>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>
                                Home
                            </Typography>
                        </Link>
                        <Link to="#" style={{textDecoration: "none"}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>
                                About Us
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
                    </Stack>

                </Grid>
                <Grid item={true} lg={4}>
                    <Stack spacing={2}>
                        <Typography variant="body1" sx={{color: "text.primary"}}>
                            Contact
                        </Typography>
                        <Box>
                            <Stack direction="row" spacing={4} alignItems="center">
                                <CallOutlined
                                    sx={{
                                        color: "icon.secondary",
                                        fontSize: 24,
                                        cursor: "pointer",
                                        padding: 0.4
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
                                        cursor: "pointer",
                                        padding: 0.4
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
                                        cursor: "pointer",
                                        padding: 0.4
                                    }}
                                />
                                <MUILink href="mailto://info@pfshelter.org" style={{textDecoration: "none"}}>
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
                                            cursor: "pointer",
                                            padding: 0.4
                                        }}
                                    />
                                </MUILink>
                                <MUILink href="#" style={{textDecoration: "none"}}>
                                    <Facebook
                                        sx={{
                                            color: "icon.secondary",
                                            fontSize: 24,
                                            cursor: "pointer",
                                            padding: 0.4
                                        }}
                                    />
                                </MUILink>
                                <MUILink href="#" style={{textDecoration: "none"}}>
                                    <YouTube
                                        sx={{
                                            color: "icon.secondary",
                                            fontSize: 24,
                                            cursor: "pointer",
                                            padding: 0.4
                                        }}
                                    />
                                </MUILink>
                                <MUILink href="#" style={{textDecoration: "none"}}>
                                    <Twitter
                                        sx={{
                                            color: "icon.secondary",
                                            fontSize: 24,
                                            cursor: "pointer",
                                            padding: 0.4
                                        }}
                                    />
                                </MUILink>
                            </Stack>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default DesktopFooter;