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
            id: "blog-page",
            label: "Blog",
            link: "https://reacttonext.com/",
        },
        {
            id: "youtube-page",
            label: "Youtube",
            link: "https://youtube.com/@reacttonext"
        }
    ]

    return (
        <header className="fixed top-0 text-center w-full">
            <nav className="rounded-t-none border backdrop-blur-sm max-w-4xl rounded-2xl mx-auto">
                <ul className="flex justify-center items-center min-h-14 flex-wrap">
                    {Menus.map((menu) => {
                        return <li key={`menu_$menu.id`}>
                            <Link className="px-4 py-2 leading-1 text-sm uppercase hover:bg-blue-200 rounded-xl transition-all ease-in-out"  href={menu.link}>{menu.label}</Link>
                        </li>
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default Header
