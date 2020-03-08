import React from 'react';
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
            <GridItem xs={12} sm={4} md={4} lg={3}>
              <CustomInput
                labelText="Busca accesorios"
                id="float"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
    </div>
  );
}

export default SearchBox;