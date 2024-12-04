let cart = [];

// Função para adicionar item ao carrinho
function addToCart(name, price) {
    const item = { name, price };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart)); // Armazena o carrinho no localStorage
    alert(`${name} foi adicionado ao carrinho!`);
    console.log(cart);
}

// Adiciona um listener a todos os botões "Adicionar ao carrinho"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const name = this.getAttribute('data-name');
        const price = this.getAttribute('data-price');
        addToCart(name, price);
    });
    
});
