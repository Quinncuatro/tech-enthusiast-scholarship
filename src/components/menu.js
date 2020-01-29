import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
    <p id="scroll-top">&nbsp;</p>
    <h1><code>The Henry Quinn Tech Enthusiast Scholarship</code></h1>
    <table width="600" border="1" cellspacing="1" cellpadding="4">
      <tr>
        <td width="88">
          <p><Link to="/#scroll-top">Home</Link></p>
          <p><Link to="/#scroll-about">About</Link></p>
          <p><Link to="/#scroll-application">Application</Link></p>
          <p><Link to="/#scroll-contact">Contact</Link></p>
        </td>
        <td width="487"> 
          <p>The Henry Quinn Tech Enthusiast Scholarship awards $500 to two East Hampton High School seniors intending to pursue a career in computer science or a related field.</p>
          <p>This is for the new group of students hanging out in the library teaching each other how to traverse networks, set up game servers for their friends, and otherwise create their own curriculum.</p>
        </td>
      </tr>
    </table>
  </div>
);