import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import { CardHeader } from '@material-ui/core';
import { Box } from '@material-ui/core';

import Theme from '../styles/Theme';


export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} paddingTop =  "40px">
    <CardHeader title = {props.titulo} style={{ background: Theme.palette.secondary.main, color: "white" }}/>
        
    <CardMedia
        component="img"
        height="400"
        width = "560"
        image={props.imagen}
        />
        <CardContent>
        <Typography variant="body1" color="text.secondary">
            <Box sx={{ fontWeight: 'bold', m: 1, textAlign: 'center' }}>{props.descripcion}</Box>
        </Typography>
        </CardContent>
        <CardActions style={{display: "flex", justifyContent: "center"}}>            
            <Button style={{display: "flex", background: Theme.palette.secondary.main, color: "white"}} >Ver mas</Button>
        </CardActions>
    </Card>
  );
}
