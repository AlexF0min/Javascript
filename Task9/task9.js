// Получаем элементы со страницы
var dropdown = document.getElementById("dropdown");
var image = document.getElementById("image");
var info = document.getElementById("info");
var noPicture = document.getElementById("noPicture");

// Ссылка на API
var url = "https://pokeapi.co/api/v2/pokemon?limit=151";

// Загружаем список покемонов
fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // Проходим по каждому покемону и добавляем его в список
    for (var i = 0; i < data.results.length; i++) {
      var pokemon = data.results[i];
      var option = document.createElement("option");
      option.value = pokemon.url;
      option.text = pokemon.name;
      dropdown.appendChild(option);
    }
  })
  .catch(function(error) {
    info.innerHTML = "⚠️ Error loading Pokémon list.";
  });

// Когда пользователь выбирает покемона
dropdown.addEventListener("change", function() {
  var selectedUrl = dropdown.value;

  // Если ничего не выбрано
  if (selectedUrl === "") {
    image.style.display = "none";
    noPicture.style.display = "inline";
    info.innerHTML = "";
    return;
  }

  // Загружаем информацию о выбранном покемоне
  fetch(selectedUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(pokemon) {
      // Скрываем текст и показываем картинку
      noPicture.style.display = "none";
      image.style.display = "block";

      var front = pokemon.sprites.front_default;
      var back = pokemon.sprites.back_default;
      var showFront = true;

      image.src = front;

      // Когда кликаем по картинке — меняем её
      image.onclick = function() {
        if (showFront === true) {
          image.src = back;
          showFront = false;
        } else {
          image.src = front;
          showFront = true;
        }
      };

      // Собираем список способностей
      var abilityList = "";
      for (var i = 0; i < pokemon.abilities.length; i++) {
        abilityList = abilityList + pokemon.abilities[i].ability.name;
        if (i < pokemon.abilities.length - 1) {
          abilityList = abilityList + ", ";
        }
      }

      // Показываем информацию
      info.innerHTML = "<h3>" + pokemon.name.toUpperCase() + "</h3>" +
        "<p><b>Height:</b> " + pokemon.height + "</p>" +
        "<p><b>Weight:</b> " + pokemon.weight + "</p>" +
        "<p><b>Base experience:</b> " + pokemon.base_experience + "</p>" +
        "<p><b>Abilities:</b> " + abilityList + "</p>";
    })
    .catch(function(error) {
      info.innerHTML = "⚠️ Error loading Pokémon data.";
      image.style.display = "none";
      noPicture.style.display = "inline";
    });
});
