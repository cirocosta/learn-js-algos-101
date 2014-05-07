# O método Branch and Bound

O método obtém a solução ótima de PPIs utilizando uma enumeração eficiente dos pontos da região viável de um subproblema.

PPI == PPL com restrição de que as incógnitas são inteiras. O método branch and bound trata-se de um exemplo de aplicação de busca em grafos (no caso, de busca em profundidade).

PPI com todas as incógnitas inteiras: Puro

PPI com apenas parte das incógnitas inteiras: Misto

PPL obtido removendo-se de uma PPI a restrição das incógnitas serem inteiras: relaxação PL.


> Relaxação PL de um PPI produz um problema com menos restrições, tendo, como consequência, que um conjunto viável a partir de qualquer PPI deve obrigatoriamente estar contido no conjunto viável da relaxação PL correspondente.

1. Começa por resolver a relaxalão PL do PPI puro. Se a solução for inteira, então o PPI está resolvido.
2. Não resultando em uma solução inteira , escolhe-se, arbitrariamente, alguma das variáveis com valor fracionário na solução da relaxação PL e então ramifica-se para um subproblema com valor inteiro abaixo do fracionário e outro acima
3.
