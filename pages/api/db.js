import db from '../../db.json';

export default function (req, res) {
    if (res.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    res.setHeader('Access-Control-Allow-Credenials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');

    res.json(db);
}