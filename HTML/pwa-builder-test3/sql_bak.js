article_lists_create_table();
alasql('SELECT * INTO article_lists_table FROM ?', [article_lists_table1]);


no_filter_list_create_table();
alasql('SELECT * INTO no_filter_list_table FROM ?', [no_filter_list_table1]);


no_filter_list_table_tag_table_create_table();


alasql('SELECT * INTO no_filter_list_table_tag_table FROM ?', [no_filter_list_table_tag_table]);


tag_create_table();
alasql('SELECT * INTO tag_table FROM ?', [tag_sample1]);


comment_create_table();

alasql('SELECT * INTO comment_table FROM ?', [comment_sample1]);


console.table(alasql(query1_1));
console.table(alasql(query1_1).map(RECORD=>RECORD.tag));


console.table(alasql(query2));
console.table(alasql(query2).map(RECORD=>RECORD.comment));


console.table(alasql(query2_1));
console.table(alasql(query2_1).map(RECORD=>RECORD.comment));


const query3_1 = `SELECT * FROM article_lists_table`;
// console.table(alasql(query3_1));
alasql('UPDATE article_lists_table SET article = "hogehoge" WHERE id = 1');
// console.table(alasql(query3_1));


console.table(alasql(query4_1));
console.table(alasql(query4_2));
// console.table(alasql(query4_1));

foo_create_table();
alasql('SELECT * INTO foo FROM ?', [foo1]);


console.table(alasql(foo_select));

console.table(alasql(foo_update));
console.table(alasql(foo_update2));
console.table(alasql(foo_select));
