import {createTheme} from "@mui/material";

const lightTheme = createTheme({
    typography: {
        fontFamily: "Gilroy, UberMoveAR, Manrope, SamsungSans, SamsungSharpSans, Urbanist, RayleighGlamour, SatrevaNova, OgelicRegular"
    },
    palette: {
        primary: {
            main: "#FFFFFF"
        },
        secondary: {
            main: "#112351"
        },
        background: {
            default: "#FFFFFF",
            paper: "#f9f9f9",
            dark: "#f9f9fb",
            accent: "#FFF6E9",
            glass: "rgba(0, 0, 0, 0.55)"
        },
        text: {
            primary: "#0b1d3c",
            secondary: "#9aa2ae",
            title: "#3d7df6",
            accent: "#e54944",
            glass: "rgba(255, 255, 255, 0.85)"
        },
        light: {
            primary: "rgba(63,146,103,0.15)",
            secondary: "rgba(17,35,81,0.15)",
            accent: "rgba(247,212,85,0.15)",
            black: "rgba(20,21,33,0.15)",
            purple: "rgba(101,73,248,0.15)"
        },
        colors: {
            accent: "#e54944",
            footer: "#000137",
            black: "#141521",
            purple: "#6549f8"
        },
        icon: {
            accent: "#e54944",
            secondary: "#112351",
            accentBackground: "rgba(11,29,60,0.15)",
            secondaryBackground: "rgba(17,35,81,0.15)"
        },
        divider: "rgba(17,35,81,0.3)",
        mode: "light",
    },
    shape: {
        borderRadius: 32
    }
});

const darkTheme = createTheme({
    typography: {
        fontFamily: "Gilroy, UberMoveAR, Manrope, SamsungSans, SamsungSharpSans, Urbanist, RayleighGlamour, SatrevaNova, OgelicRegular"
    },
    palette: {
        primary: {
            main: "#252729"
        },
        secondary: {
            main: "#e54944"
        },
        background: {
            default: "#1b1a1a",
            paper: "#252729",
            secondary: "#EDF4FF",
            accent: "#FFF6E9",
            glass: "rgba(0, 0, 0, 0.85)"
        },
        text: {
            primary: "#fdfdfd",
            secondary: "#8a8a88",
            title: "#3d7df6",
            accent: "#c89743",
            glass: "rgba(255, 255, 255, 0.85)"
        },
        light: {
            primary: "rgba(63,146,103,0.15)",
            secondary: "rgba(229,73,68,0.15)",
            accent: "rgba(247,212,85,0.15)",
            black: "rgba(20,21,33,0.15)",
            purple: "rgba(101,73,248,0.15)"
        },
        colors: {
            accent: "#FBA024",
            footer: "#000137",
            green: "#3f9267"
        },
        icon: {
            accent: "#c89743",
            secondary: "#e54944",
            accentBackground: "rgba(200,151,67,0.2)",
            secondaryBackground: "rgba(229,73,68,0.15)"
        },
        mode: "dark",
        divider: "rgba(229,73,68,0.3)"
    },
    shape: {
        borderRadius: 32
    }
});

export const THEMES = {darkTheme, lightTheme};