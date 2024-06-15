## Desafio Avante

Esse é um documento para explicar o passo a passo do desafio do avante
## 1° Configuração

* Para configuração criei um repositório com o nome **challenge-avante**.
* Criar o projeto usei o pacote Vite com o template para React-JS.
* Instalei os comandos gerais com o Yarn install.

## 2° Identificação do problema

O desafio era criar um site com uma tela de login e tabela de gerenciamento de produtos.
* Para a tela de login tentei acompanhar o video tutorial dado e tentar entender mais profundamente o significava cada coisa.
* Para a tabela de gerenciamento de produtos, usei o pacote Chakra.UI que é um conjunto de componentes previamente feitos pelo autor para serem usados.

## 3° Codificação

Tela de login

- Criei as paginas Signin,Singnup e Home usando jsx por ser mais eficiente quando for misturar código JS com HTML.
- Para os estilos das páginas usei o pacote styled-components que auxilia para organizar e escrever código CSS
- Os componentes input e button foram criados para facilitar na estilização da página
- Para a navegação da página foi usado o pacote react-router-dom usando o método BrowserRouter 
- Na pasta routes>index.jsx usei uma função para autorizar o usuario entrar na página apenas se tiver login confirmado.
- Mas para realizar o login é necessário ter conhecimento do hooks Context e conhecimento sobre sessionstorage e localstorage
- No arquivo context>auth.js é implementado os métodos para realizar o signin e signup.

Tela de tabela de gerenciamento

Antes de tudo não deu tempo completar o desafio por razões de saúde, mas irei descrever o que tentei fazer e o que pretendia fazer.
- Para a tabela usaria o Chakra.UI que é um conjunto de componentes
- O componente table é simples, composto por header, linhas,... 
- Porém para ela se tornar dinâmica deve ser feito algumas mudanças.
- Uma variável representando os dados da tabela seria responsável pelos dados 
- Um lista seria usada já que tem alguns métodos built-in presentes nele
