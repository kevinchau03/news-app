import { Bars3Icon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";

function Header() {
    return (
        <header>
            <div className="grid grid-cols-3 p-10 items-center">
                <Bars3Icon className="h-8 w-8 cursor-pointer" />
                <Link href='/' prefetch={false}>
                    <h1 className="font-bold text-6xl text-center"> 
                        <span className="underline decoration-6 decoration-blue-400">
                            THE DAILY PLANET
                        </span> 
                    </h1>
                </Link>
                <div className="flex items-center justify-end space-x-2">
                <a href="https://github.com/kevinchau03/news-app" target="_blank" className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
                    Github Repo
                </a>
                </div>
            </div>
            <NavLinks/>
            <SearchBar />
        </header>
    );
}

export default Header;