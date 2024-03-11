import React from 'react';
import Woman from '../Style/Photos/woman.jpg';
import Paper from '@mui/material/Paper';
import {Avatar, Typography } from '@mui/material';
import Accordions from "../Components/Accordion";

const About = () => {
  return (
      <Paper sx={{bgcolor:"primary.main", pl:"20%", pr:"20%", pb:"10%"}} elevation={0}>
        <Typography sx={{textAlign:"center"}} variant="h1">Qui suis-je ?</Typography>
        <Avatar className='woman' src={Woman} alt="myriambaptiste" sx={{width:300, height:300}} />
        <Typography sx={{textAlign:"center"}} variant="body1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit tempore dolores quas corporis incidunt 
          perspiciatis nostrum natus cum asperiores, alias similique quo. Dolorem vitae atque reiciendis. Earum officia cum 
          ullam, illum corporis unde totam provident voluptatem fugit praesentium reiciendis nihil nemo sed, expedita obcaecati 
          architecto nostrum dignissimos. Laborum nihil quos asperiores, enim accusamus laboriosam possimus cumque maxime est 
          debitis commodi optio fugiat corrupti assumenda autem doloribus quaerat reprehenderit? Ea perspiciatis animi voluptatum 
          tempore quisquam, expedita officiis sed velit veritatis itaque culpa amet ipsa ratione veniam impedit, aliquam quo ex!
           Voluptatum, aspernatur! Repellendus porro, ipsa repellat neque qui ad tenetur corrupti?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit tempore dolores quas corporis incidunt 
          perspiciatis nostrum natus cum asperiores, alias similique quo. Dolorem vitae atque reiciendis. Earum officia cum 
          ullam, illum corporis unde totam provident voluptatem fugit praesentium reiciendis nihil nemo sed, expedita obcaecati 
          architecto nostrum dignissimos. Laborum nihil quos asperiores, enim accusamus laboriosam possimus cumque maxime est 
          debitis commodi optio fugiat corrupti assumenda autem doloribus quaerat reprehenderit? Ea perspiciatis animi voluptatum 
          tempore quisquam, expedita officiis sed velit veritatis itaque culpa amet ipsa ratione veniam impedit, aliquam quo ex!
           Voluptatum, aspernatur! Repellendus porro, ipsa repellat neque qui ad tenetur corrupti?
           </Typography>
           <Typography sx={{textAlign:"center"}} variant="subtitle1">Dans l'attente de prendre soin de votre santé</Typography>
           <Typography sx={{textAlign:"center"}} variant="subtitle2">Myriam</Typography>
           <Paper sx={{mt:'5%'}}>
              <Accordions/>
            </Paper>
           
      </Paper>
  )
}

export default About;
