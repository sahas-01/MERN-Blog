import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useLocation, Link } from 'react-router-dom';

const pages = ['Home', 'Write Blog', 'My Blogs'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        localStorage.removeItem('auth-token');
        localStorage.removeItem('userId');
        window.location.href = '/';
    }

    return (
        <AppBar position="static" sx={{
            background: 'rgba(17, 25, 40, 0.75)',
            backdropFilter: 'blur(23px) saturate(50%)',
            boxShadow: ' 0 0 40px rgba(8, 7, 16, 0.6)',
            // borderRadius: '20px',
            borderBottom: '2px solid rgba(255, 255, 255, 0.1)',
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Bloggr
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Bloggr
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <MenuItem onClick={handleOpenUserMenu}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/home"
                                sx={{
                                    mr: 1,
                                    display: { xs: 'none', md: 'flex' },
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    fontSize: '1.1rem'
                                }}
                            >
                                Home
                            </Typography>
                        </MenuItem>
                        <MenuItem onClick={handleOpenUserMenu}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/writeblog"
                                sx={{
                                    mr: 1,
                                    display: { xs: 'none', md: 'flex' },
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    fontSize: '1.1rem'
                                }}
                            >
                                Write blog
                            </Typography>

                        </MenuItem>
                        <MenuItem onClick={handleOpenUserMenu}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/myblogs"
                                sx={{
                                    mr: 1,
                                    display: { xs: 'none', md: 'flex' },
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    fontSize: '1.1rem',
                                }}
                            >
                                My Blogs
                            </Typography>

                        </MenuItem>
                        <MenuItem onClick={handleOpenUserMenu}>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/profile"
                                sx={{
                                    mr: 1,
                                    display: { xs: 'none', md: 'flex' },
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    fontSize: '1.1rem',
                                }}
                            >
                                Profile
                            </Typography>
                        </MenuItem>

                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Button variant="contained"
                            onClick={handleLogout}
                        >Logout</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
