import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';

export default function Education() {
  const content = {
    title: 'Education',
    date: '2016',
    degree: 'Bachelors of Science in Computer Science',
    school: 'Georgia Institute of Technology',
    concentrations: 'Human-Computer Interaction, Information Networks',
  }

  return (
    <Box sx={{ pt: 8, pb: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ textAlign: 'center'}}>
          {content.title}
        </Typography>
        <Paper sx={{ mt: 2 }}>
          <Box  sx={{ display: 'flex', justifyContent: 'space-between', px: 2, pt: 2 }}>
            <Typography variant="h4">
              {content.degree}
            </Typography>
            <Typography variant="h4" component="p">
              {content.date}
            </Typography>
        </Box>
        <Divider />
        <Typography variant="subtitle1" component="p" sx={{ px: 2 }}>
          {content.school}
        </Typography>
        <Typography variant="subtitle2" component="p" sx={{ px: 2, pb: 2 }}>
          {content.concentrations}
        </Typography>
        </Paper>
      </Container>
    </Box>
  );
}