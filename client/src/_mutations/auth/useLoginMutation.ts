"use client"
import { authService } from "@/_services/auth.service";
import { setLoggedUser } from "@/_stores/authSlice";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

export const useLoginMutation = () => {
  const dispatch = useDispatch();
  const { login } = authService;

  return useMutation({
    mutationFn: login,
    onSuccess: (user) => {
      dispatch(setLoggedUser(user));
      toast.success('Bienvenue jeune padawan ' + user.username + ' !');
    },
  });
}