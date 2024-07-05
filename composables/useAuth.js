// composables/useAuth.js
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '~/stores/user'

export const useLogin = () => {
  const error = ref('')
  const isLoading = ref(false)
  const successMessage = ref('')
  const router = useRouter()
  const userStore = useUserStore()

  const login = async (name, password) => {
    error.value = ''
    successMessage.value = ''
    isLoading.value = true

    try {
      const { data } = await useFetch('/api/auth/login', {
        method: 'POST',
        body: { name, password }
      })

      if (data.value && data.value.code === 200) {
        const { user, token } = data.value
        userStore.setUser(user)
        userStore.setToken(token)
        
        // Lưu thông tin vào localStorage
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
        
        successMessage.value = `Chào mừng ${user.name}! Đăng nhập thành công.`
        
        // Đợi 2 giây trước khi chuyển hướng
        setTimeout(() => {
          router.push('/')
        }, 2000)
      } else {
        throw new Error('Đăng nhập không thành công')
      }
    } catch (err) {
      error.value = err.message || 'Có lỗi xảy ra khi đăng nhập'
    } finally {
      isLoading.value = false
    }
  }

  return { login, error, isLoading, successMessage }
}

export const useAuthCheck = () => {
  const userStore = useUserStore()

  const checkAuth = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem('token')

    if (user && token) {
      userStore.setUser(user)
      userStore.setToken(token)
    }
  }

  return { checkAuth }
}

export const useRegister = () => {
  const error = ref('')
  const isLoading = ref(false)
  const successMessage = ref('')
  const router = useRouter()
  const userStore = useUserStore()

  const register = async (name, password) => {
    error.value = ''
    isLoading.value = true
    successMessage.value = ''

    try {
      const { data } = await useFetch('/api/auth/register', {
        method: 'POST',
        body: { name, password }
      })

      if (data.value) {
        userStore.setUser(data.value.user)
        successMessage.value = `Bạn đã đăng ký thành công tài khoản "${name}"`
        await router.push('')
      }
    } catch (err) {
      error.value = err.message || 'Có lỗi xảy ra khi đăng ký'
    } finally {
      isLoading.value = false
    }
  }

  return { register, error, isLoading, successMessage }
}