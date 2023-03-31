 dbusers = [
let    {
        username: "wan",
        password: "sayahensem",
        name: "Wan Amirul Zikri",
        email: "wanamirul@hotmail.com",
    },
    {
        username: "apiz",
        password: "apizalya",
        name: "hafiz azman",
        email: "hafiz@hotmail.com",
    },
    {
        username: "amirulshafiq",
        password: "mirul",
        name: "Amirul Shfiq",
        email: "amirulshafiq@hotmail.com",
    }
]

function login(username, password) {
    console.log("someone try to login with", username, password)
    let matched = dbusers.find(element =>
        element.username == username
    )
    if (matched) {
        if (matched.password == password) {
            return matched
        } else {
            return "Password not matched"
        }
    } else {
        return "Username not found"
    }
}



//try to login
//console.log(login("wan","sayahensem"))
console.log(login("api", "apiz"))