import CategoryItem from "./components/category-item/category-item.component";
import "./components/category-item/scss/categories.styles.scss";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];
  // Creating a javascript object to serve as a centralized singular source of data that can be referenced from anywhere in the file.
  // This way we don't have to hardcode the data and also any change made to the 'categories' object will be reflected everywhere it's been referred to.

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>

    // .map allows you to traverse through the object and display the properties and it's values in the UI with minimal code
  );
};

export default App;
