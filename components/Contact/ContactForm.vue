<template>
  <form id="contactForm" role="form" @submit.prevent="handleContact">
                <div v-if="error" class="error">{{ error }}</div>
                <div v-if="successMessage" class="success">{{ successMessage }}</div>
                <div class="form-group">
                    <label class="sr-only" for="name">Name</label>
                    <input id="name" v-model="name" class="form-control" type="text" name="name" placeholder="Your Name*" required="required" data-validation-required-message="Please enter your name.">
                    <p class="help-block text-danger"/>
                </div>
                <div class="form-group">
                    <label class="sr-only" for="email">Email</label>
                    <input id="email" v-model="email" class="form-control" type="email" name="email" placeholder="Your Email*" required="required" data-validation-required-message="Please enter your email address.">
                    <p class="help-block text-danger"/>
                </div>
                <div class="form-group">
                    <label class="sr-only" for="phone">Phone</label>
                    <input id="phone" v-model="phone" class="form-control" type="phone" name="phone" placeholder="Your Phone*" required="required" data-validation-required-message="Please enter your phone.">
                    <p class="help-block text-danger"/>
                </div>
                <div class="form-group">
                    <textarea id="message"  v-model="message" class="form-control" rows="7" name="message" placeholder="Your Message*" required="required" data-validation-required-message="Please enter your message."/>
                    <p class="help-block text-danger"/>
                </div>
                <div class="text-center">
                    <button id="cfsubmit" :disabled="isLoading" class="btn btn-block btn-round btn-d" type="submit">Submit</button>
                    {{ isLoading ? 'Đang xử lý...' : 'Gửi thông tin' }}
                </div>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import { useContact } from '~/composables/useContact'

const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')

  const { contact, error, isLoading, successMessage } = useContact()
  
  const handleContact = async () => {
    await contact(name.value, email.value, phone.value, message.value)
    if (successMessage.value) {
      name.value = ''
      email.value = ''
      phone.value = ''
      message.value = ''
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