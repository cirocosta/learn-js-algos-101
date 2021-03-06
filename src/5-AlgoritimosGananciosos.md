# Algorítimos Gananciosos

> Um algoritmo ganancioso (greedy algorithm) sempre faz a escolha que parece ser a melhor no momento. Ou seja, ele faz uma escolha localmente ótima com a expectativa de que essa escolha leve à solução ótima global.

## Elementos da estratégia Gananciosa

Dois são os elementos que recorrentemente aparecem ao utilizarmos algorítimos gananciosos para resolvermos problemas:

- Propriedade da escolha gananciosa

uma solução globalmente ótima pode ser obtida fazendo-se uma escolha ótica localmente. A escolha feita pode, é claro, depender das escolhas anteriores, mas não das escolhas futuras ou das soluções dos subproblemas. as estratégias gananciosas normalmente se desenvolvem na forma de cima para baixo (top-down).


- Subestrutura ótima.

Um problema exibe subestrutura ótima se uma solução ótima do problema contém dentro de si soluções
ótimas de subproblemas.


## Problema de Seleção de Atividades

> O problema de seleção de atividades consiste em **obter o conjunto de atividades mutuamente compatíveis tal que seu tamanho** (medido pelo número de atividades no conjunto) **seja máximo**.

Para cada iteração é sempre escolhida aquela com o menor tempo de término que pode ser 'legalmente' programada. É, portanto, uma escolha gananciosa no sentido de que ela deixa o máximo de oportunidade possível para as demais atividades restantes serem programadas.



```
def GREEDY-ACTIVITY-SELECTOR(s,f)
    // numero de atividades é guardado
    N = len(s)
    A = {1}
    // j indica o término de uma atividade
    j = 1
    for i = 2 to N:
        // se começa depois do fim da última
        if (s[i] > f[j]):
            // inclui ele
            A = A U {i}
            // j indica entao a ativ mais recentemente incluida em A
            j = i
    return A
```

Se já previamente ordenado (ordenado de forma não decrescente para F), o algorítimo é muito  performático: O(n). Caso contrário, O(n logn) já que teríamos de ordená-lo.

## O problema da mochila Fracional e 0-1

N oproblema

## Huffman

Utiliza uma tabela das frequências de ocorrência dos caracteres para estabelecer uma maneira ótima de representar cada caracter como uma string binária.

> More common letters -> less bits to represent.

https://www.youtube.com/watch?v=ZdooBTdW5bM

1.  Write the set of letters that appear on the message
2.  Tell how many times each of them appear
3.  Sort them by the number of appearance
4.  Build a tree by merging together nodes and combining into one.
    - choose the two smallest and combine it (merge and sum).
    - keep doing that and going upward.

```
def HUFFMAN(C):
    n = |C|
    Q = C
    for i = 1 to n-1:
        z = ALLOCATE-NODE()
        x = left[z] = EXTRACT-MIN(Q)
        y = right[z] = EXTRACT-MIN(Q)
        f[z] = f[x] + f[y]
        INSERT(Q,z)
    return EXTRACT-MIN(Q)
```
