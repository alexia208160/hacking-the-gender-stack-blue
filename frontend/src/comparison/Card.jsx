import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Typography } from '@mui/material';
import { Route } from 'react-router';
import './CardStyle.css';

export default function CustomCard() {
  const eachCard = [
    {
      img: '#',
      description: 'describe cards',
    },
  ];

  return eachCard.map((el) => {
    return (
      <Card sx={{ maxWidth: 200 }}>
        <CardActionArea>
          <CardMedia component="img" height="194" image={el.img} alt="SMILES-image" />
          <CardContent>
            <Typography variant="body2" align="center">
              {el.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  });
}
