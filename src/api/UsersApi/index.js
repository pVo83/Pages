import { apiClient } from "@/api"

export const UsersAPI = {
  register(userData) {
    return apiClient.post("/users", userData)
  },
}
