export type createUserDto = {
    username : string 
    password : string 
    email : string 
    profilePic? : string
}

export type loginUserDto = {
    email : string ,
    password : string
}