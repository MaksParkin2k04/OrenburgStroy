/* eslint-disable no-undef */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';



export default function Cards({ city, error }) {



    const projects = (city === undefined) ? null : city.projects.map((project) => (

        <>
            <Box className="Grid" sx={{ width: '100%' }}>
                <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid size={6} sx={{ objectFit: 'contain' }} >

                        <Card sx={{ maxHeight: 1240, boxShadow: 'none', backgroundColor: 'transparent' }} >
                            <CardActionArea>
                                <CardContent >
                                    <Typography gutterBottom variant="h5" component="div"

                                    >
                                      
                                        <Typography sx={{ textAlign: 'left' }}> {project.name} </Typography>

                                    </Typography>

                                </CardContent>


                                <CardMedia
                                    component="img"
                                    maxHeight='500'
                                    image="../src/assets/221.jpg"
                                    alt="green iguana"
                                    sx={{ objectFit: "contain", borderRadius: 2 }}


                                />

                                <div>{project.images.map((image) => (<img src={`/${image.path}`} alt={image.alt} />))}</div>
                                <CardContent>
                                    <Typography sx={{ textAlign: 'left' }} > {project.description} </Typography>
                                    <Typography sx={{ textAlign: 'left' }}> {project.description} </Typography>
                              
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Grid>
                </Grid>
            </Box>


        </>

    ));
   
    return (
        <>
        <h1>fff</h1>

            {city ? <div> {projects} </div> : null}

            
        </>
    );

}


