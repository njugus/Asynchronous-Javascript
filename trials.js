//question 1
async function fetchAndProcessData(){
    //return a promise automatically
    try{
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=negroni")

        if(!response.ok){
            throw new Error("Network not so good")
        }
        const data = await response.json()
        console.log(data);
        
    }catch(err){
        console.log("Error: ", err);  
    }
}

fetchAndProcessData()