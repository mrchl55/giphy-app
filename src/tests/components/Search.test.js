import React from "react";
import {render, screen} from '@testing-library/react'
import Search from "../../components/Search";
import GiphyContext from "../../context/giphy-context";

describe('Search component', () => {
    test('renders search text', () => {
        render(<GiphyContext.Provider
            value={{searchQuery: '', setSearchQuery: jest.fn(), offset: 0, setOffset: jest.fn()}}>
            <Search/>
        </GiphyContext.Provider>);
        const searchInputElement = screen.findByRole('input');
        expect(searchInputElement).not.toBeNull();
    });
});