# Curso-Basico-REACT

## Instalacion

Esto nos da un entorno de desarrollo  con REACT APP

npx create-react-app ./


Sintaxis JSX

## Que es JSX (Componentes vs elementos)

JSX nos permite escribir nuestra vista con una sintaxis muy parecida a HTML, pero con la oportunidad de incluir nuestro código JavaScript dentro, lo cual hace más fácil de entender qué hace cada componente


Por conversion 
    La primera conversion de los componetes debe empezar con LetraMajuscula para diferenciarlos
    Parra diferenciar las clases de javascript con JSX, se utiliza calssName en JSX

Los componetes son invisibles para html, pero son visibles para react. React renderiza los elementos.






## Para ejecucion 
npm start



## Publicar deploy en gihubPages

Se crear auna version statica para publicar

correr el comando 
npm install --save-dev gh-pages

   + agregar en packages.json debado de  gh-pages": "^4.0.0
   GabrielAlejandroArroyo = Nobre usuario github (agregandole .github.io )
    
   /Curso-Basico-REACT = Nombre del repositiori
   R
  ,"homepage": "https://GabrielAlejandroArroyo.github.io/Curso-Basico-REACT"


  + Agregar Scripts
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"


Ejecutamos 
npm run build