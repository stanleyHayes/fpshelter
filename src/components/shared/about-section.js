import {Box, Container, Stack, Typography} from "@mui/material";
import About from "./about";
import alex from "./../../assets/images/about/yogendra-singh-K8JxScoZb4A-unsplash.jpg";
import leslie from "./../../assets/images/about/sebastian-coman-travel-yZp-HA8Q-eo-unsplash.jpg";
import amanda from "./../../assets/images/about/japheth-mast-Ga6z9QD8yvw-unsplash.jpg";
import april from "./../../assets/images/about/tamara-bellis-WrUGxeL-Hgs-unsplash.jpg";
import sophie from "./../../assets/images/about/tamara-bellis-gVWBMGJwlJM-unsplash.jpg";

const AboutSection = () => {

    return (
        <Box sx={{width: "100%"}}>
            <Container maxWidth="lg">
                <Stack direction="column" spacing={4}>
                    <Box>
                        <Typography
                            align="center"
                            variant="h4"
                            sx={{color: "colors.accent", fontFamily: "SatrevaNova", fontWeight: 700}}>
                            About{" "}
                            <Typography
                                component="span"
                                variant="h4" sx={{color: "secondary.main", fontFamily: "SatrevaNova", fontWeight: 700}}>
                                Us
                            </Typography>
                        </Typography>
                    </Box>

                    <Box>
                        <Stack
                            sx={{width: "100%"}}
                            spacing={0}>
                            <About
                                name="Alex"
                                description="Welcome to our animal shelter! We are an organization that aims to help homeless animals find loving families and provide them with all the necessary care and attention"
                                image={alex}
                            />
                            <About
                                reversed={true}
                                name="Leslie"
                                description="Our shelter is located in a cozy place with well-equipped facilities. We have spacious rooms where animals can play, rest and receive the necessary medical care and hygiene. Our shelter also has a separate area for animals that require isolated living, such as those receiving treatment or temporarily under supervision"
                                image={leslie}
                            />
                            <About
                                name="Amanda"
                                description="We provide our animals with regular feeding, water supply , and necessary medical care. In addition, we ensure that our wards are socialized and ready to find their home."
                                image={amanda}
                            />
                            <About
                                reversed={true}
                                name="April"
                                description="If you want to adopt an animal from us, we will be happy to help you choose your favorite. We conduct animal temperament testing and offer recommendations for care and socialization. We also provide support to our adopters to help them create harmonious and healthy home for their new pets."
                                image={april}
                            />
                            <About
                                name="Sophie"
                                description="Contact us if you have any questions about our shelter, if you want to learn more about the adoption process, or if you want to donate to our shelter."
                                image={sophie}
                            />
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default AboutSection;