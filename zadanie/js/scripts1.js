
function Z7 () {
    let array = new Array(1,2,3,4,5,6,7);
    alert(array);
}

function Z8 () {
    let array = new Array(1,2,3,4,5,6,7);
            document.write("<br / > 5 элемент массива:  " +  array[5]  );
            array[5] = "678";
            document.write("<br / > 5 элемент массива:  " +  array[5] );

}

function Z9 () {
    let array2 = new Array(1,2,3,4,5,6,7);
        
    for (i = 0; i < array2.length; i++ ){
        document.write(array2[i] + " ");
    }
    
    document.write("<br / > длина массива " + array.length + " элементов" );
}

function Z10 () {
    let arr1 = new Array("A", "B", "C", "D");
            let arr2 = new Array(1,2,3,4,5);
            let rezult = new Array();
            
           
            for (i = 0; i < arr1.length;i++) rezult.push(arr1[i]);
            
            for (j = 0; j < arr2.length;j++) rezult.push(arr2[j]);


            for (k = 0; k < rezult.length;k++){
                document.write(rezult [k] + " ");

            }

            let lastElement = rezult[rezult.length - 1];
           
            rezult.pop();
            document.write("<br / > последний элемент до удаления " + lastElement);
            document.write("<br / > последний элемент после удаления " + rezult[rezult.length - 1]);
            
            rezult.unshift(111111);

            document.write(" <br / > Новый первый элемент : " + rezult [0]);
}

function Z11 () {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    document.write(today);
    
}

function Z12 () {
    let number1 = getRandomInt(0,50);
      
      let number2 = getRandomInt(0,50);
      document.write("<br / > Число 1 " + number1 + "<br / > Число 2 " + number2 );

      let rez = number1 * number2;
      document.write( "<br / >" + rez);
      

      function getRandomInt(min, max) {
        min = Math.ceil(min);
         max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
        }
        

}