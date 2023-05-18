import React, { useEffect } from 'react';
import financialInfoJson from "./financialInfo.json";
import { useDispatch, useSelector } from 'react-redux';
import { addFinancialInfo } from './formSlice';
import './Sections.css'
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Button,
} from "@mui/material";


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
                    <TextField label={c.header} varient="outlined" placeholder={c.header} style={{margin: "10px",width:"550px"}}></TextField>
                
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
