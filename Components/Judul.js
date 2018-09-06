import React from 'react';
import {Text} from 'react-native';
import { title } from '../node_modules/change-case';

class Judul extends React.Component{
    render(){
        return(
            <Text style={salon.judul}>{this.props.title}</Text>
        )
    }
}

const salon={
    judul :{
        color:'white',
        fontSize:50,
        backgroundColor:'red',
    }
}

export default Judul;
