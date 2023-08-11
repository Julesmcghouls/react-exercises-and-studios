const RecipeAuthor = () => {
   let authorLink = "https://www.theppk.com/2021/01/earl-gray-chai-pancakes/";
   let authorPhoto = "https://www.theppk.com/wp-content/uploads/2019/09/273381BB-7937-4FEB-936F-FD56AB604987-819x1024.jpg";
   let authorName = "Isa Chandra Moskowitz";

   return (
      <div>
         <img src={authorPhoto} alt = "Isa Moskowitz" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Earl Gray Tea", "All Purpose Flower", "Ground Cinnamon", "Baking Powder", "Soy Milk"];

   return (
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            {ingredients.map((ingredient, index) => (
               <li key={index}>{ingredient}</li>
            ))}
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Earl Gray Chai Pancakes </h1>
            <p>These pancakes have it all! Masala chai spices like ginger, cardamom and black pepper. And although I’ve made chai spiced pancakes before, this time I thought of adding actual tea. Like wow, how brilliant, since “tea” is what chai is. You can use any black tea you like.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.theppk.com/wp-content/uploads/2021/01/ChaiPancake-copy-1.jpg" alt="Earl Gray Chai Pancakes" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}