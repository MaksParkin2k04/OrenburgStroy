import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const text = ['Вот уже 19 лет мы возводим тысячи комфортных квадратных метров для новосёлов Оренбурга.']
export default function AboutCompany() {

    return (

        <Box>
            <Typography variant="h6" component="div">
                <Typography >  О компании </Typography>
            </Typography>

            <Typography variant="h6" component="div">
                <Typography >  { text} </Typography>
            </Typography>

            <Typography variant="h6" component="div">
                <Typography >   Наша команда профессианалов успешно реализовала такие проекты как:
                    {/*{ text }*/}

                </Typography>
            </Typography>
        </Box>

    );

}