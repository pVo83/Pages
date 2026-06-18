import { ref } from "vue"
import { EMAIL_REGEX } from "@/utils/validators"

export function useSubscribeForm() {
  const email = ref("")
  const error = ref("")
  const loading = ref(false)
  const submitted = ref(false)

  const validate = () => {
    const trimmed = email.value.trim()
    if (!trimmed) {
      error.value = "Email is required"
      return false
    }
    if (!EMAIL_REGEX.test(trimmed)) {
      error.value = "Enter a valid email"
      return false
    }
    error.value = ""
    return true
  }

  const handleSubmit = async () => {
    if (!validate()) return

    loading.value = true

    try {
      await new Promise((resolve) => setTimeout(resolve, 800))
      submitted.value = true
      email.value = ""
      setTimeout(() => {
        submitted.value = false
      }, 3000)
    } finally {
      loading.value = false
    }
  }

  return { email, error, loading, submitted, handleSubmit }
}
