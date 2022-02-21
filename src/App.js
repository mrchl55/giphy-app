import './App.css';
import React, {useState, useEffect} from "react";
import GiphyContext from "./context/giphy-context";
import GiphyList from "./components/GiphyList";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const [offset, setOffset] = useState(0)

    return (
    <GiphyContext.Provider value={{searchQuery, setSearchQuery, offset, setOffset}} >
        <Header />
        <Search />

<GiphyList />
    </GiphyContext.Provider>
  );
}

export default App;
