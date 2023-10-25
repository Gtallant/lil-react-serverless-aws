import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Company from './Company';

export default function Experience() {
  const content = {
    title: 'Work Experience',
    companies: [
      {
        title: 'Publicis Sapient',
        positions: [
          {
            title: 'Software Engineer L2',
            dateRange: '2019 - Present',
            details: [
              'Successfully developed and delivered complex features for multiple product releases, meeting sprint goals and maintaining high-quality code standards across multiple clients and industries.',
              'Refactored and optimize legacy code, reducing bundle size, and resulting in a 10% reduction in TTI.',
              'Mentored junior developers, providing guidance and support to help them grow in their roles and contribute effectively to the team.',
              'Communicated technical concepts to non-technical stakeholders, both internal and external, ensuring alignment with project goals and client satisfaction.',
              'Implemented and maintained atomic react components for component libraries and design systems.',
              'Conducted thorough impact analyses for proposed changes and enhancements, evaluating potential risks, testing scope, API gaps, and ambiguous requirements.',
            ],
          },
          {
            title: 'Software Engineer L1',
            dateRange: '2017 - 2019',
            details: [
              'Implemented linting tools and static code analyzers to catch and prevent code issues early in the development process, reducing technical debt.',
              'Conducted unit tests to ensure components met requirements and did not introduce defects.',
              'Employed state management libraries such as Redux or React Context to manage application state.',
              'Conducted accessibility audits using tools like aXe and Lighthouse to identify and fix accessibility issues.',
              'Architected and led a project which decreased the runtime of a client’s application by 50%.'
            ],
          },
          {
            title: 'Junior Software Engineer',
            dateRange: '2016 - 2017',
            details: [
              'Collaborated within cross-functional Agile Scrum teams to deliver high-quality software products on time and within budget.',
              'Integrated with 3rd party libraries and APIs to implement complex features such as interactive maps, image galleries, filter menus and more.',
              'Contributed to git repositories using a git flow branching strategy and adhering to code quality standards.',
            ],
          }
        ],
      },
      {
        title: 'Local Roots',
        positions: [
          {
            title: 'Software Engineering Intern',
            dateRange: 'Summer 2015',
            details: [
              'Developed core UI features in collaboration with design and back end team members.',
              'Implemented REST API endpoints to fetch application data from the back end to support core functionality.',
            ],
          }
        ],
      },
    ],
  }

  return (
    <Box sx={{ pt: 8, pb: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ textAlign: 'center'}}>
          {content.title}
        </Typography>
        {content.companies.map(company => <Company key={company.title} companyData={company} />)}
      </Container>
    </Box>
  );
}