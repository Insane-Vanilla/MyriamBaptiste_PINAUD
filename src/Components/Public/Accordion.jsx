import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Accordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion 
        sx={{bgcolor:'secondary.main'}} 
        expanded={expanded === 'panel1'} 
        onChange={handleChange('panel1')}>
        <AccordionSummary 
          aria-controls="panel1d-content" 
          id="panel1d-header">
          <Typography sx={{color:'secondary.light'}} variant="h6">
            Mes formations
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align="justify" sx={{color:'primary.main'}} >
            - 2023 - <span class="bold">Praticien Naturopathe</span> 
            - Ecole EURONATURE (Lyon): accompagnement naturopathique 
            et hygiène vitale, étude de cas et pratique de consultation, 
            physiopathologies, techniques réflexes.
            <br />
            - 2008 : <span class="bold">Diplôme d'infirmière</span> -
             IFSI CHUGA (Saint-Martin-d'Hères)
            <br />
            - 2004 : <span class="bold">Baccalauréat scientifique</span>
             - Lycée Aristide Bergès (Seyssinet-Pariset)
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{bgcolor:'secondary.main'}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{color:'secondary.light'}} variant="h6">Mon parcours</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align="justify" sx={{color:'primary.main'}} variant="body1">
            Après un baccalauréat scientifique, j'ai suivi des études en école d'infirmière, métier que j'ai ensuite pratiqué
            pendant 13 ans dans diverses cliniques privées. Mon métier était véritablement ma passion, j'aime prendre soin de l'autre,
            et prodiguer des soins. 
            <br/>
            Mais il me manquait quelque chose, plus de sens, prendre soin avec des méthodes plus en accord avec 
            mes convictions et ma vision du monde. 
            <br/>
            Après des années de réflexion et de prise d'information, j'ai donc décidé d'engager une 
            reconversion professionnelle dans le métier de Naturopathe. Aujourd'hui je suis totalement alignée avec ce choix de vie et ce métier
            est véritablement une vocation.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{bgcolor:'secondary.main'}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{color:'secondary.light'}} variant="h6">Mes passions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align="justify" sx={{color:'primary.main'}} variant="body1">
            Je suis très sensible à l'écologie, aux droits de femmes, et au bien-être animal. 
            <br/>
            J'adore cuisiner, pour moi cela éveille les goûts, la créativité, la curiosité et la sensorialité. 
            <br/>
            Aussi, je pratique depuis plusieurs années le Qi Gong, gymnastique
            ancestrale chinoise qui vise à la construction d'un corps sain : le Qi Gong va tonifier, étirer et équilibrer le corps en harmonie
            avec la respiration.
            <br/>
            Enfin, j'aime énormément la randonnée, que je pratique en binôme avec ma chienne Blue, un golden retriever qui m'accompagne dans la vie,
            ou en groupe.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}