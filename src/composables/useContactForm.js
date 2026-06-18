import { reactive, ref } from "vue"
import { EMAIL_REGEX } from "@/utils/validators"

function validateField(field, value) {
  const trimmed = value.trim()

  if (field === "name") {
    if (!trimmed) return "Name is required"
    if (trimmed.length < 5) return "Minimum 5 characters"
  }

  if (field === "email") {
    if (!trimmed) return "Email is required"
    if (!EMAIL_REGEX.test(trimmed)) return "Invalid email address"
  }

  if (field === "subject") {
    if (!trimmed) return "Subject is required"
  }

  if (field === "message") {
    if (!trimmed) return "Message is required"
    if (trimmed.length < 10) return "Minimum 10 characters"
  }

  return ""
}

export function useContactForm() {
  const form = reactive({
    name: { value: "", touched: false, error: "" },
    email: { value: "", touched: false, error: "" },
    subject: { value: "", touched: false, error: "" },
    message: { value: "", touched: false, error: "" },
  })

  const loading = ref(false)
  const formError = ref("")

  function touchField(field) {
    form[field].touched = true
    form[field].error = validateField(field, form[field].value)
  }

  function validateAll() {
    let isValid = true
    Object.keys(form).forEach((field) => {
      touchField(field)
      if (form[field].error) isValid = false
    })
    return isValid
  }

  function resetForm() {
    Object.keys(form).forEach((field) => {
      form[field].value = ""
      form[field].touched = false
      form[field].error = ""
    })
    formError.value = ""
  }

  return { form, loading, formError, touchField, validateAll, resetForm }
}
