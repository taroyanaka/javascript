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

-- const article_lists = {
--     "no_filter_list": [],
--     "search_txt_txt": "",
--     "sort_by": "star_count",
--     "sort_asc_or_desc": false,
--     "editing": 0,
--     "list": [
--     ],
--     "tmpList": null,
--     "selected": "",
--     "tag_filter_with_OR_selection": []
-- }

CREATE TABLE IF NOT EXISTS article_lists (
    id INTEGER PRIMARY KEY,
    no_filter_list TEXT,
    search_txt_txt TEXT,
    sort_by TEXT,
    sort_asc_or_desc INTEGER,
    editing INTEGER,
    tmpList TEXT,
    selected TEXT,
)

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