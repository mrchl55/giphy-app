import GiphyList from "../../components/GiphyList";
import {render, screen} from '@testing-library/react'
import GiphyContext from "../../context/giphy-context";

describe('GiphyList component', () => {
    test('Renders list items', () => {
        render(<GiphyContext.Provider value={{searchQuery: '', setSearchQuery: jest.fn(), offset: 0, setOffset: jest.fn()}}>
            <GiphyList/>
        </GiphyContext.Provider>);
        const GiphyListItemElement = screen.findAllByRole('listitem');
        expect(GiphyListItemElement).not.toBeNull();
    });
});