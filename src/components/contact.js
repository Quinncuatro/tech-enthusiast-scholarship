import React from "react"

export default () => (
  <div>
    <p id="scroll-contact">&nbsp;</p>
    <table width="600" border="1" cellspacing="1" cellpadding="4">
      <tr>
        <td width="88">
          <p>Contact</p>
        </td>
        <td width="487"> 
          <p>Questions? Comments? Drop me a line.</p>
          <form name="Contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" data-netlify-recaptcha="true">
            <p class="hidden">
              <label>What is your favorite movie and why is it Rampart? <input type="text" name="bot-field"/></label>
            </p>
            <p>
              <label>Name: <input type="text" name="name" /></label>   
            </p>
            <p>
              <label>Email: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <div data-netlify-recaptcha="true"></div>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        
        </td>
      </tr>
    </table>
  </div>
);