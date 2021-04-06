# WORKALOVE EDTECH

## Teste para vaga front-end na WORKALOVE EDTECH

### Como rodar

Tenha o [NodeJS](https://nodejs.org) LTS e o [Typescript](https://typescriptlang.org) LTS instalados.

Execute o comando:

```shell
npm run start
```

Pronto, só ver o resultado no seu browser.

### Tecnologias utilizadas

<code>
	<img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" alt="Typescript"/>
	<img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt="React"/>
</code>

Além das bibliotecas [Formik](https://formik.org/), [yup](https://www.npmjs.com/package/yup) e [axios](https://axios-http.com/).

### Documentação de componentes reutilizaveis

#### Greeting

Componente de saudações do remetente.

```tsx
<Greeting
	name="Chatnilson" // nome de exibição
	profilePicture="image_link" // imagem de perfil
/>
```

#### Message Bubble

A bolha de mensagem é o componente para mensagem de remetente.

```tsx
<MessageBubble
	profilePicture="image_link" // imagem de perfil
	display={true} // flag de exibição da mensagem, true para show e false para hidden
	message="Bom dia!" // conteudo da mensagem
/>
```

#### Message Input

Bolha de entrada de texto para o receptor.

```tsx
<MessageInput
	placeholder="E-mail" // opcional
	type="text" // opcional
	propName="email" // nome da propriedade
	display={true} // flag de exibição da mensagem, true para show e false para hidden
	validator={ emailValidator } // função que recebe uma string como parametro e retorne booleano, para validação do campo
/>
```

### Como as mensagens são passadas através dos componentes sem o uso de props?

Utilizando a [API de eventos do NodeJS](https://nodejs.org/dist/latest-v14.x/docs/api/events.html).

```ts
import emitter from "./utils/emitter"

emitter.emit("msg", { email: "email" });

emitter.on("msg", ({ email }: { email: string }): void => {
	console.log(email);
	// email
});
```

