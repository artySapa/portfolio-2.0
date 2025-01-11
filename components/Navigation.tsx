import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="fixed top-20 left-0 w-full flex justify-center items-center px-8 py-4 bg-background z-50">
      <div className="flex items-center gap-64">
        {/* Left Side */}
        <div>
          <Link href="/">
            <h1 className="text-4xl font-bold tracking-tight">👨‍💻 arty</h1>
          </Link>
        </div>

        {/* Right Side */}
        <ul className="flex gap-8 text-sm text-red-500">
          <li>
            <Link
              href="/work"
              className="hover:text-red-400 transition-colors"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="hover:text-red-400 transition-colors"
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
} 