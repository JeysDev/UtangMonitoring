<template>
    <div>
        <v-card width="500px" class="mx-auto pa-10 mt-10">
            <v-card-title class="mb-2">Register</v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field clearable variant="solo-filled" type="text" label="Enter Name" v-model="form.name" />
                    <v-text-field clearable variant="solo-filled" type="text" label="Enter UserName"
                        v-model="form.username" />
                    <v-text-field clearable variant="solo-filled" type="email" label="Enter Email"
                        v-model="form.email" />
                    <v-text-field clearable variant="solo-filled" type="password" label="Enter Password"
                        v-model="form.password" />
                    <v-select variant="solo-filled" label="Role" v-model="form.role" :items="roleOptions" />
                    <div class="d-flex justify-space-between">
                        <v-btn color="primary" @click="BackToLogin">Back</v-btn>
                        <v-btn color="success" @click="saveRegister">Enter</v-btn>
                    </div>
                </v-form>

            </v-card-text>
        </v-card>

    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, reactive } from 'vue';
import { setActivePinia } from 'pinia';

const form = reactive({
    name: '',
    username: '',
    email: '',
    password: '',
    role: ''

})
const roleOptions = reactive([
    'Master', 'Admin', 'User'
])

const validation = reactive({
    name: '',
    username: '',
    email: '',
    password: '',
    role: ''
})
const Router = useRouter();
const BackToLogin = () => {
    Router.push('/')
}
const saveRegister = () => {
    alert("Registered")
    form.name =''
    form.username =''
    form.email =''
    form.password =''
    form.role =''
}
</script>

<style lang="scss" scoped></style>