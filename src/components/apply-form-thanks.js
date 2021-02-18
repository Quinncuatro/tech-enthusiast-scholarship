import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
    <p id="scroll-top">&nbsp;</p>
    <h1><code>The Henry Quinn Tech Enthusiast Scholarship</code></h1>
    <table width="600" border="1" cellspacing="1" cellpadding="4">
      <tr>
        <td width="88">
          Thanks
        </td>
        <td width="487"> 
          <h2>Hey, thanks for applying!</h2>
          <p>Once the submission window closes, I'll read through all of the applications and select the winners.</p>
          <p>Can't wait to present the scholarship award to two of you on Senior Awards Night!</p>
          <p>&#8592; <Link to="/">Head back to TechEnthusiastScholarship.com</Link></p>
        </td>
      </tr>
    </table>
  </div>
);