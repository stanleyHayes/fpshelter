import {useLocation} from "react-router-dom";
import {Box, Typography} from "@mui/material";
import {Link} from "react-scroll";
import {UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";
import {useDispatch} from "react-redux";

const NavigationLink = ({path, label}) => {

    const {pathname} = useLocation();
    const dispatch = useDispatch();

    return (
        <Box onClick={() => dispatch(UI_ACTION_CREATORS.toggleDrawer(false))}>
            <Link style={{cursor: "pointer"}} to={path} smooth={true} spy={true} offset={50} duration={500} delay={100}>
                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: 500,
                        color: pathname === path ? "colors.accent" : "text.secondary",
                        "&:hover": {
                            color: "secondary.main",
                            transition: "all 300ms"
                        }
                    }}>
                    {label}
                </Typography>
            </Link>
        </Box>
    )
}

export default NavigationLink;