import { handleResponse } from "@/_helpers/handle-response";
import { AuthRequest } from "@/_schemas/auth.schema";
import { AuthenticatedUser } from "@/_types/authenticated-user.type";

class AuthService {

  constructor() {
  }

  login = async (values: AuthRequest): Promise<AuthenticatedUser> => {
    const token = btoa(`${values.username}:${values.password}`);

    const requestOptions = {
      method: 'GET',
      headers: {
        Authorization: `Basic ${token}`,
      }
    };
    const response = await handleResponse(await fetch(`/api/auth/me`, requestOptions));
    const user = { ...response.user, token };
    return user;
  }
}

export const authService = new AuthService();