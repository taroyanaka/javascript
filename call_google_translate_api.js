// https://qiita.com/tanabee/items/c79c5c28ba0537112922
// https://aspnet-mvc.clock-up.jp/contents/rest-api/access-by-js#GET_%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E4%BE%8B
// shut out other api users done
fetch('https://script.google.com/macros/s/AKfycbwK7J2zrpdVBXLaFlreHTXSYCabLuoEiCzuTWKkxjp_flZR86M/exec?text=こんにちわ&source=ja&target=en')
    .then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log(text);
    });