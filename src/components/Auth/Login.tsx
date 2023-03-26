import React, { useState } from "react";
import Link from "next/link";
import InputTextField from "../Inputs/InputTextField";
import AuthService from "../../services/AuthService";
import router from "next/router";
import ModalDialog from "../Dialog/ModalDialog";
import useAuth from "../../hooks/useAuth";

export default function Login() {
  const EXPIRES_TIME = 1000 * 60 * 20;

  const { auth, setAuth, setCookie } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setError] = useState("Leer");
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    AuthService.loginUserProfil(username, password)
      .then((response) => {
        if (response != undefined || response != null) {
          const userid = response?.data?.userid;
          const jwtToken = response?.data?.access_token;
          const roles = response?.data?.roles;

          let expiresIn = new Date();
          expiresIn.setTime(expiresIn.getTime() + EXPIRES_TIME);

          setCookie("default_access_token", jwtToken, { path: "/", expiresIn });
          setCookie("default_userid", userid, { path: "/", expiresIn });
          setCookie("default_username", username, { path: "/", expiresIn });

          setAuth({ username, jwtToken, roles });
          router.push("/app");
        }
      })
      .catch((error) => {
        if (error === undefined) {
          setError("Keine Verbindung zum Server.");
        }
        if (error?.status) {
          switch (error.status) {
            case 401:
              // Handle Unauthenticated here
              break;
            case 403:
              // Handle Unauthorized here
              break;
            case 404:
              setError("Keine Verbindung zum Server.");
              break;
            // ... And so on
          }
        }
        setModalOpen(true);
      });
  };

  return (
    <div className="bg-slate-800">
      <div className="mx-2 mb-2 p-2 pt-4 lg:absolute lg:top-0 lg:w-8/12 flex flex-around">
        <Link
          href="/"
          className="h-8 w-auto flex items-center text-gray-300 lg:px-8 rounded-md text-xl font-bold"
        >
          GastroLink
        </Link>
      </div>
      <div className="min-h-screen gap-0">
        <div className="mx-auto my-auto px-10 py-20 rounded-3xl lg:w-5/12">
          <div className="font-bold self-start text-2xl lg:text-3xl text-slate-100 mt-2 mb-2">
            Willkommen zurück !
          </div>
          <div className="font-medium self-start text-lg lg:text-xl text-slate-100">
            Loggen Sie sich in Ihren GastroLink Account!
          </div>

          <div className="mt-10">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-0 grid-cols-1">
                <InputTextField
                  labelText="Benutzername"
                  type="text"
                  onChange={(e) => setUsername(e.currentTarget.value)}
                />
                <InputTextField
                  labelText="Password"
                  type="password"
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
                <div className="flex w-full justify-end">
                  <Link
                    href="/"
                    as="/restpassword"
                    className="text-xs text-skyblue hover:text-sky-700"
                  >
                    Du hast dein Password vergessen?
                  </Link>
                </div>
                <div className="flex w-full mt-4">
                  <button
                    type="submit"
                    className="flex items-center justify-center bg-transparent text-skyblue text-sm sm:text-base border border-skyblue hover:bg-skyblue hover:text-white rounded-full py-2 w-full transition duration-150 ease-in"
                  >
                    Anmelden
                  </button>
                </div>
              </div>
              <hr className="m-10 border-t-3 place-self-center"></hr>
              <div>
                <button className="flex bg-skyblue w-full">
                  <span className="mx-auto my-auto text-slate-100">
                    Mit Google fortfahren
                  </span>
                </button>
              </div>
            </form>
            <div className="flex justify-center items-center mt-6">
              <span className="ml-2 text-slate-100">
                Du hast noch kein Konto?{" "}
              </span>
              <Link
                href="/components/SignUp"
                as="/signup"
                className="px-2 text-skyblue hover:text-sky-700"
              >
                Registrieren
              </Link>
            </div>
            <div className={!errorMsg ? "hidden" : ""}></div>
          </div>
        </div>
      </div>
      {isModalOpen ? (
        <ModalDialog
          headerText="Ein Fehler ist aufgetreten."
          message={errorMsg}
          buttonText="Weiter"
          setModalOpen={setModalOpen}
        />
      ) : null}
    </div>
  );
}
