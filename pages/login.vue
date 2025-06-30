<!-- pages/login.vue -->
<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
        <div class="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-gray-900 mb-6">Iniciar Sesión</h2>
            <form @submit.prevent="handleLogin" class="space-y-6">
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <div class="mt-1">
                        <input v-model="email" id="email" name="email" type="email" autocomplete="email" required
                            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
                    <div class="mt-1">
                        <input v-model="password" id="password" name="password" type="password"
                            autocomplete="current-password" required
                            class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    </div>
                </div>

                <div>
                    <button type="submit"
                        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Entrar
                    </button>
                </div>
                <p v-if="errorMsg" class="text-red-500 text-sm text-center">{{ errorMsg }}</p>
            </form>
        </div>
    </div>
</template>

<script setup>
// Usamos los composables que nos da el módulo de Supabase
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const email = ref('');
const password = ref('');
const errorMsg = ref(null);

// Si el usuario ya está logueado, lo redirigimos a la página principal
watchEffect(() => {
    if (user.value) {
        navigateTo('/'); // O a la página de admin: '/admin'
    }
});

// Función para manejar el login
async function handleLogin() {
    try {
        const { error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value,
        });
        if (error) throw error;
    } catch (error) {
        errorMsg.value = error.message;
        // Opcional: limpiar el mensaje de error después de unos segundos
        setTimeout(() => {
            errorMsg.value = null;
        }, 5000);
    }
}
</script>