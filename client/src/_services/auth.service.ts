import { authHeader } from "@/_helpers/auth-header";
import { handleResponse } from "@/_helpers/handle-response";
import { AuthRequest } from "@/_types/auth-request.interface";
import { AuthenticatedUser } from "@/_types/authenticated-user.interface.ts";

class AuthService {

  constructor() {
  }

  login = async (values: AuthRequest): Promise<AuthenticatedUser> => {
    const requestOptions = {
      method: 'POST',
      headers: authHeader(),
      body: JSON.stringify(values),
    };
    return await handleResponse(await fetch(`/api/auth/login`, requestOptions));
  }
}

export const authService = new AuthService();