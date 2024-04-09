export default function Navbar({ categorias, categoriaSelecionada, handleCategoriaSelecionada }: any) {
    return (
        <nav className="bg-white border-gray-200 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Byteshop</span>
                </a>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg bg-gray-50
                    md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0
                     ">
                        {categorias.map((categoria: string, index: any) => (
                            <li key={index}>
                                <button
                                    type="button"
                                    className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
                                    md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black
                                    md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white 
                                    md:dark:hover:bg-transparent ${categoria === categoriaSelecionada ? 'bg-blue-700 text-white' : ''
                                        }`}
                                    onClick={() => handleCategoriaSelecionada(categoria)}
                                >
                                    {categoria}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
