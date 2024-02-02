import { titleFont } from '@/config/fonts';
import LoginForm from './ui/LoginForm';

export default function LoginPage() {
  return (
    <div className="flex flex-col rounded p-3 my-32 sm:my-52 bg-white">

      <h1 className={ `${ titleFont.className } text-4xl mb-5` }>Ingresar</h1>

      <LoginForm/>
    </div>
  );
}
