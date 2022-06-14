-- const blog = {
--     "no_filter_list": [],
--     "search_txt_txt": "",
--     "sort_by": "star_count",
--     "sort_asc_or_desc": false,
--     "editing": 0,
--     "list": [
--         {
--             "id": 0,
--             "article": "foo0",
--             "tag_list": [
--                 "FOO",
--                 "BAR"
--             ],
--             "comment_list": [
--                 {
--                     "comment": "foo is FOO"
--                 },
--                 {
--                     "comment": "foo is not BAR"
--                 },
--                 {
--                     "comment": "foo2 is FOO2"
--                 }
--             ],
--             "star_count": 3,
--             "comment_count": 3,
--             "article_length": 4,
--             "match_score": 0
--         },
--         {
--             "id": 2,
--             "article": "foo\nbar\nBUZ",
--             "tag_list": [
--                 "BAR",
--                 "QUX"
--             ],
--             "comment_list": [],
--             "star_count": 1,
--             "comment_count": 0,
--             "article_length": 11,
--             "match_score": 0
--         },
--         {
--             "id": 1,
--             "article": "bar",
--             "tag_list": [
--                 "QUX"
--             ],
--             "comment_list": [
--                 {
--                     "comment": "bar is BAR"
--                 }
--             ],
--             "star_count": 0,
--             "comment_count": 1,
--             "article_length": 3,
--             "match_score": 0
--         },
--         {
--             "id": 3,
--             "article": "vlahvlah!",
--             "tag_list": [],
--             "comment_list": [],
--             "star_count": 0,
--             "comment_count": 0,
--             "article_length": 9,
--             "match_score": 0
--         },
--         {
--             "id": 4,
--             "article": "日本語　にニほんホンゴご　ﾆﾎﾝｺﾞ",
--             "tag_list": [],
--             "comment_list": [],
--             "star_count": 0,
--             "comment_count": 0,
--             "article_length": 18,
--             "match_score": 0
--         }
--     ],
--     "tmpList": null,
--     "selected": "",
--     "tag_filter_with_OR_selection": []
-- }


-- GitHub Copilot write
CREATE TABLE IF NOT EXISTS list (
    id INTEGER PRIMARY KEY,
    article TEXT,
    tag_list TEXT,
    comment_list TEXT,
    star_count INTEGER,
    comment_count INTEGER,
    article_length INTEGER,
    match_score INTEGER
);

-- vue_instance.$data copy & paste
-- const vue_instance = {
--     "article": "foo0",
--     "comment_text": "foo2 is FOO2",
--     "new_tag": "",
--     "star_count": 3,
-- }
-- CREATE TABLE IF NOT EXISTS vue_instance (
--     article TEXT,
--     comment_text TEXT,
--     new_tag TEXT,
--     tag_all INTEGER
-- );