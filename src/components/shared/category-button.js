import {Card, Typography} from "@mui/material";


const CategoryButton = ({category, selected, handleCategorySelect}) => {
    return (
        <Card
            onClick={() => handleCategorySelect(category.category)}
            elevation={1}
            sx={{
                backgroundImage: `url(${category.image})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: 200,
                display: "flex",
                alignItems: "flex-end",
                backgroundColor: selected ? "light.secondary" : "background.paper",
                cursor: "pointer"
            }}>
            <Card
                sx={{
                    backgroundColor: "background.glass",
                    backdropFilter: "blur(5.5px)",
                    width: "100%",
                    py: 0.5
                }}>
                <Typography
                    align="center"
                    variant="body1"
                    sx={{color: selected ? "secondary.main" : "text.glass"}}>{category.name}</Typography>
            </Card>
        </Card>

    )
}

export default CategoryButton;