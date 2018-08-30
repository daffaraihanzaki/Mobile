import React from 'react';
import {Text} from 'react-native';

class Judul extends React.Component{
    render(){
        return(
            <Text style={salon.judul}
            >Biodata</Text>
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