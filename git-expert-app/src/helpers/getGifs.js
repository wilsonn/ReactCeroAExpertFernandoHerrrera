export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=WiCs9Dn55d5MDOs2G9Vmal58N4K9RT7K&q=${category}`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    console.log(gifs);
};