import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import {CreditCardOutlined, MoneyOutlined} from "@mui/icons-material";
import SupportForm from "./support-form";

const SupportSection = () => {
    return (
        <Box sx={{width: "100%"}}>
            <Container maxWidth="lg">
                <Box sx={{mb: 4}}>
                    <Stack direction="column" spacing={2}>
                        <Box>
                            <Typography
                                align="center"
                                variant="h4"
                                sx={{color: "colors.accent", fontFamily: "SatrevaNova", fontWeight: 700}}>
                                Shelter{" "}
                                <Typography
                                    component="span"
                                    variant="h4" sx={{
                                    color: "secondary.main",
                                    fontFamily: "SatrevaNova",
                                    fontWeight: 700
                                }}>
                                    Support
                                </Typography>
                            </Typography>
                        </Box>
                        <Box>
                            <Typography align="center" variant="body1" sx={{color: "text.secondary"}}>
                                How can you help the shelter? Here are some options
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
                <Grid
                    container={true}
                    spacing={4}
                    justifyContent="space-between">
                    <Grid item={true} xs={12} md={6}>
                        <Box>
                            <MoneyOutlined
                                sx={{
                                    color: "icon.secondary",
                                    padding: 1,
                                    fontSize: 40,
                                    borderRadius: "100%",
                                    backgroundColor: "icon.secondaryBackground",
                                    mb: 4
                                }}
                            />
                            <Typography
                                variant="body1"
                                sx={{color: "text.primary", fontWeight: 600, mb: 1}}>
                                Financial support
                            </Typography>
                            <Typography variant="body2" sx={{color: "text.secondary", mb: 3}}>
                                You can donate to help provide food, medical care, and other necessities for
                                the animals in the shelter
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{color: "text.primary", fontWeight: 700, mb: 1}}>
                                I want to help financially
                            </Typography>
                            <Button
                                size="large"
                                startIcon={<CreditCardOutlined/>}
                                sx={{mb: 1, color: "colors.accent", textTransform: "none"}}>
                                Account to receive donation
                            </Button>
                            <Typography
                                variant="body1"
                                sx={{color: "text.secondary", mb: 1}}>
                                PF Shelter
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{color: "text.secondary", mb: 3}}>
                                1234 5678 1234 5678
                            </Typography>

                            <Button
                                startIcon={<CreditCardOutlined/>}
                                sx={{mb: 1, color: "colors.accent", textTransform: "none"}}>
                                PayPal
                            </Button>
                            <Typography
                                variant="body2"
                                sx={{color: "text.secondary"}}>
                                payment@pfshelter.org
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item={true} xs={12} md={6}>
                        <Box><SupportForm/></Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default SupportSection;