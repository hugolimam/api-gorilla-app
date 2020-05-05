# Project Title

API - Gorila

### Prerequisites

yarn
docker
docker-compose
docker network 'prod'

## Getting Started

1 -
rodar a api como container =>
`docker-compose -f services.config.yml build gorila-api \ && docker-compose -f services.config.yml up -d gorila-mongo \ && docker-compose -f services.config.yml up gorila-api \`

2 - rodar a api sem docker =>

```
    1 - é necessário executar o comando **docker-compose -f services.config.yml up -d gorila-mongo**
    2 - docker inspect gorila-mongo | grep IPAddress | awk '{print $2}' | awk 'NR==1-3; END{print}' | sed 's/,/ /g' | sed 's/"//g'   (esse comando irá retornar o ip do container do mongo)
    3 - definir o ip em env-command.txt no db_mongo_host
    4 - copiar tudo do arquivo env-command.txt e rodar
    5 - yarn install && yarn start

```

3 - documentação dos endpoints =>

```
    http://18.228.188.222/services/gorila/api/v1/doc/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InRlc3QiOiJ0ZXN0In0sImlhdCI6MTU4ODYzMjM1OH0.UmNSYfHg6MX-kCnBmzhwlwA4hK1FR-iMIVCbQHyNzZs/#api-wallet-add_wallet
```
