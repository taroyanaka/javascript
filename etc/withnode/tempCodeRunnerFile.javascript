// ({
//     "plugins": ["jsdom-quokka-plugin"],
//     // jsdom: { html: `<div id="test">Hello</div>` }
//     jsdom: {
//         file: `/Users/yanakataro/Desktop/javascript/etc/game/game.html`,
//     }
// })




// const testDiv = document.querySelector('title');
// const testDiv = document.querySelector('canvas');

// console.log(testDiv.textContent);


`https://www.amazon.co.jp/s?i=instant-video&bbn=2351649051&rh=n%3A2351649051%2Cp_72%3A2761627051&dc&adult-product=0&field-feature_browse-bin=2811928051&field-ways_to_watch=3746330051&p_n_entity_type=4174098051&qid=1556348650&qs-av_request_type=4&qs-is-prime-customer=2&rnid=2761626051&ref=sr_nr_p_72_1`
`https://www.amazon.co.jp/s?i=instant-video&bbn=2351649051&rh=n%3A2351649051%2Cp_72%3A2761627051&lo=list&dc&page=2&adult-product=0&field-feature_browse-bin=2811928051&field-ways_to_watch=3746330051&p_n_entity_type=4174098051&qid=1556348663&qs-av_request_type=4&qs-is-prime-customer=2&rnid=2761626051&ref=sr_pg_1`
`https://www.amazon.co.jp/s?i=instant-video&bbn=2351649051&rh=n%3A2351649051%2Cp_72%3A2761627051&lo=list&dc&page=3&adult-product=0&field-feature_browse-bin=2811928051&field-ways_to_watch=3746330051&p_n_entity_type=4174098051&qid=1556348719&qs-av_request_type=4&qs-is-prime-customer=2&rnid=2761626051&ref=sr_pg_2`
(async function () {
    const {
        JSDOM
    } = await require('jsdom');
    const jsdom = await require("jsdom");

    const resourceLoader = await new jsdom.ResourceLoader({
        proxy: `http://${process.env.PROXYIDPASS}@${process.env.PROXYHOST}`
    });
    // const URL = await `https://www.aozora.gr.jp/cards/001850/files/57353_57270.html`;
    // const URL = await `https://taroyanaka.github.io/javascript/etc/simplevideoplayer/simplevideoplayer.html`;
    const URL = await `https://store.playstation.com/ja-jp/grid/PN.CH.JP-PN.CH.MIXED.JP-GAMECAMPAIGN/1`;
    await JSDOM.fromURL(URL, {
        resources: resourceLoader
    }).then(dom => {
        // console.log(dom.window.document.querySelector(`body > div.main_text`).textContent)
        console.log(dom.window.document.querySelector(`#ember1433 > div > span`).id)
    })

}());


