import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas para 06-deses-obj', () => {

    test('usContext debe retornar un objeto ', () => {
        const userParam = {
            clave: '12345',
            edad: 12
        }

        const userExpected = {
            nombreClave: userParam.clave,
            anios: userParam.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }

        const userResult = usContext(userParam);

        expect( userExpected ).toEqual( userResult );
    });
});