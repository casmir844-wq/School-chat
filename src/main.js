import "./style.css";

import { registerRoute,navigate } from "./router/router";

import { loginPage } from "./pages/login";

import { registerPage } from "./pages/register";

import { homePage } from "./pages/home";

registerRoute("login",loginPage);

registerRoute("register",registerPage);

registerRoute("home",homePage);

navigate("login");
