import Button from '../Button/Button.tsx';
import { StarIcon } from '../svgs/index.tsx';
import { ProductCardProps } from './types.ts';

const ProductCard: React.FC<ProductCardProps> = () => {
    return (
        <div className="bg-gray-400">
            <img
                className="w-full"
                src="/product-image-placeholder.png"
                alt=""
            />
            <div className="px-2 py-3">
                <h1 className="text-sm">Lorem Ipsum is simply simply simply</h1>

                <div>
                    {new Array(5).fill('').map((_) => (
                        <StarIcon />
                    ))}
                    <span className="ml-1 text-[10px]">(100 Reviews)</span>
                </div>
                <p className="mb-3 text-xs">500 gm</p>

                <div>
                    <span>৳100</span>
                    <span className="ml-[6px] text-xs line-through">৳100</span>
                </div>
            </div>
            <Button
                onClick={() => {}}
                icon={<span>+ Add To Bag</span>}
                style={{
                    backgroundColor: 'blue',
                    width: '100%',
                    padding: '6px 0',
                }}
            />
        </div>
    );
};

export default ProductCard;
