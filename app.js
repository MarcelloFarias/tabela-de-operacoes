const num1 = document.getElementById('num1'),
      num2 = document.getElementById('num2'),
      btn = document.querySelector('.btn'),
      output = document.querySelector('.output');

function generateOperations() {
    if(num1.value != '' && num2.value != '') {
        let sum, multiplication, division, rest;

        sum = parseInt(num1.value) + parseInt(num2.value);
        multiplication = parseInt(num1.value) * parseInt(num2.value);
        division = parseInt(num1.value) / parseInt(num2.value);
        rest = parseInt(num1.value) % parseInt(num2.value);

        return output.innerHTML = createTable(num1.value, num2.value, sum, multiplication, division, rest);
    }
    else {
        return output.innerHTML = 'Preencha todos os campos !';
    }
}

function createTable(num1, num2, sum, multiplication, division, rest) {
    let table = `<table>
                        <tr>
                            <td>${num1} + ${num2}</td>
                            <td>${sum}</td>
                        </tr>
                        <tr>
                            <td>${num1} * ${num2}</td>
                            <td>${multiplication}</td>
                        </tr>
                        <tr>
                            <td>${num1} / ${num2}</td>
                            <td>${division}</td>
                        </tr>
                        <tr>
                            <td>${num1} % ${num2}</td>
                            <td>${rest}</td>
                        </tr>
                  </table>`;
    
    return table;
}

btn.addEventListener('click', generateOperations);