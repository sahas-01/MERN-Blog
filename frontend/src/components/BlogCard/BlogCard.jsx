import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function BlogCard({
    title,
    description,
    userName,
    isUser,
    tags,
}) {
    return (
        <>
            <Card sx={{
                display: 'flex',
                width: '45%',
                height: '215px',
                my: '20px',
                background: 'rgba(26, 30, 39, 0.75)',
                color: 'white',
                backdropFilter: 'blur(16px) saturate(180%)',
                boxShadow: ' 0 0 40px rgba(8, 7, 16, 0.6)',
                borderRadius: '20px',
                border: '2px solid rgba(255, 255, 255, 0.1)',
            }}>
                <Box sx={{ display: 'flex' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h4" sx={{ mb: '25px', fontSize: '35px' }}>
                            {isUser ?
                                <>
                                    <EditIcon style={{ paddingTop: '5px', margin: '0px 5px', cursor: 'pointer' }} />
                                    <DeleteIcon style={{ paddingTop: '5px', margin: '0px 10px', cursor: 'pointer' }} />

                                </>
                                : null}
                            {
                                title
                            }
                        </Typography>
                        <Typography component="p" variant="p">
                            {
                                description.split(' ').slice(0, 7).join(' ') + '...'
                            }
                        </Typography>
                        <Typography variant="subtitle1" component="div" style={{ marginTop: '9px', color: '#BEBEBE' }}>
                            Posted By: {
                                userName
                            }
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '7.5px' }}>
                            <Typography variant="subtitle1" component="div" style={{ marginTop: '5px', color: '#BEBEBE' }}>
                                Tags:
                            </Typography>
                            {
                                tags.map((tag, index) => {
                                    return (
                                        <Typography variant="p" component="p" style={{ background: 'white', color: '#000', cursor: 'pointer', marginLeft: '10px', marginTop: '7.5px', padding: '7px', borderRadius: '10px' }}>
                                            #{
                                                tag
                                            }
                                        </Typography>
                                    )
                                }
                                )
                            }
                        </Box>
                    </CardContent>

                </Box>
            </Card>
        </>
    )
}
