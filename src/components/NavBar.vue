<template>
    <v-app-bar density="compact" color="#212121">
      <v-toolbar-title>JEYS | DEV</v-toolbar-title>
      
      <v-spacer></v-spacer>
  
      <div class="d-none d-md-flex">
        <v-btn v-for="item in items" :key="item.path" :to="item.path" variant="text">
          {{ item.name }}
        </v-btn>
      </div>
      <v-app-bar-nav-icon 
        class="d-md-none" 
        icon="mdi-menu" 
        @click="toggleMenu"/>
      <v-btn 
        @click="darkNlight"
      >
      <template #prepend>
        <v-icon>
         mdi-weather-night
        </v-icon>
      </template>
      </v-btn>
    </v-app-bar>
      <v-navigation-drawer v-model="drawer" temporary rail>
        <v-list density="compact" class="pt-0">
          <v-list-item
            v-for="item in items" 
            :key="item.path" 
            :to="item.path" 
            link
          >   <div class="d-flex align-center ">
                <v-icon :icon="item.icon" />
                <span>
                <v-list-item-title class="ml-5">{{ item.name }}</v-list-item-title>
                </span>
              </div>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  </template>

<script setup>
import { MainStore } from '../stores/MainStore';
import {ref} from 'vue'
import {useRouter} from 'vue-router';
import { useTheme } from 'vuetify/lib/composables/theme';
import {useDisplay} from 'vuetify';
import {watch} from 'vue'

 const {mdAndUp} = useDisplay();
 watch(mdAndUp, (isDesktop)=>{
 if(isDesktop){
   drawer.value = false
  }
})


const main = MainStore();
const theme = useTheme();

const drawer = ref(false)

const router = useRouter();
const items = router.options.routes;

const darkNlight =()=>{
    main.Darkmode = !main.Darkmode
    theme.change( main.Darkmode ? 'dark' : 'light')
}

const toggleMenu =() =>{
    drawer.value = !drawer.value;

}

// export default {
//     setup(){

//         const openbar = ref(false)
//         const router = useRouter
//         const toggleMenu =()=>{
//             openbar.value =!openbar.value
//         }
//     }
// }
</script>

<style lang="scss" scoped>

</style>