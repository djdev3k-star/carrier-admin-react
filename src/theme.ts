// theme.ts
import { createTheme } from '@mui/material/styles';

// Example: Custom palette and typography
const myTheme = createTheme({
    palette: {
        primary: {
            main: '#03274cff', // Custom blue
        },
        secondary: {
            main: '#247ec2ff', // Custom pinkish
        },
        background: {
            default: '#f5f5f5',
            paper: '#fff',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h6: {
            fontWeight: 600,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none', // disable uppercase
                },
            },
        },
    },
});

export default myTheme;
