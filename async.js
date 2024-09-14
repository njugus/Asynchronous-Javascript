
function fetchUserData(){
    return new Promise((resolve, reject) => {
        const success = true
        if(success){
            resolve({ username : "kelvin", age : 21})   
        }
        else{
            reject("Error fetching user details")
        }
    })
}

function processData(data){
    return new Promise((resolve, reject) => {
        if(data){
            console.log("Processing the data....");
            resolve(data)
        }
        else{
            reject("No data passed")
        }
    })
}

function displayData(data){
    return new Promise((resolve, reject) => {
        if(data){
            console.log(data)
            resolve("data displayed successfully")
        }
        else{
            reject("Null Credentials")
        }
    })
}


// fetchUserData().then((data) => {
//     return processData(data)
// }).then((data) => {
//     return displayData(data)
// }).catch((error) =>{
//     console.log("ERROR:", error);
// })

async function handleUserData(){
    try{
        const data = await fetchUserData();  //await this promise to  be either reoslved or rejected
        const processedData = await processData(data);  //await this promise to be resolved or rejected
        const displayMessage = await displayData(processedData) 
        console.log(displayMessage);
    }catch(err){
        console.log("Error : ", err);  
    }
}

handleUserData()