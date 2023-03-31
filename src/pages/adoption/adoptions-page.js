import Layout from "../../components/layout/layout";
import {useSelector} from "react-redux";
import {selectPets} from "../../redux/features/pets/pets-slice";
import {Box, Button, Container, Divider, Grid, Stack, TextField} from "@mui/material";
import {selectCategories} from "../../redux/features/categories/categories-slice";
import CategoryButton from "../../components/shared/category-button";
import {useParams} from "react-router";
import {useState} from "react";
import {SearchOutlined} from "@mui/icons-material";
import Pet from "../../components/shared/pet";

const AdoptionsPage = () => {

    const {pets} = useSelector(selectPets);
    const {categories} = useSelector(selectCategories);
    const {c} = useParams();
    const [selectedCategory, setSelectedCategory] = useState(c);
    const [query, setQuery] = useState("");
    const [filteredPets, setFilteredPets] = useState(pets);

    const handleCategorySelect = category => {
        setSelectedCategory(category);
        setFilteredPets(filteredPets.filter(pet => pet.category.toLowerCase() === category.name.toLowerCase()));
    }

    const handleSearch = () => {
        setFilteredPets(filteredPets.filter(pet => {
            return (
                query.toLowerCase().includes(pet.category.toLowerCase()) ||
                query.toLowerCase().includes(pet.description.toLowerCase()) ||
                query.toLowerCase().includes(pet.name.toLowerCase())
            )
        }))
    }

    return (
        <Layout>
            <Box sx={{py: 8}}>
                <Container>
                    <Grid container={true} spacing={2}>
                        {categories.map((category, index) => {
                            return (
                                <Grid key={index} item={true} xs={12} md={4} lg={2.4}>
                                    <CategoryButton
                                        handleCategorySelect={handleCategorySelect}
                                        selected={category.name.toLowerCase() === selectedCategory?.toLowerCase()}
                                        category={category}
                                    />
                                </Grid>
                            )
                        })}
                    </Grid>

                    <Divider variant="fullWidth" sx={{my: 4}} light={true}/>

                    <Grid container={true} spacing={2} alignItems="center">
                        <Grid item={true} xs={12} md={8}>
                            <Stack
                                divider={
                                    <Divider
                                        sx={{color: "light.secondary", backgroundColor: "light.secondary"}}
                                        flexItem={true}
                                        variant="inset"
                                        light={true}
                                        orientation="vertical"
                                    />
                                }
                                sx={{
                                    backgroundColor: "background.paper",
                                    borderRadius: 3,
                                    padding: 1,
                                    px: 2
                                }}
                                spacing={2}
                                alignItems="center"
                                direction="row">
                                <TextField
                                    value={query}
                                    size="small"
                                    onChange={event => setQuery(event.target.value)}
                                    fullWidth={true}
                                    variant="standard"
                                    type="text"
                                    placeholder="Search name, breed, description..."
                                    InputProps={{disableUnderline: true}}
                                />
                                <SearchOutlined
                                    onClick={handleSearch}
                                    sx={{color: "background.icon"}}
                                    color="secondary"
                                />
                            </Stack>
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
                            <Button
                                onClick={handleSearch}
                                sx={{
                                    textTransform: "capitalize",
                                    borderWidth: 2,
                                    '&:hover': {borderWidth: 2}
                                }}
                                size="small"
                                color="secondary"
                                variant="outlined"
                                fullWidth={true}>Search Pet</Button>
                        </Grid>
                    </Grid>

                    <Divider variant="fullWidth" sx={{my: 4}} light={true}/>

                    <Grid container={true} spacing={2}>
                        {filteredPets.map((pet, index) => {
                            return (
                                <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                    <Pet pet={pet}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default AdoptionsPage;