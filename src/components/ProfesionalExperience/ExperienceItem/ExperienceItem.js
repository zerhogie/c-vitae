import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './ExperienceItem.scss'

export const ExperienceItem = ({ title, company, description, tecnologies, period }) => {
    return (
      <Accordion className="experience">
        <AccordionSummary className='experience__summary'
          expandIcon={<ExpandMoreIcon className="experience__more_icon"/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">{title}</Typography>
          <Typography variant="subtitle1">{company}</Typography>
        </AccordionSummary>
        <AccordionDetails className="experience__details">
          <Typography>
            {description}
          </Typography>
          <Typography variant="caption">
            {period}
          </Typography>
        </AccordionDetails>
      </Accordion>
    );
  };

  export default ExperienceItem;