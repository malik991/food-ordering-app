"use client";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCreatingUser, setIscreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);
  const handleRegisterSubmit = async (ev) => {
    if (!email || !password) {
      return alert("email and password is mendatory");
    }
    ev.preventDefault();
    try {
      setError(false);
      setIscreatingUser(true);
      const res = await axios.post("/api/register", {
        email,
        password,
      });
      setIscreatingUser(false);
      setUserCreated(true);
    } catch (error) {
      console.log("error in registering user: ", error);
      setError(true);
      setIscreatingUser(false);
      setUserCreated(false);
    }
  };
  return (
    <section className="my-8">
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
      {userCreated && (
        <div className="my-4 text-green-500 text-md text-center">
          User created Successfully,
          <br />
          Now you can{" "}
          <Link
            href={"/login"}
            className="underline font-semibold text-primary"
          >
            Login &raquo;
          </Link>
        </div>
      )}
      {error && (
        <div className="my-4 text-red-500 text-md text-center">
          An Error has occured,
          <br />
          please try again later.
        </div>
      )}
      <form className="block max-w-xs mx-auto" onSubmit={handleRegisterSubmit}>
        <input
          disabled={isCreatingUser}
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          disabled={isCreatingUser}
          type="password"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit" disabled={isCreatingUser}>
          {isCreatingUser ? "please wait" : "Register"}
        </button>
        <div className="my-4 text-center text-gray-500">
          or login with Google
        </div>
        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex gap-4 justify-center"
        >
          <Image src={"/google.png"} alt={""} width={24} height={24} />
          Login with Google
        </button>
      </form>
      <div className="text-center my-4 text-gray-500  pt-4">
        Existing account?{" "}
        <Link className="underline" href={"/login"}>
          Login here &raquo;
        </Link>
      </div>
    </section>
  );
}
