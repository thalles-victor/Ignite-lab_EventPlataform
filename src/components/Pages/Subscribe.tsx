import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../../graphql/generated";
import { Logo } from "../Logo";

export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName]= useState('');
  const [email, setEmail]= useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  function handleSubscribe(event: FormEvent) {
    event.preventDefault()

    createSubscriber({
      variables: {
        name, 
        email
      }
    })
      .then(() => navigate("/event"))    
      .catch((error) => {
        throw new Error("Error while subscribe: ", error);
      })
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1
            className="mt-8 text-[2.5rem] leading-tight"
          >Construa umma <strong className="text-blue-500"> aplicação completa </strong>, do zero, com React JS</h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prátiva uma das tecnologias mais utilizadas e com alta demanda para acessar as melhors oportunidades do mercado
          </p>
        </div>

        <div className="p-8 gb-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscrevase gratuitamente</strong>

          <form action="" className="flex flex-col gap-2 w-full">
            <input
              type="text"
              placeholder="Digite seu nome completo"
              onChange={event => setName(event.target.value)}
              className="bg-gray-900 rounded px-5 h-14"
              />
            <input
              type="email"
              placeholder="Digite seu email"
              onChange={event => setEmail(event.target.value)}
              className="bg-gray-900 rounded px-5 h-14"
              />

            <button
              type="submit"
              onClick={handleSubscribe}
              disabled={loading}
              className="bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              >Garantir minha vaga</button>
          </form>
        </div>
      </div>

      <img src="/src/assets/code-mockap.png" className="mt-10" alt=""/>
    </div>
  )
}