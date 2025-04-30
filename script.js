function clearFields(){
    document.getElementById('weight').value = ''
    document.getElementById('height').value = ''
    document.getElementById('bmi-value').textContent = ''
    document.getElementById('remark-value').textContent = ''
}

function calculateBMI(){
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCM = parseFloat(document.getElementById('height').value);
    const heightM = heightCM / 100;
    if(!weight || !heightM  || weight <= 0 || heightM <= 0){
        alert("Inputs are not valid!")
        return;
    }
    const bmi = weight / (heightM*heightM)
    document.getElementById('bmi-value').textContent = bmi.toFixed(2);
    
    let remark = '';
    if(bmi<18.5) remark = 'Underweight'
    else if (bmi<25) remark = 'Normal weight'
    else if (bmi <30) remark = 'overweight';
    else remark = 'Obese'
    
    document.getElementById('remark-value').textContent = remark;

}
