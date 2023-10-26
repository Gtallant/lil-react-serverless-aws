import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function Company({ companyData }) {
  const { title, positions } = companyData;

  return (
    <Paper sx={{ mt: 2 }}>
      <Typography variant="h3" sx={{ p: 2 }}>
        {title}
      </Typography>
      <Divider />
      {positions.map(position => (
        <div key={position.title}>
          <Box  sx={{ display: 'flex', justifyContent: 'space-between', px: 2, pt: 2 }}>
            <Typography variant="h4">
              {position.title}
            </Typography>
            <Typography variant="h4" component="p">
              {position.dateRange}
            </Typography>
          </Box>
          <List>
            {position.details.map(text => (
              <ListItem key={text} sx={{ alignItems: 'flex-start' }}>
                <ListItemIcon><ArrowRightIcon sx={{ minHeight: '24px' }} /></ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      ))}
    </Paper>
  );
}