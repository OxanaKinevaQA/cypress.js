describe('Совершение покупки в testqastudio.me', function () {
    it('Проверка совершения покупки на сайте testqastudio.me', function () {
         cy.visit('https://testqastudio.me/');
         cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg > path').dblclick();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.wait(5000);
         cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg > [x1="6"]').click();
         cy.get('[href="https://testqastudio.me"]').click();
         cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.wait(5000);
         cy.get('.checkout').click();
         cy.get('#billing_first_name').type('Оксана');
         cy.get('#billing_last_name').type('Кинева');
         cy.get('#billing_address_1').type('Восточная 33Б');
         cy.get('#billing_city').type('Екатеринбург');
         cy.get('#billing_state').type('Свердловская обалсть');
         cy.get('#billing_postcode').type('620026');
         cy.get('#billing_phone').type('89994991581');
         cy.get('#billing_email').type('oxanakineva78@gmail.com');
         cy.get('#place_order').click();
         cy.wait(5000);
         cy.contains('Ваш заказ принят. Благодарим вас.');

    })
 })
 