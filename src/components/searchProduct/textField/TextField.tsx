import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function FullWidthTextField() {
    return (
        <Box
            sx={{

            }}
        >
            <TextField fullWidth sx={{ m: 5}}  label="Search" placeholder="Product name" focused size="small"/>
        </Box>
    );
}
