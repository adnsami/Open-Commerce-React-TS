const categories = [
    {
        name: 'food',
        icon: '🍒',
        subCategories: [
            {
                name: 'meat & fish',
                subCategories: [
                    {
                        name: 'chicken & poultry',
                        path: '/chicken-poultry',
                    },
                    {
                        name: 'premium perishables',
                        path: '/premium-perishables',
                    },
                    {
                        name: 'frozen fish',
                        path: '/premium-perishables',
                    },
                ],
            },
            {
                name: 'cooking',
                subCategories: [
                    {
                        name: 'spices',
                        path: '/spices',
                    },
                    {
                        name: 'salt & sugar',
                        path: '/salt-sugar',
                    },
                    {
                        name: 'rice',
                        path: '/rice',
                    },
                ],
            },
        ],
    },

    {
        name: 'personal care',
        icon: '💆🏻‍♀️',
        subCategories: [
            {
                name: "women's care",
                subCategories: [
                    {
                        name: "women's soaps",
                        path: '/womens-soaps',
                    },
                    {
                        name: 'hair care',
                        path: '/hair-care',
                    },
                ],
            },
        ],
    },
];

export default categories;
