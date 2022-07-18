import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';

export default function BlogCard({
    title,
    description,
    userName,
    isUser,
    tags,
    blogId,
}) {
    const navigate = useNavigate();
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarStatus({ severity: "", open: false, message: "" })
    };
    const handleEdit = () => {
        console.log(blogId);
        navigate(`/myblog/${blogId}`);
    }
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const [snackbarStatus, setSnackbarStatus] = useState({ severity: "", open: false, message: "" });
    const handleDelete = () => {
        console.log(blogId);
        fetch(`${process.env.REACT_APP_API_URL}/blog/deleteblog/${blogId}`, {
            method: 'DELETE',
            headers: {
                'auth-token': localStorage.getItem('auth-token'),
            },
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setTimeout(() => {
                    navigate('/home');
                }
                    , 2000);
                setSnackbarStatus({ severity: "success", open: true, message: "Blog deleted successfully" });
            }
            )
            .catch(err => {
                setSnackbarStatus({ severity: "error", open: true, message: "Error deleting blog" });
                console.log(err)
            });
    }




    const matches = useMediaQuery('(min-width:750px)');
    return (
        matches ? (

            <>
                <Snackbar open={snackbarStatus.open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                    <Alert onClose={handleClose} severity={snackbarStatus.severity} sx={{ width: '100%' }}>
                        {snackbarStatus.message}
                    </Alert>
                </Snackbar>
                <Card sx={{
                    width: '55%',
                    height: '215px',
                    display: 'flex',
                    my: '20px',
                    background: 'rgba(26, 30, 39, 0.75)',
                    color: 'white',
                    backdropFilter: 'blur(16px) saturate(180%)',
                    boxShadow: ' 0 0 40px rgba(8, 7, 16, 0.6)',
                    borderRadius: '20px',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography
                            xs={12}
                            component="div" variant="h4" sx={{ mb: '25px', fontSize: '35px' }}>
                            {isUser ?
                                <>
                                    <EditIcon style={{ paddingTop: '5px', margin: '0px 5px', cursor: 'pointer' }}
                                        onClick={() => {
                                            handleEdit();
                                        }
                                        }
                                    />
                                    <DeleteIcon style={{ paddingTop: '5px', margin: '0px 10px', cursor: 'pointer' }}
                                        onClick={() => {
                                            handleDelete();
                                        }
                                        }
                                    />

                                </>
                                : null}
                            {
                                title
                            }
                        </Typography>
                        <Typography component="p" variant="p">
                            {
                                description.split(' ').slice(0, 8).join(' ') + '...'
                            }
                        </Typography>
                        <Typography variant="subtitle1" component="div" style={{ marginTop: '9px', color: '#BEBEBE' }}>
                            Posted By: {
                                userName
                            }
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '7.5px', flexWrap: 'wrap' }}>
                            <Typography variant="subtitle1" component="div" style={{ marginTop: '5px', color: '#BEBEBE' }}>
                                Tags:
                            </Typography>
                            {
                                tags.map((tag, index) => {
                                    return (
                                        <Box key={index}
                                            sx={{
                                                display: 'inline-block',
                                                // alignItems: 'center',
                                                justifyContent: 'space-between',
                                                margin: '0px 5px',
                                                borderRadius: '5px',
                                                background: 'white',
                                                borderRadius: '10px',
                                                padding: '6px',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    background: '#BEBEBE',
                                                    color: 'white',
                                                }
                                            }}
                                        >

                                            <Typography variant="p" component="p" color="black">
                                                #{
                                                    tag
                                                }
                                            </Typography>
                                        </Box>
                                    )
                                }
                                )
                            }
                        </Box>
                    </CardContent>
                </Card>
            </>
        ) : (
            <>

                <Card
                    sx={{
                        display: 'flex',
                        width: '100%',
                        minHeight: '0',
                        flexWrap: 'wrap',
                        margin: '20px',
                        background: 'rgba(26, 30, 39, 0.75)',
                        color: 'white',
                        backdropFilter: 'blur(16px) saturate(180%)',
                        boxShadow: ' 0 0 40px rgba(8, 7, 16, 0.6)',
                        borderRadius: '20px',
                        border: '2px solid rgba(255, 255, 255, 0.1)',
                    }}>
                    <CardContent sx={{
                        flexWrap: 'wrap',
                    }}>
                        <Typography
                            xs={12}
                            component="div" variant="h4" sx={{ mb: '25px', fontSize: '35px' }}>
                            {isUser ?
                                <>
                                    <EditIcon style={{ paddingTop: '5px', margin: '0px 5px', cursor: 'pointer' }}
                                        onClick={() => {
                                            handleEdit();
                                        }
                                        }
                                    />
                                    <DeleteIcon style={{ paddingTop: '5px', margin: '0px 10px', cursor: 'pointer' }}
                                        onClick={() => {
                                            handleDelete();
                                        }
                                        }
                                    />
                                </>
                                : null}
                            {
                                title
                            }
                        </Typography>
                        <Typography component="p" variant="p">
                            {
                                description.split(' ').slice(0, 5).join(' ') + '...'
                            }
                        </Typography>
                        <Typography variant="subtitle1" component="div" style={{ marginTop: '9px', color: '#BEBEBE' }}>
                            Posted By: {
                                userName
                            }
                        </Typography>
                        <Box sx={{
                            marginTop: '7.5px',
                            flex: '1',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                        }}>
                            <Typography variant="subtitle1" component="div" style={{ marginTop: '5px', color: '#BEBEBE' }}>
                                Tags:
                                {
                                    tags.map((tag, index) => {
                                        return (

                                            <Typography variant="span" component="span" color="black"
                                                style={{
                                                    margin: '0px 5px',
                                                    borderRadius: '5px',
                                                    background: 'white',
                                                    borderRadius: '10px',
                                                    padding: '6px',
                                                    cursor: 'pointer',
                                                    overflow: 'auto',
                                                }}
                                            >
                                                #{
                                                    tag
                                                }
                                            </Typography>
                                        )
                                    }
                                    )

                                }
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </>
        )
    )

}

