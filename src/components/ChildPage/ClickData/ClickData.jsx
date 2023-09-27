/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from '../Card/Card';

const ClickData = () => {
    const [data,setData]=useState([]);
    const {id}=useParams();
    // console.log(id);
    const dataLoad=useLoaderData();
    // console.log(dataLoad);
useEffect(()=>{
    const findPhone=dataLoad.find(daata=>daata.id==id);
    // console.log(data.id);
    // console.log(findPhone);
    setData(findPhone);
},[id,dataLoad])
    console.log(data);
    
    return (
        <div className=''>
            <Card data={data}></Card>
        </div>
    );
};

export default ClickData;