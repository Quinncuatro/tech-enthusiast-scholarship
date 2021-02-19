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
          <form name="contact" method="POST" action="/contact-thanks/" netlify-honeypot="bot-field" data-netlify-recaptcha="true" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                What's your favorite movie and why is it rampart?{' '}
                <input name="bot-field" />
              </label>
            </div>
            <p>
              <label>Name: <input type="text" name="name" required /></label>   
            </p>
            <p>
              <label>Email: <input type="email" name="email" required /></label>
            </p>
            <p>
              <label>Message: <textarea name="message" required></textarea></label>
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