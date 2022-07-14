function add(){
    //b1: lay du lieu
    let number1 = document.getElementById("number1").value;
    number1 = parseFloat(number1);
    let number2 = document.getElementById("number2").value;
    number2 = Number(number2);
    //b2: tinh toan cong
    let result = number1+number2;
    //b3: In du lieu ra
    document.getElementById("result").innerText = result;
}
