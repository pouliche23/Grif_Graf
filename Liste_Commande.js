function updateCheckboxes() {
  // Récupérer toutes les cases à cocher
  var allCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');

  // Construire la chaîne de résultats en fonction des cases cochées
  var result = 'A Commander: ';

  allCheckboxes.forEach(function(checkbox) {
      result += checkbox.name + checkbox.value + ' ';
  });

  // Mettre à jour le paragraphe avec les options sélectionnées
  document.getElementById('result').textContent = result;
}

function saveData() {
  // Vous pouvez ajouter ici la logique pour enregistrer les données si nécessaire

  // Redirection vers la page Liste_Commande.html
  window.location.href = 'Liste_Commande.html';
}
