import axios from "axios";

const strapi_url ="http://127.0.0.1:1337/api"
const strapi_key = process.env.STRAPI_API_KEY!


export async function getArticle(slug:string) {
    const response = await axios.get(strapi_url+"/image-definitions/"+slug,{
        headers:{
            "Authorization":`Bearer ${strapi_key}`
        }
    })
    if(response.data.data === null){
     return response.data.error.message
    }
  return response.data.data

 
  
  }