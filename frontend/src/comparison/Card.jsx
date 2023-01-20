import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Typography } from '@mui/material';
import { Route } from 'react-router';
import './CardStyle.css';

function CustomCard() {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia component="img" height="194" image="img.png" alt="img1" />
        <CardContent>
          <Typography variant="body2" align="center">
            description
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CustomCard;
