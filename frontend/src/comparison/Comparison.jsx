import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

import { Grid } from '@mui/material';
import { useState } from 'react';
import CustomCard from './Card';
import './CardStyle.css';
const smiles = [
  'C=C',
  'O=C=O',
  'CC(O)C',
  'CC(C)N1CCC(C(=O)C(F)(F)F)CC1',
  'CC(=O)C',
  'CC(C)Oc1ccc(-c2cc3c(cc2C(N)=O)nnn3-c2ccc(OC(C)C)cc2)cc1',
  'COC(=O)[C@H](COCC(OC)OC)NC(=O)c1c(OC)c(=O)ccn1NC(=O)OC(C)(C)C',
  'CC(CC)C',
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

  const compareCard = (smile1, smile2) => {
    // console.log(smile1, smile2);
  };

  return (
    <div>
      {/* <TextField id="standard-basic" label="Select" sx={{ mt: 8 }} /> */}
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
      <Grid container justifyContent="flex-end">
        <Button disabled={selected.length < 2} onClick={compareCard(selected[0], selected[1])}>
          Compare
        </Button>
      </Grid>
    </div>
  );
}

export default Comparison;
