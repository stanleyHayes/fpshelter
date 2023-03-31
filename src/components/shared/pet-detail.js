import {Box, Card, CardContent, CardMedia, Chip, Grid, Skeleton, Stack, Typography} from "@mui/material";

const PetDetail = ({pet, error, loading}) => {
    return (
        <Stack spacing={4}>
            <Box item={true} xs={12}>
                {loading ? (
                    <Skeleton animation="wave" variant="rectangular" sx={{width: "100%", height: 300}}/>
                ) : (
                    <CardMedia
                        component="img"
                        src={pet?.image}
                        sx={{
                            width: "100%",
                            height: {xs: 300, lg: 300},
                            objectFit: "contain",
                            borderRadius: 1
                        }}
                    />
                )}
            </Box>
            <Box>
                <Card elevation={0} variant="elevation" sx={{}}>
                    <CardContent>
                        <Stack direction="column" spacing={2}>
                            {loading ? (
                                <Skeleton animation="wave" variant="text" sx={{width: "100%"}}/>
                            ) : (
                                <Typography
                                    sx={{
                                        fontFamily: "SatrevaNova",
                                        fontWeight: 700,
                                        color: "secondary.main"
                                    }}
                                    variant="h6">
                                    {pet?.name}
                                </Typography>
                            )}

                            {loading ? (
                                <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                                    <Skeleton animation="wave" variant="text" sx={{width: "100%"}}/>
                                    <Typography
                                        sx={{color: "text.secondary", fontWeight: 700}}
                                        variant="h4">
                                        &middot;
                                    </Typography>
                                    <Skeleton animation="wave" variant="text" sx={{width: "100%"}}/>
                                    <Typography
                                        sx={{color: "text.secondary", fontWeight: 700}}
                                        variant="h4">
                                        &middot;
                                    </Typography>
                                    <Skeleton animation="wave" variant="text" sx={{width: "100%"}}/>
                                </Stack>
                            ) : (
                                <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                                    <Typography sx={{color: "text.secondary"}} variant="body1">{pet?.breed}</Typography>
                                    <Typography
                                        sx={{color: "text.secondary", fontWeight: 700}}
                                        variant="h4">
                                        &middot;
                                    </Typography>
                                    <Typography
                                        sx={{color: "text.secondary"}}
                                        variant="body1">{pet?.gender}</Typography>
                                    <Typography
                                        sx={{color: "text.secondary", fontWeight: 700}}
                                        variant="h4">
                                        &middot;
                                    </Typography>
                                    <Typography
                                        sx={{color: "text.secondary"}}
                                        variant="body1">{pet?.category}</Typography>
                                </Stack>
                            )}

                            <Typography sx={{color: "text.secondary"}} variant="body2">{pet?.description}</Typography>

                            <Box>
                                <Typography sx={{color: "text.primary", mb: 1}} variant="body2">Skills</Typography>
                                {pet?.skills.length === 0 ? (
                                    <Typography sx={{color: "text.secondary"}} variant="body1">
                                        {`${pet?.name} has no known skills`}
                                    </Typography>
                                ) : (
                                    <Grid container={true} spacing={2}>
                                        {pet?.skills.map((skill, index) => {
                                            return (
                                                <Grid item={true} xs="auto" key={index}>
                                                    <Chip variant="filled" label={skill} color="secondary"/>
                                                </Grid>
                                            )
                                        })}
                                    </Grid>
                                )}
                            </Box>
                            <Box>
                                <Typography sx={{color: "text.primary", mb: 1}} variant="body2">
                                    Allergies / Conditions
                                </Typography>
                                {pet?.allergies.length === 0 ? (
                                    <Typography sx={{color: "text.secondary"}} variant="body1">
                                        {`${pet?.name} has no known conditions`}
                                    </Typography>
                                ) : (
                                    <Grid container={true} spacing={2}>
                                        {pet?.allergies.map((allergy, index) => {
                                            return (
                                                <Grid item={true} xs="auto" key={index}>
                                                    <Chip variant="filled" label={allergy} color="secondary"/>
                                                </Grid>
                                            )
                                        })}
                                    </Grid>
                                )}
                            </Box>
                        </Stack>
                    </CardContent>
                </Card>
            </Box>
        </Stack>
    )
}

export default PetDetail;