import * as React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Woman from '../../Style/Photos/woman.jpg';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
  }) (({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function NaturoCard() {
  
  const [expanded, setExpanded] = React.useState(false);
  const [data, setData] = useState([]);

    useEffect(() => {
      axios.get("http://localhost/api_myriambaptiste/Controllers/Services/get.php")
        .then(res => setData(res.data))
        .catch(err => alert(err))
    },[])

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
        <div>

          {data.map(d => (
            
          <Card sx={{ minWidth: 300, maxWidth: 300, m:0.5 }} elevation={0}>
            <CardHeader
              avatar={<Avatar className='woman' src={Woman} alt="myriambaptiste"/>}
              title={d.title}
              sx={{color:"secondary.light"}}
            />
            <CardMedia
              component="img"
              height="194"
              image={require(`../../Uploads/${d.id}.jpg`)}
              alt="Naturopathie"
            />
            <CardContent>
              <Typography variant="body1" sx={{color:"secondary.dark", textAlign:"justify"}}>
                {d.subtitle}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent sx={{color:"secondary.dark"}}>
                <Typography sx={{textAlign:"justify"}}paragraph variant="body1">
                {d.description}
                </Typography>
                <Typography paragraph variant="h5" sx={{color:"primary.light"}}>
                  Tarif : {d.price},00€
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          ))}
      </div>
  )
}

export default NaturoCard; 