import Layout from "../../components/layout/layout";
import {useSelector} from "react-redux";
import {selectPets} from "../../redux/features/pets/pets-slice";
import {Box, Button, Container, Divider, Grid, Stack, TextField, Typography} from "@mui/material";
import {selectCategories} from "../../redux/features/categories/categories-slice";
import CategoryButton from "../../components/shared/category-button";
import {useState} from "react";
import {CloseOutlined, SearchOutlined} from "@mui/icons-material";
import Pet from "../../components/shared/pet";
import {useSearchParams} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";

const AdoptionsPage = () => {

    const {pets} = useSelector(selectPets);
    const {categories} = useSelector(selectCategories);
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category"));
    const [query, setQuery] = useState("");
    const [filteredPets, setFilteredPets] = useState(() => {
        if(searchParams.get("category")){
            return pets.filter(pet => pet.category.toLowerCase() === searchParams.get("category").toLowerCase());
        }else{
            return pets;
        }
    });

    const handleCategorySelect = category => {
        setSearchParams(() => {
            return {category: category.toLowerCase()}
        });
        setSelectedCategory(category);
        setFilteredPets(pets.filter(pet => pet.category.toLowerCase() === category.toLowerCase()));
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

    const handleClearFilter = () => {
        setFilteredPets(pets);
        setQuery("");
        setSelectedCategory("");
        setSearchParams(() => {
            return {};
        });
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
                                        selected={category.category.toLowerCase() === selectedCategory?.toLowerCase()}
                                        category={category}
                                    />
                                </Grid>
                            )
                        })}
                    </Grid>

                    <Divider variant="fullWidth" sx={{my: 4}} light={true}/>

                    <Grid container={true} spacing={3} alignItems="center">
                        <Grid item={true} xs={12} md={2}>
                            <Typography variant="h4" sx={{color: "secondary.main", fontWeight: 700, fontFamily: ""}}>
                                {`Pets (${filteredPets.length})`}
                            </Typography>
                        </Grid>
                        <Grid item={true} xs={12} md={4}>
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
                        <Grid item={true} xs={12} md={3}>
                            <Button
                                disableElevation={true}
                                onClick={handleSearch}
                                sx={{
                                    textTransform: "capitalize",
                                    borderWidth: 2,
                                    '&:hover': {borderWidth: 2}
                                }}
                                size="medium"
                                color="secondary"
                                variant="contained"
                                fullWidth={true}>Search Pet</Button>
                        </Grid>
                        <Grid item={true} xs={12} md={3}>
                            <Button
                                onClick={handleClearFilter}
                                sx={{
                                    textTransform: "capitalize",
                                    borderWidth: 2,
                                    '&:hover': {borderWidth: 2}
                                }}
                                size="medium"
                                color="secondary"
                                variant="outlined"
                                fullWidth={true}>Reset Filters</Button>
                        </Grid>
                    </Grid>

                    <Divider variant="fullWidth" sx={{my: 4}} light={true}/>

                    <Grid container={true} spacing={2}>
                        {filteredPets.length === 0 && (
                            <Grid item={true} xs={12}>
                                <Box
                                    sx={{
                                        backgroundColor: "background.paper",
                                        borderRadius: 0.5,
                                        width: "100%",
                                        padding: 5
                                    }}>
                                    <Stack direction="row" justifyContent="center" sx={{mb: 4}}>
                                        <CloseOutlined
                                            sx={{
                                                color: "background.icon",
                                                fontSize: 48,
                                                padding: 1,
                                                backgroundColor: "icon.secondaryBackground",
                                                borderRadius: "100%"
                                            }}
                                            color="secondary"
                                        />
                                    </Stack>
                                    <Typography sx={{color: "text.secondary"}} variant="h6" align="center">
                                        No pet available
                                    </Typography>
                                </Box>
                            </Grid>
                        )}
                        <AnimatePresence mode="wait">
                            {filteredPets.map((pet, index) => {
                                return (
                                    <Grid
                                        initial={{opacity: 0, x: "10vh"}}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                duration: 1,
                                                type: "spring",
                                                staggeredChildren: 0.3,
                                                when: "beforeChildren",
                                                bounce: 0.2,
                                                stifness: 120
                                            }
                                        }}
                                        exit={{
                                            opacity: 0,
                                            x: "10vh",
                                            transition: {
                                                duration: 1
                                            }
                                        }}
                                        component={motion.div}
                                        key={index}
                                        item={true}
                                        xs={12}
                                        md={4}
                                        lg={3}>
                                        <Pet pet={pet}/>
                                    </Grid>
                                )
                            })}
                        </AnimatePresence>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default AdoptionsPage;