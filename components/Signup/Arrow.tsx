import { TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';
export default function Arrow(){
    const router = useRouter();
    return(
        <TouchableOpacity onPress={()=>router.navigate('/')}>
                <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
    )
}