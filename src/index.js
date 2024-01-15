/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :)')

const baseUrl = 'https://platzi-avo.vercel.app';
const altBaseUrl = 'https://api.potterdb.com'

const appNode = document.querySelector('#app');

// Delegacion de eventos, le dejemos al padre que maneje todos los eventos que sucedan en una zona, es bueno especialmente cuando el numero de listeners sea muy grande, esta tecnica la usa, react, angular y svelt, lo usan por debajo, y despu[es especificas en cual se usa]

appNode.addEventListener('click', (event) => {
    if (event.target.nodeName === "H2") {
        window.alert('Hola')
    }
})

// Agregar API de INTL, de internacionalización para dar formato a fechas y monedas

const formatPrice = (price) => {

    const newPrice = new window.Intl.NumberFormat('en-En', {
        style: 'currency',
        currency: 'GBP'
    }).format(price);

    return newPrice;
};

// web api
//  Conectarnos al server

// Mejorar con async y await

// Codigo con promesas
window
    .fetch(`${altBaseUrl}/v1/spells`)
    // .fetch(`${baseUrl}/api/avo`)
    // Procesar la respuesta, y convertirla en JSON
    .then((respuesta) => respuesta.json())
    // JSON -> Data -> Renderizar informacion
    .then((responseJson) => {
        const allItems = [];
        const imageContainer = []
        
        responseJson.data.forEach((item) => {
            console.log(item.attributes.name);

            const image = document.createElement('img');
            // document.body.appendChild(image);
            // image.src = item.image; // URL de la imagen, pero me devuelve rutas relativas.
            // image.src = `${baseUrl}${item.image}`;
            if (item.attributes.image) {
                // Si la propiedad 'image' existe y no es null
                image.src = item.attributes.image;
            } else {
                // Si la propiedad 'image' no existe o es null, usar una imagen alternativa
                image.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c717f547-b225-4e30-81a7-25f2773c7777/d19in79-f5e20809-d9d2-4b75-9879-d773cceabeec.jpg/v1/fill/w_1020,h_783,q_70,strp/harry_potter_desk_wallpaper_by_emelody_d19in79-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Nzg2IiwicGF0aCI6IlwvZlwvYzcxN2Y1NDctYjIyNS00ZTMwLTgxYTctMjVmMjc3M2M3Nzc3XC9kMTlpbjc5LWY1ZTIwODA5LWQ5ZDItNGI3NS05ODc5LWQ3NzNjY2VhYmVlYy5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.EY8t3g5saoQFbTNTK4SU1DCD1fEaQZZf6zZq5KtA6zo';
            }
            image.className = 'object-fit h-32 rounded-lg'
            image.alt = 'Autor: eMelody | Crédito: eMelody on DeviantArt'

            // crear imagen
            const imageDiv = document.createElement('div')
            imageDiv.append(image)
            imageDiv.className = 'flex justify-center bg-gray-900 rounded-lg pt-6 pb-3 '

            // crear titulo
            const title = document.createElement('h2');
            // document.body.appendChild(title);
            title.textContent = item.attributes.name;
            // title.style = 'font-size: 2rem';
            // title.style.fontSize = '2rem';
            title.className = 'text-center break-words text-2xl text-yellow-300 py-3 cursor-pointer'
            // title.addEventListener('click', () => {
            //     window.alert('Hola')
            // })

            const incantation = document.createElement('h3');
            incantation.textContent = item.attributes.incantation;
            incantation.className = 'text-center break-words text-sm text-white py-1 px-3'

            //crear precio
            // const price = document.createElement('p');
            // document.body.appendChild(price);
            // price.textContent = formatPrice(item.price);

            const effect = document.createElement('p')
            effect.textContent = item.attributes.effect;
            effect.className = 'text-center break-words text-xs text-white pt-1 pb-3 px-3'

            const container = document.createElement('div');
            container.append(imageDiv, title, incantation, effect);
            container.className = 'bg-black border-white border-2 rounded-xl justify-center my-12 mx-6'

            allItems.push(container)
        });

        appNode.append(...allItems);
    });

