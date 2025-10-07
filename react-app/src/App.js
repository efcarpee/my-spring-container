import React, { useEffect, useState } from 'react';

const API_BASE = "http://localhost:8080/api/items"; // cambia si tu endpoint es otro

function App() {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState("");

  // GET all items on load
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    fetch(API_BASE)
        .then(res => res.json())
        .then(data => setItems(data))
        .catch(err => console.error("Error fetching items:", err));
  };

  const handleCreate = () => {
    if (!newItemName.trim()) return;

    fetch(API_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newItemName })
    })
        .then(() => {
          setNewItemName("");
          fetchItems();
        });
  };

  const handleDelete = (id) => {
    fetch(`${API_BASE}/${id}`, { method: "DELETE" })
        .then(() => fetchItems());
  };

  const handleUpdate = (id, newName) => {
    fetch(`${API_BASE}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName })
    })
        .then(() => fetchItems());
  };

  return (
      <div style={{ padding: '2rem' }}>
        <h1>Items</h1>

        <div style={{ marginBottom: '1rem' }}>
          <input
              type="text"
              value={newItemName}
              placeholder="New item name"
              onChange={(e) => setNewItemName(e.target.value)}
          />
          <button onClick={handleCreate}>Create</button>
        </div>

        <ul>
          {items.map(item => (
              <li key={item.id}>
                <input
                    defaultValue={item.name}
                    onBlur={(e) => handleUpdate(item.id, e.target.value)}
                />
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </li>
          ))}
        </ul>
      </div>
  );
}

export default App;

