// https://marketplace.visualstudio.com/items?itemName=emeraldwalk.RunOnSave
// in vscode's settings.json

// "emeraldwalk.runonsave": {
//     "commands": [
//         {
//             "match": "/Users/yanakataro/Desktop/js2/javascript/HTML/pwa-builder-test3/node_express_cors_better-sqlite3_server.js",
//             "cmd": "cp /Users/yanakataro/Desktop/js2/javascript/HTML/pwa-builder-test3/node_express_cors_better-sqlite3_server.js /Users/yanakataro/Desktop/npm_package/better-sqlite3/"
//         }
//     ]
// }

// on CLI
// nodemon /Users/yanakataro/Desktop/npm_package/better-sqlite3/node_express_cors_better-sqlite3_server.js


// https://stackoverflow.com/a/9756189
// $ ls -la  
// var d1 = new Date();
// d1.toUTCString();
// Math.floor(d1.getTime()/ 1000);


const sample_uid_array = [
"Fighter",
"Mage",
"Priest",
];

// https://github.com/blueimp/JavaScript-MD5
// https://unpkg.com/blueimp-md5@2.19.0/js/md5.js
// const MD5 = require('./md5.@2.19.0');
const MD5 = require('./blueimp-md5@2.19.0');
// var hash = MD5('value');
// console.log(hash);
 // "2063c1608d6e0baf80249c42e2be5804"

// https://stackoverflow.com/questions/11643611/execute-sqlite-script


// const uid_create_table = () => `CREATE TABLE IF NOT EXISTS uid (uid TEXT NOT NULL)`;





// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = 8800;

const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors());

function allowOrigin(res){
  // res.header("Access-Control-Allow-Origin", "https://taroyanaka.github.io");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
}


app.listen(3000);


const R = require('ramda');
const validator = require('validator');


const Database = require('better-sqlite3');
let db;

const switch_db = (SERVICE_NAME) => {
    switch (SERVICE_NAME) {
        case "vue_test_with_web_api":
            db = new Database('.data/1659525935_vue_test_with_web_api.sqlite3');
            break;
        case "vue_test_with_web_api_DEV":
            db = new Database('./db/1659525935_vue_test_with_web_api.sqlite3');
            break;
        case "textsplitterfortweet_2":
            db = new Database('.data/1660820720_textsplitterfortweet_2.sqlite3');
            break;
        case "textsplitterfortweet_2_DEV":
            db = new Database('./db/1660820720_textsplitterfortweet_2.sqlite3');
            break;
        default:
            break;
    }
};


// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

app.get('/', (req, res) => {
    res.json({ id: "Taro on test server" });
});

function CREATETABLE(){
    db.prepare(`CREATE TABLE IF NOT EXISTS lorem (
id INTEGER PRIMARY KEY AUTOINCREMENT,
info TEXT NOT NULL
)`).run();
}
function DROPTABLE(){
    db.prepare(`DROP TABLE lorem`).run();
}

function textsplitterfortweet_2_CREATETABLE(){
    db.prepare(`CREATE TABLE IF NOT EXISTS textsplitterfortweet_foo (
id INTEGER PRIMARY KEY AUTOINCREMENT,
foo TEXT NOT NULL,
textsplitterfortweet_uid_id INTEGER NOT NULL
)`).run();
    db.prepare(`CREATE TABLE IF NOT EXISTS textsplitterfortweet_uid (
id INTEGER PRIMARY KEY AUTOINCREMENT,
uid TEXT NOT NULL
)`).run();
}
function textsplitterfortweet_2_DROPTABLE(){
    db.prepare(`DROP TABLE textsplitterfortweet_foo`).run();
    db.prepare(`DROP TABLE textsplitterfortweet_uid`).run();
}

const makeValidator = (STRING, TYPE, OPTION) => validator[TYPE](STRING, OPTION);

const db_query_select_2 = (STRING_ARRAY) => {
    return {
        "message": "success",
        "data": db.prepare(`SELECT
    lorem.id,
    info,
    (SELECT uid.uid FROM uid WHERE uid.id = lorem.uid_id) as uid
FROM lorem
JOIN uid
    ON uid_id = uid.id
WHERE uid.uid = @uid`
                    ).all({
                        uid: STRING_ARRAY["uid"],
                    }
                )
    }
};
const db_query_select_all_2 = () => {
    return {
        "message": "success",
        "data": db.prepare(`SELECT
    lorem.id,
    info,
    (SELECT uid.uid FROM uid WHERE uid.id = lorem.uid_id) as uid
FROM lorem
JOIN uid
    ON uid_id = uid.id;`
        ).all()
    }
};
const db_query_insert_and_select_2 = (STRING_ARRAY) => {
    db.prepare(`INSERT INTO lorem (info, uid_id)
VALUES(
    @lorem, 
    (SELECT uid.id FROM uid WHERE uid.uid = @uid)
)`
        ).run({
            lorem: STRING_ARRAY["lorem"],
            uid: STRING_ARRAY["uid"],
        });
    return db_query_select_all_2(STRING_ARRAY);
};

const db_query_update_and_select_2 = (STRING_ARRAY) => {
    db.prepare(`UPDATE lorem
SET info = @lorem
WHERE
    lorem.id = @id
    AND
    lorem.uid_id =
        (SELECT uid.id FROM uid WHERE uid.uid = @uid)`
        ).run({
            lorem: STRING_ARRAY["lorem"],
            uid: STRING_ARRAY["uid"],
            id: STRING_ARRAY["id"],
        });
    return db_query_select_all_2(STRING_ARRAY);
};
const db_query_delete_2 = (STRING_ARRAY) => {
    db.prepare(`DELETE FROM lorem
WHERE
    lorem.id = @id
    AND
    lorem.uid_id =
        (SELECT uid.id FROM uid WHERE uid.uid = @uid)`
        ).run({
            id: STRING_ARRAY["id"],
            uid: STRING_ARRAY["uid"],
            // id: ID,
        });
    return db_query_select_all_2(STRING_ARRAY);
};

const data_key = ["A","B","C","D","E","F","G","H"];
const data_and_rule_list_3 = [
    ["FOO",
        [
            ["isLength", {min: 1, max: 3}, "error: isLength: {min: 1, max: 3}",],
        ]
    ],
    ["20",
        [
            ["isLength", {min: 1, max: 3}, "error: isLength: {min: 1, max: 3}",],
            ["isInt", { min: 10, max: 99 }, "error: isInt: { min: 10, max: 99 }",]
        ]
    ],
    ["BE71096123456769",
        [
            ["isLength", {min: 3, max: 50}, "error: isLength: {min: 3, max: 50}",],
            ["isIBAN", null, `country code using ISO 3166-1 alpha-2 two letters, check digits two digits, and Basic Bank Account Number (BBAN) up to 30 alphanumeric characters that are country-specific`,]
        ]
    ],
    ["BE7109612345",
        [
            ["isLength", {min: 3, max: 50}, "error: isLength: {min: 3, max: 50}",],
            ["isIBAN", null, `country code using ISO 3166-1 alpha-2 two letters, check digits two digits, and Basic Bank Account Number (BBAN) up to 30 alphanumeric characters that are country-specific`,]
        ]
    ],
    ["BARBAR",
        [
            ["isLength", {min: 1, max: 3}, "error: isLength: {min: 1, max: 3}",],
            ["isLength", {min: 7, max: 10}, "error: isLength: {min: 7, max: 10}",]
        ]
    ],
    ["NO_CHECK_DATA",
        [
            [false]
        ]
    ],
    ["BARBAR78",
        [
            ["isLength", {min: 1, max: 3}, "error: isLength: {min: 1, max: 3}",],
            ["isLength", {min: 7, max: 10}, "error: isLength: {min: 7, max: 10}",]
        ]
    ],
    ["BUZBUZBUZ",
        [
            ["isLength", {min: 1, max: 3}, "error: isLength: {min: 1, max: 3}",],
            ["isLength", {min: 7, max: 10}, "error: isLength: {min: 7, max: 10}",]
        ]
    ],
]

const shinku_hadoken = (SQL_FUNCTION, DATA_KEYS_DATA_AND_RULES_ARRAY) => {
    const [INPUT_DATA_KEYS, INPUT_DATA_AND_RULES] = DATA_KEYS_DATA_AND_RULES_ARRAY;
    const validate_to_data_or_error_by_rules_and_separate_and_tagging = (DATA, TYPE, OPTION, ERROR_MESSAGE) => makeValidator(DATA, TYPE, OPTION) ? ["data", DATA] : ["error", ERROR_MESSAGE];
    const separate_and_tagging_data_or_error_message_or_no_validated = (LIST) => {
        return LIST.map(DATA_AND_RULES=>{
            const DATA = DATA_AND_RULES[0];
            return DATA_AND_RULES[1].reduce((A, RULES, IDX)=>{
                const [TYPE, OPTION, ERROR_MESSAGE] = [RULES[0], RULES[1], RULES[2]];
                A.push(
                    RULES[0] === false ? [['no_validated_data', DATA]] : validate_to_data_or_error_by_rules_and_separate_and_tagging(DATA, TYPE, OPTION, ERROR_MESSAGE)
                );
                return A;},A=[])
        })
    };

    const data_only_uniq = (LIST) => separate_and_tagging_data_or_error_message_or_no_validated(LIST).map(V=>
                V.map(VAL=> VAL[0]==="data")
                .every(V=>V===true) ?
                    R.uniq( V.map(VAL=>VAL[1]) )[0] : null 
            )
    const error_only = (LIST) => separate_and_tagging_data_or_error_message_or_no_validated(LIST).map(V=>
                V.map(VAL=> VAL[0]==="error")
                .some(V=>V===true) ?
                    V.filter(VAL=>VAL[0]==="error").map(VAL=>VAL[1]) : null 
            )
    const no_validated_data_only_uniq = (LIST) => separate_and_tagging_data_or_error_message_or_no_validated(LIST).map(V=>
                V.map(VAL=> VAL[0])
                .every(VAL=>VAL[0]==="no_validated_data") ?
                    V[0][0][1] : null 
            )
    // https://github.com/ramda/ramda/issues/707#issuecomment-674606727
    const multi_zip = (...arrays) => arrays[0].map((_, i) => arrays.map((arr) => arr[i]));

    const THREE_LIST = [data_only_uniq(INPUT_DATA_AND_RULES), error_only(INPUT_DATA_AND_RULES), no_validated_data_only_uniq(INPUT_DATA_AND_RULES)];
    const TRANSPOSED_THREE_LIST = R.transpose(THREE_LIST);
    const DATA_OR_ERROR_LIST = TRANSPOSED_THREE_LIST.map(V=>V.filter(V=>V!==null)).map(V=>V[0])
    const only_data = () => INPUT_DATA_AND_RULES.map(V=>V[0]);
    const final_resonse = [INPUT_DATA_KEYS, only_data(), DATA_OR_ERROR_LIST];
    const error_key_and_error_message = () => multi_zip(final_resonse[0], final_resonse[1], final_resonse[2]).filter(V=>R.is(Array, V[2])).map(V=>[V[0], V[2]]);
    const multi_zipped_final_resonse = () => multi_zip(final_resonse[0], final_resonse[1], final_resonse[2]);
    const multi_zipped_key_and_data = () => R.fromPairs(multi_zip(final_resonse[0], final_resonse[1]));
    const return_error_object = (ERROR_MESSAGE_ARRAY) => {
        return {
            "message": "error",
            "data": ERROR_MESSAGE_ARRAY
        };
    }

    const execute_the_response_data_or_key_with_error_message = (SQL_FUNCTION) => DATA_OR_ERROR_LIST.every(V=>R.is(String, V)) ? SQL_FUNCTION(multi_zipped_key_and_data()) : return_error_object(error_key_and_error_message());

    const FOR_DEBUG_response_data_or_key_with_error_message = () => DATA_OR_ERROR_LIST.every(V=>R.is(String, V)) ? multi_zipped_key_and_data() : error_key_and_error_message();
    // return FOR_DEBUG_response_data_or_key_with_error_message()
    return execute_the_response_data_or_key_with_error_message(SQL_FUNCTION)
}
const raging_demon = (REQ_QUERY, KEYS_RULES_OBJECT) => {
    const data_keys = Object.keys(KEYS_RULES_OBJECT);
    const data_and_rules = Object.keys(KEYS_RULES_OBJECT).map(KEY=>{
            return [
                        REQ_QUERY[KEY],
                        KEYS_RULES_OBJECT[KEY]
                    ]
        })
    return [data_keys, data_and_rules];
};

app.get("/insert_2", (req, res, next) => {
    switch_db("vue_test_with_web_api"); 
allowOrigin(res);

    res.json(shinku_hadoken(db_query_insert_and_select_2, raging_demon(req.query, {
            "lorem": [
                ["isLength", {min: 1, max: 10}, "error: isLength: {min: 1, max: 10}",],
            ],
            "uid": [
                ["isLength", {min: 1, max: 3}, "error: isLength: {min: 1, max: 3}",],
            ],
            // [
            //     ["isLength", {min: 3, max: 50}, "error: isLength: {min: 3, max: 50}",],
            //     ["isIBAN", null, `country code using ISO 3166-1 alpha-2 two letters, check digits two digits, and Basic Bank Account Number (BBAN) up to 30 alphanumeric characters that are country-specific`,]
            // ]
        }
    )))
});
app.get("/update_2", (req, res, next) => {
    switch_db("vue_test_with_web_api"); 
allowOrigin(res);
 res.json(
        shinku_hadoken(db_query_update_and_select_2, raging_demon(req.query, {
                    "lorem": [
                        ["isLength", {min: 1, max: 10}, "error: isLength: {min: 1, max: 10}",],
                    ],
                    "uid": [
                        ["isLength", {min: 1, max: 3}, "error: isLength: {min: 1, max: 3}",],
                    ],
                    "id": [
                        ["isInt", {min: 0, max: 30}, "error: isInt: {min: 0, max: 30}",],
                    ],
                }
            ))
    )
});
app.get("/readall_2", (req, res, next) => {
    switch_db("vue_test_with_web_api"); 
allowOrigin(res);
 res.json(db_query_select_all_2());
});
app.get("/read_any_2", (req, res, next) => {
    switch_db("vue_test_with_web_api"); 
allowOrigin(res);

    res.json(shinku_hadoken(db_query_select_2, raging_demon(req.query, {
            'uid': [
                ["isLength", {min: 1, max: 3}, "error: isLength: {min: 1, max: 3}",],
                // ["isLength", {min: 7, max: 10}, "error: isLength: {min: 7, max: 10}",],
            ]
            // [
            //     ["isLength", {min: 3, max: 50}, "error: isLength: {min: 3, max: 50}",],
            //     ["isIBAN", null, `country code using ISO 3166-1 alpha-2 two letters, check digits two digits, and Basic Bank Account Number (BBAN) up to 30 alphanumeric characters that are country-specific`,]
            // ]
        }
    )))
});
app.get("/deleteid_2", (req, res, next) => {
    switch_db("vue_test_with_web_api"); 
allowOrigin(res);

    res.json(shinku_hadoken(db_query_delete_2, raging_demon(req.query, {
            "id": [
                ["isInt", {min: 0, max: 30}, "error: isInt: {min: 0, max: 30}",],
            ],
            'uid': [
                ["isLength", {min: 1, max: 3}, "error: isLength: {min: 1, max: 3}",],
            ],
        }
    )))
    // res.json(db_query_delete_2(req.query.id));
});


// CREATE TABLE IF NOT EXISTS TABLE_A (
// id INTEGER PRIMARY KEY AUTOINCREMENT,
// COLUMN_A_2 TEXT NOT NULL,
// TABLE_B_id INTEGER NOT NULL
// );

// CREATE TABLE IF NOT EXISTS TABLE_B (
// id INTEGER PRIMARY KEY AUTOINCREMENT,
// COLUMN_B_2 TEXT NOT NULL
// );

// INSERT INTO TABLE_B (COLUMN_B_2) VALUES ('foo');
// INSERT INTO TABLE_B (COLUMN_B_2) VALUES ('bar');
// INSERT INTO TABLE_B (COLUMN_B_2) VALUES ('buz');

// INSERT INTO TABLE_A (COLUMN_A_2, TABLE_B_id)
// VALUES(
//     'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
//     (SELECT TABLE_B.id FROM TABLE_B WHERE TABLE_B.COLUMN_B_2 = 'foo')
// );
// INSERT INTO TABLE_A (COLUMN_A_2, TABLE_B_id)
// VALUES(
//     'ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum',
//     (SELECT TABLE_B.id FROM TABLE_B WHERE TABLE_B.COLUMN_B_2 = 'foo')
// );
// INSERT INTO TABLE_A (COLUMN_A_2, TABLE_B_id)
// VALUES(
//     'dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor',
//     (SELECT TABLE_B.id FROM TABLE_B WHERE TABLE_B.COLUMN_B_2 = 'bar')
// );

// SELECT
//     TABLE_A.id,
//     TABLE_A.COLUMN_A_2,
//     (SELECT TABLE_B.COLUMN_B_2
//      FROM TABLE_B
//      WHERE TABLE_B.id = TABLE_A.TABLE_B_id)
//             as COLUMN_B_2
// FROM TABLE_A
// JOIN TABLE_B
//     ON TABLE_A.TABLE_B_id = TABLE_B.id
// WHERE TABLE_B.COLUMN_B_2 = 'foo';

// UPDATE TABLE_A
// SET COLUMN_A_2 = 'sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit'
// WHERE
//     TABLE_A.id = '1'
//     AND
//     TABLE_A.TABLE_B_id =
//         (SELECT TABLE_B.id
//          FROM TABLE_B
//          WHERE TABLE_B.COLUMN_B_2 = 'foo');

// DELETE FROM TABLE_A
// WHERE
//     TABLE_A.id = '2'
//     AND
//     TABLE_A.TABLE_B_id =
//         (SELECT TABLE_B.id
//          FROM TABLE_B
//          WHERE TABLE_B.COLUMN_B_2 = 'foo');

// SELECT * FROM TABLE_B;
// SELECT * FROM TABLE_A;


// textsplitterfortweet_2

const textsplitterfortweet_2_db_query_select = (STRING_ARRAY) => {
    return {
        "message": "success",
        "data": db.prepare(`SELECT
    textsplitterfortweet_foo.id,
    textsplitterfortweet_foo.foo,
    (SELECT textsplitterfortweet_uid.uid
     FROM textsplitterfortweet_uid
     WHERE textsplitterfortweet_uid.id = textsplitterfortweet_foo.textsplitterfortweet_uid_id)
            as uid
FROM textsplitterfortweet_foo
JOIN textsplitterfortweet_uid
    ON textsplitterfortweet_foo.textsplitterfortweet_uid_id = textsplitterfortweet_uid.id
WHERE textsplitterfortweet_uid.uid = @uid`
                    ).all({
                        uid: STRING_ARRAY["uid"],
                    }
                )
    }
};
const textsplitterfortweet_2_db_query_select_all = () => {
    return {
        "message": "success",
        "data": db.prepare(`SELECT
    textsplitterfortweet_foo.id,
    textsplitterfortweet_foo.foo,
    (SELECT textsplitterfortweet_uid.uid
     FROM textsplitterfortweet_uid
     WHERE textsplitterfortweet_uid.id = textsplitterfortweet_foo.textsplitterfortweet_uid_id)
            as uid
FROM textsplitterfortweet_foo
JOIN textsplitterfortweet_uid
    ON textsplitterfortweet_foo.textsplitterfortweet_uid_id = textsplitterfortweet_uid.id`
        ).all()
    }
};
const textsplitterfortweet_2_db_query_insert_and_select = (STRING_ARRAY) => {
    const normal_insert = () => {
        db.prepare(`INSERT INTO textsplitterfortweet_foo (foo, textsplitterfortweet_uid_id)
    VALUES(
        @foo,
        (SELECT textsplitterfortweet_uid.id FROM textsplitterfortweet_uid WHERE textsplitterfortweet_uid.uid = @uid)
    );`
        ).run({
            foo: STRING_ARRAY["foo"],
            uid: MD5(STRING_ARRAY["uid"]),
            // uid: "barbarbar",
        });
    };

    const insert_uid = () => db.prepare('INSERT INTO textsplitterfortweet_uid (uid) VALUES (?)').run(MD5(STRING_ARRAY["uid"]));

    // https://github.com/WiseLibs/better-sqlite3/blob/master/docs/api.md#getbindparameters---row
    // "If the statement was successful but found no data, undefined is returned."
    // const is_there_uid_result = db.prepare('SELECT * FROM textsplitterfortweet_uid WHERE uid = ?').get(MD5(STRING_ARRAY["uid"]));
    // is_there_uid_result === undefined ? insert_uid() : null;
    db.prepare('SELECT * FROM textsplitterfortweet_uid WHERE uid = ?').get(MD5(STRING_ARRAY["uid"])) === undefined ? insert_uid() : null;
    normal_insert();

    return textsplitterfortweet_2_db_query_select_all(STRING_ARRAY);
};

const textsplitterfortweet_2_db_query_update_and_select = (STRING_ARRAY) => {
    db.prepare(`UPDATE textsplitterfortweet_foo
SET foo = @foo
WHERE
    textsplitterfortweet_foo.id = @id
    AND
    textsplitterfortweet_foo.textsplitterfortweet_uid_id =
        (SELECT textsplitterfortweet_uid.id
         FROM textsplitterfortweet_uid
         WHERE textsplitterfortweet_uid.uid = @uid);`
        ).run({
            foo: STRING_ARRAY["foo"],
            // uid: STRING_ARRAY["uid"],
            uid: MD5(STRING_ARRAY["uid"]),
            id: STRING_ARRAY["id"],
        });
    return textsplitterfortweet_2_db_query_select_all(STRING_ARRAY);
};
const textsplitterfortweet_2_db_query_delete = (STRING_ARRAY) => {
    db.prepare(`DELETE FROM textsplitterfortweet_foo
WHERE
    textsplitterfortweet_foo.id = @id
    AND
    textsplitterfortweet_foo.textsplitterfortweet_uid_id =
        (SELECT textsplitterfortweet_uid.id
         FROM textsplitterfortweet_uid
         WHERE textsplitterfortweet_uid.uid = @uid);`
        ).run({
            id: STRING_ARRAY["id"],
            // uid: STRING_ARRAY["uid"],
            uid: MD5(STRING_ARRAY["uid"]),
        });
    return textsplitterfortweet_2_db_query_select_all(STRING_ARRAY);
};


const choose_db_mode_for_textsplitterfortweet_2 = (REQ) => REQ.query.mode === "DEV" ? switch_db("textsplitterfortweet_2_DEV") : switch_db("textsplitterfortweet_2");

app.get("/textsplitterfortweet_2_read_any", (req, res, next) => {
    choose_db_mode_for_textsplitterfortweet_2(req);

    res.json(shinku_hadoken(textsplitterfortweet_2_db_query_select, raging_demon(req.query, {
            'uid': [
                ["isLength", {min: 1, max: 100}, "error: isLength: {min: 1, max: 100}",],
            ],
        }
    )))
});
app.get("/textsplitterfortweet_2_readall", (req, res, next) => {
    console.log("mode is",req.query.mode);

    choose_db_mode_for_textsplitterfortweet_2(req);
 res.json(textsplitterfortweet_2_db_query_select_all());
});
app.get("/textsplitterfortweet_2_insert", (req, res, next) => {
    choose_db_mode_for_textsplitterfortweet_2(req);
    res.json(shinku_hadoken(textsplitterfortweet_2_db_query_insert_and_select, raging_demon(req.query, {
            "foo": [
                ["isLength", {min: 1, max: 420}, "error: isLength: {min: 1, max: 420}",],
            ],
            // "foo": [
            //     ["isLength", {min: 1, max: 420}, "error: isLength: {min: 1, max: 420}",],
            // ],
            'uid': [
                ["isLength", {min: 1, max: 100}, "error: isLength: {min: 1, max: 100}",],
            ],
        }
    )))
});
app.get("/textsplitterfortweet_2_update", (req, res, next) => {
    choose_db_mode_for_textsplitterfortweet_2(req);
    res.json(shinku_hadoken(textsplitterfortweet_2_db_query_update_and_select, raging_demon(req.query, {
                    "foo": [
                        ["isLength", {min: 1, max: 420}, "error: isLength: {min: 1, max: 420}",],
                    ],
                    'uid': [
                        ["isLength", {min: 1, max: 100}, "error: isLength: {min: 1, max: 100}",],
                    ],
                    "id": [
                        ["isInt", {min: 0, max: 30}, "error: isInt: {min: 0, max: 30}",],
                    ],
                }
            ))
    )
});
app.get("/textsplitterfortweet_2_deleteid", (req, res, next) => {
    choose_db_mode_for_textsplitterfortweet_2(req);
    res.json(shinku_hadoken(textsplitterfortweet_2_db_query_delete, raging_demon(req.query, {
            "id": [
                ["isInt", {min: 0, max: 30}, "error: isInt: {min: 0, max: 30}",],
            ],
            'uid': [
                ["isLength", {min: 1, max: 100}, "error: isLength: {min: 1, max: 100}",],
            ],
        }
    )))
    // res.json(db_query_delete_2(req.query.id));
});

// CREATE TABLE IF NOT EXISTS textsplitterfortweet_foo (
// id INTEGER PRIMARY KEY AUTOINCREMENT,
// foo TEXT NOT NULL,
// textsplitterfortweet_uid_id INTEGER NOT NULL
// );

// CREATE TABLE IF NOT EXISTS textsplitterfortweet_uid (
// id INTEGER PRIMARY KEY AUTOINCREMENT,
// uid TEXT NOT NULL
// );

// INSERT INTO textsplitterfortweet_uid (uid) VALUES ('foo');
// INSERT INTO textsplitterfortweet_uid (uid) VALUES ('bar');
// INSERT INTO textsplitterfortweet_uid (uid) VALUES ('buz');

// INSERT INTO textsplitterfortweet_foo (foo, textsplitterfortweet_uid_id)
// VALUES(
//     'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
//     (SELECT textsplitterfortweet_uid.id FROM textsplitterfortweet_uid WHERE textsplitterfortweet_uid.uid = 'foo')
// );
// INSERT INTO textsplitterfortweet_foo (foo, textsplitterfortweet_uid_id)
// VALUES(
    // 'ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum ipsum',
    // (SELECT textsplitterfortweet_uid.id FROM textsplitterfortweet_uid WHERE textsplitterfortweet_uid.uid = 'foo')
// );
// INSERT INTO textsplitterfortweet_foo (foo, textsplitterfortweet_uid_id)
// VALUES(
    // 'dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor',
    // (SELECT textsplitterfortweet_uid.id FROM textsplitterfortweet_uid WHERE textsplitterfortweet_uid.uid = 'bar')
// );

// SELECT
//     textsplitterfortweet_foo.id,
//     textsplitterfortweet_foo.foo,
//     (SELECT textsplitterfortweet_uid.uid
//      FROM textsplitterfortweet_uid
//      WHERE textsplitterfortweet_uid.id = textsplitterfortweet_foo.textsplitterfortweet_uid_id)
//             as uid
// FROM textsplitterfortweet_foo
// JOIN textsplitterfortweet_uid
//     ON textsplitterfortweet_foo.textsplitterfortweet_uid_id = textsplitterfortweet_uid.id
// WHERE textsplitterfortweet_uid.uid = 'foo';

// UPDATE textsplitterfortweet_foo
// SET foo = 'sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit sit'
// WHERE
//     textsplitterfortweet_foo.id = '1'
//     AND
//     textsplitterfortweet_foo.textsplitterfortweet_uid_id =
//         (SELECT textsplitterfortweet_uid.id
//          FROM textsplitterfortweet_uid
//          WHERE textsplitterfortweet_uid.uid = 'foo');

// DELETE FROM textsplitterfortweet_foo
// WHERE
//     textsplitterfortweet_foo.id = '2'
//     AND
//     textsplitterfortweet_foo.textsplitterfortweet_uid_id =
//         (SELECT textsplitterfortweet_uid.id
//          FROM textsplitterfortweet_uid
//          WHERE textsplitterfortweet_uid.uid = 'foo');

// SELECT * FROM textsplitterfortweet_uid;
// SELECT * FROM textsplitterfortweet_foo;


app.get("/sample", (req, res, next) => {
    res.json({ id: "Taro on test server" });
});

// switch_db("textsplitterfortweet_2_DEV");
// textsplitterfortweet_2_CREATETABLE();
// textsplitterfortweet_2_DROPTABLE();