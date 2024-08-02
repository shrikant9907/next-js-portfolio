import Link from "next/link";

const Header = () => {
    const Menus = [
        {
            id: "home-page",
            label: "Home",
            link: "/",
        },
        {
            id: "about-page",
            label: "About",
            link: "/about",
        },
        {
            id: "services-page",
            label: "Services",
            link: "/services",
        },
        {
            id: "training-page",
            label: "Training Plans",
            link: "/training-plans",
        },
        {
            id: "projects-page",
            label: "Projects and Work",
            link: "/work",
        },
        {
            id: "blog-page",
            label: "Blog",
            link: "/recent-blogs",
        },
    ]

    return (
        <header className="fixed top-0 text-center w-full">
            <nav className="rounded-t-none bg-white/10 backdrop-blur-sm max-w-4xl rounded-2xl mx-auto">
                <ul className="flex justify-center items-center h-14">
                    {Menus.map((menu) => {
                        return <li className="px-4 py-2 leading-1 text-sm uppercase hover:bg-blue-800 rounded-xl transition-all ease-in-out" key={`menu_$menu.id`}>
                            <Link href={menu.link}>{menu.label}</Link>
                        </li>
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default Header
