# Árvores Geradoras Mínimas

> spanning tree T (árvore geradora T) of a connected, undirected graph G is a **tree that includes all of the vertices** and some or all of the edges of G. A minimum spanning tree (**MST**) or minimum weight spanning tree is then **a spanning tree with weight less than or equal to the weight of every other spanning tree**. More generally, **any undirected graph (not necessarily connected) has a minimum spanning forest**, which is a union of minimum spanning trees for its connected components.

## Porque?


## Algorítimos

Ambos utilizam a estratégia gananciosa, apesar de aplicá-la de maneira diferente.

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

### Kruskal

https://www.youtube.com/watch?v=71UQH7Pr9kU

Tem-se o conjunto A definido como uma floresta. O ramo seguro adicionado a A é, então, sempre um ramo de peso mínimo que conecta dois componentes distintos do grafo.

1.  Pick the smallest edge.
2.  Repedetly look for the smallest edges that don't create cycles.
3.  Keep looking for the smallest ones, until all nodes are in the same tree.

Then we have a MST.

```
def MST-KRUSKAL(G,w):
    A = null
    for cada vertice v em V[G]:
        MAKE-TREE(v)
    irdebe is ranis de E segundo pesos nao decrescentes
    for cada ramo (u,v) pertencente a E, em ordem nao decrescente de pesos:
        if (FIND-TREE(u) != FIND-TREE(v)):
            A = A U {(u,v)}
            UNION(u,v)
    return A
```

### Prim

O conjunto A forma uma única árvore. O ramo seguro adicionado a A é sempre um ramo de peso mínimo que conecta a árvore a um vértice não pertencente á árvore.

1.  Create a list of visited nodes
2.  Examine all vertices from A. Choose the smallest edge.
3.  Look for all of the verticles from A/B. Pick the smallest. Keep doing that ;)

https://www.youtube.com/watch?v=cplfcGZmX7I

## Conclusion

> If the edge weights are integers, then deterministic algorithms are known that solve the problem in O(m + n) integer operations, where m is the number of edges, n is the number of vertices.
