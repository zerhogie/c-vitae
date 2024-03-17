import React from 'react';
import { NETEX, ODEENE, WORKTRAIT } from './consts/ProfessionalExperienceConsts';
import ExperienceItem from './ExperienceItem/ExperienceItem';

const ProfessionalExperience = () => {
    const jobs = [
      WORKTRAIT,
      NETEX,
      // PROSL,
      ODEENE,
    ];
  
    return (
      <div className='profesional_experience'>
        {jobs.map((job, index) => (
          <ExperienceItem
            key={index}
            title={job.title}
            company={job.company}
            description={job.desciption}
            period={job.period}
          />
        ))}
      </div>
    );
  };

  export default ProfessionalExperience