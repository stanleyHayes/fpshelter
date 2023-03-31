import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {selectCategories} from "../../redux/features/categories/categories-slice";
import Category from "./category";

const ContactSection = () => {

    const {categories} = useSelector(selectCategories);

    return (
        <Box sx={{width: "100%"}}>
            <Container maxWidth="lg">
                <Box>
                    <Stack direction="column" spacing={4}>
                        <Box>
                            <Typography
                                align="center"
                                variant="h4"
                                sx={{color: "colors.accent", fontFamily: "SatrevaNova", fontWeight: 700, mb: 2}}>
                                Adopt
                                <Typography
                                    component="span"
                                    variant="h4" sx={{
                                    color: "secondary.main",
                                    fontFamily: "SatrevaNova",
                                    fontWeight: 700
                                }}>
                                    ion
                                </Typography>
                            </Typography>

                            <Typography align="center" variant="body1" sx={{color: "text.secondary"}}>
                                Select the category of animal you would want to adopt from
                            </Typography>
                        </Box>
                        <Box sx={{}}>
                            <Grid container={true} spacing={2}>
                                {categories.map((category, index) => {
                                    return (
                                        <Grid key={index} item={true} xs={12} md={4} lg={2.4}>
                                            <Category category={category}/>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Box>
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}

export default ContactSection;