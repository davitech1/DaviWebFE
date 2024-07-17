import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useContact = () => {
    const error = ref('')
    const isLoading = ref(false)
    const successMessage = ref('')
    const router = useRouter()
  
    const contact = async (name, email, phone, message) => {
      error.value = ''
      isLoading.value = true
      successMessage.value = ''
  
      try {
        const { data } = await useFetch('http://localhost:3055/v1/api/contact/', {
          method: 'POST',
          body: { name, email, phone, message },
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'edd46669d67a5eb5691f7634e9faa66242d933c43688be28d1e2dc0eca3e4ab7d76cfc4732603ce28a46e796f648952fc7587e5b6b05169bc97ed9c7607acd43'
          }
        })
  
        if (data.value) {
          successMessage.value = `Đăng ký thành công, chúng tôi sẽ liên lạc lại ngay!`
          await router.push('')
        }
      } catch (err) {
        error.value = err.message || 'Có lỗi xảy ra khi gửi thông tin'
      } finally {
        isLoading.value = false
      }
    }
  
    return { contact, error, isLoading, successMessage }
  }
  