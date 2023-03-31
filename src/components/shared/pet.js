import {Button, Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Pet = ({pet}) => {
    return (
        <Link to={`/adoptions/${pet._id}/adopt`} style={{textDecoration: "none"}}>
            <Card elevation={0} sx={{backgroundColor: "background.paper"}}>
                <CardContent>
                    <CardMedia
                        src={pet.image}
                        component="img"
                        sx={{borderRadius: 0.5, mb: 2, height: 250, objectFit: "contain"}}
                    />
                    <Stack spacing={2}>
                        <Typography
                            align="center"
                            variant="body1"
                            sx={{fontFamily: "SatrevaNova", fontWeight: 700, color: "secondary.main"}}>
                            {`${pet.name}, `}
                            <Typography
                                variant="body2"
                                component="span"
                                sx={{color: "text.primary"}}>{pet.gender}</Typography>
                        </Typography>

                        <Stack direction="row" justifyContent="center">
                            <Link
                                to={`/adoptions/${pet._id}/adopt`}
                                style={{textDecoration: "none"}}>
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
                                    {`Adopt ${pet.name}`}
                                </Button>
                            </Link>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Link>
    )
}

export default Pet;