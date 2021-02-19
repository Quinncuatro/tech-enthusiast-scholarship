import React from "react"

export default () => (
  <div>
    <form name="apply" method="POST" action="/apply-thanks/" netlify-honeypot="bot-field" data-netlify="true">
      <input type="hidden" name="form-name" value="apply" />
      <div hidden>
        <label>
          What's your favorite movie and why is it rampart?{' '}
          <input name="bot-field" />
        </label>
      </div>
      <div>
        <ol>
          <li>Your Name</li>
          <p>
            <input type="text" name="name" required />
          </p>

          <li>Where do you plan on going to school? (College name, city and state)</li>
          <p>
            <input type="text" name="school" required />
          </p>

          <li>Short Questions - Just a few sentences for each:
            <p>a.) What do you want to major in?</p>
            <p>
              <input type="text" name="major" required />
            </p>
            <p>b.) Any ideas what you want to do for a career yet?</p>
            <p>
              <textarea rows="3" cols="55" name="career" required></textarea>
            </p>
            <p>c.) Were there any life experiences, interests, or activities that got you interested in working with technology?</p>
            <p>
              <textarea rows="3" cols="55" name="tech-spark" required></textarea>
            </p>
          </li>

          <li>Short Essays - No more than like 300 words for each:
            <p>a.) In lieu of there not being a computer science program at EHHS, describe a project you’ve worked on to learn (or teach yourself) more about technology? [My personal favorite was figuring out how to hypothetically hide a folder full of networked games on the school network so my graduating class had something to do during study halls!</p>
            <p>
              <textarea rows="3" cols="55" name="project" required></textarea>
            </p>
            <p>b.) Describe a piece of new technology (whether it be an app, a robot, or some kind of gadget) that you want to help create someday.</p>
            <p>
              <textarea rows="3" cols="55" name="dream-tech" required></textarea>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </li>
        </ol>
      </div>
    </form>
  </div>
);