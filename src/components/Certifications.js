import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';

export default function Certifications() {
  const content = {
    title: 'Certifications and Awards',
    certifications: [
      {
        title: 'AWS Cloud Certified',
        date: '2023',
        subtitle: 'AWS Certified Developer - Associate',
      },
      {
        title: 'Sapient Impact Awards',
        date: '2018',
        subtitle: 'People & Community Global Semifinalist'
      },
    ],
  }

  return (
    <Box sx={{ pt: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ textAlign: 'center'}}>
          {content.title}
        </Typography>
        <Paper sx={{ mt: 2 }}>
          { content.certifications.map(certification => (
            <>
              <Box  sx={{ display: 'flex', justifyContent: 'space-between', px: 2, pt: 2 }}>
                <Typography variant="h4">
                  {certification.title}
                </Typography>
                <Typography variant="h4" component="p">
                  {certification.date}
                </Typography>
              </Box>
              <Typography variant="subtitle1" component="p" sx={{ px: 2, pb: 2 }}>
                  {certification.subtitle}
                </Typography>
              <Divider />
            </>
          ))}
        </Paper>
      </Container>
    </Box>
  );
}