import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';

export const InfoCircle=()=>{
    return <FontAwesome5 name="info-circle" size={24} color="white" />                
}

export const Home=(props)=>{
    return <AntDesign name="home" size={32} color="white" {...props} />
}

export const InfoIcon=(props)=>{
    return <FontAwesome5 name="info" size={32} color="white" {...props} />
}