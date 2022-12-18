"use client";
import Button from "@elements/Button";
import TextBox from "@elements/TextBox";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

interface IProps {
  searchParams: {
    backUrl?: string;
  };
}
const LoginPage = ({ searchParams: { backUrl } }: IProps) => {
  const userName = useRef("");
  const pass = useRef("");
  const router = useRouter();

  const onSubmit = async () => {
    console.log("here");

    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: backUrl || "/",
    });

    if (result?.ok) {
      console.log({ result });

      alert("Success");
      if (backUrl) router.push(backUrl);
      else router.push("/");
    }
  };
  return (
    <div
      className={
        "flex justify-center items-center  h-screen bg-gradient-to-br from-cyan-300 to-sky-600"
      }
    >
      <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
        <TextBox
          lableText="َUser Name"
          onChange={(e) => (userName.current = e.target.value)}
        />
        <TextBox
          lableText="Password"
          type={"password"}
          onChange={(e) => (pass.current = e.target.value)}
        />
        <Button onClick={onSubmit}>Login</Button>
      </div>
    </div>
  );
};

export default LoginPage;
