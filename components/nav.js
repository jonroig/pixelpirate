import Link from 'next/link';

const Nav = () => {
  return (
    <nav className='pixelpiratenav'>
      <div className="home">
        <Link href="/">
          <a>PixelPirate</a>
        </Link>
      </div>
      <br/>
      <div className="links">
        <Link href="/pixelblocks">
          <a>All</a>
        </Link>
        |
        <Link href="/active">
          <a>Active</a>
        </Link>
        |
        <Link href="/faq">
          <a>FAQ</a>
        </Link>
        |
        <Link href="/status">
          <a>Status</a>
        </Link>
        |
        <Link href="/mdhpaas">
          <a>MDHPAAS</a>
        </Link>
        |
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
      
      
    </nav>
  )
}

export default Nav;
