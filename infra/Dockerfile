# Imagen base
FROM node:18-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar dependencias
COPY package*.json ./

# Instalar dependencias (solo producción)
RUN npm install --production

# Copiar el resto del código
COPY . .

# Puerto expuesto (ajústalo si es diferente)
EXPOSE 3000

# Comando para iniciar la app
CMD ["node", "index.js"]

