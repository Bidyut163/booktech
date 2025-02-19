import { useEffect, useState } from 'react';
import { ProductCard } from '../../../components';
import { getFeaturedList } from '../../../services';
import { toast } from 'react-toastify';

export const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const data = await getFeaturedList();
                setProducts(data);
            } catch (error) {
                toast.error(error.message, {
                    closeButton: true,
                    position: 'bottom-center',
                });
            }
        }

        fetchProducts();
    }, []);

    return (
        <section className="my-20">
            <h1 className="text-2xl text-center font-semibold dark:text-slate-100">
                Featured eBooks
            </h1>
            {/* <h1 class="mb-4 text-center text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl">
                <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                    Featured eBooks
                </span>
            </h1> */}
            <hr className="w-32 h-1 mx-auto mt-2 bg-gray-400 border-0 rounded-sm md:mb-10 dark:bg-gray-300" />
            <div className="flex flex-wrap justify-center lg:flex-row">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};
