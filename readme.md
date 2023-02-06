
# Utilizei esse teste open-source da aikodigital pra testar meus conhecimentos. 


# Teste Back-end

Neste teste serão avaliados seus conhecimentos e a metodologia aplicada no desenvolvimento do back-end de uma aplicação.

## O Desafio

O desafio é criar um servidor que provê uma API com o objetivo de fornecer informações sobre o transporte público da cidade de São Paulo.

## Requisitos

Esses requisitos são obrigatórios e devem ser desenvolvidos para a entrega do teste

### CRUD

Implementar as operações de **criação (POST)**, **consulta (GET)** (Por Id e GetAll), **atualização (PUT)** e **exclusão (DELETE)** de todas as entidades do seguinte diagrama:

![https://github.com/aikodigital/programa-estagio-2021/raw/main/imagens/backend_diagrama.png](https://github.com/aikodigital/programa-estagio-2021/raw/main/imagens/backend_diagrama.png)

### Métodos

Após implementar o CRUD para as entidades, implemente os seguintes métodos:

* `Linhas por Parada`: Recebe o identificador de uma parada e retorna as linhas associadas a parada informada

* `Veiculos por Linha`: Recebe o identificador de uma linha e retorna os veículos associados a linha informada

## Extras

* Testes de Integração de todas as rotas

* Estrutura MVC + Services

* Metodo restaura um registro deletado


## Pra rodar o Projeto

* Estou utilizando SQL Server

* Crie duas database, uma de desenvolvimento e outra de teste. `aiko_digital` e `aiko_digital_test`

* Npm install

* Npx sequelize-cli db:migrate

* Npm start pra rodar a aplicação

* Npm test pra rodar os testes 