// Função para destacar o item de navegação atual
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.color = "#FF6347";  // Destaque no link ativo
        }
    });
});

// Menu de navegação fixo ao rolar a página
window.addEventListener("scroll", function () {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    
    if (window.scrollY > 100) {
        nav.style.position = 'fixed';
        nav.style.top = '0';
        nav.style.width = '100%';
        nav.style.backgroundColor = '#2E2E2E';
    } else {
        nav.style.position = 'static';
        nav.style.backgroundColor = '#3D3D3D';
    }
});

// Exibir uma imagem ampliada ao clicar
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', function () {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '1000';

        const largeImg = document.createElement('img');
        largeImg.src = img.src;
        largeImg.style.maxWidth = '90%';
        largeImg.style.maxHeight = '90%';
        largeImg.style.borderRadius = '10px';
        largeImg.style.boxShadow = '0 4px 8px rgba(255, 255, 255, 0.8)';

        overlay.appendChild(largeImg);
        document.body.appendChild(overlay);

        // Fechar a imagem ao clicar no overlay
        overlay.addEventListener('click', function () {
            overlay.remove();
        });
    });
});

// Botão de voltar ao topo da página
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑ Topo';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 20px';
backToTopButton.style.backgroundColor = '#B22222';
backToTopButton.style.color = 'white';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none';
backToTopButton.style.zIndex = '1000';
document.body.appendChild(backToTopButton);

// Mostrar o botão ao rolar
window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Voltar ao topo ao clicar no botão
backToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
