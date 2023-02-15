import Link from "next/link";
import { GithubProfile } from "next-auth/providers/github";
import { FaUserAlt, FaBookOpen } from "react-icons/fa";
import { signOut, useSession, signIn, getSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const { data: session } = useSession();

  const logout = async () => {
    await signOut();
    await window.location.assign("/");
  };

  const loginAndlogout = (session: GithubProfile) => {
    return (
      <>
        {session && (
          <>
            <Link href="/repoList" className="ml-5 inline-flex items-center text-sm font-medium hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
              <FaBookOpen className="w-3 h-4 mr-2" />
              Repository
            </Link>
            <button
              onClick={logout}
              className="ml-5 inline-flex items-center text-sm font-medium hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <FaUserAlt className="w-3 h-4 mr-2" />
              Logout
            </button>
          </>
        )}
        {!session && (
          <button
            onClick={async () => await signIn("github")}
            className="ml-5 inline-flex items-center text-sm font-medium hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <FaUserAlt className="w-3 h-4 mr-2" />
            Login
          </button>
        )}
      </>
    );
  };

  return (
    <header className="p-5 w-full">
      <nav
        className="flex px-5 py-3 text-gray-100 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 justify-between"
        aria-label="Breadcrumb"
      >
        <Link href="/" className="dark:text-gray-400 dark:hover:text-white">
          Repo Viewer
        </Link>
        <ol className="flex justify-between">
          <li className="inline-flex mr-5">
            {loginAndlogout(session)}
          </li>
          <li className="inline-flex"></li>
        </ol>
      </nav>
    </header>
  );
}
