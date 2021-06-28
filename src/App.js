import Market from "./components/Market/Market";
import FilterCategory from "./components/FilterCategory/FilterCategory";
import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [allItems, setAllItems] = useState([
    {
      id: 1,
      name: "Ambrosia",
      category: "Apples",
      price: "50.00",
      pricePer: "Case",
      img: "https://lh3.googleusercontent.com/Bl7owQ6fZt8jvJY8NGub7VxtmNtrUyQutyAJ6v72tOhM89OnoWU0Uebd6qq-BkSKEh5HXLS9zpmhxhs-YuWOkoXQQyvPibtEzFA",
    },
    {
      id: 2,
      name: "Artichoke",
      category: "Artichokes",
      price: "43.00",
      pricePer: "Case",
      img: "https://lh3.googleusercontent.com/ggnMd5H187-JwcRPV1xrzJRjEpnWo-9zIKlJPPEQg_jJv3joBzN2BDG5cL4rkWfKKoBaq-KcoF1yli8Xbe-oau0ouWrIF2_Xhw",
    },
    {
      id: 3,
      name: "Dill Weed",
      category: "Dill",
      price: "33.00",
      pricePer: "Case",
      img: "https://lh3.googleusercontent.com/p2Mfdo3n2410n-1lN7RolzN5PhchZPy0cNGPn9ZE1tf_gzPEios1CDgz9PmPj4ZVrUWGXm6yMzQuIff4NOPLzMNbpbZG-pQZ1nU",
    },
    {
      id: 4,
      name: "Cara Cara",
      category: "Oranges",
      price: "35.00",
      pricePer: "Case",
      img: "https://lh3.googleusercontent.com/lEtt98UKNybMJCgNx90EMXiBKBf39Xc1joxe-UurS9KNY4IcAjhZWu3FgFPu-t-0ZV0kLpGWj9Lr0ffLKKtHxpvCEI-UMM1qKw",
    },
    {
      id: 5,
      name: "Fingerling",
      category: "Potatoes",
      price: "65.00",
      pricePer: "Case",
      img: "https://lh3.googleusercontent.com/-R3XMxvEFytZUytT0iJb44GagNIYG1EGxCsETyK_mWrSCht4yNAqLzLcY2dPwgMHxzWrsxdjYm9-OpR6YuukuxalGCkmghnIuw",
    },
    {
      id: 6,
      name: "Bakers",
      category: "Potatoes",
      price: "30.00",
      pricePer: "Case",
      img: "https://lh3.googleusercontent.com/3U9RTx2oCH_Loq3Y1oIZFmOX9QA5PQBtTNYf9up6YwXoup_c8LGTluWV_NTS_Ut5hXGVguCo1jsIVxb1fZMhe0m5F-GAKm9nlg",
    },
    {
      id: 7,
      name: "Italian",
      category: "Eggplants",
      price: "31.75",
      pricePer: "Case",
      img: "https://lh3.googleusercontent.com/GLkQX8fIGU7sTNYieYS8I8t1CmqtyCd0DXCOifzzi0O7rqUdkpUeF8wjoB1D1AtAcsuendwMcDcLiugahKEvKVAmM5vM-A9XNlc",
    },
    {
      id: 8,
      name: "Chinese",
      category: "Garlic",
      price: "34.50",
      pricePer: "Case",
      img: "https://lh3.googleusercontent.com/qA0dkEpdRxHa0iHJPWCG0ZOoQCdhzeYqYPE0NCaKwno-p3yZDBV2kUsGp2nLU3EufMjVDypeMhz-5ESqyWcTOZzUj9WHM09d",
    },
    {
      id: 9,
      name: "Cloves",
      category: "Garlic",
      price: "43.00",
      pricePer: "Case",
      img: "https://lh3.googleusercontent.com/-K1ovhSKoIHnLumHeg7REUZ_DFZ8GWgFVvMswNJUIz2oMGvUJuPzn5bbQAZUW__8X9RHyztaqhn1p9lMe9j78bvAzYchbp-P-w",
    },
  ]);

  const [filteredItems, setFilteredItems] = useState(allItems);

  const [basket, setBasket] = useState([]);

  const categories = allItems.map((item) => {
    return item.category;
  });

  const noDuplicateCategories = categories.filter((item, i) => {
    return categories.indexOf(item) === i;
  });

  const onFilterByCategory = (category) => {
    if (category === "Show All") {
      setFilteredItems(allItems);
      return;
    }
    const newFilteredItems = allItems.filter((item) => {
      return item.category === category;
    });

    setFilteredItems(newFilteredItems);
  };

  const onAddToBasket = (name, category, quantity, price, id) => {
    const newItemInBasket = { name, category, quantity, price, id };
    setBasket((prevState) => [...prevState, newItemInBasket]);
  };

  return (
    <div className="App">
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <img
            src="https://storage.googleapis.com/chefhero-storage/static/fe-buyer/images/notch-primary-logo.svg"
            alt="notch logo"
            className={styles.logo}
          />
        </header>
        <main className={styles.main}>
          <FilterCategory
            categories={noDuplicateCategories}
            onFilter={onFilterByCategory}
          />
          <Market items={filteredItems} onAddToBasket={onAddToBasket} />
        </main>
      </div>
    </div>
  );
}

export default App;
