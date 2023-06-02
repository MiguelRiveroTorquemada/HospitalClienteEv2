import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
  
    main:{
        title: 'Hello world',
        subTitle:'another title'
    },
    header:{
        search:{
            caption:'HOSPITALS',
            caption2:'Patient Information',
            caption3:'Login',
            caption4:'Workers',
            captio5:'Workers Details',
            caption6:'Add Patients',
            caption7:'Add Workers',
            caption8:'Add specialties types',
            caption9:'Patients',
            caption10:'Specialties ',



            button:'Payments',
            button2:'Login',
            button3:'Home',
            button4:'Back',
            button5:'See details',
            button6:'Add',
            button7:'Delete',
            button9:'Search by name',
            button10:'Search by specialties',
            button11:'Expired',
            button12:' See all',
            button13:'Search by date'
        }
    }
  },
  es: {
     errors:{
      invalidLogin: 'Usuario o contraseña incorrectos'
     },
    main:{
        title: 'hola mundo',
        subTitle:'otro titulo'
    },
    header:{
        search:{
            caption:'HOSPITAL',
            caption2:'Informacion de Pacientes',
            caption3:'Iniciar sesion',
            caption4:'Trabajadores',
            caption5:'Detalles de los Trabajadores',
            caption6:'Añadir Pacientes',
            caption7:'Añadir Trabajadores',
            caption8:'Añadir Tipos de especialidades',
            caption9:'Pacientes',
            caption10:'Especialidades',



            button:'Pacientes',
            button2:'Iniciar sesion',
            button3:'Menu',
            button4:'Atras',
            button5:'Ver Detalles',
            button6:'Añadir',
            button7:'Borrar',
            button9:'Buscar por nombre',
            button10:'Buscar por especialidades',
            button11:' Caducados',
            button12:' Ver todos',
            button13:'Buscar por fecha'


        }
    }
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'es', // set locale
  messages, // set locale messages
})

export{i18n}