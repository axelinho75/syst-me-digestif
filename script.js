document.addEventListener('DOMContentLoaded', function() {
    const digestiveMap = document.querySelector('.digestive-map');
    const digestiveImage = document.getElementById('digestive-image');
    const modal = document.getElementById('infoModal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalFacts = document.getElementById('modal-facts');
    const closeButton = document.querySelector('.close-button');

    // Ajoutez cette fonction juste avant la ligne existante "function createMarkers()"

    function addClickCoordinatesHelper() {
        digestiveImage.addEventListener('click', function(e) {
            // Calculer les coordonnées en pourcentage
            const rect = digestiveImage.getBoundingClientRect();
            const x = Math.round(((e.clientX - rect.left) / digestiveImage.clientWidth) * 100);
            const y = Math.round(((e.clientY - rect.top) / digestiveImage.clientHeight) * 100);
            
            console.log(`Position: x: ${x}, y: ${y}`);
            
            // Afficher visuellement un point temporaire
            const tempMarker = document.createElement('div');
            tempMarker.className = 'marker';
            tempMarker.style.left = `${e.clientX - rect.left}px`;
            tempMarker.style.top = `${e.clientY - rect.top}px`;
            tempMarker.style.backgroundColor = 'red';
            digestiveMap.appendChild(tempMarker);
            
            // Supprimer le point après 2 secondes
            setTimeout(() => tempMarker.remove(), 2000);
        });
    }

    // Appelez cette fonction dans DOMContentLoaded, juste après les déclarations de constantes
    addClickCoordinatesHelper();

    // Attendre que l'image soit chargée pour placer les marqueurs correctement
    digestiveImage.onload = function() {
        createMarkers();
    };

    // Si l'image est déjà dans le cache, elle peut être déjà chargée
    if (digestiveImage.complete) {
        createMarkers();
    }

    function createMarkers() {
        // Effacer les marqueurs existants si nécessaire
        const existingMarkers = document.querySelectorAll('.marker');
        existingMarkers.forEach(marker => marker.remove());

        // Créer les nouveaux marqueurs
        digestivePoints.forEach(point => {
            const marker = document.createElement('div');
            marker.className = 'marker';
            marker.id = `marker-${point.id}`;
            
            // Positionner le marqueur en fonction des coordonnées relatives
            const xPos = (point.x / 100) * digestiveImage.clientWidth;
            const yPos = (point.y / 100) * digestiveImage.clientHeight;
            
            marker.style.left = `${xPos}px`;
            marker.style.top = `${yPos}px`;
            
            // Ajouter un attribut title pour l'accessibilité
            marker.setAttribute('title', `Cliquez pour en savoir plus sur ${point.name}`);
            
            // Ajouter un écouteur d'événement pour ouvrir la modale
            marker.addEventListener('click', function() {
                showModal(point);
            });
            
            digestiveMap.appendChild(marker);
        });
    }

    // Gérer le redimensionnement de la fenêtre pour ajuster les marqueurs
    window.addEventListener('resize', function() {
        if (digestiveImage.complete) {
            createMarkers();
        }
    });

    function showModal(point) {
        // Remplir la modale avec les informations du point
        modalTitle.textContent = point.name;
        modalDescription.innerHTML = `<p>${point.description}</p>`;
        
        // Construire la liste des faits intéressants
        let factsHTML = '<h3>Faits intéressants</h3><ul>';
        point.facts.forEach(fact => {
            factsHTML += `<li>${fact}</li>`;
        });
        factsHTML += '</ul>';
        
        modalFacts.innerHTML = factsHTML;
        
        // Afficher la modale
        modal.style.display = 'block';
        
        // Empêcher le défilement du contenu en arrière-plan
        document.body.style.overflow = 'hidden';
    }

    // Fermer la modale
    closeButton.addEventListener('click', closeModal);
    
    // Fermer la modale en cliquant en dehors du contenu
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Fermer la modale avec la touche Escape
    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Réactiver le défilement
    }
});