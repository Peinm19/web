
function Hello()
{
    let Name = prompt("What's your NAme?");
    {
         alert("Hi " + Name);
    }
    
} 

function Z1() {
    
    let variable = 1;
    document.write("\n Переменная " + variable + "." + "Тип " + typeof(variable) )
}

function Z2() {
    
    var val = document.getElementById('InputText').value;
    window.alert("Привет " + val  );

}

function Z3() {
    
    let count = 40;

    document.write("for : ")
    
    for(i = 0; i < count;i++)  document.write(i + " ");
       

    

    document.write(" <br / > while : ");
    let j = 0;

    while (j < count){
    
        document.write(j + " ");
        j++;

    }

    let k =0; 
    document.write(" <br / > do while : ");
    
    do{
        document.write(k + " ");
        k++;
    }
    while (k < count);


}

function Z4 (){
    var val = document.getElementById('InputNumber').value;
    if (val > 5){
        window.alert("Число больше 5. Поздравляю");
    }
    else{
        window.alert("Число меньше 5. ");

    }
}
function Z5 (){
    for (i = 8;i <= 20;i++){
        if ((i % 2) ===0 ) document.write(i + " ")

    }
}
function Z6() {
    for(i  = 1; i <= 7;i++){
        if ((i % 2) > 0 && i != 5  ) document.write(i + " ");

    }
}
function Z7 () {
    let array = new Array(1,2,3,4,5,6,7);
    alert(array);
}
