


export const verify = (values,name,setError) => {
    switch (name) {
        case 'user_name':
            if(values[name].length){
            if(values[name].length >= 4){
                setError(prevError =>{
                    return {...prevError,[name]:''}
                })
            }else{
                setError(prevError =>{
                    return {...prevError,[name]:'Debe ser mayor o igual a 4 caracteres'}
                })
                break;
            }}else{
                setError(prevError =>{
                    return {...prevError,[name]:'Este campo es obligatorio'}
                })

            }
            
            break;
        case 'user_email':
            if(values[name].length){
                if(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(values[name])){
                    setError(prevError =>{
                        return {...prevError,[name]:''}
                    })
                }else{
                    setError(prevError =>{
                        return {...prevError,[name]:'Email inválido'}
                    })
                    break;
                }}else{
                    setError(prevError =>{
                        return {...prevError,[name]:'Este campo es obligatorio'}
                    })
    
                }
            
            break;
        case 'message':
            if(values[name].length){
                if(values[name].length >= 10){
                    setError(prevError =>{
                        return {...prevError,[name]:''}
                    })
                }else{
                    setError(prevError =>{
                        return {...prevError,[name]:'Debe ser mayor o igual a 10 caracteres'}
                    })
                    break;
                }}else{
                    setError(prevError =>{
                        return {...prevError,[name]:'Este campo es obligatorio'}
                    })
    
                }
            
            break;
    
        default:
            break;
    }
    
};