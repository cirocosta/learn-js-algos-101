# Algorítimo Em Automação

> Algorítimo trata-se de um procedimento sequencial que toma um conjunto de valores como entrada e produz um outro conjunto de valores como saída. Trata-se de um procedimento computacional para se conseguir a relação entrada-saída de um problema enunciado.

O que é muito interessante no estudo de algorítimos é que mesmo que certos algorítimos sejam destinados a resolver um determinado problema, sua eficiência pode divergir tremendamente, podendo ser muito mais significativo do que um hardware mais avançado.

Estudaremos então alguns em especial.

## Ordenação

Seja a sequência de entrade uma instância do problema de ordenação, temos então vários algorítimos para calcular a solução do problema (uma saída ordenada), dependendo de três aspectos:

-   número de valores a serem ordenados,

-   grau em que os valores já estão previamente ordenados,

-   tipo de dispositivo de armazenamento a ser utilizado (memória, disco, etc).

### Insertion Sort

Eficiente para um pequeno número de itens. Seu procedimento assemelha-se bem ao ordenamento de um baralho: vamos separando as cartas já embaralhadas de um lado da mão e então vamos inserindo cartas às já ordenadas à medida que vamos pegando.

Sua abordagem para a resolução do problema é entã definida como *incremental* já que insere-se novos elementos em um sub-vetor ordenado.

Dado um conjunto de números inteiros embaralhados contidos na lista `A[1...N]` contendo *N* valores, temos então o seguinte pseudo-código de ordenação por inserção:

```
insertion-sort(A):

for j <- 2 to length[A]:
    key <- A[j]
    insere A[j] na seq ordenada A[1... j-1]
    i <- j-1
    while i > 0 and a[i] > key:
        A[i+1] <- A[i]
        i <- i-1
    A[i+1] <- key
```

*ps.: J representa a carta atual a ser inserida na mão, A[1 .. j-1] as cartas já ordenadas e A[j+1 ... n] a pilha desordenada.*

#### Analisando

Para analisar o algorítimo devemos primeiro deixar claro o que estamos buscando: sua eficiência quanto a memória? tempo de execução?

No caso, iremos analisar o segundo caso, supondo o consumo sequencial das instruções. Devemos entretanto nos lembrarmos que a medida do número de elementos de entrada nem sempre é algo trivial. Há casos (como neste de ordenação simples), em que a entrada pode ser representada por um número natural, enquanto em outros mais de um serão necessários (como no caso de grafos - poderíamos descrever por meio do número de ramos e vértices do mesmo).

Feitas as considerações, podemos então estabelecer que: o **tempo de execução** de um algorítimo para uma dada entrada depende do número de operações primitivas ou passos executados, independemente da máquina que o executa. Desta forma, definimos então valores constantes para cada linha simples do código.


**//TODO -- análise completa do tempo de execução com os c1, c2 ... etc**


##### Pior Caso e Caso Médio

Quando analisamos um algorítimo, podemos estar focando a análise para três casos: o melhor caso, o caso médio e o pior. Qual deles utilizar depende de nosso objetivo. Quando utilizamos do pior caso estamos então analisando um limite superior para o tempo associado a qualquer entrada fornecida. A diferença deste para o caso médio, entretanto, geralmente não é grande sendo, inclusive, difícil de estimar o que é um caso médio.


##### Ordem de Crescimento

Ao analisarmos os algorítimos, o que realmente irá importar para nós é a **ordem de crescimento** do tempo de execução, ou seja, iremos levar em consideração apenas o termo de ordem mais elevada da expressão que representa o tempo de execução já que ao supormos elevados valores estes passarão a ser insignificantes.

Este então será o parâmetro para determinarmos qual algorítimo é mais eficiente que outro em uma comparação: o seu grau de crescimento.

Quando analisamos desta maneira, estamos estudando a *eficiência assintótica* do algorítimo. Três são as notações estudadas aqui:

-   Teta: Limitante assintóticamente **justo** para um *f(n)*;

-   O: Limitante assintótica **superior** para uma função *f(n)*;

-   Omega: Limitante assintótico **inferior** para uma função *f(n)*;

### Merge Sort

Trata-se de outro algorítimo de ordenação, porém, neste caso, utilizando uma abordagem bem diferente: dividar para conquistar. Suas etapas são:

1.  Dividar o problema em diversos subproblemas similares ao original à problemas de tamanhos menores e mais simples;

2.  resolver os subproblemas mais simples de maneira recursiva (o problema base é suficientemente simples para ser resolvido por exaustão);

3.  combinar as solução para então reduzir à solução do problema original.


No caso específico do merge sort, temos então os passos:

1.  Dividir a sequência de *n* elementos em duas sequências de *n/2* elementos cada,

2.  ordenar as subsequências recursivamente através do *merge-sort*,

3.  juntar as duas subsequências ordenadas para então produzir a solũção do problema original.

