import { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button
                onClick={toggleSidebar}
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg 2xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-expanded={isOpen ? "true" : "false"}
                data-drawer-target="default-sidebar"
                data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar"
                type="button"
            >
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>
            <aside
                id="default-sidebar"
                className={`fixed top-0 left-0 w-64 h-screen transition-transform ${isOpen ? "" : "-translate-x-full 2xl:translate-x-0"}`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-zinc-900">
                    <ul className="space-y-2 font-medium">
                        <li onClick={toggleSidebar} className='2xl:hidden'>
                            <Icon icon="mdi:arrow-back" style={{ color: 'white', fontSize: '32px' }}></Icon>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <Icon icon="mdi:home" style={{ fontSize: '24px' }}></Icon>
                                <span className="ms-3">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="/loja" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <Icon icon="mdi:shopping" style={{ fontSize: '24px' }}></Icon>
                                <span className="ms-3">Loja</span>
                            </a>
                        </li>
                        <li>
                            <a href="/contato" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <Icon icon="mdi:contact" style={{ fontSize: '24px' }}></Icon>
                                <span className="ms-3">Contato</span>
                            </a>
                        </li>
                        <li>
                            <a href="/contato" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <Icon icon="mdi:user-group" style={{ fontSize: '24px' }}></Icon>
                                <span className="ms-3">Sobre nós</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}
