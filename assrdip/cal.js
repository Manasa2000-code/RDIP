function add()
{
    no1 = parseInt(app.no1.value);
    no2 = parseInt(app.no2.value);
    Result = no1 + no2;
    app.Result.value = Result;
    return Result;
}

 function sub()
{
    no1 = parseInt(app.no1.value);
    no2 = parseInt(app.no2.value);
    result = no1 - no2;
    app.Result.value = Result;
    return Result;
}
 function mult()
{
    no1 = parseInt(app.no1.value);
    no2 = parseInt(app.no2.value);
    Result = no1 * no2;
    app.Result.value = Result;
    return Result;
}
 function div()
{
    no1 = parseInt(app.no1.value);
    no2 = parseInt(app.no2.value);
    Result = no1 / no2;
    app.Result.value = Result;
    return Result;
}
 function per()
{
    no1 = parseInt(app.no1.value);
    no2 = parseInt(app.no2.value);
    Result = ((no1 * no2)/100);
    app.Result.value = Result;
    return Result;
}
 function abs()
{
     no1 = parseInt(app.no1.value);
    Result = Math.abs(no1);
    app.Result.value = Result;
    return Result;
}
function sqrt()
{
    no1 = parseInt(app.no1.value);
    r1 =Math.sqrt(no1)
    Result = r1.toFixed(3);
    app.Result.value = Result;
    return Result;
}
  
function validation()
{
var numbers = /^[0-9]+$/;
var alphabets = /^[a-zA-Z]+$/;
//var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
 
         if( document.myForm.Name.value == "" ||  document.myForm.Name.value[0].match(numbers)) {
            alert( "Enter a valid name.It should not start with digits!" );
            document.myForm.Name.focus() ;
            return false;
         }


      /*   if( document.myForm.EMail.value == "" || document.myForm.EMail.value != "@" || document.myForm.EMail.value !="." ) {
            alert( "Enter a valid Email and it should include @ and ." );
            document.myForm.EMail.focus() ;
            return false;
         }*/
      
 var emailID = document.myForm.EMail.value;
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");
         
         if (document.myForm.EMail.value=="" || atpos < 1 || ( dotpos - atpos < 2 )) {
            alert("Please enter correct email ID")
            document.myForm.EMail.focus() ;
            return false;
         }
       


         if( document.myForm.Zip.value == "" || document.myForm.Zip.value.match(alphabets) || isNaN( document.myForm.Zip.value ) ||
            document.myForm.Zip.value.length != 10  )
           {
            alert( "Enter a valid a number with 10 digits." );
            document.myForm.Zip.focus() ;
            return false;
         }
         
         return;
      }
function palindrome ()
{
var word = document.getElementById("word").value;
    var x = /[\W_]/g;
    var y = word.toLowerCase().replace(x,"");
    console.log(y);
    var reversed = y.split("").reverse().join("");
    if (reversed == y){
        document.getElementById("demo1").innerHTML = "Palindrome";
        return true;
    }
    else{
        document.getElementById("demo1").innerHTML = "Not Palindrome";
        return false;
    }
}

function anagram(){
    var str1 = document.getElementById("str1").value;
    var str2 = document.getElementById("str2").value;

    str1 = str1.replace(/[^\w]/g, '').toUpperCase()
    str2 = str2.replace(/[^\w]/g, '').toUpperCase()

    if (str1.length !== str2.length) {
        document.getElementById("check2").innerHTML = "Not Anagram";
        return false;
    }

    let arr = str2.split("")

    for (let ch of str1 ){ 
        if (!arr.includes(ch)) {
            document.getElementById("demo2").innerHTML = "Not Anagram";
            return false;
            break;
        } 
        else {
            arr.splice(arr.indexOf(ch), 1)
        }
    }
    document.getElementById("demo2").innerHTML = "Anagram";
    return true;
}

function fun1(){
    var m = Math.floor(Math.random() * (1000 - 1));
    document.getElementById("value1").value = m;
    return m;
}

function fun2(){
    var g = Math.floor(Math.random() * (1000 - 1));
    document.getElementById("value2").value = g;
    return g;
}
function winner(m,g){

    var map = new Map();

    map.set(0,'Human');
    map.set(1,'Cockroach');
    map.set(2,'Nuclear Bomb');

    a = m % 3;
    b = g % 3;

    if (a == 0 && b == 0){
        document.getElementById("boy").innerHTML = map.get(0)+" Vs "+map.get(0);
        document.getElementById("girl").value = "Tie";
        return "Winner : Tie";
    }
    else if (a == 0 && b == 1) {
        document.getElementById("boy").innerHTML = map.get(0)+" Vs "+map.get(1);
        document.getElementById("girl").value = "Human";
        return "Winner : Human";
    }
    else if (a == 0 && b == 2) {
        document.getElementById("boy").innerHTML = map.get(0)+" Vs "+map.get(2);
        document.getElementById("girl").value = "Nuclear Bomb";
        return "Winner : Nuclear Bomb";
    }
    else if (a == 1 && b == 0) {
        document.getElementById("boy").innerHTML = map.get(1)+" Versus "+map.get(0);
        document.getElementById("girl").value = "Human";
        return "Winner : Human";
    }
    else if (a == 1 && b == 1) {
        document.getElementById("boy").innerHTML = map.get(1)+" Versus "+map.get(1);
        document.getElementById("girl").value = "Tie";
        return "Winner : Tie";
    }
    else if (a == 1 && b == 2) {
        document.getElementById("boy").innerHTML = map.get(1)+" Versus "+map.get(2);
        document.getElementById("girl").value = "Human";
        return "Winner : Human";
    }
    else if (a == 2 && b == 0) {
        document.getElementById("boy").innerHTML = map.get(2)+" Versus "+map.get(0);
        document.getElementById("girl").value = "Nuclear Bomb";
        return "Winner : Nuclear Bomb";
    }
    else if (a == 2 && b == 1) {
        document.getElementById("boy").innerHTML = map.get(2)+" Versus "+map.get(1);
        document.getElementById("girl").value = "Nuclear Bomb";
        return "Winner : Nuclear Bomb";
    }
    else (a == 2 && b == 2) 
    {
        document.getElementById("boy").innerHTML = map.get(2)+" Versus "+map.get(2);
        document.getElementById("girl").value = "Tie";
        return "Winner : Tie";
    }
}
