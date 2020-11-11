import React from "react"
import {Inputs, TextArea, Button, Text, Container} from './DiscussMailStyle.js';
import emailjs from "emailjs-com"

const Discuss = () =>{

const SendMail = (e) =>{
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_cs2zfqn', e.target, 'user_58V79t3CMe1pQccpi8Li9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
}

    return (
        <Container>
                <Text>
                    We are here to recieve your recommendations
                </Text>
                <Text>
                    Give us a few minutes and we’ll give you clarity and direction.
                </Text>
                <hr style = {{width : "10%", backgroundColor :"#D04000", height :"4px", border:'none', borderRadius:"10px"}} />
                <form onSubmit = {SendMail}>
                    <div>
                        <Inputs
                            type="text" 
                            placeholder = "First Name" 
                            name = "firstName" 
                        />
                        <Inputs 
                            type="text"
                            placeholder = "Last Name"
                            name = "lastName" 
                        />
                    </div>
                    <div>
                        <Inputs 
                            type="email" 
                            placeholder = "Email Adrress" 
                            name = "senderEmail" 
                        />
                        <Inputs 
                            type="text" 
                            placeholder = "Company Name" 
                            name = "company" 
                        />
                    </div>
                    <TextArea 
                        placeholder = "What service are you interested in?" 
                        name = "message" 
                    />
                    <Button 
                        type="submit" 
                        value="Send"
                    />
                </form>
        </Container>
    );

}
export default Discuss;