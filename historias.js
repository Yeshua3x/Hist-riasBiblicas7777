fetch('links.json')
    .then(response => response.json())
    .then(links => {
        const linksContainer = document.getElementById('links');
        links.forEach(link => {
            const button = document.createElement('a');
            button.href = link.url;
            button.textContent = link.text;
            button.style.display = 'inline-block';
            button.style.margin = '10px';
            button.style.padding = '10px';
            button.style.background = 'lightblue';
            button.style.textDecoration = 'none';
            linksContainer.appendChild(button);
        });
    })
    .catch(error => console.error('Erro ao carregar os links:', error));
