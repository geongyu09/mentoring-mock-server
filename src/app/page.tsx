import { loginAction } from "./action";

export default function Home() {
  return (
    <form action={loginAction}>
      <label htmlFor="username">Username:</label>
      <input
        type="email"
        // type="text"
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
