import React from 'react';
import City from './City/City';

const cities = (props)=>

    props.list.map((c)=>{
        return <City city={c.city} country={c.country}/> 
});

export default cities;