CANAL OFICIAL DEL EQUIPO SN-11  

whatsApp   
https://chat.whatsapp.com/Jsg67nrzOBL1Ss6O9gwBys

Canal oficial de comunicación
El canal principal de comunicación es whatsapp debido a la facilidad de comunicarse ya sea por mensaje de texto, llamada o videollamada, 
también la aplicación permite el enlaces o documentos asociados al proyecto. El horario decidido para reuniones es todos los días de 9 pm en adelante, 
para poder dar tiempo de revisión del trabajo hecho o avanzar y hacer cualquier modificación o mejora que sea necesaria en cuanto al proyecto y reporte. 

HORARIOS DE RESPUESTA  
Noche
Horarios entre las 9:00 PM en delante


NORMAS MINIMAS DE COMUNICACION  
1- Mantener el repesto.  
2- Responder a los mensajes, llamadas o videosllamadas.  
3- Confirmar la lectura de los mensajes.  
4- Expresar ideas u opiniones claras y directas.  
5- Ser empaticos por situaciones laborales con distintos horarios.  
6- Confirmar entendimiento de las explicaciones o al momento de leer instrucciones.  


EVIDENCIAS DE LA FASE CERO

En la imagen del documento, se trabajo por medio de Google Docs para, facilitar la edicion y participacion de todos los Roles asi, poder rellenar el Rol faltante que no respondio un integrante.

<img width="1419" height="861" alt="image" src="https://github.com/user-attachments/assets/7e3b9ba3-adcb-4d42-abb8-b7cfae24416b" />

En estas 2 imagenes se evidencia el canal de comunicacion WHATSAPP, y se aprecia los integrantes del grupo.
<img width="425" height="518" alt="image" src="https://github.com/user-attachments/assets/9c63bfb0-8d02-4555-b280-47a9d32c9bf3" />
<img width="429" height="519" alt="image" src="https://github.com/user-attachments/assets/ca1216a3-7c03-4749-a4b8-ffd06b9537f6" />


<img width="317" height="367" alt="image" src="https://github.com/user-attachments/assets/7e5bd1c4-5e3f-44ae-8551-c12e26fbe093" />  




-------------------------------------------------------------------------------------------------------------------------
FASE 01 DEL PROYECTO DNSDE  

Nota: Enla fase 1 de este proyecto hubieron muchos inconvenientes el cual se reorganizo y reasignaron resposablidades extras a cada integrante debido a que, 
uno de los integrantes desistió por motivos personales.



Evidencia del diagrama de flujo hecho en Draw.io  
<img width="488" height="218" alt="image" src="https://github.com/user-attachments/assets/9a3d213a-7c6c-45bf-8771-f0fa6cb8296d" />  

<img width="874" height="281" alt="image" src="https://github.com/user-attachments/assets/94471fac-c3b5-4e64-a5d1-e7de0b77304c" />  

BRANCHES MODEL  
<img width="239" height="237" alt="image" src="https://github.com/user-attachments/assets/02d45383-f071-43dd-9492-0cbfd751aca0" />




---------------------------------------------------------------------------------------------------------------  
DOCUEMENTACION DE LA FASE 2 DEL PRO  
exportacion de DIAGRAMA DRAW.IO A PNG Y AGREGADO A GITHUB  
https://app.diagrams.net/?src=about#Hantoniosixco%2FDNSDE-SN-11%2Fmain%2Fdocs%2FDiagrama.drawio#%7B%22pageId%22%3A%22OILRFIr8J_ASrDXMIVmO%22%7D 






npm install
Luego sube ambos archivos:
git add package.json package-lock.json
git commit -m "Sync dependencies for CI"
git push origin main

haciendo GIT PULL Y GIT PUSH hacia la rama principal


CI Advanced Code

name: CI Advanced


on:
  push:
    branches: [ main, dev ]
  pull_request:


permissions:
  contents: read


jobs:
  ci:
    name: Full CI Pipeline
    runs-on: ubuntu-latest


    strategy:
      matrix:
        node-version: [18, 20]


    steps:
      - uses: actions/checkout@v4


      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: npm


      - name: Install dependencies
        uses: nick-fields/retry@v3
        with:
          timeout_minutes: 10
          max_attempts: 3
          command: npm ci


      - name: Lint
        uses: nick-fields/retry@v3
        with:
          timeout_minutes: 5
          max_attempts: 2
          command: npm run lint


      - name: Run tests with coverage (retry)
        uses: nick-fields/retry@v3
        with:
          timeout_minutes: 10
          max_attempts: 3
          command: npm test -- --coverage


      - name: Upload coverage report
        uses: actions/upload-artifact@v4
        with:
          name: coverage-node-${{ matrix.node-version }}
          path: coverage/


      - name: Security audit
        uses: nick-fields/retry@v3
        with:
          timeout_minutes: 5
          max_attempts: 2
          command: npm audit --audit-level=high



Configuración de CI se realiza en Visual Studio Cod.



CD, despliegue continuo
name: CD Production Deploy


on:
  push:
    branches: [ main ]


jobs:
  deploy:
    name: Deploy to Production
    runs-on: ubuntu-latest


    steps:
      - uses: actions/checkout@v4


      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm


      - name: Install dependencies
        run: npm ci


      - name: Build project
        run: npm run build


      - name: Deploy via SSH
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SERVER_SSH_KEY }}
          script: |
            cd /var/www/app
            git pull origin main
            npm ci
            npm run build
            pm2 restart app || pm2 start npm --name "app" -- start  

            <img width="426" height="407" alt="image" src="https://github.com/user-attachments/assets/485c55ef-a54e-412a-bd5c-26cae0265d22" />  

            
            <img width="426" height="407" alt="image" src="https://github.com/user-attachments/assets/c5940f68-da5e-457e-942d-c711c6dead61" />

            <img width="442" height="214" alt="image" src="https://github.com/user-attachments/assets/f17ee162-3c18-45a8-862d-4c6b878dcd28" />  

            <img width="443" height="293" alt="image" src="https://github.com/user-attachments/assets/fdb1bf30-e341-4016-bc0f-eb5f4f9b3972" />  

            <img width="440" height="419" alt="image" src="https://github.com/user-attachments/assets/8ea33082-9bd1-42b6-abc7-e1a2179dac2c" />  

            <img width="921" height="588" alt="image" src="https://github.com/user-attachments/assets/654292f4-ea1c-45ca-aaa6-e5d81f0ecb6c" />  

            <img width="921" height="588" alt="image" src="https://github.com/user-attachments/assets/baba60e4-a3cb-4c7e-83b1-2e3e854b1f9b" />  

            
            <img width="921" height="521" alt="image" src="https://github.com/user-attachments/assets/462838d2-79f2-4cee-b322-b2db6188e8f7" />

EVIDENCIA DE ARCHIVO PRT
CAPTURA TOMADA DESDE vScODE

<img width="921" height="601" alt="image" src="https://github.com/user-attachments/assets/b38a0c80-0c7c-4c31-a6f3-9e8e60318c53" />







  





