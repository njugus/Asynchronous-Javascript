//Create two asynchronous functions that simulate fetching user data and fetching posts. 
//Ensure that fetching posts happens only after the user data has been fetched (sequential execution using await).

//since i don't have a database....am gonna create two promises then use an asynchronous function to handle them
function getUserData(){
    return new Promise((resolve, reject) => {
        console.log("Getting user data....");
        setTimeout(() => {
            const success = true
            if(success){
                console.log("Data Fetched Successfully");
                resolve({ username : "kelvin", residence : "Limuru", role : "Senior Backend Developer", posts : [{id : 3445, content : "Thankyou My God"}]})
            }
            else{
                reject("Error Fetching User Data")
            }
        }, 3000); 
    })
}

function getUserPosts(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(data){
                console.log("Getting User Posts.....");
                const userPosts = data.posts[0]
                console.log("User Posts Fetched Successfully");
                resolve(userPosts)
            }
            else{
                reject("No Posts Feteched")
            } 
        }, 2000);
    })
}

async function handleUserDataAndPosts() {
    try{
        const fetchedUserInfo = await getUserData()
        const posts = await getUserPosts(fetchedUserInfo)
        console.log(posts);
    }catch(err){
        console.log("Err: ", err);
    }
}

handleUserDataAndPosts()