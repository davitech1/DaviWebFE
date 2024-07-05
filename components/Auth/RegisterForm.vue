<template>
    <form class="form"  @submit.prevent="handleRegister">
      <div v-if="error" class="error">{{ error }}</div>
      <div v-if="successMessage" class="success">{{ successMessage }}</div>
      <div class="form-group">
        <input v-model="name"  class="form-control" type="text" placeholder="Tên" required >
      </div>
      <div class="form-group">
        <input v-model="password" class="form-control"  type="password" placeholder="Mật khẩu" required>
      </div>
      <div class="form-group">
        <input v-model="rePassword" class="form-control" type="password" placeholder="Nhập lại mật khẩu" required>
      </div>
      <div class="form-group">
        <button type="submit" :disabled="isLoading" class="btn btn-block btn-round btn-b">
          {{ isLoading ? 'Đang xử lý...' : 'Đăng ký' }}
        </button>
      </div>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRegister } from '~/composables/useAuth'
  
  const name = ref('')
  const password = ref('')
  const rePassword = ref('')
  
  const { register, error, isLoading, successMessage } = useRegister()
  
  const handleRegister = async () => {
    if (password.value !== rePassword.value) {
      error.value = 'Mật khẩu không khớp'
      return
    }
    await register(name.value, password.value)
    if (successMessage.value) {
    // Xóa dữ liệu trong form
    name.value = ''
    password.value = ''
    rePassword.value = ''
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