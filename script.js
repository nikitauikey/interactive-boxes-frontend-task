const cards = document.querySelectorAll('.plan-card');
    const totalDisplay = document.getElementById('total-display');

    // Set initial active card and total
    updateTotal();

    cards.forEach(card => {
      card.addEventListener('click', function (e) {
        // Don't deselect when interacting with selects
        if (e.target.tagName === 'SELECT') return;

        // Deactivate all
        cards.forEach(c => c.classList.remove('active'));

        // Activate clicked
        this.classList.add('active');

        updateTotal();
      });
    });

    function updateTotal() {
      const activeCard = document.querySelector('.plan-card.active');
      if (!activeCard) return;
      const price = parseFloat(activeCard.dataset.price).toFixed(2);
      totalDisplay.textContent = `Total : $${price} USD`;
    }

    function handleAddToCart() {
      const activeCard = document.querySelector('.plan-card.active');
      if (!activeCard) return;
      const units = activeCard.dataset.units;
      const price = activeCard.dataset.price;
      alert(`Added ${units} unit(s) to cart for $${parseFloat(price).toFixed(2)} USD`);
    }
