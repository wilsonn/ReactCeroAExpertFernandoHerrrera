export const getImagen = async() => {

    try {

        const apiKey = 'WiCs9Dn55d5MDOs2G9Vmal58N4K9RT';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        return 'No se encontro la imagen';
    }
    
    
    
}



