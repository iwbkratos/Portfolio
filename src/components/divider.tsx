'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Home from './home';
import ContentBox from './regularContent';
import ExperienceBox from './contentHolder';
import Gallery from './gallery';
import ProjectList from './projectComponent';
import ResponsiveHeading from './contentDivider';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/WorkHistory';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactsIcon from '@mui/icons-material/Contacts';
import Contact from './contactComponent';
const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export default function DividerText() {

  return (
    <Root>
      <Home/>
      <Divider>
        <PersonIcon id="about" sx={{fontSize:"2rem"}}/>
      </Divider>
      <ContentBox/>
      <Divider>
       <WorkIcon id="experience" sx={{fontSize:"2rem"}}/>
      </Divider>
      <ExperienceBox />
      <Divider>
        <CodeIcon id="skills" sx={{fontSize:"2rem"}}/>
      </Divider>
         <Gallery/>
      <Divider>
        <GitHubIcon id="projects" sx={{fontSize:"2rem"}}/>
      </Divider>
        <ResponsiveHeading heading="Projects">
         <ProjectList/>
        </ResponsiveHeading>
        <Divider>
        <ContactsIcon id="contacts" sx={{fontSize:"2rem"}}/>
      </Divider>
         <Contact/>
    </Root>
  );
}
