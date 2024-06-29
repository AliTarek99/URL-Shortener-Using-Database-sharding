const DB = require('../DB/DB');
const crypto = require('node:crypto');
const HashRing = require('hashring');

const hr = new HashRing();
hr.add("0");
hr.add("1");
hr.add("2");

exports.getURL = async (req, res, next) => {
    let hash = req.params.hash;
    let server = DB.shards[hr.get(hash)];
    let url = await DB.URL.find(hash, server);
    if(url) {
        return res.status(301).redirect(301, url.url);
    }
    return res.sendStatus(404);
};

exports.addURL = async (req, res, next) => {
    let url = req.body.url
    let hash = crypto.createHash("sha256").update(url).digest("base64").substr(0, 5);
    server = DB.shards[hr.get(hash)];
    let found = await DB.URL.find(hash, server);
    if (!found) {
        url = new DB.URL(url, hash);
        await url.save(server);
        return res.status(201).json({ new_url: `${req.protocol}://${req.get('host')}/${hash}` });
    }
    return res.status(400).json({ new_url: `${req.protocol}://${req.get('host')}/${hash}` });
}