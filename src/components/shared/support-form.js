import {
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    FormHelperText,
    Grid,
    OutlinedInput,
    Stack,
    Typography
} from "@mui/material";
import {useFormik} from "formik";
import * as yup from "yup";
import {
    CallOutlined,
    CloseOutlined,
    MailOutlined,
    Person2Outlined,
    VolunteerActivismOutlined
} from "@mui/icons-material";

const SupportForm = () => {

    const formik = useFormik({
        initialValues: {name: "", email: "", phone: "", message: ""},
        validationSchema: yup.object().shape({
            name: yup.string().required("Field required"),
            email: yup.string().email("Enter valid email").required("Field required"),
            phone: yup.string().required("Field required"),
            message: yup.string().required("Field required"),
        })
    });

    return (
        <Card
            variant="elevation"
            sx={{backgroundColor: "background.default"}}
            elevation={0}>
            <CardContent>
                <Box sx={{mb: 2}}>
                    <VolunteerActivismOutlined
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
                        Volunteering
                    </Typography>
                    <Typography variant="body2" sx={{color: "text.secondary", mb: 3}}>
                        You can join our team and help with animal care, cleaning and other tasks
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{color: "text.primary", fontWeight: 700, mb: 1}}>
                        I want to become a volunteer
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{color: "text.secondary", mb: 1}}>
                        Please fill out the form, and we will contact you
                    </Typography>
                </Box>
                <form onSubmit={formik.handleSubmit}>
                    <Stack spacing={2} sx={{mb: 4}}>
                        <Box>
                            <Typography variant="body2" sx={{color: "text.primary", fontWeight: 700, mb: 1}}>
                                Full name
                            </Typography>
                            <FormControl fullWidth={true} variant="outlined">
                                <OutlinedInput
                                    value={formik.values.name}
                                    placeholder="Your Name"
                                    name="name"
                                    color="primary"
                                    sx={{borderRadius: 2}}
                                    startAdornment={<Person2Outlined sx={{fontSize: 20, mr: 2}} color="secondary"/>}
                                    type="text"
                                    required={true}
                                    size="medium"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    error={Boolean(formik.touched.name && formik.errors.name)}
                                    fullWidth={true}
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <FormHelperText>
                                        {formik.touched.name && formik.errors.name}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Box>

                        <Box>
                            <Typography variant="body2" sx={{color: "text.primary", fontWeight: 700, mb: 1}}>
                                Email
                            </Typography>
                            <FormControl fullWidth={true} variant="outlined">
                                <OutlinedInput
                                    value={formik.values.email}
                                    placeholder="Your Email"
                                    name="email"
                                    sx={{borderRadius: 2}}
                                    startAdornment={<MailOutlined sx={{fontSize: 20, mr: 2}} color="secondary"/>}
                                    endAdornment={
                                        Boolean(formik.touched.email && formik.errors.email) && (
                                            <CloseOutlined color="error"/>
                                        )
                                    }
                                    type="email"
                                    required={true}
                                    size="medium"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    error={Boolean(formik.touched.email && formik.errors.email)}
                                    fullWidth={true}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <FormHelperText>
                                        {formik.touched.email && formik.errors.email}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Box>

                        <Box>
                            <Typography variant="body2" sx={{color: "text.primary", fontWeight: 700, mb: 1}}>
                                Phone number
                            </Typography>
                            <FormControl fullWidth={true} variant="outlined">
                                <OutlinedInput
                                    value={formik.values.phone}
                                    placeholder="Your Phone"
                                    name="phone"
                                    sx={{borderRadius: 2}}
                                    startAdornment={
                                        <CallOutlined sx={{fontSize: 20, mr: 2}} color="secondary"/>}
                                    type="tel"
                                    required={true}
                                    size="medium"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    error={Boolean(formik.touched.phone && formik.errors.phone)}
                                    fullWidth={true}
                                />
                                {formik.touched.phone && formik.errors.phone && (
                                    <FormHelperText>
                                        {formik.touched.phone && formik.errors.phone}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Box>
                    </Stack>
                    <Grid container={true}>
                        <Grid item={true} xs={12} md={3}>
                            <Button
                                fullWidth={true}
                                type="submit"
                                size="large"
                                disableElevation={true}
                                sx={{
                                    textTransform: "capitalize",
                                    color: "white",
                                    borderRadius: 2,
                                    fontWeight: 700,
                                    backgroundColor: "secondary.main",
                                    fontFamily: "SatrevaNova",
                                    "&:hover": {
                                        backgroundColor: "light.secondary",
                                        color: "secondary.main",
                                        transition: "all 500ms ease-out"
                                    }
                                }}>
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    )
}

export default SupportForm;