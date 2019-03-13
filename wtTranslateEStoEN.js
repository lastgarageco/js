/*
translate from spanish to english
by LG
*/

module.exports = (ctx, cb) => {
  //build GET request
  var url = 'http://translate.google.com/translate_a/t?client=j&text=' + ctx.body.text + '&hl=en&sl=es&tl=en';

  //get the translation, if OK, return, if not :(
  var request = require('request');
  request.get(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var translation = body;
        cb(null, { text: `${ctx.body.text} = ${translation}` });
    }
    else { cb(null, { text: `Couldnt do it :(` }); }
  });
}
