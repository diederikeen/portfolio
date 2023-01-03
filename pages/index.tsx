import styles from '../styles/Home.module.css'
import {useState} from "react";

const Toaster = () => (
  <div className={styles.toaster}>
    For your your convenience I successfully copied my email to your clipboard. ✅
  </div>
)

const Anchor = ({
    href,
    target = '_blank',
    children
  }:{
    href: string;
    target?: "_blank" | "_self";
    children: JSX.Element | string}) => (
      <a href={href} target={target} rel="noreferrer noopener">{children}</a>
)

export default function Home() {
  const [isToasterVisible, setIsToasterVisible] = useState(false);

  function handleButtonClick() {
    navigator.clipboard.writeText('diederikeen@gmail.com');
    setIsToasterVisible(true);

    setTimeout(() => setIsToasterVisible(false), 5000);
  }

  return (
    <>
      {isToasterVisible && <Toaster/>}
      <header className={styles.sectionHomeHeader}>
        <h1 className={styles.sectionTitle}>Well, hello there.</h1>
        <p>
          My name is Diederik Eenschooten and I am a Front-end developer based in the Netherlands,
          currently working as a consultant at HeadFWD.
        </p>

        <p>
          I'm a developer with a passion for design and UX. I enjoy bringing concepts together and give the user the best
          experience possible, to make your product an success.
        </p>

        <p>
          If you're interested, you can scroll down to my most recent work experience. If you have any questions,
          or wondering if I'm available, you can always drop me a message 🤞.
        </p>

        <button className={styles.button} onClick={handleButtonClick}
        >
          Send email
        </button>

        <img alt="Diederik Eenschooten profile photo" className={styles.avatar} src={"/me.jpg"}/>
      </header>

      <section className={styles.sectionExperience}>
        <h2 className={styles.sectionTitle}>Experience</h2>

        <p>
          Here are my most recent work experiences, I think are relevant for you. But then again, if you have
          any other questions, you can reach out to me.
        </p>


        <article className={styles.workExperience}>
          <header>
            <h2>HeadFWD</h2>
            <time>May 2022 — Current</time>
          </header>
          <p>
            As part of HeadFWD I get projects from a wide range of projects. I'll describe the projects I've done
            down below.
          </p>

          <ul className={styles.workExperienceList}>
            <li>
              <h3>Brunel (current)</h3>
              <p>Brunel is a huge job platform, located with offices all over the world. At Brunel we're currently building
                a completely new intranet for users that have applied for jobs through Brunel. In there they'll be able
                to track all of their tasks like registering hours, meetings etc.
              </p>

              <ul className={styles.workExperienceStack}>
                <li>Typescript</li>
                <li>Webcomponents</li>
                <li>Lerna</li>
                <li>NextJS</li>
                <li>React Query</li>
                <li>JSS</li>
                <li>SiteCore</li>
              </ul>
            </li>
            <li>
              <h3>Leenbakker</h3>
              <p>Leenbakker is one of the biggest furniture retailers in the Netherlands. After they've acquired a different
                company it was time to improve the website. As part of the team I was responsible for fine tuning the website. I've implemented
                analytics, resolved major bugs and was able to improve the performance.
              </p>

              <ul className={styles.workExperienceStack}>
                <li>Typescript</li>
                <li>NextJS</li>
                <li>React Query</li>
                <li>Google Analytics</li>
              </ul>
            </li>
          </ul>
        </article>

        <article className={styles.workExperience}>
          <header>
            <h2>Stream Elements</h2>
            <time>April 2021 — May 2022</time>
          </header>
          <p>
            Stream Elements is a company that wants to bring fame and fortune to streamers. They have a wide range of tools
            to help up and coming streamers to give them exactly that
          </p>

          <p>
            During my time at StreamElements I worked on the Youtube product. Creating an dashboard with all the stats you
            want to see as a streamer. My role was to create new features like Dynamic Thumbnails, bulk editing / publishing and
            add integrations for the dynamic video descriptions.
          </p>

          <ul className={styles.workExperienceStack}>
            <li>CRA</li>
            <li>Typescript</li>
            <li>RecoilJS</li>
            <li>GraphQL</li>
          </ul>

        </article>

        <article className={styles.workExperience}>
          <header>
            <h2>Secfi</h2>
            <time>December 2019 — May April</time>
          </header>
          <p>
            Secfi's focus is on educating start up employees about their stock options. Through their dashboard they educate
            the user on exit strategies, tax information and clean profit.
          </p>

          <p>
            Within Secfi I was part of team Ramen. We were constantly refining  our on-boarding process so new users can have the best experience from the very start.
            In addition, we create intuitive tools that ensure our clients have the necessary information to make decisions about their equity.
          </p>

          <ul className={styles.workExperienceStack}>
            <li>CRA</li>
            <li>Typescript</li>
            <li>mobx</li>
            <li>GraphQL</li>
          </ul>

        </article>
      </section>

      <section className={styles.sectionAbout}>
        <h2 className={styles.sectionTitle}>Something about me...</h2>
        <p>So you might want to get to know me a bit more personal huh.. I'm a 29 year old front-end developer. Way way way back,
        I studied interaction design, but through my internships I found out I had more passion for development.
        </p>

        <h3>Some professional background</h3>

        <p>
          During my agency career I've had the honor (and they had the honor to work with me) to work with some amazing brands.
          For example <Anchor href={"https://www.makelaarsland.nl"}>Makelaarsland</Anchor>, <Anchor href={"https://www.green-village.nl"}>Green Village</Anchor> and <Anchor href={"https://www.emerce.nl"}>Emerce</Anchor>.
        </p>

        <p>
          Now a days I work mostly in <strong>React</strong> (NextJS) and <strong>CSS modules</strong>. I also do CSS in JS, fetch data in anyway you want (GraphQL, REST),
          but honestly a simple wrapper around fetch will do for me.
        </p>

        <p>
          Besides Front-end I also play around with some back-end and stuff, <strong>NodeJS</strong> mostly, I am after all, a Javascript Developer. At
          this moment creating an app to keep track of my fitness journey. Making this in <strong>NextJS</strong>, <strong>Postgress</strong>, <strong>Prisma</strong> and <strong>Firebase</strong>.
          Interested in checking it out once it's done? Just drop me an email and I'll make sure you'll be one of the beta testers. 👍
        </p>

        <h3>But, what do I do in my free time?</h3>

        <p>
          When I do have some free time, you can probably find me at the gym. You know, all that sitting and stuff,
          its nice to get some movement in as well. Besides that I have a huge passion for watches, vintage  or new, doesn't matter to me, but
          it combines two hobbies of mine, design and development.
        </p>

        <p>
          I do have a race bike, which I probably could use more, but it's still beautiful to look at I guess. I run, not for a specific reason, but it is
          a nice way to clear my head and stay fit. Then there is my little dog Ziggy, who needs a shit ton of attention so that keeps me busy during the day as well.
        </p>
      </section>

      <section className={styles.sectionConnect}>
        <h2 className={styles.sectionTitle}>Ha, you're still here</h2>
        <p>While you're still here, if you're interested I'll copy and paste my connect button here.</p>
        <p>
          We can also connect on social media. Here is my <Anchor href="https://www.linkedin.com/in/diederikeenschooten/">LinkedIn</Anchor> and here is my <Anchor href="https://github.com/diederikeen">Github</Anchor>.
          It won't have to much activity as the projects I work on are private repos. If you wanna stalk my private life, you can
          checkout my <Anchor href="https://instagram.com/diederikeen">Instagram</Anchor>.
        </p>

        <button className={styles.button} onClick={handleButtonClick}
        >
          Send email (again)
        </button>
      </section>
    </>

  )
}
