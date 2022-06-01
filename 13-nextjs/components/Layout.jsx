import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children, title, currentPage }) {
  return (
    <div className="flex flex-col w-screen min-h-screen bg-gray-200">
      <Head>
        <title>Homepage</title>
        <meta name="description" content="App for training with nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex items-center w-full shadow-md mb-8 px-8 py-6">
        <Image src="/logo.webp" alt="Logo photo" width={100} height={100} />
        <nav className="ml-8">
          <ul className="flex">
            <li className="mr-6">
              <Link href="/">
                <a
                  href="#"
                  className={currentPage == "home" ? "font-bold" : undefined}
                >
                  Acceuil
                </a>
              </Link>
            </li>
            <li className={currentPage == "todos" ? "font-bold" : undefined}>
              <Link href="/todos">
                <a href="#">Todos</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container p-8 mx-auto">{children}</main>
    </div>
  );
}
