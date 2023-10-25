import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


export default function Hero() {

  const summarySection = 'Experienced web developer with a strong background in building responsive, accessible, performant features for clients in a fast-paced agile development environment. Over 7 years of experience collaborating with distributed teams, implementing complex functionality for clients in retail, hospitality, and other industries. Strong skills include Javascript, React, and REST APIs.';

  return (
    <Box sx={{ bgcolor: 'primary.main', color: '#fff', py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h1">
          Griffin Tallant
        </Typography>
        <Typography variant="p"  sx={{ fontSize: 16, lineHeight: 2, mt: 4, display: 'inline-block' }}>
          {summarySection}
        </Typography>
      </Container>
    </Box>
  );
}