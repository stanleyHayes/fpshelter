import Layout from "../../components/layout/layout";
import {Box, Button, CardMedia, Container, Grid, Stack, Typography} from "@mui/material";
import {AnimatePresence, motion} from "framer-motion";
import {Link} from "react-router-dom";
import redLogo from "../../assets/images/logo/redLogo.png";
import blueLogo from "../../assets/images/logo/blueLogo.png";
import {useSelector} from "react-redux";
import {selectUI} from "../../redux/features/ui/ui-slice";
import {NorthEast} from "@mui/icons-material";

const NotFoundPage = () => {

    const {theme} = useSelector(selectUI);

    return (
        <Layout>
            <Box
                sx={{
                    backgroundColor: "background.default",
                    minHeight: "93vh",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex"
                }}>
                <Container>
                    <Stack spacing={2}>
                        <Box>
                            <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
                                <Typography variant="h1" sx={{color: "secondary.main"}}>
                                    4
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
                                <Typography variant="h1" sx={{color: "secondary.main"}}>
                                    4
                                </Typography>
                            </Stack>
                        </Box>
                        <Box>
                            <Typography
                                align="center"
                                variant="h2" sx={{color: "text.primary", fontWeight: 800}}>
                                <Typography
                                    component="span"
                                    variant="h4"
                                    sx={{
                                        color: "colors.accent",
                                        backgroundColor: "light.accent",
                                        fontWeight: 800,
                                        px: 1,
                                        fontFamily: "SatrevaNova",
                                        borderRadius: 2
                                    }}>
                                    OOPs,
                                </Typography>
                                {" "}
                                <Typography
                                    component="span"
                                    variant="h4"
                                    sx={{
                                        color: "secondary.main",
                                        backgroundColor: "light.secondary",
                                        fontWeight: 800,
                                        px: 1,
                                        fontFamily: "SatrevaNova",
                                        borderRadius: 2
                                    }}>
                                    something went wrong
                                </Typography>
                            </Typography>
                        </Box>
                        <Box>
                            <Grid container={true} alignItems="center" justifyContent="center">
                                <Grid item={true} xs={12} md={3}>
                                    <Link to="/" style={{textDecoration: "none"}}>
                                        <Button
                                            fullWidth={true}
                                            type="submit"
                                            size="large"
                                            disableElevation={true}
                                            endIcon={
                                                <NorthEast
                                                    sx={{
                                                        color: "white",
                                                        "&:hover": {
                                                            color: "secondary.main",
                                                            transition: "all 500ms ease-out"
                                                        }
                                                    }}
                                                />
                                            }
                                            sx={{
                                                textTransform: "capitalize",
                                                color: "white",
                                                fontWeight: 700,
                                                backgroundColor: "secondary.main",
                                                fontFamily: "SatrevaNova",
                                                "&:hover": {
                                                    backgroundColor: "light.secondary",
                                                    color: "secondary.main",
                                                    transition: "all 500ms ease-out"
                                                }
                                            }}>
                                            Go back home
                                        </Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Stack>
                </Container>
            </Box>
        </Layout>
    )
}

export default NotFoundPage;