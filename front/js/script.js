main()

async function main() {
    const produits = await getProducts();
    for (produit of produits) {
        showProducts(produits)
    }

}

function getProducts() {
    return fetch("http://localhost:3000/api/products")
        .then(function(response){
            return response.json()
        }) 
        .then(function(produits) {
            return produits
        })
        .catch(function(err) {
            alert(err)
        })
}

function showProducts () {
    const templatePdt = document.getElementById("templateProduct");
    const clonePdt = document.importNode(templatePdt.content, true);

    clonePdt.querySelector('article H3').innerHTML = products.name;
    clonePdt.querySelector('article p').innerHTML = products.description;
    clonePdt.querySelector('article').insertAdjacentHTML('afterbegin',`<img src=${products.imageUrl} alt=${products.altTxt}>`);
    clonePdt.getElementById('items').href += `?id=${products._id}`;

    document.getElementById('product').appendChild(clonePdt)
}