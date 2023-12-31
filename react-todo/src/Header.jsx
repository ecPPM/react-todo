import { AppBar, Box, Toolbar, Typography, Badge, IconButton, Menu, MenuItem } from "@mui/material";
import { Menu as MenuIcon, MoreVert as MoreVertIcon } from "@mui/icons-material";
import { useContext, useState } from "react";
import { ThemeContext } from "./ThemedApp";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Header({ count, clear, toggleDrawer }) {
  const { mode, setMode } = useContext(ThemeContext);

  const [showMenu, setShowMenu] = useState(false);

  return (
    <Box sx={{ flexGrow: 1, mb: 3 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{flexGrow: 1}}>
            <IconButton onClick={toggleDrawer()}>
              <MenuIcon />
            </IconButton>
            
            <Badge badgeContent={count} color="secondary" sx={{ mr: 2 }}>
              <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
                Todo App
              </Typography>
            </Badge>
          </Box>
  
          {mode === "dark" ? (
            <IconButton
              onClick={() => {
                setMode("light");
              }}
            >
              <LightModeIcon />
            </IconButton>
          ) : (
            <IconButton
              sx={{ color: "white" }}
              onClick={() => {
                setMode("dark");
              }}
            >
              <DarkModeIcon />
            </IconButton>
          )}

          <IconButton onClick={e => setShowMenu(e.currentTarget)}>
            <MoreVertIcon />
          </IconButton>

          <Menu
            anchorEl={showMenu}
            open={Boolean(showMenu)}
            onClose={()=> setShowMenu(false)}
          >
            <MenuItem
              onClick={() => {
                clear();
                setShowMenu(false);
              }}

              sx={{ width: 200 }}
            >
              Clear
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
