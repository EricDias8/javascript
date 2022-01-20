function calculadora()
{
    const operacao = Number(prompt("escolha uma operação: \n 1- Soma \n 2- subtração \n 3- multiplicaçao \n 4- divisão real \n 5- divisão inteira \n 6-potenciação "));

    if (!operacao || operacao > 6 ){
        alert("operação invalida!")
        calculadora();
    } else 
    {

    let n1 = Number(prompt("insira o primeiro numero:"));
    let n2 = Number(prompt("insira o segundo numero:"));
    let resultado;

    if (!n1 || !n2){
        alert("erro - parametros invalidos")
        calculadora()
    } else {

    function soma(){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`)
        novaoperaçao()
    }

    function subtracao(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
        novaoperaçao()
    }

    function multiplicacao(){
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
        novaoperaçao()
    }

    function divisaoreal(){
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
        novaoperaçao()
    }

    function divisaointeira(){
        resultado = n1 % n2;
        alert(`o resto da divisão inteira entre${n1} e ${n2} é igual a  ${resultado}`)
        novaoperaçao()
    }

    function potenciacao(){
        resultado = n1 ** n2;
        alert(`o resultado da pontecia de ${n1} elevado a ${n2} é ${resultado}`)
        novaoperaçao()
        
    }

    function novaoperaçao(){
        let opcao = prompt("deseja fazer outra operação? \n 1 -sim \n 2 - não");

        if (opcao == 1){
            calculadora()
        } else if (opcao == 2){
            alert("até mais")
        } else{
            alert("digite o numero 1 ou 2")
            novaoperacao()
        }
    }
}
    /*if(operacao == 1){
        soma();
    } else if(operacao == 2){
        subtracao();
    } else if(operacao == 3){
        multiplicacao();
    } else if(operacao == 4){
        divisaoreal();
    } else if(operacao == 5){
        divisaointeira();
    } else if(operacao == 6){
        potenciacao();
    }
    */
    switch(operacao){
        case 1:
            soma();
            break;
                case 2:
                subtracao();
                break;
                    case 3:
                    multiplicacao();
                    break;
                        case 4:
                        divisaoreal();
                        break;
                            case 5:
                            divisaointeira();
                            break;
                                case 6:
                                potenciacao();
                                break;
            
    }


    }
}

calculadora();
