import { TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { RelativePathString, useRouter } from 'expo-router';
type ArrowProps={
    link:RelativePathString;
    color:string
}
export default function Arrow({link,color}:ArrowProps){
    const router = useRouter();
    return(
        <TouchableOpacity onPress={()=>router.navigate(`${link}`)}>
                <Feather name="arrow-left" size={24} color={color} />
        </TouchableOpacity>
    )
}