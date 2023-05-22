import React, { useEffect, useState} from 'react';
import financialInfoJson from "./financialInfo.json";
import tradingInfoJson from "./tradingInfo.json";
import { useDispatch, useSelector } from 'react-redux';
import { addFinancialInfo } from './formSlice';
import { addTradingInfo } from './form2Slice';
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
  
  const [displayForm, setDisplayForm] = useState(true);
  const dispatch= useDispatch();
  const jsonFinancialData = useSelector((state) => state.financial);
  const dataString=JSON.stringify(jsonFinancialData,null,2);
  const data=JSON.parse(dataString);
  // console.log("String Json",data)

  const jsonTradingData = useSelector((state) => state.trading);
  const data2String=JSON.stringify(jsonTradingData,null,2);
  const data2=JSON.parse(data2String);

  // On page reload the json data from the file will be moved to the REDUX STORE using below dispatch function

      useEffect(()=>{
          dispatch(addFinancialInfo(financialInfoJson))
          dispatch(addTradingInfo(tradingInfoJson))
      },[])

//Below function maintains the dropdown to select the values

      const [selectedOption, setSelectedOption] = useState('');
      const handleDropdownChange = (event) => {
        setSelectedOption(...selectedOption,event.target.value);
      };

      const handleFormDisplay = () =>{
        setDisplayForm(false)
      }
      const handleFormSubmit = () =>{
        
        console.log("Details are submitted!!")
      }
     


  return (
    <div>
        {displayForm ? (

                <div>
                {data.map((d,index)=>{
                      return(
                            <div>
                                <h2>{d.sectionName.toUpperCase()}</h2>
                                <form >
                                  
                                    {d.cards.map((c,index)=>{
                                        return(
                                          <div>
                                          <FormControl variant="outlined" sx={{minWidth: 550, margin: "10px"}}>
                                            <InputLabel>{c.header}</InputLabel>
                                            <Select
                                              key={index}
                                              value={selectedOption[index]}
                                              onChange={handleDropdownChange}
                                              label="Select an option"
                                            >
                                              {c.options.map((option) => (
                                                <MenuItem id="item" key={option.label} value={option.label} required>
                                                  {option.label}
                                                </MenuItem>
                                              ))}
                                            </Select>
                                          </FormControl>
                                          </div>
                                        )}
                                    )}

                                      <Button type="submit" onClick={handleFormDisplay} variant="contained" color="primary" > Next </Button>
                                  </form>
                            </div>
                        )
                    })
                }
                </div>
        ): (

          <div>
            {data2.map((d,index)=>{
                  return(
                        <div>
                            <h2>{d.sectionName.toUpperCase()}</h2>
                            <form>
                              
                                {d.cards.map((c,index)=>{
                                    return(
                                      <div>
                                      <FormControl variant="outlined" sx={{minWidth: 550, margin: "10px"}}>
                                        <InputLabel>{c.header}</InputLabel>
                                        <Select
                                          key={index}
                                          value={selectedOption[index]}
                                          onChange={handleDropdownChange}
                                          label="Select an option"
                                        >
                                          {c.options.map((option) => (
                                            <MenuItem key={option.label} value={option.label} >
                                              {option.label}
                                            </MenuItem>
                                          ))}
                                        </Select>
                                      </FormControl>
                                      </div>
                                    )}
                                )}

                                    <Button onClick={handleFormSubmit} variant="contained" color="primary" > Submit </Button>
                              </form>
                        </div>
                    )
                })
            }
          </div>
        )}
        

       

      
          
          

    </div>
  );
};

export default Sections;
