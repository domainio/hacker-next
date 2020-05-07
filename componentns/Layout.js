import Link from 'next/link';
import Head from 'next/head';

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="container">
        <nav>
          <Link href="/">
            <a>
              <span className="main-title">Hacker Next</span>
            </a>
          </Link>
        </nav>
        {children}
      </div>
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          background: #f6f6ef;
        }
        nav {
          background: #f60;
          padding: 1em;
        }
        nav > * {
          display: inline-bloack;
          color: black;
        }
        nav .main-title {
          font-weight: bold;
        }
      `}</style>
      <style global jsx>{`
        body {
          background: white;
          font-family: Veranda, Geneva, sans-serif;
        }
      `}</style>
    </div>
  )
}

export default Layout;