import {defineStore} from 'pinia'
export const MainStore = defineStore('mainStore', {
    state: ()=>{
        Darkmode :false;
    },
    actions:{
        toggleDarkmode(){
            this.Darkmode = !this.Darkmode;
        }
    }
})