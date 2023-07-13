function tabuada() {
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')
    let opcs = document.querySelectorAll('.sinais')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''

        // Verifica qual operação está selecionada
        for (let i = 0; i < opcs.length; i++) {
            if (opcs[i].checked) {
                operacao = opcs[i].value
                break;
            }
        }
        
        for (let c = 1;c <= 10; c++) {
            let item = document.createElement('option')
            let resultado;

            // Execulta a operação correspondente
            switch (operacao) {
                case '+' :
                    resultado = n + c;
                    break;
                case '-':
                    resultado = n - c;
                    break;
                case 'x':
                    resultado = n * c;
                    break;
                case '/':
                    resultado = (n / c).toFixed(2);
                    break;
            }

            item.text = `${n} ${operacao} ${c} = ${resultado}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
        }
    }
}
