import convertibles from "./convertibles";


const convertibleObjects = convertibles.map((item)=>{

    return {
        slug:item.toLocaleLowerCase(),
        title:"",
        description:""
    }
})

export default JSON.stringify(convertibleObjects)