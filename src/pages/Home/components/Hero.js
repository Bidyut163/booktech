import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
            <div className="text my-5 mx-2">
                <h1 className="text-5xl font-bold">
                    Extraordinary readers start with us
                </h1>
                <p className="text-2xl my-7 px-1 dark:text-slate-300">
                    BookTech is the world's most popular and authoritative
                    source for computer science ebooks. Find ratings and access
                    to the newest books digitally.
                </p>
                <Link
                    to="/products"
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Explore eBooks
                </Link>
            </div>
            <div className="visual my-5 lg:max-w-xl">
                <img
                    className="rounded-lg max-h-full"
                    src="https://images.unsplash.com/photo-1629757509637-7c99379d6d26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="BookTech Hero Section"
                />
            </div>
        </section>
    );
};
