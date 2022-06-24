class P{
    get_Details=()=>{
    console.log("gm")
}
}
class C extends P{

get_Details=()=>{
    console.log("gn")
}
}
let obj1=new C();
obj1.get_Details()