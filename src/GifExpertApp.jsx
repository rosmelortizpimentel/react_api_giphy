import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory.toUpperCase(), ...categories]);

    };

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />
            {
                categories.map((category) => {
                    return <GifGrid
                        key={category}
                        category={category}
                    />
                })
            }
        </>
    );
};