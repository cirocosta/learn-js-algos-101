# Árvores Geradoras Mínimas

> spanning tree T (árvore geradora T) of a connected, undirected graph G is a **tree that includes all of the vertices** and some or all of the edges of G. A minimum spanning tree (**MST**) or minimum weight spanning tree is then **a spanning tree with weight less than or equal to the weight of every other spanning tree**. More generally, **any undirected graph (not necessarily connected) has a minimum spanning forest**, which is a union of minimum spanning trees for its connected components.

## Porque?

Pois há a necessidade de se ter redes sem redundância e com a menor complixidade possível. São casos em que isto importa:

-   COnexão de terminais no cabeamento de paineis elétricos
-   Construção de um computadore digital utilizando circuitos de alta frequência
-   construção de uma rede de dutos
-   interligação de um conjunto de localidades remotas ja conectadas por rodovia
-   redução de memória para armazenamento de dados
-   análise de agrupamento

## Algorítimos

Ambos utilizam a estratégia gananciosa, apesar de aplicá-la de maneira diferente, e possuem tempo de execução O(|E| lg |V|), desde que utilizem de *heaps* comuns. ps.: utilizando *heaps* de fibonacci o de Prim poderia ir para O(|E| + |V|lg|V|), representando melhora se |V| << |E|.

### Generic-MST

> Seja A **sempre** um subconjunto de ramos de alguma árvore geradora mínima, a cada passo um ramo *(u,v)* é determinado de forma que possa ser incluído em A preservando essa propriedade de A, i.e, *A U {(u,v)}* continua sendo um subconjunto de alguma árvore geradora mínima (tal ramo é tido como *seguro*).

```
def GENERIC-MST(G,w):
    A = null
    while A não forma uma árvore geradora:
        encontra um ramo (u,v) seguro para A
        A = A U {(u,v)}
    return A
```

Bastando então termos de reconhecer quais são os ramos seguros.

#### Ramos Seguros

Há, entretanto, uma definição ainda mais formal de ramos seguros.

Algumas definições são necessárias:

-   Define-se um **corte** (S, V-S) de um grafo não direcionado G = (V,E) como uma partição de V.
-   Dizemos então que um ramo (u,v) de E **cruza** o corte (S, V-S) se um de seus vértices pertence a S e o outro a V-S.

-   Dizemos que um corte **respeita** o conjunto de ramos A se nenhum ramo de A cruza o corte.

-   Um ramo que cruza um corte é chamado de **leve** se seu peso é o mínimo dentre todos aqueles correspondentes que cruzam o corte (pode haver mais de um).

Sabendo disso:

> Seja G = (V,E) um grafo não direcionado, conexo, com uma função de peso real w definida em E. Seja A um subconjunto de E contido em alguma árvore geradora mínima de G. Seja (S,V-S) um corte qualquer de G que respeita A e seja (u,v) um ramo leve que cruza (S, V-S). Senão (u,v) é seguro para A.

### Kruskal

Encontra um ramo seguro para adicionar à floresta em consturção considerando todos os ramos que conectam duas árvores quaisquer da floresta e encontrando dentre eles um ramo (u,v) de peso mínimo.

https://www.youtube.com/watch?v=71UQH7Pr9kU

Tem-se o conjunto A definido como uma floresta. O ramo seguro adicionado a A é, então, sempre um ramo de peso mínimo que conecta dois componentes distintos do grafo.

1.  Pick the smallest edge.
2.  Repedetly look for the smallest edges that don't create cycles.
3.  Keep looking for the smallest ones, until all nodes are in the same tree.

Then we have a MST.

```
def MST-KRUSKAL(G,w):
    A = null
    // criando uma floresta
    for cada vertice v em V[G]:
        MAKE-TREE(v)
    ordene os ramos de E segundo pesos nao decrescentes
    for cada ramo (u,v) pertencente a E, em ordem nao decrescente de pesos:
        // determinar se dois vertices pertencem a mesma arvore
        if (FIND-TREE(u) != FIND-TREE(v)):
            A = A U {(u,v)}
            // combina entao os vertices
            UNION(u,v)
    return A
```

Seu tempo de execução depende diretamente da implementação da estrutura de dados de conjuntos disjuntos. Utilizando a estrutura mais eficiente dentre todas as conhecidas até o momento o tempo de execução do algorítimo é O(|E|lg|E|).

### Prim

O conjunto A forma uma única árvore. O ramo seguro adicionado a A é sempre um ramo de peso mínimo que conecta a árvore a um vértice não pertencente á árvore.

1.  Create a list of visited nodes
2.  Examine all vertices from A. Choose the smallest edge.
3.  Look for all of the vertices from A/B. Pick the smallest. Keep doing that ;)

https://www.youtube.com/watch?v=cplfcGZmX7I

A árvore é iniciada em um vértices arbitrário r (raiz) e cresce então até cobrir todos os vérrtices de V. Para cada passo é acresentado à árvore um ramo leve, conectando um vértice em A e outro em E-A, adicionando então apenas ramos seguros para A (quando o algoritimo finaliza, os ramos de A constituem uma árvore geradora minima).

```
// todos os vertices que nao pertencem à arvore estao colocados numa
// heap Q baseada num campo key. Para cada vertice v, key[v] representa
// o mínimo peso de todos os ramos que conectam v a algum vértice da
// árvore. pi[v] contem o pai de v na árvore.


def MST-PRIM(G,w,r):
    // inicializacao
    Q = V[G]
    for cada u em Q:
        key[u] = infinito

    key[r] = 0

    pi[r] = nil
    while Q nao vazio:
        u = EXTRACT-MIN(Q)
        for cada v em Adj[u]:
            if v in Q and w(u,v) < key[v]:
                pi[v] = u
                key[v] ] w[u,v]

```

## Conclusion

> If the edge weights are integers, then deterministic algorithms are known that solve the problem in O(m + n) integer operations, where m is the number of edges, n is the number of vertices.
