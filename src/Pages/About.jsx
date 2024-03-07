import React from 'react';
import Woman from '../Style/Photos/woman.jpg';
import Paper from '@mui/material/Paper';


const About = () => {
  return (
      <Paper elevation={3}>
        <h2>Qui suis-je ?</h2>
        <img src={Woman} alt="myriambaptiste" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit tempore dolores quas corporis incidunt 
          perspiciatis nostrum natus cum asperiores, alias similique quo. Dolorem vitae atque reiciendis. Earum officia cum 
          ullam, illum corporis unde totam provident voluptatem fugit praesentium reiciendis nihil nemo sed, expedita obcaecati 
          architecto nostrum dignissimos. Laborum nihil quos asperiores, enim accusamus laboriosam possimus cumque maxime est 
          debitis commodi optio fugiat corrupti assumenda autem doloribus quaerat reprehenderit? Ea perspiciatis animi voluptatum 
          tempore quisquam, expedita officiis sed velit veritatis itaque culpa amet ipsa ratione veniam impedit, aliquam quo ex!
           Voluptatum, aspernatur! Repellendus porro, ipsa repellat neque qui ad tenetur corrupti?</p>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit tempore dolores quas corporis incidunt 
          perspiciatis nostrum natus cum asperiores, alias similique quo. Dolorem vitae atque reiciendis. Earum officia cum 
          ullam, illum corporis unde totam provident voluptatem fugit praesentium reiciendis nihil nemo sed, expedita obcaecati 
          architecto nostrum dignissimos. Laborum nihil quos asperiores, enim accusamus laboriosam possimus cumque maxime est 
          debitis commodi optio fugiat corrupti assumenda autem doloribus quaerat reprehenderit? Ea perspiciatis animi voluptatum 
          tempore quisquam, expedita officiis sed velit veritatis itaque culpa amet ipsa ratione veniam impedit, aliquam quo ex!
           Voluptatum, aspernatur! Repellendus porro, ipsa repellat neque qui ad tenetur corrupti?</p>
           <span>Dans l'attente de prendre soin de votre santé</span>
           <br />
           <span>Myriam</span>
      </Paper>
  )
}

export default About;
