import Layout from "../../components/layout/layout";
import {Box, Container, Grid, LinearProgress, Stack, Typography} from "@mui/material";
import AdoptionForm from "../../components/shared/adoption-form";
import PetDetail from "../../components/shared/pet-detail";
import {useDispatch, useSelector} from "react-redux";
import {PET_ACTION_CREATOR, selectPets} from "../../redux/features/pets/pets-slice";
import {useParams} from "react-router";
import {useEffect} from "react";

const AdoptionDetailPage = () => {

    const {pet, petLoading, petError} = useSelector(selectPets);
    const {petID} = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(PET_ACTION_CREATOR.getPet(petID));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [petID]);

    return (
        <Layout>
            {petLoading && <LinearProgress color="secondary" variant="indeterminate"/>}
            <Box sx={{backgroundColor: "background.default", py: 8}}>
                <Container>
                    <Box sx={{mb: 4}}>
                        <Stack direction="column" spacing={2}>
                            <Box>
                                <Typography
                                    align="center"
                                    variant="h4"
                                    sx={{color: "colors.accent", fontFamily: "SatrevaNova", fontWeight: 700}}>
                                    Animal{" "}
                                    <Typography
                                        component="span"
                                        variant="h4" sx={{
                                        color: "secondary.main",
                                        fontFamily: "SatrevaNova",
                                        fontWeight: 700
                                    }}>
                                        Adoption
                                    </Typography>
                                </Typography>
                            </Box>
                            <Box>
                                <Typography align="center" variant="body1" sx={{color: "text.secondary"}}>
                                    Please fill out the adoption form
                                </Typography>
                            </Box>
                        </Stack>
                    </Box>
                    <Box>
                        <Grid container={true} spacing={4}>
                            <Grid item={true} xs={12} md={7}>
                                <PetDetail error={petError} loading={petLoading} pet={pet}/>
                            </Grid>
                            <Grid item={true} xs={12} md={5}>
                                <AdoptionForm/>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </Layout>
    )
}

export default AdoptionDetailPage;