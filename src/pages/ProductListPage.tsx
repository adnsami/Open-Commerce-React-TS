import ProductCard from '../ui/ProductCard';

const ProductListPage = () => {
    return (
        <div className="grid grid-cols-5 gap-8">
            {new Array(10).fill('').map(() => (
                <ProductCard onClick={() => {}} />
            ))}
        </div>
    );
};

export default ProductListPage;
