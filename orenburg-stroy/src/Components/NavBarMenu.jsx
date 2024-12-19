import * as React from 'react';

import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Grid from '@mui/material/Grid2';



    
    

export default function NavBarMenu({ menuItems }) {

 


    const projects = (menuItems === undefined) ? null :

       

        <>

            {menuItems.projects?.map((project) => (

                <Typography key={project.id}>
                    {project.name}
                </Typography>

            ))};
        </>

    

    return (
        <> 
            <Grid sx={{ mt: 5, mx: 0, px: 0 }}>
                {projects ? <div> {projects} </div> : null}
        </Grid>
        </>
    );
}
