'use strict';

// 0='Дамблдор', 1='Волдеморт', 2='Доктор Стрендж', 3='Гарри Поттер'
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита','Вашингтон'];
var WIZARD_LASTNAME = ['Верон', 'Вальц', 'Ирвинг', 'Нионго', 'да Марья', 'Мирабелла', 'Онопко', 'Топольницкая'];
var WIZARD_COAT = ['rgb(215, 210, 55)', 'rgb(241, 43, 107', 'rgb(101, 137, 164)', 'rgb(0, 0, 0)', 'rgb(56, 159, 117)', 'rgb(146, 100, 161)'];
var WIZARD_EYES = ['rgb(255, 255, 0)', 'rgb(50, 205, 50)', 'rgb(75, 0, 130)', 'rgb(178, 34, 34)', 'rgb(0, 0, 0)'];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizards = [
  {
    name: WIZARD_NAMES[getRandomInt(WIZARD_NAMES.length - 1)] + " " +  WIZARD_LASTNAME[getRandomInt(3)],
    coatColor: WIZARD_COAT[getRandomInt(WIZARD_COAT.length - 1)],
    eyesColor: WIZARD_EYES[getRandomInt(WIZARD_EYES.length -1)]
  },
  {
    name: WIZARD_NAMES[getRandomInt(3)] + " " +  WIZARD_LASTNAME[getRandomInt(3)],
    coatColor: WIZARD_COAT[getRandomInt(WIZARD_COAT.length - 1)],
    eyesColor: WIZARD_EYES[getRandomInt(WIZARD_EYES.length -1)]
  },
  {
    name: WIZARD_NAMES[getRandomInt(3)] + " " +  WIZARD_LASTNAME[getRandomInt(3)],
    coatColor: WIZARD_COAT[getRandomInt(WIZARD_COAT.length - 1)],
    eyesColor: WIZARD_EYES[getRandomInt(WIZARD_EYES.length -1)]
  },
  {
    name: WIZARD_NAMES[getRandomInt(3)] + " " +  WIZARD_LASTNAME[getRandomInt(3)],
    coatColor: WIZARD_COAT[getRandomInt(WIZARD_COAT.length - 1)],
    eyesColor: WIZARD_EYES[getRandomInt(WIZARD_EYES.length -1)]
  }
];

var renderWizard = function(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');