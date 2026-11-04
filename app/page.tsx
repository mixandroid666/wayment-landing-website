import Image from "next/image";

const screens = [
  { number: "01", title: "The travel feed", description: "Follow journeys, browse nearby or global posts, and share the places that stay with you.", image: "/feed.png", alt: "Waymeet home feed captured from the Android emulator, showing stories and a travel post" },
  { number: "02", title: "Your story, your way", description: "Write a post and add photos, a video, or a location when the moment calls for it.", image: "/compose.png", alt: "Waymeet new post screen captured from the Android emulator" },
  { number: "03", title: "People nearby", description: "Look for other travelers by distance, age, and gender. Results depend on who is around you.", image: "/location.png", alt: "Waymeet nearby people screen captured from the Android emulator, currently showing no nearby people" },
];

function Phone({ src, alt }: { src: string; alt: string }) {
  return <div className="phone"><Image src={src} alt={alt} width={1280} height={2856} sizes="(max-width: 700px) 68vw, 320px" /></div>;
}

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>;
}

export default function Home() {
  return (
    <div id="top" className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Waymeet, back to top"><Image src="/waymeet-logo.png" alt="" width={40} height={40} priority /><span>waymeet<span className="brand-dot">.</span></span></a>
        <nav aria-label="Main navigation" className="desktop-nav"><a href="#about">About</a><a href="#features">Features</a><a href="#inside">Inside the app</a></nav>
        <a className="header-link" href="#inside">See the app <Arrow diagonal /></a>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> YOUR JOURNEY IS BETTER TOGETHER</div>
            <h1 id="hero-title">Go somewhere.<br /><em>Find your people.</em></h1>
            <p className="hero-description">Waymeet brings travelers together through the places they go and the stories they share. Discover people nearby, swap moments from the road, and keep the conversation going.</p>
            <div className="hero-actions"><a className="button button-primary" href="#inside">Explore the app <Arrow diagonal /></a><a className="text-link" href="#about">What is Waymeet? <Arrow /></a></div>
            <div className="hero-note"><span className="note-symbol">✳</span><span>Made for curious people and the places they take each other.</span></div>
          </div>
          <div className="hero-visual" aria-label="Preview of the Waymeet app">
            <div className="hero-orbit hero-orbit-one" /><div className="hero-orbit hero-orbit-two" />
            <span className="hero-spark hero-spark-one">✳</span><span className="hero-spark hero-spark-two">✳</span>
            <div className="hero-phone-wrap"><Phone src="/feed.png" alt="Actual Waymeet feed captured from the Android emulator" /></div>
            <div className="hero-stamp"><span>REAL APP<br />PREVIEW</span><Arrow diagonal /></div>
            <div className="hero-caption">A look inside <span>Waymeet / 2026</span></div>
          </div>
        </section>

        <div className="ticker" aria-label="Waymeet activities"><div className="ticker-inner"><span>FIND YOUR PEOPLE</span><i>✳</i><span>SHARE THE JOURNEY</span><i>✳</i><span>EXPLORE TOGETHER</span><i>✳</i><span>FIND YOUR PEOPLE</span><i>✳</i><span>SHARE THE JOURNEY</span></div></div>

        <section id="about" className="intro-section section-container">
          <div className="section-kicker"><span>01 / THE IDEA</span><span className="section-rule" /></div>
          <div className="intro-grid"><h2>Travel opens the world.<br /><em>People make it memorable.</em></h2><div className="intro-copy"><p>Waymeet is a social space for people who like to get out and go. Share a favorite stop, see where others have been, and connect with travelers around you.</p><p>From a quick story to a new conversation, the app helps turn places into connections.</p></div></div>
        </section>

        <section id="features" className="features-section"><div className="section-container">
          <div className="section-kicker"><span>02 / WHAT YOU CAN DO</span><span className="section-rule" /></div>
          <div className="features-heading"><h2>One app.<br /><em>More ways to connect.</em></h2><p>Everything revolves around real journeys and the people you meet along the way.</p></div>
          <div className="feature-grid">
            <article className="feature-card"><span className="feature-number">01</span><span className="feature-icon">◎</span><h3>Share your moments</h3><p>Post travel updates with photos, video, and optional location details. Add stories for the moments worth sharing now.</p><span className="feature-foot">STORIES · POSTS · MEDIA</span></article>
            <article className="feature-card"><span className="feature-number">02</span><span className="feature-icon">⌁</span><h3>Find nearby travelers</h3><p>Explore people near your current location and narrow your search with distance, age, and gender filters.</p><span className="feature-foot">LOCATION · DISCOVERY</span></article>
            <article className="feature-card"><span className="feature-number">03</span><span className="feature-icon">↗</span><h3>Keep in touch</h3><p>Start a chat, follow profiles, and carry a connection beyond the place where it began.</p><span className="feature-foot">CHAT · PROFILES</span></article>
          </div>
        </div></section>

        <section id="inside" className="screens-section"><div className="section-container">
          <div className="section-kicker section-kicker-light"><span>03 / INSIDE WAYMEET</span><span className="section-rule" /></div>
          <div className="screens-heading"><div><h2>See the journey<br /><em>for yourself.</em></h2><p>Actual screens captured from the running Android app.</p></div><div className="screens-mark" aria-hidden="true">✳</div></div>
          <div className="screen-grid">{screens.map((screen) => <article className="screen-card" key={screen.number}><div className="screen-card-top"><span>{screen.number} / 03</span><span>WAYMEET APP ↗</span></div><div className="screen-image"><Phone src={screen.image} alt={screen.alt} /></div><div className="screen-card-copy"><h3>{screen.title}</h3><p>{screen.description}</p></div></article>)}</div>
          <p className="screens-disclaimer">Preview content and nearby results reflect the emulator account at capture time.</p>
        </div></section>

        <section className="closing-section section-container"><span className="closing-kicker">THE NEXT STORY STARTS SOMEWHERE</span><h2>Go out. Look around.<br /><em>Meet along the way.</em></h2><a href="#top" className="button button-primary">Back to the start <Arrow diagonal /></a><div className="closing-asterisk" aria-hidden="true">✳</div></section>
      </main>
      <footer className="site-footer"><a className="brand" href="#top"><Image src="/waymeet-logo.png" alt="" width={34} height={34} /><span>waymeet<span className="brand-dot">.</span></span></a><p>Go places. Find people.</p><span>© {new Date().getFullYear()} Waymeet</span></footer>
    </div>
  );
}
