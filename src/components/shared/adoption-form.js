import {
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    FormHelperText,
    OutlinedInput,
    Stack,
    Typography
} from "@mui/material";
import {useFormik} from "formik";
import * as yup from "yup";
import {CallOutlined, CloseOutlined, MailOutlined, Person2Outlined} from "@mui/icons-material";

const AdoptionForm = () => {

    const formik = useFormik({
        initialValues: {name: "", email: "", phone: "", message: ""},
        validationSchema: yup.object().shape({
            name: yup.string().required("Field required"),
            email: yup.string().email("Enter valid email").required("Field required"),
            phone: yup.string().required("Field required"),
            proper_condition: yup.string().required("Field required"),
            other_pets: yup.string().required("Field required"),
            pet_advice: yup.string().required("Field required"),
        })
    });

    return (
        <Card
            variant="elevation"
            sx={{backgroundColor: "background.default"}}
            elevation={0}>
            <CardContent>
                <form onSubmit={formik.handleSubmit}>
                    <Stack spacing={2} sx={{mb: 4}}>
                        <Box>
                            <Typography variant="body2" sx={{color: "text.secondary", mb: 1}}>
                                Full name
                            </Typography>
                            <FormControl fullWidth={true} variant="outlined">
                                <OutlinedInput
                                    value={formik.values.name}
                                    placeholder="Your Name"
                                    name="name"
                                    color="secondary"
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
                            <Typography variant="body2" sx={{color: "text.secondary", mb: 1}}>
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
                            <Typography variant="body2" sx={{color: "text.secondary", mb: 1}}>
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

                        <Box>
                            <Typography variant="body2" sx={{color: "text.secondary", mb: 1}}>
                                Do you have proper conditions for an animal at home?
                            </Typography>
                            <FormControl fullWidth={true} variant="outlined">
                                <OutlinedInput
                                    value={formik.values.proper_condition}
                                    placeholder="Your message here"
                                    name="proper_condition"
                                    sx={{borderRadius: 2}}
                                    type="text"
                                    required={true}
                                    size="medium"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    error={Boolean(formik.touched.proper_condition && formik.errors.proper_condition)}
                                    fullWidth={true}
                                />
                                {formik.touched.proper_condition && formik.errors.proper_condition && (
                                    <FormHelperText>
                                        {formik.touched.proper_condition && formik.errors.proper_condition}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Box>

                        <Box>
                            <Typography variant="body2" sx={{color: "text.secondary", mb: 1}}>
                                Do you have other pets?
                            </Typography>
                            <FormControl fullWidth={true} variant="outlined">
                                <OutlinedInput
                                    value={formik.values.other_pets}
                                    placeholder="Your message here"
                                    name="other_pets"
                                    sx={{borderRadius: 2}}
                                    type="text"
                                    required={true}
                                    size="medium"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    error={Boolean(formik.touched.other_pets && formik.errors.other_pets)}
                                    fullWidth={true}
                                />
                                {formik.touched.other_pets && formik.errors.other_pets && (
                                    <FormHelperText>
                                        {formik.touched.other_pets && formik.errors.other_pets}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Box>

                        <Box>
                            <Typography variant="body2" sx={{color: "text.secondary", mb: 1}}>
                                Do you need our pet care advice?
                            </Typography>
                            <FormControl fullWidth={true} variant="outlined">
                                <OutlinedInput
                                    value={formik.values.pet_advice}
                                    placeholder="Your message here"
                                    name="pet_advice"
                                    sx={{borderRadius: 2}}
                                    type="text"
                                    required={true}
                                    size="medium"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    error={Boolean(formik.touched.pet_advice && formik.errors.pet_advice)}
                                    fullWidth={true}
                                />
                                {formik.touched.pet_advice && formik.errors.pet_advice && (
                                    <FormHelperText>
                                        {formik.touched.pet_advice && formik.errors.pet_advice}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Box>
                    </Stack>

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
                </form>
            </CardContent>
        </Card>
    )
}

export default AdoptionForm;