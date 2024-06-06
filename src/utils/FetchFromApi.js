import axios from "axios";

const Base_Url='https://youtube-v31.p.rapidapi.com'

const options = {
    params:{
      maxResults:'50',
    },
    headers: {
      'X-RapidAPI-Key': '157ed80cd0msh0ca10b79d8cbc60p14a27fjsn80f7310a73d5',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
export const FetchFromApi=async(url)=>{
    const {data} = await axios.get(`${Base_Url}/${url}`,options)
    return data
}