//import bcryptjs form'bcryptjs'
const bcryptjs=require('bcryptjs')
let user={name:'kavitha',password:'kavi 1234'}
let Salt=bcryptjs.genSaltSync(10)
let new_password=bcryptjs.hashSync(user.password,Salt)
console.log(user.password)
console.log(new_password)
console.log(user)
let crypt_user={...user,password:new_password}
console.log(user)
let flag=bcryptjs.compareSync('kavi 1234', crypt-user)
console.log(flag)
flag?console.log("login success"):console.log("login failure")