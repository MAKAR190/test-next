import React from 'react'
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

const CurrencyChange = ({currency, handleChange}) => {
    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Currency</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                value={currency}
                onChange={handleChange}
            >
                <FormControlLabel value="usd" control={<Radio/>} label="USD"/>
                <FormControlLabel value="uah" control={<Radio/>} label="UAH"/>
            </RadioGroup>
        </FormControl>
    )
}

export default CurrencyChange;