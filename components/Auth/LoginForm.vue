<template>
    <form class="form" @submit.prevent="handleLogin">
      <div v-if="error" class="error">{{ error }}</div>
      <div v-if="successMessage" class="success">{{ successMessage }}</div>
      <div class="form-group">
        <input v-model="name" class="form-control" type="text" placeholder="Tên đăng nhập" required>
      </div>
      <div class="form-group">
        <input v-model="password" class="form-control" type="password" placeholder="Mật khẩu" required>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-round btn-b" :disabled="isLoading">
        {{ isLoading ? 'Đang xử lý...' : 'Đăng nhập' }}
        </button>
      </div>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useLogin } from '~/composables/useAuth'
  
  const name = ref('')
  const password = ref('')
  
  const { login, error, isLoading, successMessage } = useLogin()
  
  const handleLogin = async () => {
    await login(name.value, password.value)
    if (successMessage.value) {
      name.value = ''
      password.value = ''
    }
  }
  </script>
  
  <style scoped>
  .error {
    color: red;
    margin-bottom: 10px;
  }
  .success {
    color: green;
    margin-bottom: 10px;
  }
  </style>