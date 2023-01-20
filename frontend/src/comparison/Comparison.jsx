import AddIcon from '@mui/icons-material/Add';

import CustomCard from './Card';
import TextField from '@mui/material/TextField';
import { Grid, IconButton } from '@mui/material';
import './CardStyle.css';

function Comparison() {
  return (
    <div>
      <TextField id="standard-basic" label="Select" sx={{ mt: 8 }} />
      <div className="card-stack">
        <Grid container spacing={2}>
          <Grid item xs={3} sx={{ mt: 4 }}>
            <CustomCard />
          </Grid>
          <Grid item xs={3} sx={{ mt: 4 }}>
            <CustomCard />
          </Grid>
          <Grid item xs={3} sx={{ mt: 4 }}>
            <CustomCard />
          </Grid>
          <Grid item xs={3} sx={{ mt: 4 }}>
            <CustomCard />
          </Grid>
          <Grid item xs={3} sx={{ mt: 4 }}>
            <CustomCard />
          </Grid>
          <Grid item xs={3} sx={{ mt: 4 }}>
            <CustomCard />
          </Grid>
          <Grid item xs={3} sx={{ mt: 4 }}>
            <CustomCard />
          </Grid>
          <Grid item xs={3} sx={{ mt: 4 }}>
            <CustomCard />
          </Grid>
        </Grid>
      </div>
      <Grid container justifyContent="flex-end">
        <IconButton aria-label="add" size="large">
          <AddIcon />
        </IconButton>
      </Grid>
    </div>
  );
}

export default Comparison;
