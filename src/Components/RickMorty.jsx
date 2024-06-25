import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Container,List,ListItem,Paper,Typography, ListItemText,ListItemAvatar,Avatar} from '@mui/material'

const RickMorty = () => {
    const[data,setData]=useState(null)
    // //1.method
    // useEffect(()=>{
    //     const fetchData=async()=>{
    //         try{
    //             const response=await axios.get('https://rickandmortyapi.com/api/character')
    //             console.log(response.data.results)
    //             setData(response.data.results)
    //         }catch(err){
    //             console.log('error in fetching the data',err)
    //         }
    //         }
    //         fetchData()
    //     },[])


    // //2.method
    // const fetchData=async()=>{
    //     try{
    //         const response=await axios.get('https://rickandmortyapi.com/api/character')
    //         setData(response.data.results)
    //         .catch(err=>console.log('err',err))
    //     }
    // }
    
    
//3.method
useEffect(()=>{
    axios.get('https://rickandmortyapi.com/api/character')
    .then(response=>setData(response.data.results))
    .catch(err=>console.log('err',err))
},[])
  return (
    <Container>
        <Typography variant="h4" component="h5">
  Ricky And Morty
</Typography>

    
      <List>
        {data?.map((char,index)=>(
            <Paper key={index} elevation={3} style={{margin:'20px',width:"600px"}}>
                <ListItem>
                <ListItemAvatar>
          <Avatar alt={char.name} src={char.image} />
        </ListItemAvatar>
                   < ListItemText primary= {char.name} secondary={
                    <>
                    <span>{char.status}</span><br />
                    <span>{char.species}</span>
                    </>
                   }>

         
            </ ListItemText>
            </ListItem>
            </Paper>
        ))}
      </List>
    </Container>
  )
}

export default RickMorty
