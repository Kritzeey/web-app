import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex-col sm:flex-row sm:h-20 px-32 top-0 font-bold text-3xl justify-between items-center z-1 absolute w-screen flex h-24 py-2 bg-[#11111b]">
            <Link href={"/"}>
                📝 Todo App
            </Link>
            <button className="font-medium border-2 border-[#cdd6f4] size-8 flex items-center justify-center rounded-sm cursor-pointer">
                +
            </button>
        </nav>
    );
}