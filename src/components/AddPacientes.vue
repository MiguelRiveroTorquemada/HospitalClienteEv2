<template>
  <div >
     
    <div style="background-color: #90CAF9;">
     <h1 style="text-align:center">
       {{ $t("header.search.caption6") }}
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
         <router-link to="/Pacientes">
           <v-btn variant="success" color="#4DD0E1">{{ $t("header.search.button4") }}</v-btn>
         </router-link>
     <v-form @submit="onSubmit" @reset="onReset"  >


      
       <v-text-field
         id="input-1"
         v-model="form.nombre"
         :counter="20"
         type="text"
         placeholder="Enter name" 
         required
       ></v-text-field>
       <v-text-field
         id="input-2"
         v-model="form.apellido"
         :counter="20"
         type="text"
         placeholder="Enter surname"
         required
       ></v-text-field>

       <v-checkbox
         id="input-1"
         v-model="form.alta_baja"
         label="¿esta de alta o baja?"
         :counter="20"
         placeholder="Enter alta o baja" 
         
       ></v-checkbox>

       <v-text-field
         id="input-1"
         label="YYYY-MM-D"
         v-model="form.fecha_ingreso"
         type="text"
         placeholder="Enter date" 
         
       ></v-text-field>
       <v-text-field
         id="input-2"
         v-model="form.peso"
         :counter="20"
         placeholder="peso "
         required
       ></v-text-field>
       <v-text-field
         id="input-2"
         v-model="form.edad"
         :counter="20"
         placeholder="edad "
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
                 nombre: '', 
                 apellido:'',
                 alta_baja:undefined,
                 fecha_ingreso:'',
                 peso:'',
                 edad:'',
               
                
             },
                
             
         }
     },
     methods:{
         onSubmit(){
           
             this.addPacientes({
                 nombre: this.form.nombre, 
                 apellido: this.form.apellido,
                 alta_baja:this.form.alta_baja,
                 fecha_ingreso:this.form.fecha_ingreso,
                 peso:this.form.peso,
                 edad:this.form.edad,
             })
         },
         onReset(){
 
         },
        ...mapActions(['addPacientes'])
     }
     
 }
 </script>
 
 <style>
 .h1{
   font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
 }
 </style>