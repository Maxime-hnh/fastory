"use client"
import { authService } from "@/_services/auth.service";
import { setLoggedUser } from "@/_stores/authSlice";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { setDialogOpen } from "@/_stores/authSlice";

export const useLoginMutation = () => {
  const dispatch = useDispatch();
  const { login } = authService;

  return useMutation({
    mutationFn: login,
    onSuccess: (user) => {
      dispatch(setLoggedUser(user));
      dispatch(setDialogOpen(false));
      toast.success('Bienvenue jeune padawan ' + user.username + ' !');
    },
    onError: (error: any) => {
      toast.error('Échec de la connexion', {
        description: error?.message ?? 'Vérifiez votre username et mot de passe.',
      });
    },
  });
}