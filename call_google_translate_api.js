// shut out other api users done
fetch('https://script.google.com/macros/s/AKfycbwK7J2zrpdVBXLaFlreHTXSYCabLuoEiCzuTWKkxjp_flZR86M/exec?text=こんにちわ&source=ja&target=en')
    .then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log(text);
    });