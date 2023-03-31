import {Card, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Category = ({category}) => {
    return (
        <Link to={`adoptions/${category.category.toLowerCase()}`} style={{textDecoration: "none"}}>
            <Card
                elevation={1}
                sx={{
                    backgroundImage: `url(${category.image})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: 200,
                    display: "flex",
                    alignItems: "flex-end"
                }}>
                <Card
                    sx={{
                        backgroundColor: "background.glass",
                        backdropFilter: "blur(5.5px)",
                        width: "100%",
                        py: 0.5
                    }}>
                    <Typography align="center" variant="h6" sx={{color: "text.glass"}}>{category.name}</Typography>
                </Card>
            </Card>
        </Link>
    )
}

export default Category;