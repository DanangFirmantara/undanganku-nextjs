"use client"

import { useQuery } from "@tanstack/react-query"
import { userService } from "@/services/user.service"

export const USER_KEYS = {
  all: ["users"] as const,
}

export function useUsers() {
  return useQuery({
    queryKey: USER_KEYS.all,
    queryFn: userService.getAll,
  })
}
