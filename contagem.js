/* Exercícios com estrutura de repetição Encontro Remoto 26/01:
1. Percorrer do 0 até o nº de alunos;
2. Verificar se o numero do aluno é par: 
    Verdadeiro: Escrever na tela o número é PAR
    Se for impar:
    Verdadeiro: Escrever na tela o número é IMPAR
3. Verificar se o numero é 0: 
    Verdadeiro: Escrever na tela ZERO
    = -> Atribuição de valores (Recebe)
    == -> É igual ao valor
    === -> Estritamente igual (Texto)
    */

    let numeroAlunos = 10;

    for (let cont = 0; cont < numeroAlunos; cont++){
        console.log(cont);
        // Resto % -> Retorna o valor de uma divisão inteira
        if(cont == 0){
            console.log("O número é ZERO")
        }
        else if(cont % 2 == 0){ //Verifica se o número é par
            console.log(`O Número ${cont} é PAR`)//Crase ` = Interpolação -> Template -> Coloca valores de variaveis dentro de um texto
            //console.log('O número'+ cont + 'é PAR') -> CONTATENAÇÃO

        }else if(cont % 2 == 1){// Verifica se o número é impar

            console.log(`O Número ${cont} é ÍMPAR`)
        }
      
    }


 