import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";


const Category = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('Category.json')
        .then(res=> res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2>Our Products {categories.length}</h2>
            {
                categories.map(category => <CategoryCard
                    key={category._id}
                    category={category}
               >
                </CategoryCard>)
            }
        </div>
    );
};

export default Category;