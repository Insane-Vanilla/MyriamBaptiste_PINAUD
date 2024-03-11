import React from 'react';
import Paper from '@mui/material/Paper';
import He from '../Style/Photos/he.jpg';
import Healthy from '../Style/Photos/healthy.jpg';

const Naturo = () => {
  return (
    <Paper elevation={0}>
      <h1>La naturopathie, ou comment prendre soin de vous autrement</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, quam. Quaerat pariatur iure in dolores ipsam 
        suscipit at deleniti a nihil. Maxime, natus quaerat! Quis neque praesentium ipsum debitis odit!</p>
        <img src={He} alt="he" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aliquid fugit cum adipisci ullam quia et? Inventore 
        optio consectetur velit cum officiis, quia sit quam eligendi maiores dolore exercitationem ex tempora iste veritatis, 
        aliquid error accusantium quae quasi laudantium iure modi ut doloribus? Minus, inventore. Odio dolorem, mollitia eos 
        commodi ea dolorum esse ducimus labore, nesciunt ratione fugiat molestias aspernatur adipisci assumenda quasi maiores a. 
        Corrupti, vitae esse excepturi nam quo sit ipsa cupiditate voluptas nobis accusamus, nemo est consectetur molestias, 
        doloremque unde? Molestiae maiores voluptatum esse porro ut officia ratione accusamus illum eum saepe harum facilis, 
        recusandae neque adipisci!</p>
        <img src={Healthy} alt="healty" />
    </Paper>
  )
}

export default Naturo;
