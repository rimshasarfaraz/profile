window.siteContent = {
  text: {
    pageTitle: "Rimsha Sarfaraz",
    name: "Rimsha Sarfaraz",
    pronunciation: "[rim-sha sir-fur-aaz]",
    aboutTab: "about",
    publicationsTab: "publications",
    talksTab: "talks",
    cvTab: "cv",
    aboutHeading: "About",
    email: "rimsha.sarfaraz@cispa.de",
    scholar: "Google Scholar",
    linkedIn: "LinkedIn",
    honorsHeading: "Selected Awards",
    cvHeading: "Curriculum vitae",
    publicationsHeading: "Publications",
    talkTitle: "ACM CHI 2025 Paper Presentation",
    publicationYear: "2025",
    publicationVenue: "ACM CHI 2025",
    publicationAward: "Honourable Mention",
    publicationTitle:
      "Understanding the Security Advice Mechanisms of Low Socioeconomic Pakistanis",
    publicationPaper: "Paper",
    publicationTalk: "Talk",
    footer: "© 2026 Rimsha Sarfaraz"
  },
  html: {
    // Keep inline formatting and links in these rich-text values.
    publicationAuthors:
      'Sumair Ijaz Hashmi*, <u>Rimsha Sarfaraz</u>*, Lea Gröber, Mobin Javed, Katharina Krombholz. <span class="pub-contribution-note">(* denotes equal contribution)</span>',
    biographyCurrent: `I am a <strong>researcher</strong> at
      <a href="https://cispa.de/en" target="_blank" rel="noopener">CISPA Helmholtz Center for Information Security</a>. I am mentored by
      <a href="https://www.lgroeber.de/" target="_blank" rel="noopener">Dr. Lea Gröber</a>.
      At CISPA my research focus is on the challenges faced by individuals from underserved communities, who are
      often overlooked in mainstream technology. I study what makes digital tools difficult for them to use securely
      and independently. I am also pursuing a Computer Science Masters at <a href="https://www.uni-saarland.de/en/home.html" target="_blank" rel="noopener">Saarland University</a> <em>(Fully Funded by CISPA)</em>.`,
    biographyPrevious: `Previously, I earned my BSc. in Computer Science from
      <a href="https://www.lums.edu.pk/" target="_blank" rel="noopener">Lahore University of Management Sciences (LUMS)</a>
      where I was advised by <a href="https://www.ihsanqazi.com/home" target="_blank" rel="noopener">Dr. Ihsan Ayyub Qazi</a> & <a href="https://sites.google.com/view/ayeshaali/home?authuser=0" target="_blank" rel="noopener">Dr. Ayesha Ali</a>.
      I worked on META funded projects focused on digital literacy, particularly addressing misinformation and improving
      people's ability to discern the truth. I also worked on low socioeconomic communities' experiences with technology, including their security and privacy challenges. I co-authored a <a href="https://dl.acm.org/doi/10.1145/3706598.3713297" target="_blank" rel="noopener">CHI 2025 paper</a> on the security advice mechanisms of low socioeconomic Pakistanis, which received an <em>Honourable Mention</em> award (top 5% papers).`,
    biographyResearch: `<p class="home-bio">
      My research sits broadly within <em>human-centred security, privacy, and online safety</em>. I want to study technology-facilitated harms and how they affect people's experiences online and offline.
      I am also interested in the role of <em>technology policy and regulations</em> in preventing and responding to such harms. Across these areas, I am particularly interested in how <em>gender and sociocultural context</em> shape people's experiences of technology.
    </p>`
  },
  lists: {
    awards: [
      "Best Paper Honorable Mention, ACM CHI 2025",
      "SIGCHI Gary Marsden Travel Award 2025",
      "LUMS Students as Co-Researchers Grant 2023"
    ]
  },
  attributes: {
    description: {
      selector: 'meta[name="description"]',
      name: "content",
      value: "Personal portfolio template for academic, research, and design work."
    },
    emailHref: { selector: ".email-row a", name: "href", contentKey: "email", prefix: "mailto:" },
    copyEmailLabel: {
      selector: ".copy-email",
      name: "aria-label",
      value: "Copy email address"
    },
    copyEmailTitle: {
      selector: ".copy-email",
      name: "title",
      value: "Copy email address"
    },
    cvTitle: {
      selector: ".cv-frame-wrap iframe",
      name: "title",
      value: "Curriculum vitae preview"
    }
  }
};
