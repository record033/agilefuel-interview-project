import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, Toolbar } from '@mui/material';

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Button color='inherit' onClick={() => navigate('/', { replace: true })}>
            Homepage
          </Button>
          <Button color='inherit' onClick={() => navigate('/filters', { replace: true })}>
            Search by filters
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
