describe('Проверка формы авторизации login.qa.studio', function () {
     it('Проверка авторизации при вводе корректного емэйла и пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > img').should('be.visible');
         cy.reload();
     })
     
     it('Проверка формы восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.reload();
     })

     it('Проверка авторизации при вводе корректного емэйла и неправильного пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLove13qastudious');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.reload();
    })
     
     it('Проверка авторизации при вводе некорректного емэйла и правильного пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german199@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.reload();
    })

     it('Проверка авторизации при вводе невалидного емэйла и правильного пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.reload();
    })

     it('Проверка на привидение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        cy.reload();
    })
 })
 

 