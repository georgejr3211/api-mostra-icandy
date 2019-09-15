[OK] - Instalar dependências
[OK] - Configurar docker
[OK] - Criar as migrations
[OK] - Criar as rotas

# Comandos
### ❯ sudo docker-compose up -d postgres pgadmin4; sudo docker-compose up api
### ❯ sudo npx sequelize-cli db:migrate

PG ADMIN
http://localhost:5555

API
http://localhost:4000/v1/usuarios

# FALTA FAZER
- INSTALAR GRAPHQL []
- COLOCAR AUTENTICAÇÃO []
- COLOCAR CRIPTOGRAFIA PARA SENHA [OK]
- COLOCAR UPLOAD DE IMAGENS? [OK]
- REALIZAR RELATIONS [OK]
- VALIDADOR DE CPF, TELEFONE, CNPJ, EMAIL []

# EXTENSOES
code --install-extension christian-kohler.npm-intellisense
code --install-extension dbaeumer.vscode-eslint
code --install-extension dracula-theme.theme-dracula
code --install-extension EditorConfig.EditorConfig
code --install-extension esbenp.prettier-vscode
code --install-extension mikestead.dotenv
code --install-extension ms-azuretools.vscode-docker
code --install-extension ms-python.python
code --install-extension ms-vsliveshare.vsliveshare
code --install-extension PKief.material-icon-theme
code --install-extension redhat.vscode-yaml
code --install-extension steoates.autoimport
code --install-extension xabikos.JavaScriptSnippets
