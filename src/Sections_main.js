import React, { useEffect} from 'react';
import financialInfoJson from "./financialInfo.json";
import { useDispatch, useSelector } from 'react-redux';
import { addFinancialInfo } from './formSlice';
import './Sections.css'

import {
  // List,
  // ListItem,
  // ListItemText,
  // IconButton,
  // TextField,
  Box,
  InputLabel,
  FormControl,
  Button,
  MenuItem,
} from "@mui/material";
import Select from '@mui/material/Select';



const Sections = () => {
  
  // var data=JSON.stringify(financialInfoJson,null,2);
  
  
  const dispatch= useDispatch();
  const jsonDatas = useSelector((state) => state);
  const dataString=JSON.stringify(jsonDatas,null,2);
  const data=JSON.parse(dataString);
  console.log("String Json",data)

  useEffect(()=>{
      dispatch(addFinancialInfo(financialInfoJson))
  },[])

  const [totalAnnualIncome, setTotalAnnualIncome] = React.useState('');

  const handleChange = (event) => {
    setTotalAnnualIncome(event.target.value);
  };





  return (
    <div>
      {jsonDatas ? (
        // Render your data here

       <div>
        {/* <pre>{JSON.stringify(jsonDatas, null, 2)}</pre> */}
        {data.map((d,index)=>{
          return(
            <div>
              <h2>{d.sectionName.toUpperCase()}</h2>
              <form>
                
              
              {d.cards.map(c=>{
              return(
                <div>
                    {/* <TextField label={c.header} varient="outlined" placeholder={c.header} style={{margin: "10px",width:"550px"}}></TextField> */}

                    <Box sx={{ minWidth: 120 }}>
                      <FormControl sx={{minWidth: 550, margin: "10px"}}>
                        <InputLabel id="demo-simple-select-label">{c.header}</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          // value={}
                          // label={c.header}
                          onChange={handleChange}
                        >
                          {
                            c.options.map((o)=>{
                              return(
                                <MenuItem value={o.label}>{o.label}</MenuItem>
                              )
                            })
                          }
                          
                        </Select>
                      </FormControl>
                    </Box>                
                </div>
              
              )}
            )}
              <Button type="submit" variant="contained" color="primary" > Next </Button>
            </form>
            </div>
            )
        })}
       </div>




      ) : (
        // Render a loading state or fallback UI
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Sections;
