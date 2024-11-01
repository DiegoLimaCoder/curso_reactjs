# Criando componentes

* Os componentes ficam dentro de uma pasta chamada components, que criamos em src

* Nomeados em CalmeCase: FristComponent.jsx

* A utilização da extensão .jsx facilita a formatação para os editores

* Dentro do componente precisamos criar e exportar uma função


# Importando componentes

* Para utilizar um componente é necessário o processo de importação

* Sintaxe é: import x from './components/x.jsx'

* Para inserir um componente dentro de outro vamos utilizar a sintaxe de tag HTML com o nome do componente: <FristComponent>

# JSX

* JSX é o HTML do React, o código interno das funções de componentes, após o return;

* Vamos escrever as nossas tags e importar os outros componentes

* Há algumas diferença do HTML, ex> class = classname

* Podemos escrever JavaScript dentro do JSX

* O JSX pode ter apenas um elemento pai

# Template Expressions

* Template Expression é o recurso que permite a execução de JS no JSX

* Podemos também inserir variáveis

* Tudo que vai entre as chaves é entendido e executado como javascript

# Hierarquia de componentes

* Os componentes pode ser utilizandos em outros componentes

* Podemos montar também uma hierarquia, onde um componente é pai do outro

* E ao importa o componente pai, todos os outros vem junto