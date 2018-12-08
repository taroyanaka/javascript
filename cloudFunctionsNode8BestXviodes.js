/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloWorld = (req, res) => {
    function zeroPadding(num, length) {
        return ('0000000000' + num).slice(-length);
    }
    const year = req.query['year'].toString();
    const month = zeroPadding(req.query['month'], 2).toString();

    const SCRIPT = `
    curl -U 'a1abbbccc@gmail.com:tkh333taro' -x 'jp.torguardvpnaccess.com:6060' https://www.xvideos.com/best/${year}-${month}|awk '/href="\\/video[0-9]+/{gsub(/>/," ");print $10}'|awk '{gsub(/href="\\//,"https://www.xvideos.com/");gsub(/best-2018-08\\/0\\//,"");gsub(/"/,"");print}'
    `;
    res.send(require('child_process').execSync(SCRIPT).toString());
};