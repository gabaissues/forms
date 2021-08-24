
import React from 'react'
import styles from '../styles/Home.module.scss'

export default function Home() {

  const [email, setEmail] = React.useState('')
  const [name, setName] = React.useState('')
  const [message, setMessage] = React.useState('')

  let inputs = [
    'email',
    'name',
    'textarea'
  ]

  const handleSubmit = () => {

    if(!name || !email || !message) return;
    document.getElementById('form').submit()

  }

  const handleNext = (event, input) => {

    if (event.key === "Enter") {
      inputs.map((a, i) => {

        if (a === input.toLowerCase()) {

          document.getElementById(inputs[i + 1]).focus()

        }

      })
    }

  }

  const submitCancel = (event) => {

    event.preventDefault()

  }


  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <form required action="/submit" id="form" onSubmit={submitCancel}>

          <input onChange={(c) => setEmail(c.target.value)} required name="email" id="email" onKeyDown={(c) => handleNext(c, 'email')} placeholder="Insira seu e-mail..." />
          <input onChange={(c) => setName(c.target.value)} name="name" id="name" onKeyDown={(c) => handleNext(c, 'name')} placeholder="Insira seu nome..." />

          <textarea onChange={(c) => setMessage(c.target.value)} name="message" id="textarea" placeholder="Insira sua mensagem..."></textarea>
          <a onClick={handleSubmit}>Enviar</a>

      </form>
    </div>
  )
}
