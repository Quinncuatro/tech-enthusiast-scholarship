import React from "react"
import ApplyForm from "./apply-form"

export default () => (
  <div>
    <p id="scroll-application">&nbsp;</p>
    <table width="600" border="1" cellspacing="1" cellpadding="4">
      <tr>
        <td width="88">
          <p >Application</p>
        </td>
        <td width="487"> 
          <h3>Henry Quinn Tech Enthusiast Scholarship</h3>
          <p>Through the support and encouragement of some teachers here, I spent my high school years taking independent studies and continuing adult education classes in order to learn how to build websites and fix computers. After graduating college and landing a fun tech job, I want to pay it forward.</p>
          <p>This is for the new group of students messing with computers, setting up game servers for their friends, exploring networks they come across, and learning through experimentation.</p>
          <p>This scholarship awards $500 to two East Hampton High School seniors who intend to major (or otherwise continue their education) in computer science or a related field of study.</p>
          <p>Please complete the form below, or submit a word-processed version of your responses to the Guidance Office, by <strong><u>May 28th, 2021.</u></strong></p>
          <ApplyForm />
        </td>
      </tr>
    </table>
  </div>
);