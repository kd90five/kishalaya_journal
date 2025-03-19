export default function Home() {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <h1>Kishalaya's Journal</h1>
        <p>Laying out all the possibilities.</p>
      </header>

      {/* Main Content Section */}
      <main className="main">
        <section className="hero">
          <h2>About Me</h2>
          <p>
            This website was created under just an hour using Next.js and with the help of Deepseek and no prior knowledge or experience of the framework.
          </p>
          <button className="button">Learn More</button>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 Kishalaya's Next.js Website. All rights reserved.</p>
      </footer>
    </div>
  );
}