//name parameter
function introduction(name) {
    return  `Hi, my name is ${name}.`;
  }

//name, language parameter
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }

//name, language optional parameter
function introductionWithLanguageOptional(name = "Gracie", language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}