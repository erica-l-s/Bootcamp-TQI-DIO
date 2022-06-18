function calculadora() {


    const operacao = Number(prompt('Escolha a operação: \n 1-soma(+)\n 2-subtração(-)\n 3-multiplicação(*)\n 4-divisão real(/)\n 5-divisão inteira(%) \n 6-potenciação(**)\n'))

    if (!operacao || operacao >= 7) {
        alert('Erro: Operação inválida')
        calculadora()
    } else {
        let number1 = Number(prompt('Insira o primeiro valor:'))
        let number2 = Number(prompt('Insira o segundo valor:'))
        let resultado;

        if (!number1 || !number2) {
            alert('Erro: parâmetros inválidos')
            calculadora()
        } else {
            function soma() {
                resultado = number1 + number2
                alert(`${number1} + ${number2} = ${resultado}`)
                novaOperacao()
            }

            function subtracao() {
                resultado = number1 - number2
                alert(`${number1} - ${number2} = ${resultado}`)
                novaOperacao()
            }

            function multiplicacao() {
                resultado = number1 * number2
                alert(`${number1} * ${number2} = ${resultado}`)
                novaOperacao()
            }
            function divisaoReal() {
                resultado = number1 / number2
                alert(`${number1} / ${number2} = ${resultado}`)
                novaOperacao()
            }
            function divisaoInteira() {
                resultado = number1 % number2
                alert(`O resto dos números ${number1} e ${number2} é igual a ${resultado}`)
                novaOperacao()
            }
            function potenciacao() {
                resultado = number1 ** number2
                alert(` o número ${number1} elevado ao número ${number2} = ${resultado}`)
                novaOperacao()
            }

            function novaOperacao() {
                let opcao = prompt('Deseja fazer uma nova operação?\n 1-Sim\n 2-Não')

                if (opcao == 1) {
                    calculadora()
                }

                else if (opcao == 2) {
                    alert('Até mais')
                }
                else {
                    alert('Digite uma opção válida')
                    calculadora()
                }
            }

        }

        switch (operacao) {
            case 1:
                soma()
                break
            case 2:
                subtracao()
                break
            case 3:
                multiplicacao()
                break
            case 4:
                divisaoReal()
                break
            case 5:
                divisaoInteira()
                break
            case 6:
                potenciacao()
                break

        }

    }

}



calculadora()