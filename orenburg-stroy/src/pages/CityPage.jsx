/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';

import ClientForm from '../Components/ClientForm'
//import AboutCompany from '../pages/AboutCompany'
export default function CityPage({ city, menuItems, error, projectsCallback = (projects) => {  } }) {



    const projects = (city === undefined) ? null :

        <>
            <Box className="Grid" sx={{ width: '100%' }}>
                <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    {city.projects.map((project) => (
                        <Grid size={6} sx={{ objectFit: 'contain' }}>
                            <Card sx={{ maxHeight: 1240, boxShadow: 'none', backgroundColor: 'transparent' }} onClick={() => { projectsCallback(project); }} >
                                <CardActionArea>

                                    <CardContent >
                                        <Typography variant="h5" component="div">
                                            <Typography > {project.name} </Typography>
                                            
                                        </Typography>
                                    </CardContent>

                                    {project.images.map((image) => (
                                        <CardMedia
                                            component="img"
                                            maxHeight='500'
                                            image={`/${image.path}`}
                                            alt={image.alt}
                                            sx={{ objectFit: "contain", borderRadius: 2 }} />

                                    ))};

                                    <CardContent sx={{ justifyContent: 'flex-start', m: 0 }}>
                                        <Typography variant="h5" component="div">
                                            <Typography > {project.description} </Typography>
                                        </Typography>
                                    </CardContent>

                                </CardActionArea>
                            </Card>

                        </Grid>
                    ))};

                </Grid>
            </Box>
        </>



    return (
        <>
            <Grid sx={{mt: 5, mx: 0, px: 0} }>
                {projects ? <div> {projects} </div> : null}
        
                < ClientForm />
               {/* <AboutCompany  />*/}
            </Grid>
        </>
    );
}