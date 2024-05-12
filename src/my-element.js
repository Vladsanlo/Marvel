import { LitElement, css, html } from 'lit'

export class MyElement extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      title1: { type: String },
      paragraph1: { type: String },
      list1Element1: { type: String },
      list1Element2: { type: String },
      list1Element3: { type: String },
      list1Element4: { type: String },
      list1Element5: { type: String },
      list1Element6: { type: String },
      list1Element7: { type: String },
      list1Element8: { type: String },
      list1Element9: { type: String },
      list1Element10: { type: String },
      list1Element11: { type: String },
      list1Element12: { type: String },
      image1URL: { type: String },

      title2: { type: String },
      paragraph2: { type: String },
      list1Element13: { type: String },
      list1Element14: { type: String },
      list1Element15: { type: String },
      list1Element16: { type: String },
      image2URL: { type: String },

      title3: { type: String },
      paragraph3: { type: String },

    }
  }

  constructor() {
    super()
    this.title = 'Grupos de heroes y villanos de Marvel'

    this.title1 = 'X-MEN'
    this.paragraph1 = 'Los X-Men son un equipo de superhéroes ficticios que aparecen en los cómics estadounidenses publicados por Marvel Comics. Fueron creados por el escritor Stan Lee y el artista Jack Kirby, y debutaron en "The X-Men" #1 en septiembre de 1963. Los X-Men son mutantes, seres humanos que nacen con habilidades especiales que a menudo se manifiestan durante la adolescencia. Liderados por el Profesor Charles Xavier, los X-Men luchan por la coexistencia pacífica entre humanos y mutantes, defendiendo a ambos grupos contra amenazas mutantes y no mutantes por igual. Algunos de los personajes más icónicos de los X-Men incluyen a Wolverine, Cyclops, Jean Grey, Storm, Beast, y muchos otros. Su lucha contra la discriminación y la aceptación de la diversidad han sido temas fundamentales en muchas de sus historias,algunos de estos personajes son:'
    this.list1Element1 = 'Profesor X (Charles Xavier): Fundador y líder del equipo, un poderoso telepático y líder en la lucha por la coexistencia pacífica entre humanos y mutantes.'
    this.list1Element2 = 'Cyclops (Scott Summers): Uno de los primeros reclutas de Xavier, que emite ráfagas ópticas controladas a través de sus ojos.'
    this.list1Element3 = 'Jean Grey (Marvel Girl/Phoenix): Telepática y telequinética, y en ciertos puntos, hospeda la entidad cósmica conocida como Fénix.'
    this.list1Element4 = 'Wolverine (Logan): Un mutante con habilidades regenerativas, garras retráctiles y sentidos aumentados, además de un experto en combate cuerpo a cuerpo.'
    this.list1Element5 = 'Storm (Ororo Munroe): Capaz de controlar el clima, y una de las líderes más prominentes del equipo.'
    this.list1Element6 = 'Beast (Henry McCoy): Un científico con una apariencia bestial y habilidades físicas mejoradas.    '
    this.list1Element7 = 'Rogue: Con la capacidad de absorber las habilidades y recuerdos de otros mutantes con solo tocarlos.'
    this.list1Element8 = 'Gambit (Remy LeBeau): Con la habilidad de cargar objetos inanimados con energía explosiva y un maestro en el uso de cartas de juego como armas.'
    this.list1Element9 = 'Nightcrawler (Kurt Wagner): Con la capacidad de teletransportarse a través de distancias cortas y una apariencia física distintiva.    '
    this.list1Element10 = 'Iceman (Bobby Drake): Capaz de generar y manipular hielo a su voluntad.'
    this.list1Element11 = 'Colossus (Piotr Rasputin): Con la habilidad de transformarse en un ser de acero orgánico indestructible.'
    this.list1Element12 = 'Kitty Pryde (Shadowcat): Con la habilidad de atravesar objetos sólidos y unirse a ellos como "fantasma".'
    this.image1URL = 'https://cdn.atomix.vg/wp-content/uploads/2023/09/xmen.png'

    this.title2 = '4 Fantasticos'
    this.paragraph2 = 'Los Cuatro Fantásticos son otro equipo de superhéroes de Marvel Comics. Fueron creados por Stan Lee y Jack Kirby y aparecieron por primera vez en "The Fantastic Four" #1 en 1961.Los Cuatro Fantásticos son conocidos por explorar el espacio y el multiverso, enfrentarse a amenazas cósmicas y defender al mundo de peligros de todo tipo. Su título originalmente revolucionó la industria del cómic y sentó las bases para el Universo Marvel que conocemos hoy en día.Los miembros principales del equipo son:'
    this.list1Element13 = 'Sr. Fantástico (Reed Richards): El líder del grupo, posee una inteligencia superhumana y la capacidad de estirar y deformar su cuerpo en cualquier forma imaginable.'
    this.list1Element14 = 'La Mujer Invisible (Susan Storm-Richards): Esposa de Reed, puede volverse invisible y crear campos de fuerza invisibles.'
    this.list1Element15 = 'La Antorcha Humana (Johnny Storm): Hermano de Susan, puede encender su cuerpo en llamas y volar.'
    this.list1Element16 = 'La Cosa/La mole (Ben Grimm): Amigo de la infancia de Reed, posee una fuerza y resistencia sobrehumanas, así como una piel pétreo-naranja debido a una exposición a radiación cósmica.'
    this.image2URL = 'https://img.rtve.es/imagenes/cuatro-fantasticos-origen-del-universo-marvel/1471187611866.jpg'


  }

  render() {
    return html`
      <div id="main">
      <h1 class="main-title">${this.title}</h1>
      <h1 class="subtitle">${this.title1}</h1>
      <p class="paragraphone">${this.paragraph1}</p>
      <ul>
        <li class="paragraphone"><i>${this.list1Element1}</i></li>
        <li class="paragraphone"><i>${this.list1Element2}</i></li>
        <li class="paragraphone"><i>${this.list1Element3}</i></li>
        <li class="paragraphone"><i>${this.list1Element4}</i></li>
        <li class="paragraphone"><i>${this.list1Element5}</i></li>
        <li class="paragraphone"><i>${this.list1Element6}</i></li>
        <li class="paragraphone"><i>${this.list1Element7}</i></li>
        <li class="paragraphone"><i>${this.list1Element8}</i></li>
        <li class="paragraphone"><i>${this.list1Element9}</i></li>
        <li class="paragraphone"><i>${this.list1Element10}</i></li>
        <li class="paragraphone"><i>${this.list1Element11}</i></li>
        <li class="paragraphone"><i>${this.list1Element12}</i></li>
      </ul>
      <div class="team-img-container">
      <img class="team-img" src="${this.image1URL}">
      </div>
      <h1 class="paragraphtwo">${this.title2}</h1>
      <p class="paragraphtwo">${this.paragraph2}</p>
      <ul>
        <li class="paragraphtwo"><i>${this.list1Element13}</i></li>
        <li class="paragraphtwo"><i>${this.list1Element14}</i></li>
        <li class="paragraphtwo"><i>${this.list1Element15}</i></li>
        <li class="paragraphtwo"><i>${this.list1Element16}</i></li>
      </ul>
      <div class="team-img-container">
      <img class="team-img" src="${this.image2URL}">
      </div>

      </div>
    `
  }

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
      }

      #main {
        background-color: rgb(47, 85, 85) ;
      }

      .main-title {
        color: red;
      }
      
      .subtitle {
        color:yellow;
      }
    
      .paragraphone{
        color:yellow;
      }

      .team-img{
        width: 25vw;
    }
    
      .paragraphtwo{
        color: rgb(117, 108, 199)
        }

      .team-img-container{
        text-align:center;
      }

    `
  }
}

window.customElements.define('my-element', MyElement)