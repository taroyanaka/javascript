const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');

const languageTranslator = new LanguageTranslatorV3({
  iam_apikey: 'oaZfF10o2nnc0SOWdwRRerLXO4f1DWMBke7RZm9F_7KR',
  url: 'https://gateway.watsonplatform.net/language-translator/api/',
  version: '2018-05-01',
});

	languageTranslator.translate(
	{
		text: 'A sentence must have a verb',
		source: 'en',
		target: 'ja'
	})
  .then(translation => {
    console.log(JSON.stringify(translation, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });

// ibm-watson 4.3.1