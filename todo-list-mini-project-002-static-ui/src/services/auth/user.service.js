"use server";

import { getToken } from "next-auth/jwt";
import { baseUrl } from "../constants";
import headerToken from "@/api/headerToken";

export const getUserService = async () => {
  const header = await headerToken();
  try {
    const res = await fetch(`${baseUrl}/user`, {
      headers: header,
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error : ", e);
  }
};

export const RegisterService = async (user) => {
  const { userName, userEmail, userPassword } = user;
  const postUser = {
    username: userName,
    email: userEmail,
    password: userPassword,
  };

  try {
    const res = await fetch(`${baseUrl}/auth/register`, {
      method: "POST",
      body: JSON.stringify(postUser),
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error : ", e);
  }
};

export const LoginService = async (user) => {
  try {
    const res = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error : ", e);
  }
};
