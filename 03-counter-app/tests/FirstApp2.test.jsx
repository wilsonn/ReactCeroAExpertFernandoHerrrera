import { FirstApp } from "../src/FirstApp";
import { render, screen } from '@testing-library/react'

describe('Pruebas en <FirstApp />', () => {
    const subtitle = 56;
    const title = 'Mi componente';
    
    test('debe de hacer match con el snapshot', () => {

        const { container } = render( <FirstApp subtitle={subtitle} title={title} />);

        expect( container ).toMatchSnapshot();
    });

    test('debe mostrar el mensaje "Mi Componente"', () => {
        render( <FirstApp title={title} subtitle={subtitle} />);

        expect( screen.getByText(title) ).toBeTruthy();
    });

    test('debe mostrar titulo en h1', () => {
        render( <FirstApp title={title} subtitle={subtitle}/>);

        expect(screen.getByRole('heading', {level: 1}).innerHTML).toBe( title );
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        render( <FirstApp subtitle={subtitle} title={title} />);

        expect( screen.getByText(subtitle) ).toBeTruthy();
    });
});