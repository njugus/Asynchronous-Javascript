//lets run this two functions in parralel and compare them to running them sequencially
// running them in parralel takes less time than running them sequencially
function getUserData(){
    return new Promise((resolve, reject) => {
        console.log("Getting user data....");
        setTimeout(() => {
            const success = true
            if(success){
                console.log("Data Fetched Successfully");
                resolve({ username : "kelvin", residence : "Limuru", role : "Senior Backend Developer", posts : [{id : 3445, content : "Thankyou My God", comments : { id : 1, text : "Surely he has been faithfull"}}]})
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

function getUserComments(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(data){
                console.log("Getting Comments.....");
                const comments = data.posts[0].comments
                console.log("comments fetched successfully");
                resolve(comments)
            }
            else{
                reject("Error fetching comments")
            }
        }, 3000);
    })
}

async function handleUserPostsAndComments(){
    try{
        const userDetails = await getUserData()
        //how to run asynchronous operations in parralel
        //using Promise.all([]) - pass in the asynchronous operations as a list
        const [posts, comments] = await Promise.all([getUserPosts(userDetails), getUserComments(userDetails)])
        console.log("Posts: ", posts);
        console.log("Comments : ", comments)
    }catch(err){
        console.log("Err: ", err); 
    }
}

handleUserPostsAndComments()