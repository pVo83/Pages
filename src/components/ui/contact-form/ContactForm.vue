<template>
  <div class="contact-form__wrapper">
    <div class="contact-form__header">
      <Heading class="contact-form__title" align="center">
        Send Us <span class="text-accent">A Message</span>
      </Heading>
      <p class="contact-form__text">We'll get back to you within 24 hours</p>
    </div>

    <div class="contact-form__body">
      <p v-if="isSubmitted" class="contact-form__success" role="status">
        Thank you! We'll contact you soon.
      </p>

      <form v-else class="contact-form" @submit.prevent="handleSubmit">
        <div class="contact-form__row">
          <div class="contact-form__group">
            <label for="name" :class="{ filled: form.name.value }">Your Name</label>
            <input
              id="name"
              v-model="form.name.value"
              type="text"
              autocomplete="off"
              @blur="touchField('name')"
            />
            <span v-if="form.name.touched && form.name.error" class="contact-form__error">
              {{ form.name.error }}
            </span>
          </div>

          <div class="contact-form__group">
            <label for="email" :class="{ filled: form.email.value }">Your Email</label>
            <input
              id="email"
              v-model="form.email.value"
              type="text"
              autocomplete="off"
              @blur="touchField('email')"
            />
            <span v-if="form.email.touched && form.email.error" class="contact-form__error">
              {{ form.email.error }}
            </span>
          </div>
        </div>

        <div class="contact-form__group">
          <label for="subject" :class="{ filled: form.subject.value }">Subject</label>
          <input
            id="subject"
            v-model="form.subject.value"
            type="text"
            autocomplete="off"
            @blur="touchField('subject')"
          />
          <span v-if="form.subject.touched && form.subject.error" class="contact-form__error">
            {{ form.subject.error }}
          </span>
        </div>

        <div class="contact-form__group">
          <label for="message" :class="{ filled: form.message.value }">Your Message</label>
          <textarea
            id="message"
            v-model="form.message.value"
            autocomplete="off"
            @blur="touchField('message')"
          ></textarea>
          <span v-if="form.message.touched && form.message.error" class="contact-form__error">
            {{ form.message.error }}
          </span>
        </div>

        <span
          v-if="formError"
          class="contact-form__message contact-form__message--error"
          role="alert"
        >
          {{ formError }}
        </span>

        <Button
          type="submit"
          :disabled="loading"
          variant="outline"
          size="medium"
          icon="#chevron-right"
          title="Send message"
        />
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Button from "../button/Button.vue"
import Heading from "../heading/Heading.vue"
import { UsersAPI } from "@/api/UsersApi/index.js"
import { useContactForm } from "@/composables/useContactForm"

const { form, loading, formError, touchField, validateAll, resetForm } = useContactForm()

const isSubmitted = ref(false)

async function handleSubmit() {
  formError.value = ""

  if (!validateAll()) return

  loading.value = true

  try {
    await UsersAPI.register({
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      subject: form.subject.value.trim(),
      message: form.message.value.trim(),
    })

    resetForm()
    isSubmitted.value = true
    setTimeout(() => {
      isSubmitted.value = false
    }, 3000)
  } catch {
    formError.value = "Failed to send message. Please try again later."
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
.contact-form__wrapper {
  margin: 0 auto;
  padding: 50px;
  max-width: 600px;

  @include mobile {
    padding: 30px 20px;
  }
}

.contact-form__header {
  margin-bottom: 70px;
  text-align: center;
}

.contact-form__body {
  min-height: 440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contact-form__success {
  margin: 0;
  color: var(--primary-color);
  font-family: var(--ff-secondary);
  font-size: var(--fs-24);
  font-weight: 400;
  text-align: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @include mobile {
      grid-template-columns: 1fr;
      gap: 0;
    }
  }

  &__title {
    margin: 0 0 20px;
  }

  &__text {
    margin: 0;
    color: var(--neutral-300);
    font-size: var(--fs-16);
    line-height: 1.6;
  }

  &__group {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;

    input,
    textarea {
      width: 100%;
      height: 45px;
      border: none;
      border-bottom: 1px solid var(--neutral-200);
      background: transparent;
      color: var(--primary-color);
      font-family: var(--ff-primary);
      font-size: var(--fs-16);
      transition: border-color var(--trs-25);

      &:focus {
        border-bottom-color: var(--accent-color);
        outline: none;
      }
    }

    textarea {
      height: 120px;
      padding-top: 8px;
      resize: none;
    }

    label {
      color: var(--neutral-300);
      font-size: var(--fs-12);
      font-weight: 500;
    }
  }

  &__error {
    position: absolute;
    bottom: -20px;
    left: 50%;
    width: max-content;
    color: var(--danger-color);
    font-size: var(--fs-12);
    transform: translateX(-50%);
  }

  &__message {
    font-size: var(--fs-14);
    text-align: center;

    &--error {
      color: var(--danger-color);
    }
  }

  button {
    width: 100%;
    margin-top: 16px;
    cursor: pointer;
  }
}
</style>
