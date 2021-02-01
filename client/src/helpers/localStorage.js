
export function SaveStateLocalStorage(state,data){
    try{
        localStorage.setItem(state,JSON.stringify(data))
        return JSON.parse(localStorage.getItem(state))
    }catch{
        return undefined
    }  
}

export function LoadStateLocalStorage(state){
    try{
       const data = JSON.parse(localStorage.getItem(state))
        return data
    }catch{
        return undefined
    }  
}