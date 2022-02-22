import {render, screen} from '@testing-library/react'
import GiphySingle from "../../components/GiphySingle";

const testProps = {
    id: '543',
    title: 'testAlt',
    images: {
        original: {
            url: 'https://image.com',
        }
    }
}
describe('GiphySingle component', () => {
    test('Renders correct image', async () => {
        render(<GiphySingle data-testid="descendant" {...testProps} />);
        const imageAltElement = screen.getByAltText("testAlt", {exact: false});
        expect(imageAltElement).toBeTruthy();
    });
});