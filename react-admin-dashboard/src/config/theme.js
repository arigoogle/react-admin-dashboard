import { createTheme } from "@mui/material";
import { green, grey, indigo } from "@mui/material/colors";


let theme = createTheme({
    palette:{
        primary:{
            main: indigo[500],
            normal : indigo['A700']
        },
        secondary:{
            main: indigo[50]
        },
        neutral: {
            light: grey[50],
            medium: grey[200],
            normal: grey[700],
            main: grey[900]
        },
        green: {
            main: green[800]
        }
    }
})