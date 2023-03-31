import {Card, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const CategoryButton = ({category, selected, handleCategorySelect}) => {
    return
    (
        <Card
            onClick={() => handleCategorySelect(category.name)}
            elevation={1}
            sx={{
                backgroundImage: `url(${category.image})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: 200,
                display: "flex",
                alignItems: "flex-end",
                backgroundColor: selected ? "secondary.main" : "background.paper"
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

    )
}

export default CategoryButton;