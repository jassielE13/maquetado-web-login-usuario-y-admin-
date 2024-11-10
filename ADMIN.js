document.addEventListener('DOMContentLoaded', () => {
    const addProductButton = document.getElementById('add-product-button');
    const productsContainer = document.getElementById('products-container');

    // Función para agregar un nuevo producto
    addProductButton.addEventListener('click', () => {
        const productName = document.getElementById('product-name').value;
        const productPrice = document.getElementById('product-price').value;
        const productImage = document.getElementById('product-image').files[0];

        if (!productName || !productPrice || !productImage) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Crear una URL de la imagen seleccionada para mostrarla en la tarjeta
        const imageUrl = URL.createObjectURL(productImage);

        // Crear la tarjeta del producto
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${imageUrl}" alt="${productName}" class="product-image" />
            <h3>${productName}</h3>
            <p>Precio: $${productPrice}</p>
            <button class="edit-product">Editar</button>
            <button class="delete-product">Eliminar</button>
        `;

        // Añadir eventos a los botones de editar y eliminar
        productCard.querySelector('.edit-product').addEventListener('click', () => editProduct(productCard));
        productCard.querySelector('.delete-product').addEventListener('click', () => deleteProduct(productCard));

        // Agregar la tarjeta a la lista de productos
        productsContainer.appendChild(productCard);

        // Limpiar el formulario después de agregar el producto
        document.getElementById('add-product-form').reset();
    });

    // Función para editar un producto
    function editProduct(productCard) {
        // Aquí iría la lógica para editar el producto
        alert('Función de editar producto en desarrollo.');
    }

    // Función para eliminar un producto
    function deleteProduct(productCard) {
        productsContainer.removeChild(productCard);
    }
});
