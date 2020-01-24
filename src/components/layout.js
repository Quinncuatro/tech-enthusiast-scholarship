import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import layoutStyles from "./layout.module.css"

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}

export default () => (
  <div>
    <Helmet>
      <meta name="description" content="The Henry Quinn Tech Enthusiast Scholarship" />
      <meta name="keywords" content="Tech, Enthusiast, Scholarship, Henry, Quinn, Computer, Science, Technology, East, Hampton" />
      <meta charset="UTF-8" />
      <html lang="en" />
      <title>Tech Enthusiast Scholarship</title>
    </Helmet>
    <p id="scroll-top">&nbsp;</p>
    <h1><code>The Henry Quinn Tech Enthusiast Scholarship</code></h1>
    <table width="600" border="1" cellspacing="1" cellpadding="4">
      <tr>
        <td width="88">
          <p><Link to="/#scroll-top">Home</Link></p>
          <p><Link to="/#scroll-about">About</Link></p>
          <p><Link to="/#scroll-application">Application</Link></p>
        </td>
        <td width="487"> 
          <p>The Henry Quinn Tech Enthusiast Scholarship awards $500 to two East Hampton High School seniors intending pursue a career in computer science or a related field.</p>
          <p>This is for the new group of students hanging out in the library teaching each other how to traverse networks, set up game servers for their friends, and otherwise create their own curriculum.</p>
        </td>
      </tr>
    </table>

    <p id="scroll-about">&nbsp;</p>
    <table width="600" border="1" cellspacing="1" cellpadding="4">
      <tr>
        <td width="88">
          <p ><a className={layoutStyles.menuLink} name="about">About</a></p>
        </td>
        <td width="487"> 
          <p>The Henry Quinn Tech Enthusiast Scholarship awards $500 to two East Hampton High School seniors intending pursue a career in computer science or a related field.</p>
          <p>This is for the new group of students hanging out in the library teaching each other how to traverse networks, set up game servers for their friends, and otherwise create their own curriculum.</p>
        </td>
      </tr>
    </table>

    <p id="scroll-application">&nbsp;</p>
    <table width="600" border="1" cellspacing="1" cellpadding="4">
      <tr>
        <td width="88">
          <p ><a className={layoutStyles.menuLink} name="application">Application</a></p>
        </td>
        <td width="487"> 
          <h3>Henry Quinn Tech Enthusiast Scholarship</h3>
          <p>Through the support and encouragement of some teachers here, I spent my high school years taking independent studies and continuing adult education classes in order to learn how to build websites and fix computers. After graduating college and landing a fun tech job, I want to pay it forward.</p>
          <p>This is for the new group of students messing with computers, setting up game servers for their friends, exploring networks they come across, and learning through experimentation.</p>
          <p>This scholarship awards $500 to two East Hampton High School seniors who intend to major (or otherwise continue their education in) in computer science or a related field of study. Please return your application to the Guidance Office by <strong>March 27th, 2020.</strong></p>
          <u>Please attach a word-processed response with the following information:</u>
          <ol>
            <li>Name</li>
            <li>Where do you plan on going to school? (College name, city and state)</li>
            <li>Short Questions - Just a few sentences for each:
              <p>What do you want to major in?</p>
              <p>Any ideas what you want to do for a career yet?</p>
              <p>Were there any life experiences, interests, or activities that got you interested in working with technology?</p>
            </li>
            <li>Short Essays - No more than 300 words for each:

              <p>In lieu of there not being a computer science program at EHHS, describe a project you’ve worked on to learn (or teach yourself) more about technology? [My personal favorite was figuring out how to hypothetically hide a folder full of networked games on the school network so my graduating class had something to do during study halls!]</p>
            
             <p>Describe a piece of new technology (whether it be an app, a robot, or some kind of gadget) that you want to help create someday.</p>
            </li>
          </ol>
        </td>
      </tr>
    </table>

    <p>&nbsp;</p>
    <table width="600" border="1" cellspacing="1" cellpadding="4">
      <tr>
        <td width="88">Footer
        </td>
        <td width="487">
          <p>Made with <span className={layoutStyles.heart}>&#10084;</span> in New Haven by <a href="https://henryneeds.coffee">Henry Quinn</a>.</p>
          <p>Modeled after my <a href="https://crashthebot.net/FirstSite">first site</a>, built at EHHS.</p>
        </td>
      </tr>
    </table>

    <p>&nbsp;</p>
    <Link to="/#scroll-top">Back To Top</Link>
  </div>
)