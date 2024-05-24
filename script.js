document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Remover a classe 'active' de todos os itens de menu
            menuItems.forEach(item => item.classList.remove('active'));

            // Adicionar a classe active quando clicado
            e.target.classList.add('active');
        });
    });
});

