import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Typography } from '@mui/material';
import { Route } from 'react-router';
import './CardStyle.css';

export default function CustomCard({ smiles, selected, disable, onClick }) {
  // const eachCard = [
  //   {
  //     selected: false,
  //     img: '#',
  //     description: 'describe cards',
  //   },
  // ];

  // return eachCard.map((el) => {
  let cardBoarder = '';
  if (selected) {
    cardBoarder = '3px solid blue';
  }
  return (
    <Card
      sx={{ maxWidth: 200, border: cardBoarder, opacity: disable ? 0.5 : 1 }}
      onClick={() => !disable && onClick(smiles)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="194"
          image={
            'https://dikshaprakash-refactored-computing-59x4x4prjq9349vv-4173.preview.app.github.dev/api/image/?smiles=' +
            toString(smiles)
          }
          alt="SMILES-image"
        />
        <CardContent>
          <Typography variant="body2" align="center">
            {smiles}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
  // });
}
