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
            width: '70%',
            height: '200px',
            my: '20px',
            background: 'rgba(31, 31, 31, 0.13)',
            color: 'white',
            backdropFilter: 'blur(23px) saturate(50%)',
            boxShadow: ' 0 0 40px rgba(8, 7, 16, 0.6)',
            borderRadius: '20px',
            border: '2px solid rgba(255, 255, 255, 0.1)',
        }}
            sm={12} md={6} lg={10}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h4" sx={{ mb: '25px' }}>
                        Blog Title
                    </Typography>
                    <Typography component="p" variant="p">
                        {
                            sentence.split(' ').slice(0, 15).join(' ')
                            // sentence
                        }
                    </Typography>
                    <Button style={{
                        background: '#ffffff',
                        color: '#080710',
                        border: 'none',
                        borderRadius: '20px',
                        padding: '5px 5px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        marginTop: '15px',
                    }} onClick={() => {
                        console.log("clicked")

                    }
                    }>Read More</Button>
                </CardContent>

            </Box>
            <Box sx={{ display: 'flex', float: 'right', alignItems: 'flex-end', justifyContent: 'flex-end', pl: 1, pb: 1 }}>
                <Typography variant="body2" color="text.secondary" component="div">
                    Date
                </Typography>
            </Box>
            <CardMedia
                component="img"
                sx={{ ml: 25, width: 500, height: 200, borderRadius: '20px' }}
                image={Blogimg}
                alt="blogcardimg"
                sm={12} md={6} lg={4}
            />
        </Card >
        // </Box>
    );
}
