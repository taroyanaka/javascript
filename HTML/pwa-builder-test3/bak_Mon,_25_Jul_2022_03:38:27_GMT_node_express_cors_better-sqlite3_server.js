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

const express = require('express')
const cors = require('cors')

const R = require('ramda')
const validator = require('validator')

const app = express()
const port = 8800

const Database = require('better-sqlite3');
const db = new Database('.data/tmp3.sqlite3');

const article_lists_create_table = () => `CREATE TABLE IF NOT EXISTS article_lists_table (
id INT,
article TEXT,
search_txt TEXT,
sort_by TEXT,
sort_asc_or_desc BOOLEAN,
editing INT,
star_count INT,
comment_count INT,
article_length INT,
match_score INT)`;
const tag_create_table = () => `CREATE TABLE IF NOT EXISTS tag_table (
id INT,
no_filter_list_table_tag_table_id INT,
tag TEXT)`;
const no_filter_list_table_tag_table_create_table = () => `CREATE TABLE IF NOT EXISTS no_filter_list_table_tag_table (
id INT,
no_filter_list_table_id INT,
tag_table_id INT)`;
const comment_create_table = () => `CREATE TABLE IF NOT EXISTS comment_table (
id INT,
no_filter_list_table_id INT,
comment TEXT)`;
const no_filter_list_create_table = () => `CREATE TABLE IF NOT EXISTS no_filter_list_table (
id INT,
article TEXT,
star_count INT,
comment_count INT,
article_length INT,
match_score NUMBER
)`;

// const create = async () => {
//     db.prepare(`CREATE TABLE IF NOT EXISTS service (
// id INTEGER PRIMARY KEY AUTOINCREMENT,
// service TEXT NOT NULL
// );`).run();
//     db.prepare(`CREATE TABLE IF NOT EXISTS any (
// txt TEXT NOT NULL,
// uid TEXT NOT NULL,
// created_at DATETIME DEFAULT (datetime('now', 'localtime')),
// service_id INTEGER NOT NULL,
// FOREIGN KEY (service_id) REFERENCES service(id)
// );`).run();
// };



const create_query_exe = async (STR) => db.prepare(STR).run();
const table_name_key_value_1 =
{article_lists_table: [
["id", 1],
["article", "foo1"],
["search_txt", "foo1"],
["sort_by", "foo1"],
// ["sort_asc_or_desc", true], => SQLite does not have a separate Boolean storage class. Instead, Boolean values are stored as integers 0 (false) and 1 (true).
["sort_asc_or_desc", 1],
["editing", 0],
["star_count", 1],
["comment_count", 3],
["article_length", 3],
["match_score", 0],
]}

const table_name_key_value_2 =
{no_filter_list_table: [
["id", 1],
["article", "foo0"],
["star_count", 3],
["comment_count", 1],
["article_length", 4],
["match_score", 0.1],
]}

const table_name_key_value_3 =
{no_filter_list_table: [
["id", 2],
["article", "bar"],
["star_count", 0],
["comment_count", 1],
["article_length", 3],
["match_score", 0.2],
]}

const table_name_key_value_4 ={no_filter_list_table_tag_table: [
["id", 1],
["no_filter_list_table_id", 1],
["tag_table_id", 1],
]}
const table_name_key_value_5 ={no_filter_list_table_tag_table: [
["id", 2],
["no_filter_list_table_id", 1],
["tag_table_id", 2],
]}
const table_name_key_value_6 ={no_filter_list_table_tag_table: [
["id", 3],
["no_filter_list_table_id", 1],
["tag_table_id", 3],
]}

const table_name_key_value_7 =
{tag_table: [
["id", 1],
["no_filter_list_table_tag_table_id", 1],
["tag", 'FOO1'],
]}
const table_name_key_value_8 =
{tag_table: [
["id", 2],
["no_filter_list_table_tag_table_id", 1],
["tag", 'FOO2'],
]}
const table_name_key_value_9 =
{tag_table: [
["id", 3],
["no_filter_list_table_tag_table_id", 1],
["tag", 'FOO3'],
]}

const table_name_key_value_10 =
{comment_table: [
["id", 1],
["no_filter_list_table_id", 1],
["comment", 'FOO IS BAR'],
]}
const table_name_key_value_11 =
{comment_table: [
["id", 2],
["no_filter_list_table_id", 1],
["comment", 'BAR IS BUZ'],
]}
const table_name_key_value_12 =
{comment_table: [
["id", 3],
["no_filter_list_table_id", 1],
["comment", 'BUZ IS QUX'],
]}

const insert_initial_data = (table_name_key_value) => {
    const table_name = Object.keys(table_name_key_value)[0];
    const key_val = Object.values(table_name_key_value)[0];
    const KEY_VAL_PAIR = [key_val.map(V=>V[0]), key_val.map(V=>V[1])];
    const stmt = db.prepare(`INSERT INTO ${table_name} ( ${KEY_VAL_PAIR[0].join(", ")} ) VALUES (${KEY_VAL_PAIR[1].map(V=> "?").join(", ")})`);
    stmt.run(...KEY_VAL_PAIR[1]);
};


const resetAUTOINCREMENTservice = () => {
    const result = db.prepare("UPDATE SQLITE_SEQUENCE SET SEQ=0 WHERE NAME='service'").run();
    console.table(result);
};

const update = (txt, rowid, service, uid) => {
    try {
        const any = db.prepare(`UPDATE any
SET txt = ?
WHERE rowid = ? AND uid = ? AND service_id =
    (
        SELECT service.id
        FROM service
        WHERE service.service = ?
    )
`).run(
    txt,
    rowid,
    uid,
    service);
        console.table(any);
    } catch (err) {
        console.table(err);
    }
};





// create();
// insertService();
// insertAny();
// readAllservice();
// readAllany();

// readAllanyWithserviceAll();
// read1("service1", "foo0");

// update();

// reset();

// deleteAllRowservice();

// insert("qux100", "service1", "foo0");
// update("qux300", 6, "service1", "foo0");
// readAllanyWithserviceAll();
// read1("service1", "foo0");















const setup = () => {
    create_query_exe(article_lists_create_table());
    create_query_exe(tag_create_table());
    create_query_exe(no_filter_list_table_tag_table_create_table());
    create_query_exe(comment_create_table());
    create_query_exe(no_filter_list_create_table());
    insert_initial_data(table_name_key_value_1);
    insert_initial_data(table_name_key_value_2);
    insert_initial_data(table_name_key_value_3);
    insert_initial_data(table_name_key_value_4);
    insert_initial_data(table_name_key_value_5);
    insert_initial_data(table_name_key_value_6);
    insert_initial_data(table_name_key_value_7);
    insert_initial_data(table_name_key_value_8);
    insert_initial_data(table_name_key_value_9);
    insert_initial_data(table_name_key_value_10);
    insert_initial_data(table_name_key_value_11);
    insert_initial_data(table_name_key_value_12);
};

const table_list = [
    "article_lists_table",
    "no_filter_list_table",
    "tag_table",
    "comment_table",
]
const dropTableList = (LIST) => {
    const result = LIST.reduce((A,V,IDX)=>{
        const res = db.prepare(`DROP TABLE ${V}`).run();A.push(res);
        return A;
    },A=[])
    // const result = db.prepare("DROP TABLE any").run();
    console.table(result);
};


const drop = () => {
    db.prepare("DROP TABLE any").run();
};



const read_TABLE_NAME = (TABLE_NAME) => {
    const stmt = db.prepare(`SELECT rowid,* FROM ${TABLE_NAME}`);
    // const stmt = db.prepare('SELECT rowid,* FROM any WHERE service = ? AND uid = ?');
    try {
        const any = stmt.all();
        console.table(any);
    } catch (err) {
        console.table(err);
    }
};

// https://stackoverflow.com/a/832589
// SELECT *
// FROM A_TABLE
// JOIN CROSS_TABLE
//     ON
//         A_TABLE.id = CROSS_TABLE.A_TABLE_id
// JOIN B_TABLE
//     ON
//         CROSS_TABLE.B_TABLE_id = B_TABLE.id

// A_table no_filter_list_table
// B_table tag_table
// CROSS_table no_filter_list_table_tag_table
const read_cross_TABLE_NAME = (TABLE_NAME) => {
    const stmt = db.prepare(`SELECT *
FROM no_filter_list_table
JOIN no_filter_list_table_tag_table
    ON
        no_filter_list_table.id = no_filter_list_table_tag_table.no_filter_list_table_id
JOIN tag_table
    ON
        no_filter_list_table_tag_table.tag_table_id = tag_table.id
`);
    try {
        const any = stmt.all();
        console.table(any);
    } catch (err) {
        console.table(err);
    }
};




// setup();
// table_list.forEach(V=>read_TABLE_NAME(V));
// read_cross_TABLE_NAME();
// dropTableList(table_list);

// console.log(validator.isIn("foo", ["foo", "bar"]))
// console.log(validator.isIn("buz", ["foo", "bar"]))

const make_table_name_with_column_name = (TABLE_AND_COLUMN_NAMES) => TABLE_AND_COLUMN_NAMES[1].map(VAL=>TABLE_AND_COLUMN_NAMES[0] + '.' + VAL);

const article_lists_table_and_column_name = [
    "article_lists_table",
    [
        "id",
        "article",
        "search_txt",
        "sort_by",
        "sort_asc_or_desc",
        "editing",
        "star_count",
        "comment_count",
        "article_length",
        "match_score",
    ]
];

console.log(make_table_name_with_column_name(article_lists_table_and_column_name));

console.log(validator.isIn("article_lists_table.search_txt", make_table_name_with_column_name(article_lists_table_and_column_name)))
console.log(validator.isIn("article_lists_table.uid", make_table_name_with_column_name(article_lists_table_and_column_name)))

// const escaped = validator.escape(`'Gifts'--'`)
// const unescaped = unsanitizer(escaped)
// const escaped2 = validator.escape(`SELECT * FROM no_filter_list_table`)
// const unescaped2 = unsanitizer(escaped2)
// console.log(escaped)
// console.log(unescaped)
// console.log(escaped2)
// console.log(unescaped2)


const update_TABLE_NAME = (TABLE_NAME, SET_COLUMN_NAME_AND_VALUE_PAIR_ARRAY, WHERE_COLUMN_NAMES_ARRAY) => {
    const SET_COLUMN_NAMES_ARRAY = SET_COLUMN_NAME_AND_VALUE_PAIR_ARRAY.map(V=>V[0]);
    const VALUES_ARRAY = SET_COLUMN_NAME_AND_VALUE_PAIR_ARRAY.map(V=>V[1]);
    // `txt = ?, you = ?, i = ?`
    const SET_query = SET_COLUMN_NAMES_ARRAY.map(V=> `${V} = ?`).join(", ");
    // rowid = ? AND uid = ? AND service_id = ?
    const WHERE_query = WHERE_COLUMN_NAMES_ARRAY.map(V=> `${V} = ?`).join(" AND ");
    try {
        const RESULT = db.prepare(`UPDATE ${TABLE_NAME}
SET ${SET_query}
WHERE ${WHERE_query}
`)
    .run(...VALUES_ARRAY);
        console.table(RESULT);
    } catch (err) {
        console.table(err);
    }
};

// for security about sqlite3
// https://www.sqlite.org/security.html
// https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/SQL%20Injection/SQLite%20Injection.md














var HTTP_PORT = 8000
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});
function allowOrigin(res){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
}

// app.get('/', (req, res) => {
//   res.json({msg: 'This is CORS-enabled for a whitelisted domain.'});
//   res.send(readAllservice());
// })

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
const validate_and_exe_or_no_exe = (STRING, TYPE, OPTION, ERROR_MESSAGE) =>{
    return R.tryCatch( 
        makeValidator(STRING, TYPE, OPTION) ? ()=>{throw null} : ()=>{throw ERROR_MESSAGE},
        (ERROR, FUNCTION)=>( FUNCTION(ERROR, STRING) )
    )
};
const exe_query_or_not = (query_function) => (ERROR, STR) => ERROR ? ERROR : query_function(STR);
const exe_query_or_not_with_id = (query_function) => (ERROR, STR, ID) => ERROR ? ERROR : query_function(STR, ID);
const make_id_info_from_array = (ID, INFO) => R.fromPairs([["id", ID], ["info", INFO]]);



const db_query_select = () => {
    return {
        "message": "success",
        "data": db.prepare('SELECT * FROM lorem').all().map(DATA=>make_id_info_from_array(DATA.id, DATA.info))
    }
};
const db_query_insert_and_select = (STRING) => {
    db.prepare('INSERT INTO lorem (info) values(?)').run(STRING);
    return {
        "message": "success",
        "data": db.prepare('SELECT * FROM lorem').all().map(DATA=>make_id_info_from_array(DATA.id, DATA.info))
    }
};
const db_query_update_and_select = (STRING, NUM) => {
    db.prepare('UPDATE lorem SET info = ? WHERE id = ?').run(STRING, NUM);
    return {
        "message": "success",
        "data": db.prepare('SELECT * FROM lorem').all().map(DATA=>make_id_info_from_array(DATA.id, DATA.info))
    }
};
const db_query_delete = (ID) => {
    db.prepare('DELETE FROM lorem WHERE id = (?)').run(ID);
    return {
        "message": "success",
        "data": db.prepare('SELECT * FROM lorem').all().map(DATA=>make_id_info_from_array(DATA.id, DATA.info))
    }
};


const db_query_select_2 = (STRING_ARRAY) => {
    return {
        "message": "success",
        "data": db.prepare(`SELECT
    lorem.rowid,
    info
FROM lorem
JOIN uuid
    ON uuid_rowid = uuid.rowid
WHERE uuid.uuid = @uuid`
                    ).all({
                        uuid: STRING_ARRAY["uuid"],
                    }
                ).map(DATA=>make_id_info_from_array(DATA.rowid, DATA.info))
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
//         "data": db.prepare(`SELECT
//     lorem.rowid,
//     info,
//     lorem.uuid
// FROM lorem`
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
    return db_query_select_2(STRING_ARRAY);
};
// const db_query_update_and_select_2 = (STRING_ARRAY, ID) => {
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
    // return db_query_select_2(STRING_ARRAY);
};
const db_query_delete_2 = (STRING_ARRAY, ID) => {
    db.prepare(`DELETE FROM lorem
WHERE
    lorem.rowid = @id
    AND
    lorem.uuid_rowid =
        (SELECT uuid.rowid FROM uuid WHERE uuid.uuid = @uuid)`
        ).run({
            uuid: STRING_ARRAY[1],
            id: ID,
        });
    return db_query_select_2(STRING_ARRAY);
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
    // allowOrigin(res); res.json("foo");
});

// Object.keys(myObject).map(function(key, index) {
//   myObject[key] *= 2;
// });

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
                ["isLength", {min: 7, max: 10}, "error: isLength: {min: 7, max: 10}",],
            ]
            // [
            //     ["isLength", {min: 3, max: 50}, "error: isLength: {min: 3, max: 50}",],
            //     ["isIBAN", null, `country code using ISO 3166-1 alpha-2 two letters, check digits two digits, and Basic Bank Account Number (BBAN) up to 30 alphanumeric characters that are country-specific`,]
            // ]
        }
    )))
});
app.get("/deleteid_2", (req, res, next) => {
    allowOrigin(res); res.json(db_query_delete(req.query.id));
});


// app.get("/insert", (req, res, next) => {
//     allowOrigin(res); res.json(
//         validate_and_exe_or_no_exe(req.query.info, "isLength", {min: 1, max: 30}, {"message": "error: isLength: {min: 1, max: 30}"})(exe_query_or_not((STRING)=>db_query_insert_and_select(STRING)))
//     )
// });
// app.get("/update", (req, res, next) => {
//     allowOrigin(res); res.json(
//         validate_and_exe_or_no_exe(req.query.info, "isLength", {min: 1, max: 30}, {"message": "error: isLength: {min: 1, max: 30}"})(exe_query_or_not_with_id((STRING)=>db_query_update_and_select(STRING, req.query.id)))
//     )
// });
// app.get("/readall", (req, res, next) => {
//     allowOrigin(res); res.json(db_query_select());
// });
// app.get("/deleteid", (req, res, next) => {
//     allowOrigin(res); res.json(db_query_delete(req.query.id));
// });




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