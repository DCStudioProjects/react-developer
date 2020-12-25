import React, { useState }  from "react"
import axios from "axios";
import { Link } from "gatsby"

const Form = () => {
    
    const [serverState, setServerState] = useState({
      submitting: false,
      status: null
    });
    const handleServerResponse = (ok, msg, form) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      });
      if (ok) {
        form.reset();
      }
    };
    const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      setServerState({ submitting: true });
      axios({
        method: "post",
        url: "https://getform.io/f/fdc48ac1-01e5-4b06-b890-9836ee38e994",
        data: new FormData(form)
      })
        .then(r => {
          handleServerResponse(true, "Thanks!", form);
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error, form);
        });
    };
    return (
    <form action="https://getform.io/f/fdc48ac1-01e5-4b06-b890-9836ee38e994" method="POST">
        <div className="form_field">
            <input type="text" name="name" placeholder="Имя" required/>
            </div>
            <div className="form_field">
            <input type="email" name="email" placeholder="Почта" required/>
            </div>            
            <div className="form_field">
            <input type="text" name="message" placeholder="Сообщение" required/>
            </div>            
            <div className="form_field">
            <button type="submit">Отправить</button>
            </div>
    </form>
     
    );
  };
  
  export default Form;