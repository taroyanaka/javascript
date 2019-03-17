const { JSDOM } = require('jsdom')
const jsdom = require("jsdom");

// const resourceLoader = new jsdom.ResourceLoader({
//     proxy: `http://${process.env.PROXYIDPASS}@${process.env.PROXYHOST}`
// });

JSDOM.fromFile(`/Users/yanakataro/Desktop/gijusho/58150002`).then(dom => {
    console.log(
    dom.window.document.querySelectorAll("body > techbookfest-app > app-event-root > mat-sidenav-container > mat-sidenav-content > event-circle-detail > div > mat-card > mat-card-content > table > tbody > tr:nth-child(6) > td:nth-child(2) > p")[0].textContent
    );
})
