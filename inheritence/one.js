class Parent{
    constructor(){
        console.log("Parent Class_constractor:method")
    }
    
}
class Child extends Parent{
    constractor(){
        super()
        console.log("Child Class_constractor:method")
    }

} new Child()