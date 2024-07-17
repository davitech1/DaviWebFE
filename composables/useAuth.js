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

  const login = async (email, password) => {
    error.value = ''
    successMessage.value = ''
    isLoading.value = true

    try {
      const { data } = await useFetch('http://localhost:3055/v1/api/user/login', {
        method: 'POST',
        body: { email, password },
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'edd46669d67a5eb5691f7634e9faa66242d933c43688be28d1e2dc0eca3e4ab7d76cfc4732603ce28a46e796f648952fc7587e5b6b05169bc97ed9c7607acd43'
        }
      })
      if (data._rawValue && data._rawValue.status === 200) {
        const { user, tokens } = data._rawValue.metadata
        userStore.setUser(user)
        userStore.setToken(tokens)
        
        // Lưu thông tin vào localStorage
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', tokens)
        
        successMessage.value = `Chào mừng ${user.email}! Đăng nhập thành công.`
        
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

  const register = async (name, email, password) => {
    error.value = ''
    isLoading.value = true
    successMessage.value = ''

    try {
      const { data } = await useFetch('http://localhost:3055/v1/api/user/signup', {
        method: 'POST',
        body: { name, email, password },
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'edd46669d67a5eb5691f7634e9faa66242d933c43688be28d1e2dc0eca3e4ab7d76cfc4732603ce28a46e796f648952fc7587e5b6b05169bc97ed9c7607acd43'
        }
      })

      if (data.value) {
        userStore.setUser(data.value.user)
        successMessage.value = `Bạn đã đăng ký thành công tài khoản "${email}"`
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