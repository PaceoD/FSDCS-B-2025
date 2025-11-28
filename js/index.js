// console.log("Hello world");
// var a = 23;
// console.log(a);
// function msg(name){
//     return `welcome to js ${name}`;
// }

// const data = msg("Ram");
// console.log(data);

// const data = ()=>{
//     console.log("Hiiiiiiiiiiiiiiiiiiiiiiiiii");

// }
// data();

// const data = msg=>msg;
// console.log(data("Greetings......"));

// (function(){
//     console.log("Welcome to js")
// })();

// (()=>{
//     console.log("Welcome to ABES");
// })

// function greetings(msg = "Welcome"){
//     console.log("Hiii "+msg);
// }

// greetings("Rahul");

function selectlanguage(lang){
    let data;
    if(lang == 'java'){
        function javaCompiler(){
            return "java compiler selected";
        }
        data =javaCompiler();
    }else if(lang=='C'){
        function cCompiler(){
            return "C compiler selected"
        }
        data = cCompiler();
        }
        else{
            data = "no such comiler available"
        }
        return data;
}
  
  console.log(selectlanguage("java"));