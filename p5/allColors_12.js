let allColors = [
["#fb545c","#f8879d","#810309","#95030a","#900822","#0c0c0c"],
["#ac54d4","#dc74dc","#511a69","#8e929b","#cbaecf","#444444"],
["#1069de","#f0b07d","#1a3c4e","#4f82a7","#9fb6c2","#5d3c31"],
["#c92865","#c694eb","#2c1596","#a55d83","#cf9cd4","#8d4068"],
["#da3f77","#ed6695","#3b0781","#73648d","#c0b7cb","#4e366e"],
["#de6c94","#f4a3bc","#6c3c24","#a17f5c","#99bccc","#582c38"],
["#ec547c","#ec84a4","#6c4c34","#5c6298","#d7b6a9","#3c5466"],
["#1664d7","#8c7ceb","#0c3778","#a47c5c","#b4b69e","#2c2424"],
["#83eb74","#8cec74","#043434","#54a254","#298612","#2c6444"],
["#da3023","#d098f3","#54199b","#924fa8","#d3a4b6","#512440"],
["#7f7f7f","#bcbcbc","#424242","#4c4c4c","#4c4c4c","#0c0c0c"],
["#3ed2ad","#eebe8a","#15154b","#696d8c","#d1a6a1","#2c395b"],
["#8cd4d4","#a3d4dc","#246060","#296f6f","#9ed3d3","#296f6f"],
["#2414ec","#a494e8","#12097a","#150b8d","#dcc4c4","#150b8d"],
["#109ef6","#f3b169","#64260f","#4a7a93","#cbc3a8","#3f4f2c"],
["#e79d31","#86b4f5","#764c0d","#8c8c7c","#94a6cc","#0c0c14"],
["#7f7f7f","#bcbcbc","#424242","#4c4c4c","#4c4c4c","#0c0c0c"],
["#fa0728","#f18e9c","#070770","#62619f","#a5a6c7","#3c3c84"],
["#e49c04","#fcd37c","#d07804","#877444","#966602","#65563c"],
["#0993bb","#fbc462","#0e4862","#a4608e","#87b7c9","#304c41"],
["#fcd444","#c4fc74","#826602","#ac846c","#dbcbdc","#5c3e30"],
["#f4143c","#ea8ca5","#251473","#726ca0","#d0adb4","#544c94"],
["#ba7844","#dbb99e","#442c19","#8c6458","#b2b4b4","#5c4a38"],
["#a76248","#d2af9f","#5c3627","#a4847c","#d3c1ba","#0c0c0c"],
["#6c96e6","#8ebcf4","#2c141c","#94646c","#a196c8","#343c5c"],
["#684699","#d68c7c","#0c0424","#8060ac","#ccb4d3","#382d52"],
["#f1a534","#f07c7c","#226432","#4aa652","#e7e7d1","#492e2b"],
["#35d3c3","#ecac7c","#14948c","#b06164","#87bcb8","#492d5c"],
["#ec6a1b","#78e4fb","#3d119a","#a14ca5","#d8abce","#994498"],
["#e5f72f","#cce44c","#146c49","#6c9c8c","#c4cfd7","#334b50"],
["#cc8c2c","#fcc464","#6e3a08","#b7a07a","#b0c8d7","#43464b"],
["#f00ff6","#c194f5","#590a6b","#a66684","#b1b1cc","#3a4c6c"],
["#342f76","#fcccdc","#29255e","#7c64a0","#cda6ca","#5b4c94"],
["#d43827","#9cccec","#5c130f","#4c7792","#d0bbb6","#4e2a28"],
["#240cc4","#fcb15c","#2404c3","#97488a","#acd4ba","#0d0d0e"],
["#d21b6f","#e674a0","#8d0c4c","#656197","#ddbfc7","#2f325c"],
["#943b63","#f7a2b1","#7c2454","#a8547c","#d39cab","#5a2c3c"],
["#6b2d84","#f3f3fc","#5d1e74","#875196","#c9b7d2","#695484"],
["#7f7f7f","#bcbcbc","#424242","#4c4c4c","#4c4c4c","#0c0c0c"],
["#bd467f","#fbddb7","#112b6d","#a0537a","#c89eaf","#47254e"],
["#4295bc","#9cc8dc","#224d61","#727594","#275971","#2c2c4c"],
["#f6c822","#f8cac4","#6b581b","#867276","#c7a3a4","#53473d"],
["#53dce4","#98e9ea","#116d72","#74847c","#9cd4d4","#335a59"],
["#dc645c","#f8b764","#532223","#59a672","#9ab996","#326642"],
["#049c94","#a4dcd9","#04a49b","#50b3ac","#c7d6d5","#03958d"],
["#c65253","#f4c58f","#511429","#9c848c","#c4b4bc","#623144"],
["#d87f26","#f3d7bb","#704213","#5c6c8c","#d0bca8","#3c3434"],
["#fcc444","#75dcfa","#4075a4","#946484","#b7c9cb","#543c3c"],
["#8c44f4","#f96dcb","#37077d","#400890","#920664","#0c0c0c"],
["#344deb","#4c3ceb","#2a275d","#59567e","#b9bbc5","#4f4e4d"],
["#f56643","#ef83c3","#622414","#a17a5d","#acc9b3","#633431"],
["#48b4a4","#8cd4d4","#0b494d","#9a8c5c","#a5c7b9","#2f5f5b"],
["#c33e5c","#ec6c8c","#702444","#a15166","#d9b7bd","#64343c"],
["#dd5a55","#eeaa77","#040c2c","#ad5154","#ae8c6c","#4c2e2c"],
["#46e9c4","#fab374","#04846c","#747c84","#b6d9d3","#2d6156"],
["#d67b33","#e5987e","#377211","#4d55ac","#969ad0","#3d4a7c"],
["#f8d312","#f3e58d","#77652c","#889464","#9ccc9c","#2c304c"],
["#336b75","#d4eaf1","#204161","#648f95","#b4cad2","#548c7c"],
["#3bcac1","#f9996c","#132e75","#207872","#b5c9d3","#153383"],
["#243c75","#99aedf","#1c3c74","#677a9f","#b6bdcb","#2c3c64"],
["#f4bc44","#f0c183","#803a5e","#ad5658","#caa1a5","#692f4d"],
["#c64c57","#e67474","#672747","#6fa698","#d7c0c8","#0c0c0c"],
["#0cdfdf","#ef3d7e","#2404a4","#5c3474","#8d0b3b","#0c0c0c"],
["#14eb9c","#76edc4","#0a7a51","#50906c","#a7cebe","#3a5e4c"],
["#8242e1","#a4ebf9","#53137d","#795ea2","#d4acb6","#7c4c7c"],
["#f3c454","#ecd474","#693e1c","#b09655","#866f12","#51372d"],
["#c8a504","#faf761","#7a652e","#88888a","#ccc3c2","#5b5646"],
["#f85c22","#4bfbb3","#14a89c","#af8c67","#acb4cc","#243454"],
["#5cc3fb","#7cd4fc","#040c23","#61829c","#bfaa9d","#30445a"],
["#ea4535","#facd58","#8e5b2a","#6582b0","#c9ba9e","#223b47"],
["#2d25da","#e8b5ab","#171371","#a4847c","#bfa0b9","#0c0c0c"],
["#07c995","#87fb8c","#04438f","#6faab4","#04940b","#54346c"],
["#049bfb","#7ed4ec","#16395f","#4974a2","#b5bfc6","#3a5669"],
["#6cd62e","#94cc64","#366e15","#95ba7c","#aaaaaa","#444444"],
["#e9b62b","#e6758c","#0580a6","#a65250","#b49687","#2a475f"],
["#5c54fb","#95bde6","#090381","#9474b4","#9f95c8","#44444c"],
["#fa4c0d","#fa83ba","#7c2e0f","#b9638b","#c3c0b4","#274a35"],
["#245ce3","#e5ab93","#0d25c6","#9e68a3","#adbcd0","#3b4882"],
["#eb4c04","#fca47c","#144c8c","#963002","#963002","#5f2a5f"],
["#cd0743","#fa86ac","#800f31","#7a7a7a","#d3d3d3","#443b3d"],
["#129f50","#92d1c4","#117444","#699681","#cdc9b6","#2d4a43"],
["#7cd4ac","#84dcb4","#206345","#65977d","#7cbc9c","#4c6054"],
["#643cac","#f6cb84","#5b35a2","#8454ac","#c9a3bc","#3e342c"],
["#fad106","#f4e476","#34940c","#9caa5a","#d4bcc4","#0c0c0c"],
["#f58927","#fccc9c","#340474","#94644c","#b77b79","#663f45"],
["#0db4f7","#fa5f66","#8a1716","#a37962","#ccb0a7","#735c4e"],
["#f3440f","#f69fd8","#2c0434","#bc97a0","#d6ccbc","#432c22"],
["#26d3e3","#69e6ed","#0c0c43","#b0569c","#97abce","#363654"],
["#16bce4","#3b8bec","#0e7782","#5186a0","#bfc5d4","#3f4040"],
["#84cbdb","#8dcbdb","#2c4965","#768997","#b4b4ba","#446484"],
["#fc3c6c","#fb5498","#3e0b6f","#865a9e","#d4a5b2","#544480"],
["#2c4cb7","#f1705a","#131a83","#525fab","#a1a6c7","#73355f"],
["#faac07","#ed8d9f","#050c58","#9c4d79","#b09498","#662e2e"],
["#e76010","#e0cc88","#5c043b","#676082","#79641f","#64325a"],
["#2254a5","#6c84dc","#1b3c74","#677396","#b572b4","#293252"],
["#fb340c","#f58aaa","#0c447f","#5488a9","#add0c4","#49588e"],
["#1c5cf4","#fc6c74","#95bf22","#4f8d7b","#dcb6b5","#394a47"],
["#1d84f2","#6cc4f4","#b4740c","#a4bc6c","#b4bcd1","#8f5c09"],
["#d2ec17","#e7f484","#61691c","#7d8d0b","#7d8d0b","#1c1323"],
["#249cd2","#fa70a6","#341c79","#8259b0","#b0cdda","#4c3c84"],
["#f46354","#f46c5a","#7c3430","#706c6c","#8f1909","#53302a"],
["#b85c51","#f7a797","#651d15","#62a082","#94bcbc","#345a54"],
["#b43064","#ec9682","#2d69ac","#749eb7","#b8ceb8","#88645c"],
["#6cedcc","#f4dd77","#544c24","#a5955b","#ccb4d4","#544437"],
["#fbe404","#fcf07c","#420443","#5b4b97","#dbbdd7","#0c0c0c"],
["#2ca1bf","#f4cc7c","#1c618c","#a46475","#c2aec4","#282c5c"],
["#08d265","#83dcb4","#06cb5c","#848484","#bdd2c8","#444444"],
["#d6353d","#ec6c7c","#049c3c","#9b8455","#d8cab4","#565838"],
["#0f71d5","#64e4dc","#132a5b","#608e9c","#948cc4","#39506a"],
["#eeaa32","#f7b8bc","#3f1e28","#846d9a","#b0a1c4","#3b375b"],
["#f6ab0c","#f08c8a","#27087e","#7d529d","#a98299","#6e3982"],
["#24ebab","#f2b25d","#2c8f6c","#5a549c","#c5c3ce","#54342c"],
["#26ec51","#43f6e6","#266370","#717795","#b4b3c3","#5b5b80"],
["#9211ec","#3dabf1","#08589d","#a76093","#cebe92","#573029"],
["#9029c1","#8edcf2","#141f68","#7655aa","#cdaebc","#4c2c54"],
["#3775f1","#71c1f9","#17326f","#5954aa","#065892","#6c3e7c"],
["#f09d2b","#f6cf92","#cc390a","#94ccb4","#b5dac5","#0c0c0c"],
["#eb4c44","#e9928b","#7c2e2e","#846c74","#d4b4bc","#341c1c"],
["#4575b8","#f86c84","#272c7f","#494da7","#b4bcd6","#40517e"],
["#74eced","#7cfcfc","#14242c","#63999a","#a7bcbc","#243c44"],
["#2c24db","#9cbaf7","#04cc84","#9f5d90","#c098af","#4c6683"],
["#1174e1","#fa6a5c","#0b315c","#5e7791","#abc0cf","#345576"],
["#fbbc05","#fcdc6c","#301d15","#967359","#ceb6c0","#5c4032"],
["#91856d","#c6bfb3","#4b4538","#847c6c","#bbb3a4","#645c54"],
["#eb244a","#fba46c","#35276b","#b689c4","#d5b3cf","#372870"],
["#1e9cf9","#6eadee","#034b81","#7184c2","#c5d4e3","#3c3944"],
["#e20464","#f66a89","#14243c","#454b7d","#c2c9ce","#5e3640"],
["#cc1459","#cc6d9c","#5c0c14","#995e70","#cdb3cd","#463c3c"],
["#f4a021","#f4c464","#865d27","#7e6986","#c8b6af","#7f5974"],
["#676797","#b0b0c9","#35354e","#6c7194","#b4b4cc","#34384c"],
["#d44446","#a0e3b7","#8e3634","#a08070","#d5b6ab","#694e46"],
["#393fbc","#f49474","#2f2576","#7c74b9","#c3bcda","#0c0c0c"],
["#554abc","#fbb0db","#292360","#8cc47c","#910756","#0c0c0c"],
["#1becf3","#548efc","#20626a","#9c9c6c","#bc64b4","#58374c"],
["#e4aa13","#f3a49a","#0ca2a6","#58aa72","#c8b4b4","#595027"],
["#ed952c","#f47ba9","#04a4a4","#93a161","#d4bcac","#039595"],
["#1ca4f4","#8cd4ec","#175b7f","#a27874","#accfda","#31474d"],
["#f1345a","#e96780","#291f59","#a7b568","#aca9c4","#3d444b"],
["#fc842c","#fb944c","#a42b27","#a1626f","#bda087","#553a34"],
["#490ef3","#75f6e4","#60047e","#64b4a4","#c6caca","#50303c"],
["#1e50f2","#7c9cf2","#07237d","#74799b","#c7ada8","#082890"],
["#d4648c","#e4a4c4","#671c37","#99576d","#dabac9","#5b5159"],
["#9c4cd4","#ccb4dc","#1f613d","#86669c","#a4ccb4","#373049"],
["#edb84b","#eed48c","#663190","#8a76b3","#b4c3db","#545454"],
["#f6a42e","#f0c782","#220b57","#706596","#9caccf","#563d6b"],
["#2410f2","#83fbdc","#1d0d89","#8ea449","#cbb5a6","#2b222a"],
["#0464fb","#5cd5f0","#023382","#023b96","#0c748c","#0c0c0c"],
["#d63db8","#9da0eb","#6a38a9","#8454b4","#191d7f","#0c0c0c"],
["#3bc397","#abdcd4","#0b241c","#689484","#a4ccc4","#2c544c"],
["#3c8cfc","#fc9ca4","#345494","#a7545f","#b8bcc6","#2c3552"],
["#44e8f3","#dea5d0","#743484","#6d58a2","#a1b3d0","#0c0c0c"],
["#543f9b","#cf94d0","#59247c","#8b51a7","#d4b4cc","#0c0c0c"],
["#fcfc04","#fdfd7b","#72740c","#979701","#979701","#0c0c0c"],
["#fb4434","#f49c8c","#820c02","#960e02","#8b200d","#0c0c0c"],
["#b2534c","#eacc92","#612835","#5c94b0","#a0cab9","#343e69"],
["#98bb64","#cce4b4","#475c28","#8ca35f","#bdd09c","#4c5534"],
["#f7cd1d","#f3e381","#828d3c","#ac5c64","#ae97a4","#314155"],
["#cb8d0b","#f1c74e","#742404","#b19a74","#e4dbcb","#584434"],
["#f75354","#f18581","#20445b","#9c646c","#c9a5a2","#20263a"],
["#4bc75c","#e18f9d","#1f6529","#95baae","#b5c5c0","#24742f"],
["#fc4c8c","#fc5494","#820230","#960238","#96023a","#0c0c0c"],
["#f5049c","#f496d9","#34047e","#a47c6c","#a1a6c4","#34345c"],
["#db5645","#f8ab7a","#040c34","#ae6357","#913d07","#543548"],
["#37b6cd","#c98eeb","#5c2c1c","#8751b2","#d2b2a3","#3e3f4e"],
["#f35783","#ed6a94","#116a76","#9a7b59","#a4c6c8","#444444"],
["#04daa9","#7c94e4","#06cca4","#927560","#ccc3ad","#573d2c"],
["#3390e3","#fbbc83","#104574","#ac5ca7","#cfadca","#0c0c14"],
["#ec885c","#dab09b","#2c447c","#b06486","#a7b0d7","#3c5484"],
["#36dfa0","#7ce5bd","#040c3c","#4e7d7d","#d4eae3","#2c3353"],
["#d5968a","#fcc8ac","#612d23","#649ba7","#d8c3b2","#31444d"],
["#7cc4bc","#91ccc0","#14343c","#67a09c","#a8d1c6","#274b4b"],
["#fbab04","#f9d676","#044484","#a4665a","#c0ccac","#341c1c"],
["#438c8f","#a4d2d4","#046473","#639d9f","#d0e3e3","#3c838c"],
["#a23e66","#da9fb6","#1c344c","#ae696c","#a3c3c5","#30545d"],
["#1cbbad","#efc97c","#246c94","#5c6cac","#8acb99","#3c3c88"],
["#e31d49","#f9b45c","#0a5f77","#9f7c50","#d3afbe","#552b3c"],
["#e95c1b","#fa9c73","#057494","#957a61","#ccbcbc","#5c4e2c"],
["#46a4b1","#c098e9","#25585f","#2b656d","#b5d4d4","#2b656d"],
["#7ac33b","#9ae472","#3f651e","#819e6f","#bad9c7","#60666f"],
["#04f4fb","#7cf9fc","#043889","#029296","#029296","#043c94"],
["#05daab","#8fe2cc","#179b7d","#837c7c","#f3ebe4","#3f3c39"],
["#2c9bca","#f4a791","#042c3c","#5e5ca1","#baa4d4","#2e3e4e"],
["#fa9315","#f3cc65","#990514","#9f505c","#b8bed8","#7d4050"],
["#543c8c","#8cf4d6","#3e206e","#548c9c","#9fc2c9","#4d4080"],
["#e935ab","#a8c2eb","#3b261b","#ac6c54","#a9d4ae","#544f4a"],
["#dd47d1","#f69ae5","#23347c","#7c59a9","#d3acbc","#3f3f91"],
["#9dce2d","#eceffc","#52781d","#57a1a7","#b5c4d7","#323c27"],
["#0d9e28","#84f499","#054e13","#b27c54","#c4bcb4","#376840"],
["#f9b324","#eeca48","#0c5c94","#5e9d97","#7dbcc7","#0b578d"],
["#a13e4e","#e47e92","#044c65","#526aa0","#8e94cc","#2c2c4c"],
["#f4042c","#ee93a5","#820217","#96021b","#fbfafc","#96021b"],
["#ea6724","#edae8c","#78300b","#8b380d","#843b14","#0c0c0c"],
["#ef749c","#fc7cac","#760d2f","#9d9d9d","#bcacb4","#890f37"],
["#b1614d","#ecf4fb","#502c23","#9c6c68","#caaea6","#3c494e"],
["#bd8631","#94c4e4","#694a1b","#8b5c5c","#ceaeb8","#494f81"],
["#b3520b","#e26471","#844414","#5a9f65","#cec1b5","#44342c"],
["#f29831","#efbc76","#2b3c5b","#817d7d","#dae3d1","#2a3053"],
["#faa70c","#a8fc73","#b10840","#8cc0a2","#b6b1d0","#0c0c14"],
["#96a524","#dde792","#869629","#727369","#b4b4b4","#3f403a"],
["#6a52e7","#a494ec","#201074","#acacac","#abccc9","#0c0c0c"],
["#eb5424","#eb9578","#7b341c","#9c7c5c","#d5c9b5","#5d4b33"],
["#ef5e1a","#bcdcfc","#0a2750","#ae8062","#c3b2a3","#2d2e4d"],
["#d48c44","#e0c49c","#096533","#a8995e","#c1bc8f","#5a6135"],
["#07eda8","#f7de5d","#0d919c","#65b7a5","#a3bebf","#325a66"],
["#3433d9","#e754c3","#320c70","#7664b0","#b69fce","#53436d"],
["#44b7c1","#9bf7da","#215e63","#635cb0","#c3bdc7","#3c4b4c"],
["#63d42a","#f4fcf0","#336e16","#84896c","#c4ccb3","#565d37"],
["#fbdc4c","#f6dd6c","#2c2911","#995565","#d6b6be","#3c3434"],
["#fcdc53","#fcdc44","#635828","#9dac61","#90a09e","#4a4021"],
["#f8da10","#efcf8c","#613a07","#a48c6c","#ccc4b4","#0c0c0c"],
["#54ccf2","#9adef1","#095f7b","#706c8c","#acbbcc","#32323b"],
["#4ca06c","#abf4c3","#2e8554","#5ca474","#68b784","#44945c"],
["#4d93b1","#cfe2ea","#284c5c","#967467","#b6c6ae","#444444"],
["#3cc894","#e69078","#1280a6","#5a9c73","#d4d2a5","#2b4253"],
["#fcfc04","#f4c050","#8f670c","#94989c","#e9ede1","#18242c"],
["#f89821","#f0ac64","#970421","#5d5991","#b6a3ab","#623261"],
["#0b16ee","#4cbdef","#1906c9","#9c648c","#c3a69d","#513f40"],
["#f3b45c","#8cb4e8","#7b4b09","#8e570a","#19457f","#0c0c0c"],
["#d0ac0a","#ec8bca","#7e6806","#a2524b","#d39cc1","#322528"],
["#339ade","#93e4fb","#124c72","#5670ac","#a7ced8","#4c4477"],
["#444c9c","#9ca4d3","#444c94","#55569d","#d0b4c7","#445498"],
["#ec4268","#f9847c","#780c24","#8b0d29","#e4c4e4","#8b0d29"],
["#09e19f","#75e6c6","#0b865c","#54847d","#adc8c5","#2b5a57"],
["#f74b42","#f7d745","#6a2d4c","#5b5bb1","#d1b5ce","#844771"],
["#18c9f8","#a3d0dc","#036680","#8c84a4","#8e8ca4","#0c0c0c"],
["#4cbcfc","#8d74fa","#191a3b","#848c94","#bbb8cd","#343553"],
["#04d4fb","#4c5cfc","#242c7c","#74bc9c","#cfbbd9","#504030"],
["#10c568","#81c9db","#7c522f","#568094","#c9cead","#293a41"],
["#13e597","#5cf4b4","#169464","#70aa8f","#098f57","#345042"],
["#3184bc","#5fbfe6","#040441","#527399","#d3b6c1","#4c4c8c"],
["#5e37c7","#9494dc","#110a24","#756da4","#cfacb4","#3b375a"],
["#fabf18","#fb546a","#441232","#9c4a54","#d9b8bc","#2c3b52"],
["#1ce4fc","#f47fbf","#2159a6","#5a649f","#a9c3d8","#3f7753"],
["#07b754","#c8ec9d","#17776f","#6bb3af","#9dc2b0","#28404e"],
["#04fcd4","#37f5d2","#06ab8e","#7c7c84","#bcbcbc","#3c444c"],
["#fc642c","#ea84fa","#1c840e","#566ca3","#f4f1f4","#354364"],
["#06f4ae","#2ff5b8","#1c146c","#5c5396","#8c95ac","#37386a"],
["#34c4b5","#84ecdc","#156e63","#20786f","#148473","#0c0c0c"],
["#05f8f0","#f7cd68","#6c3414","#72a495","#c89d84","#502e3b"],
["#641baf","#bc8ced","#4c1b84","#4b1484","#4b1484","#633164"],
["#e1b62f","#d5bf95","#3e2414","#936c63","#dcd4be","#412d29"],
["#6b39ea","#9777e3","#260583","#716494","#c6b8e0","#41316d"],
["#f4dc11","#34fc8c","#701021","#55869c","#bebebe","#473734"],
["#2bbdf9","#6494fc","#041c8b","#66649f","#ca90a9","#1b1c3b"],
["#1ba4da","#f2ac8c","#1c6e84","#b46c64","#b2c3c4","#673f38"],
["#a7db0b","#d5eb8f","#0c6c8c","#717c8c","#bccfdb","#3e602f"],
["#fab315","#f4d47e","#705722","#5c9b8c","#acc4c9","#4d3c28"],
["#ec1074","#e998c3","#bd1f95","#8f0946","#e8d0df","#831567"],
["#4c5eb2","#9ba1d8","#0c247c","#5f60a4","#bcbcdd","#0c0c0c"],
["#dcc24e","#fceccc","#928335","#928b7e","#d4c1a3","#4c3c2f"],
["#e44b49","#fca49c","#134b64","#4eab9d","#c79587","#387d6b"],
["#703cec","#f3935e","#362d61","#6c61ae","#b9a5d3","#664095"],
["#d4703c","#ef9c69","#62106c","#746c9b","#a6b1cc","#4c2444"],
["#c89d6b","#f4d874","#604423","#ac745c","#e0d8c5","#4f423e"],
["#447c94","#f4ecdc","#294c5a","#64949c","#ccccbc","#2d404f"],
["#c42434","#fce464","#4e296c","#61a2a4","#a9c4cf","#542c30"],
["#e47444","#f4cc6c","#2c5b6c","#62a8ac","#a8cccc","#3b5b68"],
["#f4ba24","#f9ba2e","#08817c","#ab5c60","#ad7174","#5e353f"],
["#f92f57","#f3db8c","#80031c","#747496","#bdc6d3","#545168"],
["#06e4db","#b0dee0","#05787f","#749b9e","#bac4cb","#335758"],
["#9fbc60","#c5d79d","#6c9431","#86714c","#d0ac9f","#0c0c0c"],
["#f39423","#fcac34","#665224","#967244","#965b02","#645638"],
["#63b7c6","#d4fcf4","#235761","#549ca8","#a7d3cc","#334645"],
["#11e9b7","#50f6d4","#1d9c7c","#7a7b7b","#acc1bc","#24423d"],
["#bb74ec","#c48dea","#4b0f74","#97666c","#bcbcbc","#3c3434"],
["#cce33c","#eb9484","#667310","#a4746c","#bb9181","#0c0c0c"],
["#31e8d9","#54c4e4","#148c84","#9c4cac","#c4b89c","#5d3451"],
["#c33737","#ccccfc","#7c2d33","#5e5399","#bfaacb","#3b3252"],
["#20c4e4","#fc7d84","#241c7c","#9e71b0","#c4abd4","#604493"],
["#0682fa","#64b3fb","#0562d7","#667c8f","#b8b4c1","#575c64"],
["#1c87e7","#f0ac81","#1c34ac","#60778d","#bdccde","#3b536a"],
["#1c64dc","#54acec","#1c4c94","#4a8e4f","#b7ccdc","#184280"],
["#f2476d","#e9b2c4","#813e69","#af4c7c","#a3b3d2","#0c0c0c"],
["#06decc","#99dfdd","#045084","#8cbccc","#8ecccc","#0c0c0c"],
["#fb7c4c","#fcbc84","#93513b","#9f7963","#bcad9f","#453833"],
["#5b9fee","#86b8f2","#040c2c","#6a80a8","#adbac6","#353c55"],
["#e76704","#74e494","#b53e05","#589b6b","#afceaf","#3c6d3f"],
["#f9c20c","#f8e47c","#b29b1c","#556cae","#c3c7d7","#2b5b33"],
["#057cfb","#8ebef3","#024082","#6a6c77","#e0d4b7","#024a96"],
["#ae6648","#bd8774","#042444","#53b0ab","#b4bbc4","#2c3351"],
["#0993cb","#92c9e3","#0c549c","#8e9e4f","#acc4d1","#465a2a"],
["#d9e93b","#b3e1eb","#456807","#54a4a4","#a0cccc","#3b6253"],
["#07e880","#7efbc1","#0c8444","#049451","#049451","#0c1c14"],
["#f3b60c","#71a6d9","#04948c","#8f52a5","#9dbed0","#243944"],
["#da174c","#f4a4a4","#2c3483","#50aca5","#a0b5ca","#2d2c2d"],
["#bc4c34","#ecd4a4","#551c05","#a66c5c","#bd9e82","#7c5444"],
["#b4395c","#dc5e84","#ae3653","#b5955d","#b5cda6","#140c0c"],
["#d45f2c","#e4c494","#6e3116","#9c749c","#cc9ccb","#50424f"],
["#b24c7f","#fbf3f3","#1c0c14","#746c6c","#ece4dc","#433b33"],
["#f45c3c","#eda092","#071a36","#9e5b5e","#9cacc4","#442c3c"],
["#944c18","#e6b181","#1c4c6b","#5c7a99","#acbcce","#5a4335"],
["#c63f25","#ec8464","#68141f","#6c6c84","#d0c2b1","#3c2c44"],
["#37ccb4","#94e8d4","#16748f","#6cac94","#94c292","#5c344c"],
["#fccc2c","#f7db78","#675620","#8e8053","#c4c4c4","#433a1e"],
["#e74e10","#fcb45c","#6c0a6a","#b067a5","#c793b5","#6c513e"],
["#0464fc","#94bff8","#013383","#013b97","#fafbfc","#013b97"],
["#e85b2d","#e39cc4","#6d1d45","#b1668d","#ccc6b1","#361f23"],
["#fccc04","#ecb562","#883915","#514b54","#e1cebb","#483328"],
["#9c47af","#ac77e4","#112263","#6e65ba","#a191cc","#333171"],
["#046cfc","#64a4fb","#013783","#014097","#034195","#014097"],
["#7f7f7f","#bcbcbc","#424242","#4c4c4c","#4c4c4c","#0c0c0c"],
["#aa714c","#e1af88","#4b3023","#a1745d","#c9a286","#613c31"],
["#7e2cfb","#ccf494","#107812","#7a51b4","#977eb2","#422c40"],
["#a2d73e","#a4c4e4","#406415","#ac7466","#acaccc","#465238"],
["#4d80f7","#95ecf8","#054b75","#ab635c","#9ec7d2","#3a5163"],
["#d9691c","#d87087","#68301c","#b05979","#782034","#532c38"],
["#fa2c22","#fc90a8","#810802","#950a03","#940424","#950a03"],
["#06f206","#b8e8b7","#624904","#449c44","#a7aba0","#44433a"],
["#1bd474","#91daf5","#04b04c","#62789c","#b4cdbf","#494348"],
["#09cc7f","#75f6e7","#066475","#9c6854","#9cd2ce","#2c543c"],
["#0b4eca","#e3ca91","#0c3cb4","#60a6a0","#a1b4c5","#385945"],
["#c5972c","#fa916c","#7c642c","#a75452","#c4b29e","#483842"],
["#3046d7","#f0946c","#141c8c","#a85c7c","#b4acc8","#503c81"],
["#077bfa","#84bcfc","#023f81","#87a4c6","#acacc6","#034995"],
["#5b4df4","#6e61f2","#11077c","#7c7c7c","#bac0cd","#404040"],
["#f4a22c","#89c4e6","#18247f","#5a62a7","#9cc4bc","#4f4d5a"],
["#fac73a","#fbcd95","#182eca","#8a5353","#dbbdb0","#573537"],
["#0591ed","#7dadd3","#0b7ed5","#69729b","#b0c9dd","#3b3a4d"],
["#6c51cc","#b5c3ec","#24344c","#58648d","#a1a4cc","#313b5a"],
]