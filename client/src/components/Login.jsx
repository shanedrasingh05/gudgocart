import React from "react";
import { useAppContext } from "../context/AppContext";

const Login = () => {
  const { setShowUserLogin, setUser } = useAppContext();

  const [state, setState] = React.useState("login");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    setUser({
      email: "test@shanedra.dev",
      name: "Shanedra Singh",
    });
    setShowUserLogin(false);
  };

  
  return (
    <div
      onClick={() => setShowUserLogin(false)}
      className="fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center justify-center text-sm text-gray-600 bg-black/50"
    >
      <form
        onSubmit={onSubmitHandler}
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-4 items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white"
      >
        <p className="text-2xl font-medium m-auto">
          <span className="text-primary">User</span>{" "}
          {state === "login" ? "Login" : "Sign Up"}
        </p>

        {state === "register" && (
          <div className="w-full">
            <label className="block mb-1">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Type your name"
              className="border border-gray-200 rounded w-full p-2 outline-primary"
              type="text"
              required
            />
          </div>
        )}

        <div className="w-full">
          <label className="block mb-1">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Type your email"
            className="border border-gray-200 rounded w-full p-2 outline-primary"
            type="email"
            required
          />
        </div>

        <div className="w-full">
          <label className="block mb-1">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Type your password"
            className="border border-gray-200 rounded w-full p-2 outline-primary"
            type="password"
            required
          />
        </div>

        <p className="text-sm">
          {state === "register"
            ? "Already have an account?"
            : "Create an account?"}{" "}
          <span
            onClick={() =>
              setState(state === "register" ? "login" : "register")
            }
            className="text-primary cursor-pointer"
          >
            Click here
          </span>
        </p>

        <button
          type="submit"
          className="bg-primary hover:bg-primary-dull transition-all text-white w-full py-2 rounded-md"
        >
          {state === "register" ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
