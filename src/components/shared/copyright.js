import {Stack, Typography} from "@mui/material";

const Copyright = () => {
    return (
        <Stack sx={{py: 3}}>
            <Typography variant="body2" sx={{color: "white", fontFamily: "SatrevaNova", fontWeight: "bold"}} align="center">
                2023 &copy; PF Shelter
            </Typography>
        </Stack>
    )
}

export default Copyright;