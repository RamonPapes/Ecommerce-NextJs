export default function Contact() {
    return (
        <section className="">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md h-screen">
                <div>
                    
                </div>
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">Have any questions? We are here to help!</p>
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@email.com" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 ">Subject</label>
                        <textarea id="subject" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="The subject"></textarea>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
                        <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a comment..." required></textarea>
                    </div>
                    <button type="submit" className="text-white bg-blue-900 hover:bg-blue-600 transition-colors font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        onClick={() => {
                            
                        }}>
                        Send message
                    </button>
                </form>
            </div>
        </section>
    )
}