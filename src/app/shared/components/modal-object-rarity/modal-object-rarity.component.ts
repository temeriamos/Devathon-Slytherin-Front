import { Component, inject } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../services/loader-service.service';
import { FormsModule } from '@angular/forms';
import { ProductService } from 'src/app/module/product/services/product.service';
import { MagicObject } from 'src/app/interfaces/magic-object';

@Component({
  selector: 'app-modal-object-rarity',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-object-rarity.component.html',
  styleUrl: './modal-object-rarity.component.css',
})
export class ModalObjectRarityComponent {
  SharedService = inject(SharedService);
  ProductService = inject(ProductService);
  objectRarityList: any[] = [];
  isOpen = false;
  items = [
    { top: '20%', left: '30%' },
    { top: '40%', left: '60%' },
    { top: '55%', left: '25%' },
    { top: '70%', left: '75%' },
    { top: '35%', left: '15%' },
    { top: '80%', left: '50%' },
    { top: '10%', left: '85%' },
    { top: '90%', left: '10%' },
    { top: '15%', left: '40%' },
    { top: '50%', left: '5%' },
    { top: '25%', left: '55%' },
    { top: '65%', left: '20%' },
    { top: '30%', left: '80%' },
    { top: '45%', left: '35%' },
    { top: '75%', left: '45%' },
    { top: '85%', left: '70%' },
    { top: '95%', left: '90%' },
  ];
  mostrarPreguntaModal = false;
  questionslist = [
    {
      text: '¿Qué animal representa a la casa Slytherin?',
      options: ['León', 'Serpiente', 'Águila', 'Tejón'],
      correctAnswer: 'Serpiente',
    },
    {
      text: '¿Quién es el director de la casa Gryffindor?',
      options: [
        'Severus Snape',
        'Minerva McGonagall',
        'Filius Flitwick',
        'Pomona Sprout',
      ],
      correctAnswer: 'Minerva McGonagall',
    },
    {
      text: '¿Cómo se llama el tren que lleva a los estudiantes a Hogwarts?',
      options: [
        'El Expreso de Hogwarts',
        'El Tren de la Suerte',
        'El Tren Mágico',
        'El Expreso Escolar',
      ],
      correctAnswer: 'El Expreso de Hogwarts',
    },
    {
      text: '¿En qué año Harry Potter se enfrenta a Lord Voldemort por primera vez?',
      options: ['Primer Año', 'Segundo Año', 'Tercer Año', 'Cuarto Año'],
      correctAnswer: 'Primer Año',
    },
    {
      text: '¿Qué criatura mágica se encuentra en la Cámara de los Secretos?',
      options: ['Basilisco', 'Dragón', 'Hipogrifo', 'Troll'],
      correctAnswer: 'Basilisco',
    },
    {
      text: '¿Cómo se llama el elfo doméstico que sirve a la familia Malfoy?',
      options: ['Kreacher', 'Dobby', 'Winky', 'Mippy'],
      correctAnswer: 'Dobby',
    },
    {
      text: '¿Qué hechizo utiliza Harry para defenderse de los Dementores en su tercer año?',
      options: ['Expecto Patronum', 'Lumos', 'Avada Kedavra', 'Expelliarmus'],
      correctAnswer: 'Expecto Patronum',
    },
    {
      text: '¿Quién mató a Sirius Black?',
      options: [
        'Bellatrix Lestrange',
        'Severus Snape',
        'Lucius Malfoy',
        'Nagini',
      ],
      correctAnswer: 'Bellatrix Lestrange',
    },
    {
      text: '¿Qué forma toma el Patronus de Harry?',
      options: ['Un lobo', 'Un ciervo', 'Un perro', 'Un búho'],
      correctAnswer: 'Un ciervo',
    },
    {
      text: '¿Quién fue el fundador de la casa Ravenclaw?',
      options: [
        'Godric Gryffindor',
        'Salazar Slytherin',
        'Helga Hufflepuff',
        'Rowena Ravenclaw',
      ],
      correctAnswer: 'Rowena Ravenclaw',
    },
    {
      text: '¿Qué objeto se necesita para abrir la Cámara de los Secretos?',
      options: [
        'Una varita mágica',
        'La espada de Godric Gryffindor',
        'Un diario',
        'Un basilisco',
      ],
      correctAnswer: 'Un diario',
    },
    {
      text: '¿Cómo se llama la varita de Harry Potter?',
      options: [
        'La varita afortunada',
        'La varita de la muerte',
        'La varita de olivo',
        'La varita del anciano',
      ],
      correctAnswer: 'La varita de olivo',
    },
    {
      text: '¿Qué hechizo se usa para desarmar a alguien?',
      options: [
        'Expelliarmus',
        'Avada Kedavra',
        'Wingardium Leviosa',
        'Alohomora',
      ],
      correctAnswer: 'Expelliarmus',
    },
    {
      text: '¿Quién es el propietario de la tienda de varitas?',
      options: ['Ollivander', 'Weasley', 'Flitwick', 'Dumbledore'],
      correctAnswer: 'Ollivander',
    },
    {
      text: '¿Qué juego mágico es popular en Hogwarts y se juega con escobas voladoras?',
      options: [
        'Quidditch',
        'Póker mágico',
        'Ajedrez de magos',
        'Torneo de los Tres Magos',
      ],
      correctAnswer: 'Quidditch',
    },
    {
      text: '¿Cómo se llama la madre de Harry Potter?',
      options: [
        'Lily Potter',
        'Molly Weasley',
        'Hermione Granger',
        'Minerva McGonagall',
      ],
      correctAnswer: 'Lily Potter',
    },
    {
      text: '¿Qué tipo de criaturas son los Dementores?',
      options: ['Dragones', 'Trolls', 'Fantasmas', 'Hombres lobo'],
      correctAnswer: 'Fantasmas',
    },
    {
      text: '¿Qué planta mágica tiene propiedades mágicas y se usa comúnmente en pociones?',
      options: ['Mandrágora', 'Albahaca', 'Helecho dragón', 'Árbol de sauce'],
      correctAnswer: 'Mandrágora',
    },
    {
      text: '¿Qué magia permite a las brujas y magos teletransportarse instantáneamente?',
      options: [
        'Aparición',
        'Transfiguración',
        'Metamorfomagia',
        'Translocación',
      ],
      correctAnswer: 'Aparición',
    },
    {
      text: '¿Qué hechizo se usa para iluminar la punta de una varita?',
      options: ['Lumos', 'Incendio', 'Expecto Patronum', 'Wingardium Leviosa'],
      correctAnswer: 'Lumos',
    },
    {
      text: '¿Qué criaturas mágicas son conocidas por su capacidad para cambiar de forma?',
      options: ['Hombres lobo', 'Vampiros', 'Animagos', 'Metamorfomagos'],
      correctAnswer: 'Animagos',
    },
    {
      text: '¿Cómo se llaman los hermanos de Ron Weasley?',
      options: ['Fred', 'Percy', 'George', 'Charlie'],
      correctAnswer: 'Fred',
    },
    {
      text: '¿Cómo se llama el mago oscuro que mató a los padres de Harry?',
      options: [
        'Tom Riddle',
        'Lucius Malfoy',
        'Severus Snape',
        'Bellatrix Lestrange',
      ],
      correctAnswer: 'Tom Riddle',
    },
    {
      text: '¿Cómo se llaman los gemelos Weasley?',
      options: [
        'Fred y George',
        'Ron y Harry',
        'Bill y Charlie',
        'Percy y Fred',
      ],
      correctAnswer: 'Fred y George',
    },
    {
      text: '¿Qué objeto mágico muestra los deseos más profundos del corazón de una persona?',
      options: [
        'Espejo de Oesed',
        'La espada de Gryffindor',
        'El Mapa de los Merodeadores',
        'La Capa de Invisibilidad',
      ],
      correctAnswer: 'Espejo de Oesed',
    },
    {
      text: '¿Cómo se llama la bóveda que contiene la Piedra Filosofal?',
      options: ['Bóveda 713', 'Bóveda 619', 'Bóveda 666', 'Bóveda 531'],
      correctAnswer: 'Bóveda 713',
    },
    {
      text: '¿En qué forma se convierte el Animago de la Profesora McGonagall?',
      options: ['Un gato', 'Un perro', 'Un pájaro', 'Una rata'],
      correctAnswer: 'Un gato',
    },
    {
      text: '¿Cómo se llama el calamar gigante en el lago de Hogwarts?',
      options: [
        'Squidward',
        'El Calamar de Hogwarts',
        'La Bestia del Lago',
        'El Kraken',
      ],
      correctAnswer: 'El Calamar de Hogwarts',
    },
    {
      text: '¿Quién le dio a Harry su primera escoba?',
      options: [
        'Ron Weasley',
        'Sirius Black',
        'Profesora McGonagall',
        'Hagrid',
      ],
      correctAnswer: 'Profesora McGonagall',
    },
    {
      text: '¿Cómo se llama el mapa que muestra los pasadizos secretos de Hogwarts?',
      options: [
        'El Mapa de los Merodeadores',
        'La Capa de Invisibilidad',
        'El Giratiempo',
        'El Espejo de Oesed',
      ],
      correctAnswer: 'El Mapa de los Merodeadores',
    },
    {
      text: '¿Quién fue el propietario original de la Varita de Saúco?',
      options: [
        'Albus Dumbledore',
        'Gellert Grindelwald',
        'La Muerte',
        'Tom Riddle',
      ],
      correctAnswer: 'La Muerte',
    },
    {
      text: '¿Qué hechizo se usa para levitar objetos?',
      options: ['Wingardium Leviosa', 'Expelliarmus', 'Lumos', 'Accio'],
      correctAnswer: 'Wingardium Leviosa',
    },
    {
      text: '¿Con quién se casa Ron?',
      options: [
        'Hermione Granger',
        'Lavender Brown',
        'Ginny Weasley',
        'Luna Lovegood',
      ],
      correctAnswer: 'Hermione Granger',
    },
    {
      text: '¿Quién era el Príncipe Mestizo?',
      options: ['Harry Potter', 'Severus Snape', 'Tom Riddle', 'Lucius Malfoy'],
      correctAnswer: 'Severus Snape',
    },
    {
      text: '¿Cómo se llama la escuela que enseña magia en Estados Unidos?',
      options: ['Ilvermorny', 'Beauxbatons', 'Durmstrang', 'Hogwarts'],
      correctAnswer: 'Ilvermorny',
    },
    {
      text: '¿Cómo se llama el dragón en el Torneo de los Tres Magos?',
      options: [
        'Norberto',
        'Hungarian Horntail',
        'Chilean Fireball',
        'Swedish Short-Snout',
      ],
      correctAnswer: 'Hungarian Horntail',
    },
    {
      text: '¿Qué animal es el símbolo de la casa Hufflepuff?',
      options: ['Tejón', 'Águila', 'Serpiente', 'León'],
      correctAnswer: 'Tejón',
    },
    {
      text: '¿Quién es el Ministro de Magia en la serie?',
      options: [
        'Cornelius Fudge',
        'Rufus Scrimgeour',
        'Kingsley Shacklebolt',
        'Pius Thicknesse',
      ],
      correctAnswer: 'Cornelius Fudge',
    },
  ];
  questions: any =
    this.questionslist[Math.floor(Math.random() * this.questionslist.length)];
  respuestaSeleccionada: string = '';
  selectObjectRarity: any;
  viewModalObjectRarity: boolean = false;
  productDetail: MagicObject | null = null;
  imgProducSelected = '';
  stateModal = false;
  visible = false;
  visibleError = false;
  constructor() {
    this.objectRarity();
    this.SharedService.viewModalObjetRarity$.subscribe((data: any) => {
      this.isOpen = data;
    });
  }
  objectRarity() {
    this.SharedService.getObjectRarity(3).subscribe((data) => {
      // Mezclar las posiciones
      const shuffledPositions = this.shuffleArray([...this.items]);

      for (let i = 0; i < data.length; i++) {
        data[i].top = shuffledPositions[i]?.top || '0%';
        data[i].left = shuffledPositions[i]?.left || '0%';
      }

      data.sort((a: any, b: any) => a.rarity - b.rarity);
      this.objectRarityList = data;
      const bannedObject = localStorage.getItem('objectbanned');
      if (bannedObject) {
        const bannedId = JSON.parse(bannedObject);
        this.objectRarityList = this.objectRarityList.filter(
          (item) => item.id !== bannedId
        );
      }
    });
  }
  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  openModalTrivia(item: any) {
    this.selectObjectRarity = item;
    this.questions =
      this.questionslist[Math.floor(Math.random() * this.questionslist.length)];
    this.mostrarPreguntaModal = true;
  }
  sendAnswer() {
    const isCorrect =
      this.respuestaSeleccionada === this.questions.correctAnswer;
    this.mostrarPreguntaModal = false;

    if (isCorrect) {
      this.viewModalObjectRarity = true;
    } else {
      this.visibleError = true;
      this.viewModalObjectRarity = false;
      this.objectRarityList = this.objectRarityList.filter(
        (item) => item.id !== this.selectObjectRarity.id
      );
      localStorage.setItem(
        'objectbanned',
        JSON.stringify(this.selectObjectRarity.id)
      );
    }
  }

  getDetailProduct() {
    this.productDetail = this.selectObjectRarity;
  }

  addToCart() {
    this.viewModalObjectRarity = false;
    this.imgProducSelected = this.selectObjectRarity.url_image;
    this.ProductService.addToCart(this.selectObjectRarity);
    this.visible = true;
    this.objectRarityList = this.objectRarityList.filter(
      (item) => item.id !== this.selectObjectRarity.id
    );
    localStorage.setItem(
      'objectbanned',
      JSON.stringify(this.selectObjectRarity.id)
    );
  }
}
