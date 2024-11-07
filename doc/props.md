# Props

- Props é um recurso fundamental do React

- Pernute a passagem de dados de um componente pai para um componente filho

* Será útil para quando houver dados vindo de um banco de dados

* A props vem em um objeto no arumento da função do componente

# Desestruturando props

- Os componente geralmente tem mais de uma props

- Para facilitar o uso delas, podemos desestrutura no parametro da função do componente

* Assim o objeto props vira o nome de cada propriedade, então não precisamos acessá-lo

* Desta maneira: MyComponent({name,age})

* Utilizamos então name, em vez de props.age
