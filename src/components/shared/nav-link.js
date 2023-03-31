import {Link, useLocation} from "react-router-dom";
import {Typography} from "@mui/material";

const NavLink = ({path, label}) => {

    const {pathname} = useLocation();

    return (
        <Link to={path} style={{textDecoration: "none"}}>
            <Typography
                variant="body2"
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
    )
}

export default NavLink;