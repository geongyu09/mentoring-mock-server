"use client";

// import { loginAction } from "./action";

export default function Home() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");
    console.log("Username:", username);

    const data = await fetch(
      "https://mentoring-mock-server.vercel.app/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        // type="email"
        type="text"
        id="username"
        name="username"
        required
        className="border"
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        className="border"
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}
