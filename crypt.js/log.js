const bcryptjs=require('bcryptjs')
let user={Name:'kavitha',password:'124455'}
let salt= bcryptjs.genSaltSync(10)
let new_password=bcryptjs.hashSync(user.password,salt)
console.log(user.password)
console.log(new_password)
console.log(user)
let crypt_user={...user,password:new_password}
console.log(userd)
let flag=bcryptjs.compareSync('124455', crypt_user.password)
flag?console.log("login sucess"):console.log("login failure")