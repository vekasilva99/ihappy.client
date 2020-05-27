import React from 'react'
import Link from 'next/link';

const Navbar = () => {

    return (
        <nav className="absolute left-0 top-0 z-40 flex items-center justify-between flex-wrap py-4 px-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-bold text-xl tracking-tight">LOOGO</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-purple-500 hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="lg:flex-grow">
                    <Link href="/">
                        <span className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-purple-500 mr-4"> Inicio </span>
                    </Link>
                    <Link href="/">
                        <span className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-purple-500 mr-4"> Nosotros </span>
                    </Link>
                    <Link href="/">
                        <span className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-purple-500 mr-4"> Ayuda </span>
                    </Link>

                </div>
            </div>
        </nav>
    )
}

export default Navbar