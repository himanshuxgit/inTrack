import { AppBar, Box, Typography, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "primary.main",
        top: "auto",
        bottom: 0,
        px: 2,
        py: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Empty Box to balance the toggle button placement */}
      <Box sx={{ position: 'absolute', left: 16 }} />
      
      {/* Typography component as a flex container */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexShrink: 0,
          justifyContent: 'center',
        }}
      >
        <Typography variant="subtitle1" color="inherit">
          Made by Himanshu |
        </Typography>
        <IconButton
          href="https://github.com/himanshuxgit/inTrack"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          <GitHubIcon />
        </IconButton>
        <Typography variant="subtitle1" color="inherit">
          | {year}
        </Typography>
      </Box>

      {/* Theme Toggle Button */}

    </AppBar>
  );
};

export default Footer;
