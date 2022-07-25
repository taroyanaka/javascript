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





const sample_uuid_array = [
"Fighter",
"Mage",
"Priest",
];
const md5 = require('./md5.@2.19.0');
var hash = md5('value');
// console.log(hash);
 // "2063c1608d6e0baf80249c42e2be5804"

// https://stackoverflow.com/questions/11643611/execute-sqlite-script


// const uuid_create_table = () => `CREATE TABLE IF NOT EXISTS uuid (uuid TEXT NOT NULL)`;





const express = require('express')
const cors = require('cors')

const R = require('ramda')
const validator = require('validator')

const app = express()
const port = 8800

const Database = require('better-sqlite3');
const db = new Database('.data/tmp3.sqlite3');


function allowOrigin(res){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    // res.json({data: "JSON RESPONSE"})
    //   readAllservice();
})

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


const makeValidator = (STRING, TYPE, OPTION) => validator[TYPE](STRING, OPTION);
const make_id_info_from_array = (ID, INFO) => R.fromPairs([["id", ID], ["info", INFO]]);

const db_query_select_2 = (STRING_ARRAY) => {
    return {
        "message": "success",
        "data": db.prepare(`SELECT
    lorem.rowid,
    info,
    (SELECT uuid.uuid FROM uuid WHERE uuid.rowid = lorem.uuid_rowid) as uuid
FROM lorem
JOIN uuid
    ON uuid_rowid = uuid.rowid
WHERE uuid.uuid = @uuid`
                    ).all({
                        uuid: STRING_ARRAY["uuid"],
                    }
                )
        // .map(DATA=>make_id_info_from_array(DATA.rowid, DATA.info))
    }
};
const db_query_select_all_2 = () => {
    return {
        "message": "success",
        "data": db.prepare(`SELECT
    lorem.rowid,
    info,
    (SELECT uuid.uuid FROM uuid WHERE uuid.rowid = lorem.uuid_rowid) as uuid
FROM lorem
JOIN uuid
    ON uuid_rowid = uuid.rowid;`
        ).all()
// .map(DATA=>DATA)
        // ).all().map(DATA=>make_id_info_from_array(DATA.id, DATA.info))
    }
};
const db_query_insert_and_select_2 = (STRING_ARRAY) => {
    db.prepare(`INSERT INTO lorem (info, uuid_rowid)
VALUES(
    @lorem, 
    (SELECT uuid.rowid FROM uuid WHERE uuid.uuid = @uuid)
)`
        ).run({
            lorem: STRING_ARRAY["lorem"],
            uuid: STRING_ARRAY["uuid"],
        });
    return db_query_select_all_2(STRING_ARRAY);
};

const db_query_update_and_select_2 = (STRING_ARRAY) => {
    db.prepare(`UPDATE lorem
SET info = @lorem
WHERE
    lorem.rowid = @id
    AND
    lorem.uuid_rowid =
        (SELECT uuid.rowid FROM uuid WHERE uuid.uuid = @uuid)`
        ).run({
            lorem: STRING_ARRAY["lorem"],
            uuid: STRING_ARRAY["uuid"],
            id: STRING_ARRAY["id"],
        });
    return db_query_select_all_2(STRING_ARRAY);
};
const db_query_delete_2 = (STRING_ARRAY) => {
    db.prepare(`DELETE FROM lorem
WHERE
    lorem.rowid = @id
    AND
    lorem.uuid_rowid =
        (SELECT uuid.rowid FROM uuid WHERE uuid.uuid = @uuid)`
        ).run({
            id: STRING_ARRAY["id"],
            uuid: STRING_ARRAY["uuid"],
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

    // const data_only = (LIST) => separate_and_tagging_data_or_error_message_or_no_validated(LIST).map(V=>
    //             V.map(VAL=> VAL[0]==="data")
    //             .every(V=>V===true) ?
    //                 V.map(VAL=>VAL[1]) : null 
    //         )
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
    // R.fromPairs([['a', 1], ['b', 2], ['c', 3]]);
        //=> {a: 1, b: 2, c: 3}
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


app.get("/insert_2", (req, res, next) => {
    allowOrigin(res);
    res.json(shinku_hadoken(db_query_insert_and_select_2, raging_demon(req.query, {
            "lorem": [
                ["isLength", {min: 1, max: 10}, "error: isLength: {min: 1, max: 10}",],
            ],
            "uuid": [
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
    allowOrigin(res); res.json(
        shinku_hadoken(db_query_update_and_select_2, raging_demon(req.query, {
                    "lorem": [
                        ["isLength", {min: 1, max: 10}, "error: isLength: {min: 1, max: 10}",],
                    ],
                    "uuid": [
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
    allowOrigin(res); res.json(db_query_select_all_2());
});

const raging_demon = (REQ_QUERY, KEYS_RULES_OBJECT) => {


    // const data_keys = KEYS_RULES_OBJECT.keys();
    const data_keys = Object.keys(KEYS_RULES_OBJECT);
    // const data_keys = R.toPairs(REQ_QUERY).map(V=>V[0]);
    // const data_and_rules = KEY_ARRAY.map((KEY, IDX)=>{
    // const data_and_rules = KEYS_RULES_OBJECT.map((RULES_OBJECT, KEY)=>{
    const data_and_rules = Object.keys(KEYS_RULES_OBJECT).map(KEY=>{
            return [
                        REQ_QUERY[KEY],
                        KEYS_RULES_OBJECT[KEY]
                    ]
        })
    return [data_keys, data_and_rules];
};

app.get("/read_any_2", (req, res, next) => {
    allowOrigin(res);
    res.json(shinku_hadoken(db_query_select_2, raging_demon(req.query, {
            'uuid': [
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
    allowOrigin(res);
    res.json(shinku_hadoken(db_query_delete_2, raging_demon(req.query, {
            "id": [
                ["isInt", {min: 0, max: 30}, "error: isInt: {min: 0, max: 30}",],
            ],
            'uuid': [
                ["isLength", {min: 1, max: 3}, "error: isLength: {min: 1, max: 3}",],
            ],
        }
    )))
    // res.json(db_query_delete_2(req.query.id));
});