import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function AboutCompanyPage({ title, content }) {

    return (
        <Box>
            <Typography variant="h6" component="div">
                <Typography>{title}</Typography>
            </Typography>

            <Typography variant="h6" component="div">
                <Typography>{content}</Typography>
            </Typography>

            {/*<Typography variant="h6" component="div">*/}
            {/*    <Typography >   Наша команда профессианалов успешно реализовала такие проекты как:*/}
            {/*        */}{/*{ text }*/}

            {/*    </Typography>*/}
            {/*</Typography>*/}
        </Box>

    );

}