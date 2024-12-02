import categories from '../../constants/categories';

const Categories = () => {
    return (
        <nav className="cursor-pointer text-sm capitalize">
            {categories.map((category: any) => (
                <details className="mb-2">
                    <summary className="mb-1">
                        <div className="inline-flex gap-4">
                            <span className="w-[14px]">{category.icon}</span>
                            <span>{category.name}</span>
                        </div>
                    </summary>

                    {category.subCategories.map((subCategory: any) => (
                        <details className="mb-1 ml-4">
                            <summary className="mb-1">
                                {subCategory.name}
                            </summary>

                            <ul>
                                {subCategory.subCategories.map(
                                    (subCategory: any) => (
                                        <li className="ml-8">
                                            {subCategory.name}
                                        </li>
                                    )
                                )}
                            </ul>
                        </details>
                    ))}
                </details>
            ))}
        </nav>
    );
};

export default Categories;
