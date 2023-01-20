import AddIcon from '@mui/icons-material/Add';

import CustomCard from './Card';
import { Grid, IconButton } from '@mui/material';
import { TextField } from '@mui/material/TextField';
import { useState } from 'react';
import './CardStyle.css';
const smiles = [
  'CC(C)(C)c1ccc2c3ccc(C(C)(C)C)cc3n(-c3cc4c5c(c3)N(c3ccccc3-c3ccccc3)c3ccccc3B5c3cc5c(cc3N4c3ccccc3)N(c3ccccc3-c3ccccc3)c3cc(N(c4ccccc4)c4ccccc4-c4ccccc4)cc4c3B5c3ccccc3S4)c2c1',
  'CC(C)(C)c1ccc(N(c2ccccc2)c2ccc3cc4c(cc3c2)oc2c4c3ccc(N(c4ccccc4)c4ccc(C(C)(C)C)cc4)c4c5c6ccccc6sc5n2c34)cc1',
  'Cc1nc(C)c(CCC(=O)N2CC(=O)N(C)c3ccccc32)c(=O)[nH]1',
];

function Comparison() {
  const [selected, setSelected] = useState([]);

  const handleClick = (smiles) => {
    if (selected.includes(smiles)) {
      setSelected(selected.filter((s) => s != smiles));
    } else {
      setSelected([...selected, smiles]);
    }
  };

  return (
    <div>
      <TextField id="standard-basic" label="Select" sx={{ mt: 8 }} />
      <div className="card-stack">
        <Grid container spacing={2}>
          {smiles.map((s) => (
            <Grid item xs={3} sx={{ mt: 4 }}>
              <CustomCard
                smiles={s}
                selected={selected.includes(s)}
                disable={selected.length == 2 && !selected.includes(s)}
                onClick={handleClick}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Comparison;
