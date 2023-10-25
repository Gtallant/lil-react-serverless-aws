import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import HomeIcon from "../assets/icons/HomeIcon";
import PhoneIcon from "../assets/icons/PhoneIcon";
import LinkedinIcon from '../assets/icons/Linkedin';
import GithubIcon from '../assets/icons/GithubIcon';
import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const theme = useTheme();

  const content = {
    title: 'Contact',
    entries: [
      {
        title: 'Denver, CO',
        subtitle: 'Location',
        icon: () => <HomeIcon color={theme.palette.primary.contrastText} />,
      },
      {
        title: '(404) 993 - 4342',
        subtitle: 'Cell Number',
        icon: () => <PhoneIcon color={theme.palette.primary.contrastText} />,
        url: 'tel:+496170961709',
      },
      {
        title: 'LinkedIn',
        subtitle: 'Add me on LinkedIn',
        icon: () => <LinkedinIcon color={theme.palette.primary.contrastText} />,
        url: 'https://www.linkedin.com/in/griffintallant/',
      },
      {
        title: 'Gtallant',
        subtitle: 'Github Profile',
        icon: () => <GithubIcon color={theme.palette.primary.contrastText} />,
        url: 'https://github.com/Gtallant',
      }
    ],
  };

  const getListItemContent = item => (
    <ListItem>
      {item.url ? (
        <ListItemButton href={item.url} sx={{ p: 0 }}>
          <ListItemIcon>
            {item.icon()}
          </ListItemIcon>
          <ListItemText
            primary={item.title}
            secondary={item.subtitle}
            sx={{
              color: "primary.contrastText",
              ml: "16px",
              "& .MuiListItemText-secondary": {
                color: "primary.contrastText",
              },
            }}
          />
        </ListItemButton>
      ) : (
        <>
          <ListItemIcon>
            {item.icon()}
          </ListItemIcon>
          <ListItemText
            primary={item.title}
            secondary={item.subtitle}
            sx={{
              color: "primary.contrastText",
              ml: "16px",
              "& .MuiListItemText-secondary": {
                color: "primary.contrastText",
              },
            }}
          />
        </>
      )}
    </ListItem>
  );

  const leftHandColumnEntries = [];
  const rightHandColumnEntries = [];

  for (let i = 0; 2*i < content.entries.length - 1; i++) {
    leftHandColumnEntries.push(content.entries[2*i]);
    rightHandColumnEntries.push(content.entries[2*i + 1]);
  }

  return (
    <Box sx={{ bgcolor: "primary.main", color: "#fff", py: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          {content.title}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <List>
              {leftHandColumnEntries.map(entry => getListItemContent(entry))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <List>
              {rightHandColumnEntries.map(entry => getListItemContent(entry))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
