"use server";

export async function loginAction(formData: FormData) {
  try {
    const username = formData.get("username");
    const password = formData.get("password");

    const response = await fetch(`http://localhost:3000/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log("Login successful:", data);
    } else {
      console.error("로그인 실패:", data.message);
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
}
