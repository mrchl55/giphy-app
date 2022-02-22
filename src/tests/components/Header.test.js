import {render, screen} from '@testing-library/react'
import Header from "../../components/Header";

describe('Header component', () => {
    test('renders Header text', () => {
        render(<Header/>);
        const headerTextElement = screen.queryByText('giphy', {exact: false});
        expect(headerTextElement).toBeTruthy();
    });
});