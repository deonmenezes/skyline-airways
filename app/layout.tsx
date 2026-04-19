import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Skyline Airways — Est. 1968",
  description: "Skyline Airways"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="announce">Member of the Global Star Network · Operating 187 destinations worldwide</div>
        <header className="top">
          <Link href="/" className="brand">
            <span className="crest">SA</span>
            <span>
              Skyline Airways
              <span className="brand-sub">Est. 1968</span>
            </span>
          </Link>
          <nav>
            <Link href="/search">Destinations</Link>
            <Link href="/comments">SkyClub</Link>
            <Link href="/tools">Travel Help</Link>
            <Link href="/login" className="cta">Sign In</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <div className="footer-inner">
            <div>
              <h4>Skyline Airways</h4>
              <p style={{ margin: 0, color: "#5a7486", fontSize: "0.85rem" }}>
                Serving clients since 1968.
              </p>
            </div>
            <div>
              <h4>Destinations</h4>
              <Link href="/search">Overview</Link>
              <Link href="/search">Products</Link>
              <Link href="/search">Pricing</Link>
            </div>
            <div>
              <h4>Company</h4>
              <Link href="/comments">SkyClub</Link>
              <Link href="/tools">Travel Help</Link>
              <Link href="/bounty">Security</Link>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="/.well-known/security.txt">security.txt</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
          <div className="legal">
            <span>© {new Date().getFullYear()} Skyline Airways. All rights reserved.</span>
            <span>Est. 1968.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
