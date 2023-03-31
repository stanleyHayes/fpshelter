import {Box, Button, CardMedia, Container, Grid, Stack, Typography} from "@mui/material";
import {Link} from "react-scroll";
import cat from "./../../assets/images/banner/cat.png";
import parrot from "./../../assets/images/banner/parrot.png";
import pig from "./../../assets/images/banner/guinea-pig.png";
import tortoise from "./../../assets/images/banner/turtle.png";
import fish from "./../../assets/images/banner/clown-fish.png";
import dog from "./../../assets/images/banner/dog.png";
import rabbit from "./../../assets/images/banner/bunny.png";

const Banner = () => {

    return (
        <Box sx={{width: "100%", minHeight: "80vh", alignItems: "center", display: "flex"}}>
            <Container maxWidth="xl">
                <Grid container={true} spacing={4} alignItems="center" justifyContent="space-between">
                    <Grid item={true} xs={12} md={4}>
                        <Box>
                            <Stack spacing={4}>
                                <Typography variant="h2" sx={{color: "text.primary", fontWeight: 800}}>
                                    Paws{" "}
                                    <Typography
                                        component="span"
                                        variant="h2"
                                        sx={{
                                            color: "colors.accent",
                                            backgroundColor: "light.accent",
                                            fontWeight: 800,
                                            px: 1,
                                            fontFamily: "SatrevaNova",
                                            borderRadius: 2
                                        }}>
                                        Friends
                                    </Typography>
                                    {" "}
                                    <Typography
                                        component="span"
                                        variant="h2"
                                        sx={{
                                            color: "secondary.main",
                                            backgroundColor: "light.secondary",
                                            fontWeight: 800,
                                            px: 1,
                                            fontFamily: "SatrevaNova",
                                            borderRadius: 2
                                        }}>
                                        Shelter
                                    </Typography>
                                </Typography>
                                <Typography variant="body1" sx={{color: "text.secondary"}}>
                                    We are an organization that exists on a volunteer basis and help animals find loving
                                    and caring homes
                                </Typography>
                                <Box>
                                    <Grid container={true} spacing={2}>
                                        <Grid item={true} xs={12} md={6}>
                                            <Link
                                                style={{width: "100%"}}
                                                to="contact"
                                                smooth={true}
                                                spy={true}
                                                offset={50}
                                                duration={500}
                                                delay={100}>
                                                <Button
                                                    fullWidth={true}
                                                    size="large"
                                                    disableElevation={true}
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
                                                    Adopt a Pet
                                                </Button>
                                            </Link>
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <Link
                                                style={{width: "100%"}}
                                                to="support"
                                                smooth={true}
                                                spy={true}
                                                offset={50}
                                                duration={500}
                                                delay={100}>
                                                <Button
                                                    fullWidth={true}
                                                    size="large"
                                                    disableElevation={true}
                                                    sx={{
                                                        textTransform: "capitalize",
                                                        color: "secondary.main",
                                                        fontWeight: 700,
                                                        borderColor: "secondary.main",
                                                        borderStyle: "solid",
                                                        borderWidth: 2,
                                                        fontFamily: "SatrevaNova",
                                                        "&:hover": {
                                                            backgroundColor: "light.secondary",
                                                            color: "secondary.main",
                                                            transition: "all 500ms ease-out"
                                                        }
                                                    }}>
                                                    Support
                                                </Button>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item={true} xs={12} md={8}>
                        <Grid container={true} spacing={4} justifyContent="center">
                            <Grid item={true} xs={6}>
                                <CardMedia component="img" src={cat} sx={{objectFit: "contain", height: {xs: 200}}}/>
                            </Grid>
                            <Grid item={true} xs={6}>
                                <CardMedia component="img" src={parrot} sx={{objectFit: "contain", height: {xs: 200}}}/>
                            </Grid>
                            <Grid item={true} xs={4}>
                                <CardMedia
                                    component="img"
                                    src={tortoise}
                                    sx={{objectFit: "contain", height: {xs: 200}}}
                                />
                            </Grid>
                            <Grid item={true} xs={4}>
                                <CardMedia component="img" src={pig} sx={{objectFit: "contain", height: {xs: 200}}}/>
                            </Grid>
                            <Grid item={true} xs={4}>
                                <CardMedia component="img" src={fish} sx={{objectFit: "contain", height: {xs: 200}}}/>
                            </Grid>
                            <Grid item={true} xs={6}>
                                <CardMedia component="img" src={dog} sx={{objectFit: "contain", height: {xs: 200}}}/>
                            </Grid>
                            <Grid item={true} xs={6}>
                                <CardMedia component="img" src={rabbit} sx={{objectFit: "contain", height: {xs: 200}}}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Banner;