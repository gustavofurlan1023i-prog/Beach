document.addEventListener('DOMContentLoaded', () => {
    // Função para rolar para a seção de forma suave
    window.scrollToSection = function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 65, // O -65 compensa a altura do cabeçalho fixo
                behavior: 'smooth'
            });
        }
    };
});