'use server'

import { signIn } from '@/auth.config';
import { AuthError } from 'next-auth';

// ...

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    // console.log(formData)
    // console.log(Object.fromEntries(formData))

    await signIn('credentials', {
      ...Object.fromEntries(formData),
      redirect: false,
    });

    return 'Login exitoso'
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
    //console.log(error);

    return 'CredentiaslSingin'
  }
}

export const login = async(email:string, password: string) => {

  try {

    await signIn('credentials',{ email, password })

    return {ok: true};

  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: 'No se pudo iniciar sesión'
    }

  }

}
