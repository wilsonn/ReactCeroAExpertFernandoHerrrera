import { render, screen, fireEvent } from "@testing-library/react";
import CounterApp from "../src/CounterApp";

describe('Pruebas en <CounterApp/>', () => {

    const initialValue = 10;
    
    test('debe de hacer match con el snapshot ', () => {
        const {container} = render(<CounterApp/>);

        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el valor incial de 100 <CounterApp value={100}/>', () => {
        render(<CounterApp value = {initialValue}/>);

        expect(screen.getByText(initialValue)).toBeTruthy();
    });

    test('debe de incrementar con el boton +1', () => {
        render(<CounterApp value = {initialValue}/>);


        fireEvent.click( screen.getByText("+1"))

        expect(screen.getByText("11")).toBeTruthy();
    });

    test('debe de decrementar con el boton -1', () => {
        render(<CounterApp value = {initialValue}/>);


        fireEvent.click( screen.getByText("-1"))
        screen.debug();
        expect(screen.getByText("9")).toBeTruthy();
    });

    test('debe de funcionar el boton reset', () => {
        render(<CounterApp value = {initialValue}/>);


        fireEvent.click( screen.getByText("+1"))
        fireEvent.click( screen.getByText("+1"))
        fireEvent.click( screen.getByText("+1"))
        fireEvent.click( screen.getByText("Reset"))

        expect(screen.getByText("10")).toBeTruthy();
    });

});