import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
import Blogimg from '../../assets/blog-image.jpg';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function BlogCard() {
    // const theme = useTheme();
    let sentence = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nislnisi consectetur nisi, euismod egestas nisi nisl eget consectetur sagittis."
    console.log(typeof (sentence.split(" ").slice(0, 10)));
    console.log(sentence.split(' ').slice(0, 10).join(' '))
    return (
        // <Box sx={{
        //     display: 'flex',
        //     flexDirection: 'column',
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //     my: '20px',
        // }}>
        <Card sx={{
            display: 'flex',
            width: '60%',
            height: '215px',
            my: '20px',
            background: 'rgba(26, 30, 39, 0.75)',
            color: 'white',
            backdropFilter: 'blur(16px) saturate(180%)',
            boxShadow: ' 0 0 40px rgba(8, 7, 16, 0.6)',
            borderRadius: '20px',
            border: '2px solid rgba(255, 255, 255, 0.1)',
        }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h4" sx={{ mb: '25px', fontSize: '35px' }}>
                        Blog Title
                    </Typography>
                    <Typography component="p" variant="p">
                        {
                            sentence.split(' ').slice(0, 15).join(' ')
                            // sentence
                        }
                    </Typography>
                    <Typography variant="subtitle1" component="div" style={{ marginTop: '5px', color: '#BEBEBE' }}>
                        -Author Name
                    </Typography>
                    <Button style={{
                        background: '#ffffff',
                        color: '#080710',
                        border: 'none',
                        borderRadius: '20px',
                        padding: '5px 10px',
                        fontSize: '11.5px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        marginTop: '10px',
                        hover: {
                            background: '#989898'
                        }
                    }} onClick={() => {
                        console.log("clicked")

                    }
                    }>Read More</Button>
                </CardContent>

            </Box>
            <CardMedia
                component="img"
                sx={{ ml: 5, width: 350, height: 210, borderRadius: '20px' }}
                image={Blogimg}
                alt="blogcardimg"
            />
        </Card >
        // </Box>
    );
}
