# Equipment-Manager-Web

Create `.env` file based on `.env.example`:
```shell script
cp .env.example .env
```

### Run containers:
```shell script
docker-compose up -d --build
```
Application should be accessible at http://localhost:5000

### Development Commands

**Installing dependencies**
```shell script
docker-compose exec equipment-manager-client yarn install
```

**Adding new packages**
```shell script
docker-compose exec equipment-manager-client yarn add *
```
`*` name of the package

**Running linter**
```shell script
docker-compose exec equipment-manager-client yarn lint
```

**Executing any Yarn command**
```shell script
docker-compose exec equipment-manager-client yarn *
```
`*` name of the command