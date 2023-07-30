import { AccountBox, Article, Group, Home, ModeNight, Person, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, Switch, Typography } from '@mui/material'
import React from 'react'

const Sidebar = ({ mode, setMode }) => {
  return (
    <Box flex={1} p={2} sx={{ display: {xs: "none", sm: "block"}}}>
        <Box position="fixed">
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href='#'>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <Typography>Home</Typography>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href='#'>
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <Typography>Article</Typography>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href='#'>
                <ListItemIcon>
                  <Group />
                </ListItemIcon>
                <Typography>Group</Typography>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href='#'>
                <ListItemIcon>
                  <Storefront />
                </ListItemIcon>
                <Typography>Store</Typography>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href='#'>
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <Typography>Person</Typography>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href='#'>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <Typography>Settings</Typography>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href='#'>
                <ListItemIcon>
                  <AccountBox />
                </ListItemIcon>
                <Typography>Account</Typography>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href='#'>
                <ListItemIcon>
                  <ModeNight />
                </ListItemIcon>
                <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
    </Box>
  )
}

export default Sidebar