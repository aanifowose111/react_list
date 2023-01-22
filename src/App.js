import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import ApiRequest from "./ApiRequest";
import { useState, useEffect } from "react";

function App() {
  const ITEM_URL = "http://localhost:3500/items";
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleAddNewItem = (e) => {
    e.preventDefault();
    if (!newItem) return;
    // add new item
    addnew(newItem);
    setNewItem("");
  };

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(ITEM_URL);
        if (!response.ok) throw Error("Could not receive the data");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchItem();
    }, 1000);
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("shoppingList", JSON.stringify(items));
  // }, [items]);

  const addnew = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newList = { id, checked: false, item };
    const listItems = [...items, newList];
    setItems(listItems);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newList),
    };

    const result = await ApiRequest(ITEM_URL, postOptions);
    if (result) setFetchError(result);
  };

  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);

    const single = listItems.filter((item) => item.id === id);
    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: single[0].checked }),
    };
    const reqUrl = `${ITEM_URL}/${id}`;
    const result = await ApiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  };

  const deleteItem = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    const deleteOption = { method: "DELETE" };
    const reqUrl = `${ITEM_URL}/${id}`;
    const result = await ApiRequest(reqUrl, deleteOption);
    if (result) setFetchError(result);
  };

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleAddNewItem={handleAddNewItem}
      />
      <SearchItem searchItem={searchItem} setSearchItem={setSearchItem} />
      <main>
        {isLoading && <p>Loadind, please wait</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && (
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(searchItem.toLowerCase())
            )}
            handleCheck={handleCheck}
            deleteItem={deleteItem}
          />
        )}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
