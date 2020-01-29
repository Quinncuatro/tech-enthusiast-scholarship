import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
    <p id="scroll-contact">&nbsp;</p>
    <table width="600" border="1" cellspacing="1" cellpadding="4">
      <tr>
        <td width="88">
          <p>Contact</p>
        </td>
        <td width="487"> 
          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>Your Name: <input type="text" name="name" /></label>   
            </p>
            <p>
              <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Your Role: <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select></label>
            </p>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        
        </td>
      </tr>
    </table>
  </div>
);