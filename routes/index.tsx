import { App } from "../components/App.tsx";
import { DiscordIcon } from "../components/DiscordIcon.tsx";
import { EmailIcon } from "../components/EmailIcon.tsx";
import { GitHubIcon } from "../components/GitHubIcon.tsx";
import { InstagramIcon } from "../components/InstagramIcon.tsx";
import { Link } from "../components/Link.tsx";
import { LinkedInIcon } from "../components/LinkedInIcon.tsx";
import { TwitterIcon } from "../components/TwitterIcon.tsx";
import { socials } from "../utils/social.ts";

export default function Home() {
  return (
    <App
      title="Hey, I'm Dj"
      description="Software Developer"
    >
      <div class="main-card">
        <div class="profile">
          <img
            src="https://avatars.githubusercontent.com/u/43033058?v=4"
            alt="Profile"
          />
          <p class="profile-name">Dj</p>
          <p class="profile-work">Software Developer @ nStudio</p>
          <p class="profile-text-section">
            Enjoys learning new things and building cool stuff.
          </p>
          <p class="profile-text-section">
            Proficient in JavaScript/TypeScript (Web, Deno, Node), and Rust.
            Also familiar with Python, C#, C/C++, Objective-C, and Swift.
            Experience with database systems such as MySQL, PostgreSQL, SQLite3,
            and Redis. Familiar with React, Fresh, Express.js, SwiftUI, and
            more. Constantly exploring and learning about new technologies.
          </p>
          <p class="profile-text-section">
            A lot of my work is open-source and available on my GitHub. That
            said, I maintain several open-source libraries there.
          </p>
        </div>
        <div class="links">
          <Link
            {...socials.github}
          >
            <GitHubIcon />
          </Link>
          <Link
            {...socials.linkedin}
          >
            <LinkedInIcon />
          </Link>
          <Link
            {...socials.twitter}
          >
            <TwitterIcon />
          </Link>
          <Link
            {...socials.discord}
          >
            <DiscordIcon />
          </Link>
          <Link
            {...socials.email}
          >
            <EmailIcon />
          </Link>
          <Link
            {...socials.instagram}
          >
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </App>
  );
}
