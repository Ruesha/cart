
document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartCountElement = document.querySelector('.order');
    const cartImage = document.querySelector('.that');
    const cartMessage = document.querySelector('.mid');
    const cartItemsContainer = document.createElement('div');
    const totalAmountElement = document.createElement('div');

   
    const cartDiv = document.querySelector('.items');
    cartDiv.appendChild(cartItemsContainer);
    cartDiv.appendChild(totalAmountElement);

 
    function updateCart() {
        cartCountElement.textContent = `Your Cart (${cart.length})`;

        
        cartItemsContainer.innerHTML = '';
        let total = 0;

      
        if (cart.length === 0) {
            cartImage.style.display = 'block';
            cartMessage.style.display = 'block';
            totalAmountElement.textContent = '';
        } else {
            cartImage.style.display = 'none';
            cartMessage.style.display = 'none';
            
          
            const itemCounts = cart.reduce((acc, item) => {
                acc[item.name] = (acc[item.name] || 0) + 1;
                return acc;
            }, {});

            for (const [name, quantity] of Object.entries(itemCounts)) {
                const itemDiv = document.createElement('div');
                itemDiv.textContent = `${name}: ${quantity}`;
                cartItemsContainer.appendChild(itemDiv);
                
                const price = parseFloat(cart.find(item => item.name === name).price.replace('$', ''));
                total += price * quantity;
            }
            
            totalAmountElement.textContent = `Total: $${total.toFixed(2)}`;
        }
    }

  
    function addToCart(item) {
        cart.push(item);
        updateCart();
        console.log(addToCart);
    }

    const buttons = document.querySelectorAll('.button button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const card = button.closest('.cards');
            const name = card.querySelector('.title').textContent;
            const price = card.querySelector('.price').textContent;

            addToCart({ name, price });
          
        });
    });
});

