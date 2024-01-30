import Logo from "./assets/agil-logo.png"
import googleIcon from "./assets/google.png"

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "./services/firebase"
import { KeyRound, UserRound } from "lucide-react"

export function App() {

  //EXECUTA QUANDO CLICAR NO BOTÃO ENTRAR OU QUANDO O FORM FOR ENVIADO
  function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault()

    console.log("Formulario enviado")
  }

  //EXECUTA QUANDO CLICA NO BOTÃO EFETUAR CADASTRO
  function handleFormSignUp() {
    console.log("sign up")
  }

  //EXECUTA QUANDO CLICA NO BOTÃO DE ENTRAR COM O GOOGLE
  function handleGoogleAuth() {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider).then(response => {
      console.log(response)
    }).catch(error => {
      console.error(error)
    })
  }

  return (
    <div className="container">
      <img className="agil-logo" src={Logo} alt="Internet Agil logo" />
      <form action="" onSubmit={handleFormSubmit}>
        <div className="section">
          <label htmlFor="user">Usuário:</label>
          <div className="input-box">
            <UserRound className="icon" color="black" />
            <input type="text" name="user" id="user" />
          </div>

        </div>
        <div className="section">
          <label htmlFor="password">Senha:</label>
          <div className="input-box">
            <KeyRound className="icon" color="black" />
            <input type="password" name="password" id="password" />
          </div>
        </div>

        <div className="buttons">
          <button onClick={handleGoogleAuth} type="button" className="button googleButton">
            Entrar pelo Google
            <img width={18} src={googleIcon} alt="" />
          </button>
          <button className="button" type="submit">Entrar</button>
          <button type="button" onClick={handleFormSignUp} className="button">Efetuar cadastro</button>
        </div>
      </form>

      <span className="footer">Desenvolvido por <a href="https://cmctelecom.com.br">Ágil Online</a> <br />Todos os Direitos Reservados</span>
    </div>
  )
}