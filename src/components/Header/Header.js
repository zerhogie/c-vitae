import React from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import foto from '../../foto-cv.png';
import './Header.scss';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar className="toolbar">
                <Avatar className="toolbar__foto"
                    variant="square"
                    alt="Enrique Rodríguez Castañeda"
                    src={foto}
                    sx={{ width: 64, height: 64 }} />
                <Box className="toolbar__presentation">
                    <Box className="toolbar__presentation__data">
                        <Typography variant="h4">
                            <strong>Enrique Rodríguez Castañeda</strong>
                        </Typography>
                    </Box>
                    <Box className="toolbar__presentation__data" marginTop="16px">
                        <Typography variant="subtitle1">
                            <strong>Email:</strong> zerh0gie@hotmail.com
                        </Typography>
                        <Typography variant="subtitle1">
                            <strong>Teléfono:</strong> 644523598
                        </Typography>
                        <Typography variant="subtitle1">
                            <strong>Ubicación:</strong> A Coruña, España
                        </Typography>
                        <Button variant="contained"
                            color="secondary"
                            onClick={() => window.open('https://github.com/zerhogie', '_blank', 'noopener,noreferrer')}
                        >
                            <GitHubIcon /> <div class="space"> GitHub: zerhogie</div>
                        </Button>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;