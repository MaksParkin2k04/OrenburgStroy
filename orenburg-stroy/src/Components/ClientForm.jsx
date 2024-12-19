import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';



const ariaLabel = { 'aria-label': 'description' };

export default function Form({ info } ) {


    const infos = (info === undefined) ? null :
        <>

            {info.infos?.map((info) => (

                <Typography key={'i1'} variant="h5" component="div">

                    <Typography > {info.name} </Typography>

                </Typography>

            ))};
        </>



    return (
        <form className='form' style={{ backgroundColor: '#4e5774', color: '#ffffff', marginLeft: '0' }}>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 3 } }}
                noValidate
                autoComplete="off"

            >

                <Typography gutterBottom variant="h5" component="div" sx={{ mx: 3, my: 3, pt: 3 }}>
                    Закажите консультанцию
                </Typography>
                <Typography variant="body2" sx={{ mx: 3, my: 3 }}>
                    Оставьте заявку, и мы свяжемся с вами в ближайшее время


                    {infos }

                </Typography>



                <Input placeholder="Ваше имя" color='#ffffff' inputProps={ariaLabel} sx={{ color: '#ffffff' }} />
                <Input placeholder="Ваш номер телефона" color='#ffffff' inputProps={ariaLabel} sx={{ color: '#ffffff' }} />
                <Button variant="outlined" color='white' endIcon={<SendIcon />} sx={{ mx: 3, my: 3, color: '#ffffff' }}>
                    Отправить заявку
                </Button>
            </Box>
        </form>
    );
}