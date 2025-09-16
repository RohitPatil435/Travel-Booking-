     function scrollToSection(sectionId) {
            var section = document.getElementById(sectionId);
            section.classList.add('show');
            window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
        }
