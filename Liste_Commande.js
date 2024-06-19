function updateCheckboxes() {
    // Récupérer toutes les cases à cocher avec le nom "category1" et "category2"
    var Betty_Boop = document.querySelectorAll('input[name="Betty_Boop"]:checked');
    var Deep_Sea = document.querySelectorAll('input[name="Deep_Sea"]:checked');
    var Black_Rocks = document.querySelectorAll('input[name="Black_Rocks"]:checked');
    var Black_Zen_Stones_Yellow_Orchid = document.querySelectorAll('input[name="Black_Zen_Stones_Yellow_Orchid"]:checked');

    // Construire la chaîne de résultats en fonction des cases cochées dans chaque catégorie
    var result = 'A Commander: ';

    Betty_Boop.forEach(function(checkbox) {
      result += 'Betty Boop' + checkbox.value + ' ';
    });

    Deep_Sea.forEach(function(checkbox) {
      result += 'Deep Sea' + checkbox.value + ' ';
    });

    Black_Rocks.forEach(function(checkbox) {
        result += 'Black Rocks' + checkbox.value + ' ';
    });

    Black_Zen_Stones_Yellow_Orchid.forEach(function(checkbox) {
        result += 'Black Zen Stones Yellow Orchid' + checkbox.value + ' ';
    });

    // Mettre à jour le paragraphe avec les options sélectionnées
    document.getElementById('result').textContent = result;
  }