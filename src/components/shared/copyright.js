import {Stack, Typography} from "@mui/material";

const Copyright = () => {
    return (
        <Stack sx={{py: 3}}>
            <Typography variant="body2" sx={{color: "text.primary", fontFamily: "SatrevaNova", fontWeight: "bold"}} align="center">
                <Typography component="span" variant="body2" sx={{color: "text.primary", fontWeight: "bold"}} align="center">
                    2023{" "}
                </Typography>
                &copy; PF Shelter
            </Typography>
        </Stack>
    )
}

export default Copyright;