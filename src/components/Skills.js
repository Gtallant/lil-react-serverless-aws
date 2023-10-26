import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';


export default function Skills() {
  const theme = useTheme();

  const sectionBackground = theme.palette.grey[500];
  const badgeBackground = theme.palette.primary.light;

  const titleColor = theme.palette.getContrastText(sectionBackground);
  const badgeTextColor = theme.palette.getContrastText(badgeBackground);

  const skillsList = 'Javascript/HTML5/CSS, SASS/LESS, React/Redux, CSS-in-JS, NodeJS, GraphQL, Express, Webpack, Jest, Enzyme, DynamoDB, AWS Lambda, Git, Agile, Scrum, StorybookJS, REST APIs, JSON, Typescript, Salesforce LWC, GatsbyJS, Handlebars, Jquery, iBeacons, Ionic, Cloud Computing';

  return (
    <Box sx={{ bgcolor: sectionBackground, py: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h2"  sx={{ pb: 2, color: titleColor, textAlign: 'center' }}>
          Skills
        </Typography>
        <Stack direction="row" flexWrap="wrap" spacing={1}>
          {skillsList.split(', ').map(skill => <Chip key={skill} sx={{ typography: 'button', color: badgeTextColor, bgcolor: badgeBackground, letterSpacing: 1.25 }} label={skill} />)}
        </Stack>
      </Container>
    </Box>
  );
}