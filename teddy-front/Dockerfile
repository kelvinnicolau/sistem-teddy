# Etapa 1: Construir a aplicação
FROM node:18 AS build

# Configurar o diretório de trabalho
WORKDIR /app

# Copiar os arquivos de dependências
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Rodar o build da aplicação
RUN npm run build

# Etapa 2: Servir os arquivos estáticos
FROM nginx:alpine

# Copiar os arquivos estáticos do build para o Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expor a porta 80
EXPOSE 80

# Comando para iniciar o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
