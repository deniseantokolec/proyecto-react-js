import Canto from './Imagenes/Canto.jpg'
import Piano from './Imagenes/Piano.jpg'
import Guitarra from './Imagenes/Guiotarra.jpg'
import Comedia from './Imagenes/Comedia.jpg'
import Teatro from './Imagenes/Teatro.jpg'
import Standup from './Imagenes/Standup.jpg'


const clases =[{
    id: "1",
    Actividades: "Canto",
    Imgurl: Canto,
    Genero:"Musica",
    Frecuencia: "Semanal",
    Precio: "$5000",
    Stock: 1
  }, {
    id: "2",
    Actividades: "Piano",
    Imgurl:Piano,
    Genero:"Musica",
    Frecuencia: "Semanal",
    Precio: "$7500",
    Stock: 1
  }, {
    id: "3",
    Actividades: "Guitarra",
    Imgurl:Guitarra,
    Genero:"Musica",
    Frecuencia: "Semanal",
    Precio: "$7500",
    Stock: 1
  }, {
    id: "4",
    Actividades: "Comedia Musical",
    Imgurl:Comedia,
    Genero:"Teatro",
    Frecuencia: "3 veces por semana",
    Precio: "$9500",
    Stock: 30
  }, {
    id: "5",
    Actividades: "Teatro",
    Imgurl:Teatro,
    Genero:"Teatro",
    Frecuencia: "2 veces por semana",
    Precio: "$8500",
    Stock: 30
  }, {
    id: "6",
    Actividades: "Stand Up",
    Imgurl:Standup,
    Genero:"Teatro",
    Frecuencia: "2 veces por semana",
    Precio: "$8000",
    Stock: 30
}]

export default clases;