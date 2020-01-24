import React from "react"
import { Link } from "gatsby"
import footerStyles from "./footer.module.css"

export default () => (
  <div>
    <p>&nbsp;</p>
    <table width="600" border="1" cellspacing="1" cellpadding="4">
      <tr>
        <td width="88">Footer
        </td>
        <td width="487">
          <p>Made with <span className={footerStyles.heart}>&#10084;</span> in New Haven by <a href="https://henryneeds.coffee">Henry Quinn</a>.</p>
          <p>Modeled after my <a href="https://crashthebot.net/FirstSite">first site</a>, built at EHHS.</p>
        </td>
      </tr>
    </table>

    <p>&nbsp;</p>
    <Link to="/#scroll-top">Back To Top</Link>
  </div>
);