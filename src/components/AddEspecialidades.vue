<template>
  <div >
     
   <div style="background-color: #90CAF9;">
     <h1 style="text-align:center">
       {{ $t("header.search.caption8") }}
       </h1>
     </div>



   <v-sheet width="340" class="mx-auto">
       <v-layout
           align-end
           fill-height
           pa-10
         >
           <div class="title font-weight-light" style="color: brown;">{{ $t("header.search.button6") }}</div>
         </v-layout>
         <router-link to="/">
           <v-btn variant="success" color="#4DD0E1">{{ $t("header.search.button4") }}</v-btn>
         </router-link>
     <v-form @submit="onSubmit" @reset="onReset"  >
    
       <v-text-field
         id="input-1"
         v-model="form.nombreEspecialidad"
         :counter="20"
         type="text"
         placeholder="Enter name" 
         required
       ></v-text-field>
       <v-text-field
         id="input-2"
         v-model="form.descripcion"
         :counter="20"
         type="text"
         placeholder="Enter Description"
         required
       ></v-text-field>
     
       <v-checkbox
        id="input-3"
        label="¿son rotativos los turnos?"
          v-model="form.rotativa"
          placeholder=" es puesto rotativo? "
          required
       ></v-checkbox> 
       <v-text-field
        id="input-1"
         label="fecha de inicio ,YYYY-MM-D"
         v-model="form.inicioEspecialidad"
         placeholder="fecha de inicio " 
         required
        ></v-text-field>
       <v-text-field
         id="input-2"
         v-model="form.salario"
         :counter="20"
         placeholder="salario"
         required
       ></v-text-field>
       <v-text-field
         id="input-2"
         v-model="form.afiliados"
         :counter="20"
         placeholder="afiliados"
         required
       ></v-text-field>
     
     <v-btn type="submit"   color="success" variant="primary">Submit</v-btn>
     <v-btn type="reset" color="error" variant="danger">Reset</v-btn>
   </v-form>
     </v-sheet>
   

</div>
 </template>
   
 
 <script>
 import { mapActions } from 'vuex'
 export default {
     data(){
         return{
             form:{ 
              nombreEspecialidad: '', 
                 descripcion:'',
                 rotativa:undefined,
                inicioEspecialidad:'',
                 salario:'',
                 afiliados:''
               
                
             },
                
             
         }
     },
     methods:{
         onSubmit(){
           
             this.addEspecialidades({
              nombreEspecialidad: this.form.nombreEspecialidad, 
                 descripcion: this.form.descripcion,
                 rotativa:this.form.rotativa,
                inicioEspecialidad:this.form.inicioEspecialidad,
                 salario:this.form.salario,
                 afiliados:this.form.afiliados,


             })
         },
         onReset(){
 
         },
        ...mapActions(['addEspecialidades'])
     }
 }
 </script>
 
 <style>
 .h1{
   font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
 }
 </style>