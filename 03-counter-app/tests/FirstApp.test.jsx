import { FirstApp } from "../src/FirstApp";
import { render } from '@testing-library/react'

describe('Pruebas en <FirstApp />', () => {
    
    /*test('debe de hacer match con el snapshot', () => {
        const subtitle = 56;
        const title = 'Mi componente';

        const { container } = render( <FirstApp subtitle={subtitle} title={title} />);

        expect( container ).toMatchSnapshot();
    });*/

    test('debe mostrar titulo en h1', () => {
        const title = 'Mi componente';

        const { container, getByText, getByTestId } = render( <FirstApp title={title} />);

        const h1 = container.querySelector('h1');
        expect( getByText(title) ).toBeTruthy();
        expect(h1.innerHTML).toBe( title );
        expect(getByTestId('test-title').innerHTML).toBe( title );
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        const subtitle = 56;

        const { getByText } = render( <FirstApp subtitle={subtitle} />);

        expect( getByText(subtitle) ).toBeTruthy();
    });
});