import CustomCard from './Card';
import TextField from '@mui/material/TextField';
import './CardStyle.css';

function Comparison() {
  return (
    <div className="card-stack">
      <TextField label="Outlined" variant="outlined" />
      <CustomCard className="card-stack" /> <CustomCard />
    </div>
  );
}

export default Comparison;
