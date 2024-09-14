async function fetchCocktails(){
    try{
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
        if(!response.ok){
            console.log("Network Error");   
        }else{
            const data = await response.json()
            console.log(data); 
        }
    }catch(error){
        console.log("Error Fetching Data");  
    }
}

fetchCocktails()