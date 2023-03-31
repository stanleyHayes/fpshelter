import React from "react";
import {Box, SwipeableDrawer} from "@mui/material";
import Header from "../headers/header";
import Footer from "../footers/footer";
import {motion} from "framer-motion";
import DrawerContent from "../shared/drawer-content";
import {useDispatch, useSelector} from "react-redux";
import {selectUI, UI_ACTION_CREATORS} from "../../redux/features/ui/ui-slice";

const Layout = ({children}) => {

    const {drawerOpen} = useSelector(selectUI);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <Box
                initial={{
                    y: "10vh",
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: 1
                    }
                }}
                exit={{
                    y: "-100vh",
                    opacity: 0,
                    duration: 0.3
                }}
                component={motion.div}>
                <Box
                    sx={{
                        minHeight: "100vh",
                        maxWidth: "100vw",
                        display: "flex",
                        flexDirection: "column",
                        overflowX: "hidden"
                    }}>
                    <Box>
                        <Header/>
                    </Box>
                    <Box sx={{flexGrow: 1, backgroundColor: "background.default", pt: {xs: 6, lg: 8}}}>
                        {children}
                    </Box>
                    <Box>
                        <Footer/>
                    </Box>

                </Box>
                <SwipeableDrawer
                    open={drawerOpen}
                    onOpen={() => dispatch(UI_ACTION_CREATORS.toggleDrawer(true))}
                    onClose={() => dispatch(UI_ACTION_CREATORS.toggleDrawer(false))}>
                    <DrawerContent/>
                </SwipeableDrawer>
            </Box>
        </React.Fragment>
    )
}

export default Layout;