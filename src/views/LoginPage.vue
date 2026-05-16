<template>
    <div>
        <v-card width="500" class="mx-auto pa-10 mt-10">
            <v-card-title>Log-in</v-card-title>
            <v-card-text>
                <v-form class="d-flex flex-column">
                    <v-text-field v-model="emailModel" label="Email" type="email" append-inner-icon="mdi-email"
                        variant="solo"></v-text-field>
                    <v-text-field label="Password" :type="show ? 'text' : 'password'" variant="solo"
                        v-model="passModel">
                        <template v-slot:append-inner>
                            <v-icon style="cursor: pointer; pointer-events: auto" @click.stop="Testing">{{ show ?
                                'mdi-eye' : 'mdi-eye-closed' }}
                            </v-icon>
                        </template>
                        <!-- <v-alert v-if="errorMessage" type="error" density="compact" class="mb-4"
                    >{{ errorMessage }}
                </v-alert> -->
                    </v-text-field>
                    <div class="d-flex justify-space-between">
                        <span>
                            Not yet Register?
                            <a style="color:blue" @click="gotoRegister">click here</a>
                        </span>
                        <v-btn color="orange" @click="LoginFunc">Login</v-btn>
                    </div>
                </v-form>

            </v-card-text>
        </v-card>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, reactive, watch, computed } from 'vue';

const show = ref(false);

const emailModel = ref('');
const passModel = ref('');
const Testing = () => {
    show.value = !show.value;
    return passModel.value
    // alert("SHOWED")
}
const router = useRouter();

const gotoRegister = () => {
    return router.push('/register')
}

const LoginFunc = async () => {
    if ((emailModel.value).length < 3 && (passModel.value).length < 3) {
        alert("Invalid Input")
    }
}
</script>

<style lang="scss" scoped></style>