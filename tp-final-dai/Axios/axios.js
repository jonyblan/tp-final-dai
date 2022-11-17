import axios from "axios";
import * as Contacts from 'expo-contacts';

const axiosClient = axios.create({
 baseURL: "http://api.weatherunlocked.com/",
})
    const baseURL= "http://api.weatherunlocked.com/"
    const apiKey="c2cbdc911423d08c1b204e2ca427a1d1"
    const appId="d65977bc"
    
export const traerClima= async (latitud,longitud) =>{
    return axios.get(`${baseURL}api/current/${latitud},${longitud}?app_id=${appId}&app_key=${apiKey}`,{})
    .then(function(res){
        console.log(res.data)
        return res.data
    })
    .catch(function(){
        throw "Error"
    })
}
