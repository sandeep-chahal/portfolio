import React from "react"
import Layout from "../components/layout"
import "../styles/contact.scss"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return (
      <Layout>
        <form
          className="contact-form"
          onSubmit={this.submitForm}
          action="https://formspree.io/myynqoaa"
          method="POST"
        >
          <div className="wrapper">
            <h1>Let's Talk</h1>
            <p>I'll try to reply within the day.</p>
            <label>Name</label>
            <input type="text" name="name" placeholder="alex" />
            <label>Email</label>
            <input type="email" name="email" placeholder="alex@gmail.com" />
            <label>Message</label>
            <textarea name="message" rows="5" placeholder="Hi Sandeep" />
            {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </div>
        </form>
      </Layout>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
