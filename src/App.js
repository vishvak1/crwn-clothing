const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "Womens",
    },
    {
      id: 5,
      title: "Mens",
    },
  ];
  // Creating a javascript object to serve as a centralized singular source of data that can be referenced from anywhere in the file.
  // This way we don't have to hardcode the data and also any change made to the 'categories' object will be reflected everywhere it's been referred to.

  return (
    <div className="categories-container">
      <div className="category-container">
        {/* <img/> */}
        <div className="category-body-container">
          <h2>Hats</h2>
          <p>Shop now</p>
        </div>
      </div>
      <div className="category-container">
        {/* <img/> */}
        <div className="category-body-container">
          <h2>Jackets</h2>
          <p>Shop now</p>
        </div>
      </div>
      <div className="category-container">
        {/* <img/> */}
        <div className="category-body-container">
          <h2>Sneakers</h2>
          <p>Shop now</p>
        </div>
      </div>
      <div className="category-container">
        {/* <img/> */}
        <div className="category-body-container">
          <h2>Womens</h2>
          <p>Shop now</p>
        </div>
      </div>
      <div className="category-container">
        {/* <img/> */}
        <div className="category-body-container">
          <h2>Mens</h2>
          <p>Shop now</p>
        </div>
      </div>
    </div>
  );
};

export default App;
