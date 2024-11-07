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

# Children props

- Children prop é utilizado quando um componente precisa ter jsx dentro dele

- Porém o JSX vem do componente pai

- Então o componente age como um container, obrigando esse JSX

- E Children entra como uma props do componente

# Funções em props

- Podemos passar funções através de props

- Basta criar a função no componente pai, e enviar como prop

- No componente filho, podemos utilizar para alguns eventos

# State lift

- Elevação de state ou state lift, é quando um valor é levado do componente filho para o pai

- Geralmente temos um componente que usa o state e outro que o altera

- Então o componente pai vai gerenciar os valores e passar para os fihlos as alterações;
