const visaIcon = document.getElementById('visa-icon');
  const mastercardIcon = document.getElementById('mastercard-icon');
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');

  visaIcon.addEventListener('click', () => {
    image1.classList.add('active');
    image2.classList.remove('active');
  });

  mastercardIcon.addEventListener('click', () => {
    image2.classList.add('active');
    image1.classList.remove('active');
  });

  // Effet de disparition lors du clic sur le bouton Cancel
  const cancelBtn = document.getElementById('bcancel-btn');
  cancelBtn.addEventListener('click', () => {
    image1.classList.remove('active');
    image2.classList.remove('active');
    /*setTimeout(() => {
      alert("Form has been canceled"); // Simule une action après l'animation
    }, 1500);*/
  });


  const cardList = document.getElementById('card-list');
  const addCardBtn = document.getElementById('add-card-btn');
  const creditCardForm = document.getElementById('credit-card-form');
  const cancelAddBtn = document.getElementById('bcancel-btn');

  // Function to create and add a new card
  function addCard(cardDetails) {
    const cardItem = document.createElement('div');
    cardItem.className = 'payment-method';
    cardItem.innerHTML = `
      <div class="card-details">
        <div class="card-logo">
          <img src="${cardDetails.logo}" alt="${cardDetails.type}" width="30">
        </div>
        <div class="card-info">
          <p class="card-number">${cardDetails.number}</p>
          <p class="card-expiry">Expiry: ${cardDetails.expiry}</p>
        </div>
        <button class="edit-button  ccabutton">Edit</button>
      </div>
      <div class="edit-form">
        <input type="text" placeholder="Card Number" value="${cardDetails.number}">
        <input type="text" placeholder="Expiry Date" value="${cardDetails.expiry}">
        <button class="save-btn">Save</button>
        <button class="cancel-btn">Cancel</button>
      </div>
    `;

    cardList.appendChild(cardItem);

    const editButton = cardItem.querySelector('.edit-button');
    const editForm = cardItem.querySelector('.edit-form');
    const saveButton = cardItem.querySelector('.save-btn');
    const cancelButton = cardItem.querySelector('.cancel-btn');

    // Toggle the edit form visibility
    editButton.addEventListener('click', () => {
      editForm.classList.toggle('show');
    });

    // Save the edited details
    saveButton.addEventListener('click', () => {
      const cardNumberField = editForm.querySelector('input[placeholder="Card Number"]');
      const expiryDateField = editForm.querySelector('input[placeholder="Expiry Date"]');
      cardItem.querySelector('.card-number').textContent = cardNumberField.value;
      cardItem.querySelector('.card-expiry').textContent = `Expiry: ${expiryDateField.value}`;
      editForm.classList.remove('show');
    });

    // Cancel the edit and hide the form
    cancelButton.addEventListener('click', () => {
      editForm.classList.remove('show');
    });
  }

  // Initial cards data
  const initialCards = [
    { logo: 'master.png', type: 'Visa', number: '**** **** **** 1234', expiry: '12/25' },
    { logo: 'visas.png', type: 'Mastercard', number: '**** **** **** 5678', expiry: '11/24' }
  ];

  // Add initial cards to the list
  initialCards.forEach(addCard);

  ///Show the credit card form and hide the card list
  addCardBtn.addEventListener('click', () => {
    creditCardForm.classList.remove('hidden');
    cardList.classList.add('hidden');
  });
  
  // Hide the credit card form and show the card list
  cancelAddBtn.addEventListener('click', () => {
    creditCardForm.classList.add('hidden');
    cardList.classList.remove('hidden');
  });