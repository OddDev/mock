document.addEventListener('DOMContentLoaded', function () {
  const sourceString = document.getElementById('source-string');
  const remockButton = document.getElementById('remockButton');
  const selectOutputButton = document.getElementById('selectOutputButton');

  sourceString.focus();
  sourceString.addEventListener('input', provideOutput);

  remockButton.addEventListener('click', provideOutput);

  selectOutputButton.addEventListener('click', () => sourceString.select());

  function provideOutput() {
      sourceString.value = mock(sourceString.value);
  }

  function createRandomBool() {
    return Math.random() < 0.5;
  }

  function mock(source) {
    return Array.from(source).map(part => {
      return createRandomBool() ? part.toLowerCase() : part.toUpperCase();
    }).join('');
  }
}, false);
