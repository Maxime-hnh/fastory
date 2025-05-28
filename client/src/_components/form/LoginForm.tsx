"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { AuthRequest, Authschema } from "@/_schemas/auth.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/_components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useLoginMutation } from "@/_mutations/auth/useLoginMutation";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "../ui/dialog";
import { Loader2Icon } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/_stores/store";

export default function LoginForm() {

  const { mutate: login, isPending } = useLoginMutation();
  const loggedUser = useSelector((state: RootState) => state.auth.loggedUser);

  const form = useForm<AuthRequest>({
    resolver: zodResolver(Authschema),
    defaultValues: {
      username: "",
      password: ""
    },
  })

  function submit(values: AuthRequest) {
    login(values);
  }

  return (
    <Dialog open={loggedUser?.token ? false : true} onOpenChange={() => { }}>
      <DialogContent>
        <div className="flex flex-col">
          <div className="flex flex-col gap-2 mb-8">
            <DialogTitle className="text-2xl font-[900] text-center">Bienvenue jeune padawan</DialogTitle>
            <DialogDescription className="text-xs text-center">Avant de commencer votre quête, vous devez vous authentifier</DialogDescription>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submit)} className="flex flex-col gap-6 w-full">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Saisissez votre username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Mot de passe</FormLabel>
                    <FormControl>
                      <Input placeholder="Saisissez votre mot de passe" className="w-full" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">
                {isPending
                  ? <Loader2Icon className="ml-2 h-4 w-4 animate-spin" />
                  : "Se connecter"
                }
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  )
}