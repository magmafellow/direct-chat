import { useFormState, useFormStatus } from "react-dom";

export function Button() {
  const { pending } = useFormStatus();

  return <button className="bg-blue-500 py-2 px-4 rounded-md">{pending ? "..." : "ok"}</button>;
}

export default function LoginForm() {
  return (
    <form action="" className="flex flex-col items-center gap-3 md:gap-5 xl:gap-7">
      <div className="flex gap-5">
        <label htmlFor="login-username">username: </label>
        <input type="text" className="text-black font-medium px-1 py-0.5 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[330px]" name="username" id="login-username" />
      </div>
      <div className="flex gap-5">
        <label htmlFor="login-password">password: </label>
        <input type="password" className="text-black font-medium px-1 py-0.5 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[330px]" name="password" id="login-password" />
      </div>
      <div className="text-center">
        <Button />
      </div>
    </form>
  );
}
