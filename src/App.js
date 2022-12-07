import Directory from "./components/directory/directory.component";

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
    <Directory categories={categories} />

    // .map allows you to traverse through the object and display the properties and it's values in the UI with minimal code
  );
};

export default App;
