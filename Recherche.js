function searchItems() {
    // Récupère la valeur de la barre de recherche
    let input = document.getElementById('searchBar').value.toLowerCase();
    // Récupère tous les éléments de la grille
    let items = document.getElementsByClassName('item');

    // Parcours tous les éléments de la grille
    for (let i = 0; i < items.length; i++) {
        // Si le texte de l'item contient la valeur de l'input, l'affiche, sinon le cache
        if (items[i].innerHTML.toLowerCase().indexOf(input) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}
