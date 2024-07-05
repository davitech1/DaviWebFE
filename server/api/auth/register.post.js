export default defineEventHandler(async (event) => {
  const { name, password } = await readBody(event)

  if (!name || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Tên và mật khẩu là bắt buộc',
    })
  }

  try {
    const response = await $fetch('http://localhost:3055/v1/api/user/signup', {
      method: 'POST',
      body: { name, password }
    })
    
    return response
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || 'Lỗi server',
    })
  }
})