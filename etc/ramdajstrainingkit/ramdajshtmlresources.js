const ramdajshtmlresources = 
`<input type="checkbox" id="open-nav">
    <header class="navbar navbar-fixed-top navbar-inverse container-fluid">
        <div class="container-fluid">
            <div class="navbar-header">
                <label class="open-nav" for="open-nav"></label>
                <a class="navbar-brand" href="#">
                    <strong>Ramda</strong>
                    <span class="version">v0.27.0</span>
                </a>
            </div>
            <ul class="nav navbar-nav navbar-left">
                <li><a href="../">Home</a></li>
                <li class="active"><a href="#">Documentation</a></li>
                <li><a href="/repl?v=0.27.0">Try Ramda</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="https://github.com/ramda/ramda">GitHub</a></li>
                <li><a href="https://gitter.im/ramda/ramda">Discuss</a></li>
            </ul>
        </div>
    </header>
    <aside class="sidebar container-fluid">
        <div class="form-group has-feedback filter">
            <input class="form-control" tabindex="1" id="name-filter" placeholder="Filter" type="text" data-bind="textInput: filter" autocomplete="false" autofocus="">
            <span class="form-control-feedback">
                <span class="glyphicon glyphicon-search"></span>
            </span>
        </div>
        <ul class="nav nav-pills nav-stacked toc">
            <li class="func" data-name="__" data-category="Function">
                <a href="#__">
                    __
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="add" data-category="Math">
                <a href="#add">
                    add
                    <span data-category="Math" class="label label-category pull-right">Math</span>
                </a>
            </li>
            <li class="func" data-name="addIndex" data-category="Function">
                <a href="#addIndex">
                    addIndex
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="adjust" data-category="List">
                <a href="#adjust">
                    adjust
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="all" data-category="List">
                <a href="#all">
                    all
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="allPass" data-category="Logic">
                <a href="#allPass">
                    allPass
                    <span data-category="Logic" class="label label-category pull-right">Logic</span>
                </a>
            </li>
            <li class="func" data-name="always" data-category="Function">
                <a href="#always">
                    always
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="and" data-category="Logic">
                <a href="#and">
                    and
                    <span data-category="Logic" class="label label-category pull-right">Logic</span>
                </a>
            </li>
            <li class="func" data-name="andThen" data-category="Function">
                <a href="#andThen">
                    andThen
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="any" data-category="List">
                <a href="#any">
                    any
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="anyPass" data-category="Logic">
                <a href="#anyPass">
                    anyPass
                    <span data-category="Logic" class="label label-category pull-right">Logic</span>
                </a>
            </li>
            <li class="func" data-name="ap" data-category="Function">
                <a href="#ap">
                    ap
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="aperture" data-category="List">
                <a href="#aperture">
                    aperture
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="append" data-category="List">
                <a href="#append">
                    append
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="apply" data-category="Function">
                <a href="#apply">
                    apply
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="applySpec" data-category="Function">
                <a href="#applySpec">
                    applySpec
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="applyTo" data-category="Function">
                <a href="#applyTo">
                    applyTo
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="ascend" data-category="Function">
                <a href="#ascend">
                    ascend
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="assoc" data-category="Object">
                <a href="#assoc">
                    assoc
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="assocPath" data-category="Object">
                <a href="#assocPath">
                    assocPath
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="binary" data-category="Function">
                <a href="#binary">
                    binary
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="bind" data-category="Function">
                <a href="#bind">
                    bind
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="both" data-category="Logic">
                <a href="#both">
                    both
                    <span data-category="Logic" class="label label-category pull-right">Logic</span>
                </a>
            </li>
            <li class="func" data-name="call" data-category="Function">
                <a href="#call">
                    call
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="chain" data-category="List">
                <a href="#chain">
                    chain
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="clamp" data-category="Relation">
                <a href="#clamp">
                    clamp
                    <span data-category="Relation" class="label label-category pull-right">Relation</span>
                </a>
            </li>
            <li class="func" data-name="clone" data-category="Object">
                <a href="#clone">
                    clone
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="comparator" data-category="Function">
                <a href="#comparator">
                    comparator
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="complement" data-category="Logic">
                <a href="#complement">
                    complement
                    <span data-category="Logic" class="label label-category pull-right">Logic</span>
                </a>
            </li>
            <li class="func" data-name="compose" data-category="Function">
                <a href="#compose">
                    compose
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="composeK" data-category="Function">
                <a href="#composeK">
                    composeK
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="composeP" data-category="Function">
                <a href="#composeP">
                    composeP
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="composeWith" data-category="Function">
                <a href="#composeWith">
                    composeWith
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="concat" data-category="List">
                <a href="#concat">
                    concat
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="cond" data-category="Logic">
                <a href="#cond">
                    cond
                    <span data-category="Logic" class="label label-category pull-right">Logic</span>
                </a>
            </li>
            <li class="func" data-name="construct" data-category="Function">
                <a href="#construct">
                    construct
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="constructN" data-category="Function">
                <a href="#constructN">
                    constructN
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="contains" data-category="List">
                <a href="#contains">
                    contains
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="converge" data-category="Function">
                <a href="#converge">
                    converge
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="countBy" data-category="Relation">
                <a href="#countBy">
                    countBy
                    <span data-category="Relation" class="label label-category pull-right">Relation</span>
                </a>
            </li>
            <li class="func" data-name="curry" data-category="Function">
                <a href="#curry">
                    curry
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="curryN" data-category="Function">
                <a href="#curryN">
                    curryN
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="dec" data-category="Math">
                <a href="#dec">
                    dec
                    <span data-category="Math" class="label label-category pull-right">Math</span>
                </a>
            </li>
            <li class="func" data-name="defaultTo" data-category="Logic">
                <a href="#defaultTo">
                    defaultTo
                    <span data-category="Logic" class="label label-category pull-right">Logic</span>
                </a>
            </li>
            <li class="func" data-name="descend" data-category="Function">
                <a href="#descend">
                    descend
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="difference" data-category="Relation">
                <a href="#difference">
                    difference
                    <span data-category="Relation" class="label label-category pull-right">Relation</span>
                </a>
            </li>
            <li class="func" data-name="differenceWith" data-category="Relation">
                <a href="#differenceWith">
                    differenceWith
                    <span data-category="Relation" class="label label-category pull-right">Relation</span>
                </a>
            </li>
            <li class="func" data-name="dissoc" data-category="Object">
                <a href="#dissoc">
                    dissoc
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="dissocPath" data-category="Object">
                <a href="#dissocPath">
                    dissocPath
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="divide" data-category="Math">
                <a href="#divide">
                    divide
                    <span data-category="Math" class="label label-category pull-right">Math</span>
                </a>
            </li>
            <li class="func" data-name="drop" data-category="List">
                <a href="#drop">
                    drop
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="dropLast" data-category="List">
                <a href="#dropLast">
                    dropLast
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="dropLastWhile" data-category="List">
                <a href="#dropLastWhile">
                    dropLastWhile
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="dropRepeats" data-category="List">
                <a href="#dropRepeats">
                    dropRepeats
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="dropRepeatsWith" data-category="List">
                <a href="#dropRepeatsWith">
                    dropRepeatsWith
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="dropWhile" data-category="List">
                <a href="#dropWhile">
                    dropWhile
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="either" data-category="Logic">
                <a href="#either">
                    either
                    <span data-category="Logic" class="label label-category pull-right">Logic</span>
                </a>
            </li>
            <li class="func" data-name="empty" data-category="Function">
                <a href="#empty">
                    empty
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="endsWith" data-category="List">
                <a href="#endsWith">
                    endsWith
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="eqBy" data-category="Relation">
                <a href="#eqBy">
                    eqBy
                    <span data-category="Relation" class="label label-category pull-right">Relation</span>
                </a>
            </li>
            <li class="func" data-name="eqProps" data-category="Object">
                <a href="#eqProps">
                    eqProps
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="equals" data-category="Relation">
                <a href="#equals">
                    equals
                    <span data-category="Relation" class="label label-category pull-right">Relation</span>
                </a>
            </li>
            <li class="func" data-name="evolve" data-category="Object">
                <a href="#evolve">
                    evolve
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="F" data-category="Function">
                <a href="#F">
                    F
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="filter" data-category="List">
                <a href="#filter">
                    filter
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="find" data-category="List">
                <a href="#find">
                    find
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="findIndex" data-category="List">
                <a href="#findIndex">
                    findIndex
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="findLast" data-category="List">
                <a href="#findLast">
                    findLast
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="findLastIndex" data-category="List">
                <a href="#findLastIndex">
                    findLastIndex
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="flatten" data-category="List">
                <a href="#flatten">
                    flatten
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="flip" data-category="Function">
                <a href="#flip">
                    flip
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="forEach" data-category="List">
                <a href="#forEach">
                    forEach
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="forEachObjIndexed" data-category="Object">
                <a href="#forEachObjIndexed">
                    forEachObjIndexed
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="fromPairs" data-category="List">
                <a href="#fromPairs">
                    fromPairs
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="groupBy" data-category="List">
                <a href="#groupBy">
                    groupBy
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="groupWith" data-category="List">
                <a href="#groupWith">
                    groupWith
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="gt" data-category="Relation">
                <a href="#gt">
                    gt
                    <span data-category="Relation" class="label label-category pull-right">Relation</span>
                </a>
            </li>
            <li class="func" data-name="gte" data-category="Relation">
                <a href="#gte">
                    gte
                    <span data-category="Relation" class="label label-category pull-right">Relation</span>
                </a>
            </li>
            <li class="func" data-name="has" data-category="Object">
                <a href="#has">
                    has
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="hasIn" data-category="Object">
                <a href="#hasIn">
                    hasIn
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="hasPath" data-category="Object">
                <a href="#hasPath">
                    hasPath
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="head" data-category="List">
                <a href="#head">
                    head
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="identical" data-category="Relation">
                <a href="#identical">
                    identical
                    <span data-category="Relation" class="label label-category pull-right">Relation</span>
                </a>
            </li>
            <li class="func" data-name="identity" data-category="Function">
                <a href="#identity">
                    identity
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="ifElse" data-category="Logic">
                <a href="#ifElse">
                    ifElse
                    <span data-category="Logic" class="label label-category pull-right">Logic</span>
                </a>
            </li>
            <li class="func" data-name="inc" data-category="Math">
                <a href="#inc">
                    inc
                    <span data-category="Math" class="label label-category pull-right">Math</span>
                </a>
            </li>
            <li class="func" data-name="includes" data-category="List">
                <a href="#includes">
                    includes
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="indexBy" data-category="List">
                <a href="#indexBy">
                    indexBy
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="indexOf" data-category="List">
                <a href="#indexOf">
                    indexOf
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="init" data-category="List">
                <a href="#init">
                    init
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="innerJoin" data-category="Relation">
                <a href="#innerJoin">
                    innerJoin
                    <span data-category="Relation" class="label label-category pull-right">Relation</span>
                </a>
            </li>
            <li class="func" data-name="insert" data-category="List">
                <a href="#insert">
                    insert
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="insertAll" data-category="List">
                <a href="#insertAll">
                    insertAll
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="intersection" data-category="Relation">
                <a href="#intersection">
                    intersection
                    <span data-category="Relation" class="label label-category pull-right">Relation</span>
                </a>
            </li>
            <li class="func" data-name="intersperse" data-category="List">
                <a href="#intersperse">
                    intersperse
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="into" data-category="List">
                <a href="#into">
                    into
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="invert" data-category="Object">
                <a href="#invert">
                    invert
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="invertObj" data-category="Object">
                <a href="#invertObj">
                    invertObj
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="invoker" data-category="Function">
                <a href="#invoker">
                    invoker
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="is" data-category="Type">
                <a href="#is">
                    is
                    <span data-category="Type" class="label label-category pull-right">Type</span>
                </a>
            </li>
            <li class="func" data-name="isEmpty" data-category="Logic">
                <a href="#isEmpty">
                    isEmpty
                    <span data-category="Logic" class="label label-category pull-right">Logic</span>
                </a>
            </li>
            <li class="func" data-name="isNil" data-category="Type">
                <a href="#isNil">
                    isNil
                    <span data-category="Type" class="label label-category pull-right">Type</span>
                </a>
            </li>
            <li class="func" data-name="join" data-category="List">
                <a href="#join">
                    join
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="juxt" data-category="Function">
                <a href="#juxt">
                    juxt
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="keys" data-category="Object">
                <a href="#keys">
                    keys
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="keysIn" data-category="Object">
                <a href="#keysIn">
                    keysIn
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="last" data-category="List">
                <a href="#last">
                    last
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="lastIndexOf" data-category="List">
                <a href="#lastIndexOf">
                    lastIndexOf
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="length" data-category="List">
                <a href="#length">
                    length
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="lens" data-category="Object">
                <a href="#lens">
                    lens
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="lensIndex" data-category="Object">
                <a href="#lensIndex">
                    lensIndex
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="lensPath" data-category="Object">
                <a href="#lensPath">
                    lensPath
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="lensProp" data-category="Object">
                <a href="#lensProp">
                    lensProp
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="lift" data-category="Function">
                <a href="#lift">
                    lift
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="liftN" data-category="Function">
                <a href="#liftN">
                    liftN
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="lt" data-category="Relation">
                <a href="#lt">
                    lt
                    <span data-category="Relation" class="label label-category pull-right">Relation</span>
                </a>
            </li>
            <li class="func" data-name="lte" data-category="Relation">
                <a href="#lte">
                    lte
                    <span data-category="Relation" class="label label-category pull-right">Relation</span>
                </a>
            </li>
            <li class="func" data-name="map" data-category="List">
                <a href="#map">
                    map
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="mapAccum" data-category="List">
                <a href="#mapAccum">
                    mapAccum
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="mapAccumRight" data-category="List">
                <a href="#mapAccumRight">
                    mapAccumRight
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="mapObjIndexed" data-category="Object">
                <a href="#mapObjIndexed">
                    mapObjIndexed
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="match" data-category="String">
                <a href="#match">
                    match
                    <span data-category="String" class="label label-category pull-right">String</span>
                </a>
            </li>
            <li class="func" data-name="mathMod" data-category="Math">
                <a href="#mathMod">
                    mathMod
                    <span data-category="Math" class="label label-category pull-right">Math</span>
                </a>
            </li>
            <li class="func" data-name="max" data-category="Relation">
                <a href="#max">
                    max
                    <span data-category="Relation" class="label label-category pull-right">Relation</span>
                </a>
            </li>
            <li class="func" data-name="maxBy" data-category="Relation">
                <a href="#maxBy">
                    maxBy
                    <span data-category="Relation" class="label label-category pull-right">Relation</span>
                </a>
            </li>
            <li class="func" data-name="mean" data-category="Math">
                <a href="#mean">
                    mean
                    <span data-category="Math" class="label label-category pull-right">Math</span>
                </a>
            </li>
            <li class="func" data-name="median" data-category="Math">
                <a href="#median">
                    median
                    <span data-category="Math" class="label label-category pull-right">Math</span>
                </a>
            </li>
            <li class="func" data-name="memoizeWith" data-category="Function">
                <a href="#memoizeWith">
                    memoizeWith
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="merge" data-category="Object">
                <a href="#merge">
                    merge
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="mergeAll" data-category="List">
                <a href="#mergeAll">
                    mergeAll
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="mergeDeepLeft" data-category="Object">
                <a href="#mergeDeepLeft">
                    mergeDeepLeft
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="mergeDeepRight" data-category="Object">
                <a href="#mergeDeepRight">
                    mergeDeepRight
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="mergeDeepWith" data-category="Object">
                <a href="#mergeDeepWith">
                    mergeDeepWith
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="mergeDeepWithKey" data-category="Object">
                <a href="#mergeDeepWithKey">
                    mergeDeepWithKey
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="mergeLeft" data-category="Object">
                <a href="#mergeLeft">
                    mergeLeft
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="mergeRight" data-category="Object">
                <a href="#mergeRight">
                    mergeRight
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="mergeWith" data-category="Object">
                <a href="#mergeWith">
                    mergeWith
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="mergeWithKey" data-category="Object">
                <a href="#mergeWithKey">
                    mergeWithKey
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="min" data-category="Relation">
                <a href="#min">
                    min
                    <span data-category="Relation" class="label label-category pull-right">Relation</span>
                </a>
            </li>
            <li class="func" data-name="minBy" data-category="Relation">
                <a href="#minBy">
                    minBy
                    <span data-category="Relation" class="label label-category pull-right">Relation</span>
                </a>
            </li>
            <li class="func" data-name="modulo" data-category="Math">
                <a href="#modulo">
                    modulo
                    <span data-category="Math" class="label label-category pull-right">Math</span>
                </a>
            </li>
            <li class="func" data-name="move" data-category="List">
                <a href="#move">
                    move
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="multiply" data-category="Math">
                <a href="#multiply">
                    multiply
                    <span data-category="Math" class="label label-category pull-right">Math</span>
                </a>
            </li>
            <li class="func" data-name="nAry" data-category="Function">
                <a href="#nAry">
                    nAry
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="negate" data-category="Math">
                <a href="#negate">
                    negate
                    <span data-category="Math" class="label label-category pull-right">Math</span>
                </a>
            </li>
            <li class="func" data-name="none" data-category="List">
                <a href="#none">
                    none
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="not" data-category="Logic">
                <a href="#not">
                    not
                    <span data-category="Logic" class="label label-category pull-right">Logic</span>
                </a>
            </li>
            <li class="func" data-name="nth" data-category="List">
                <a href="#nth">
                    nth
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="nthArg" data-category="Function">
                <a href="#nthArg">
                    nthArg
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="o" data-category="Function">
                <a href="#o">
                    o
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="objOf" data-category="Object">
                <a href="#objOf">
                    objOf
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="of" data-category="Function">
                <a href="#of">
                    of
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="omit" data-category="Object">
                <a href="#omit">
                    omit
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="once" data-category="Function">
                <a href="#once">
                    once
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="or" data-category="Logic">
                <a href="#or">
                    or
                    <span data-category="Logic" class="label label-category pull-right">Logic</span>
                </a>
            </li>
            <li class="func" data-name="otherwise" data-category="Function">
                <a href="#otherwise">
                    otherwise
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="over" data-category="Object">
                <a href="#over">
                    over
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="pair" data-category="List">
                <a href="#pair">
                    pair
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="partial" data-category="Function">
                <a href="#partial">
                    partial
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="partialRight" data-category="Function">
                <a href="#partialRight">
                    partialRight
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="partition" data-category="List">
                <a href="#partition">
                    partition
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="path" data-category="Object">
                <a href="#path">
                    path
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="pathEq" data-category="Relation">
                <a href="#pathEq">
                    pathEq
                    <span data-category="Relation" class="label label-category pull-right">Relation</span>
                </a>
            </li>
            <li class="func" data-name="pathOr" data-category="Object">
                <a href="#pathOr">
                    pathOr
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="paths" data-category="Object">
                <a href="#paths">
                    paths
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="pathSatisfies" data-category="Logic">
                <a href="#pathSatisfies">
                    pathSatisfies
                    <span data-category="Logic" class="label label-category pull-right">Logic</span>
                </a>
            </li>
            <li class="func" data-name="pick" data-category="Object">
                <a href="#pick">
                    pick
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="pickAll" data-category="Object">
                <a href="#pickAll">
                    pickAll
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="pickBy" data-category="Object">
                <a href="#pickBy">
                    pickBy
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="pipe" data-category="Function">
                <a href="#pipe">
                    pipe
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="pipeK" data-category="Function">
                <a href="#pipeK">
                    pipeK
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="pipeP" data-category="Function">
                <a href="#pipeP">
                    pipeP
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="pipeWith" data-category="Function">
                <a href="#pipeWith">
                    pipeWith
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="pluck" data-category="List">
                <a href="#pluck">
                    pluck
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="prepend" data-category="List">
                <a href="#prepend">
                    prepend
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="product" data-category="Math">
                <a href="#product">
                    product
                    <span data-category="Math" class="label label-category pull-right">Math</span>
                </a>
            </li>
            <li class="func" data-name="project" data-category="Object">
                <a href="#project">
                    project
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="prop" data-category="Object">
                <a href="#prop">
                    prop
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="propEq" data-category="Relation">
                <a href="#propEq">
                    propEq
                    <span data-category="Relation" class="label label-category pull-right">Relation</span>
                </a>
            </li>
            <li class="func" data-name="propIs" data-category="Type">
                <a href="#propIs">
                    propIs
                    <span data-category="Type" class="label label-category pull-right">Type</span>
                </a>
            </li>
            <li class="func" data-name="propOr" data-category="Object">
                <a href="#propOr">
                    propOr
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="props" data-category="Object">
                <a href="#props">
                    props
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="propSatisfies" data-category="Logic">
                <a href="#propSatisfies">
                    propSatisfies
                    <span data-category="Logic" class="label label-category pull-right">Logic</span>
                </a>
            </li>
            <li class="func" data-name="range" data-category="List">
                <a href="#range">
                    range
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="reduce" data-category="List">
                <a href="#reduce">
                    reduce
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="reduceBy" data-category="List">
                <a href="#reduceBy">
                    reduceBy
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="reduced" data-category="List">
                <a href="#reduced">
                    reduced
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="reduceRight" data-category="List">
                <a href="#reduceRight">
                    reduceRight
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="reduceWhile" data-category="List">
                <a href="#reduceWhile">
                    reduceWhile
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="reject" data-category="List">
                <a href="#reject">
                    reject
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="remove" data-category="List">
                <a href="#remove">
                    remove
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="repeat" data-category="List">
                <a href="#repeat">
                    repeat
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="replace" data-category="String">
                <a href="#replace">
                    replace
                    <span data-category="String" class="label label-category pull-right">String</span>
                </a>
            </li>
            <li class="func" data-name="reverse" data-category="List">
                <a href="#reverse">
                    reverse
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="scan" data-category="List">
                <a href="#scan">
                    scan
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="sequence" data-category="List">
                <a href="#sequence">
                    sequence
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="set" data-category="Object">
                <a href="#set">
                    set
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="slice" data-category="List">
                <a href="#slice">
                    slice
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="sort" data-category="List">
                <a href="#sort">
                    sort
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="sortBy" data-category="Relation">
                <a href="#sortBy">
                    sortBy
                    <span data-category="Relation" class="label label-category pull-right">Relation</span>
                </a>
            </li>
            <li class="func" data-name="sortWith" data-category="Relation">
                <a href="#sortWith">
                    sortWith
                    <span data-category="Relation" class="label label-category pull-right">Relation</span>
                </a>
            </li>
            <li class="func" data-name="split" data-category="String">
                <a href="#split">
                    split
                    <span data-category="String" class="label label-category pull-right">String</span>
                </a>
            </li>
            <li class="func" data-name="splitAt" data-category="List">
                <a href="#splitAt">
                    splitAt
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="splitEvery" data-category="List">
                <a href="#splitEvery">
                    splitEvery
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="splitWhen" data-category="List">
                <a href="#splitWhen">
                    splitWhen
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="startsWith" data-category="List">
                <a href="#startsWith">
                    startsWith
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="subtract" data-category="Math">
                <a href="#subtract">
                    subtract
                    <span data-category="Math" class="label label-category pull-right">Math</span>
                </a>
            </li>
            <li class="func" data-name="sum" data-category="Math">
                <a href="#sum">
                    sum
                    <span data-category="Math" class="label label-category pull-right">Math</span>
                </a>
            </li>
            <li class="func" data-name="symmetricDifference" data-category="Relation">
                <a href="#symmetricDifference">
                    symmetricDifference
                    <span data-category="Relation" class="label label-category pull-right">Relation</span>
                </a>
            </li>
            <li class="func" data-name="symmetricDifferenceWith" data-category="Relation">
                <a href="#symmetricDifferenceWith">
                    symmetricDifferenceWith
                    <span data-category="Relation" class="label label-category pull-right">Relation</span>
                </a>
            </li>
            <li class="func" data-name="T" data-category="Function">
                <a href="#T">
                    T
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="tail" data-category="List">
                <a href="#tail">
                    tail
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="take" data-category="List">
                <a href="#take">
                    take
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="takeLast" data-category="List">
                <a href="#takeLast">
                    takeLast
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="takeLastWhile" data-category="List">
                <a href="#takeLastWhile">
                    takeLastWhile
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="takeWhile" data-category="List">
                <a href="#takeWhile">
                    takeWhile
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="tap" data-category="Function">
                <a href="#tap">
                    tap
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="test" data-category="String">
                <a href="#test">
                    test
                    <span data-category="String" class="label label-category pull-right">String</span>
                </a>
            </li>
            <li class="func" data-name="thunkify" data-category="Function">
                <a href="#thunkify">
                    thunkify
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="times" data-category="List">
                <a href="#times">
                    times
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="toLower" data-category="String">
                <a href="#toLower">
                    toLower
                    <span data-category="String" class="label label-category pull-right">String</span>
                </a>
            </li>
            <li class="func" data-name="toPairs" data-category="Object">
                <a href="#toPairs">
                    toPairs
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="toPairsIn" data-category="Object">
                <a href="#toPairsIn">
                    toPairsIn
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="toString" data-category="String">
                <a href="#toString">
                    toString
                    <span data-category="String" class="label label-category pull-right">String</span>
                </a>
            </li>
            <li class="func" data-name="toUpper" data-category="String">
                <a href="#toUpper">
                    toUpper
                    <span data-category="String" class="label label-category pull-right">String</span>
                </a>
            </li>
            <li class="func" data-name="transduce" data-category="List">
                <a href="#transduce">
                    transduce
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="transpose" data-category="List">
                <a href="#transpose">
                    transpose
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="traverse" data-category="List">
                <a href="#traverse">
                    traverse
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="trim" data-category="String">
                <a href="#trim">
                    trim
                    <span data-category="String" class="label label-category pull-right">String</span>
                </a>
            </li>
            <li class="func" data-name="tryCatch" data-category="Function">
                <a href="#tryCatch">
                    tryCatch
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="type" data-category="Type">
                <a href="#type">
                    type
                    <span data-category="Type" class="label label-category pull-right">Type</span>
                </a>
            </li>
            <li class="func" data-name="unapply" data-category="Function">
                <a href="#unapply">
                    unapply
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="unary" data-category="Function">
                <a href="#unary">
                    unary
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="uncurryN" data-category="Function">
                <a href="#uncurryN">
                    uncurryN
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="unfold" data-category="List">
                <a href="#unfold">
                    unfold
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="union" data-category="Relation">
                <a href="#union">
                    union
                    <span data-category="Relation" class="label label-category pull-right">Relation</span>
                </a>
            </li>
            <li class="func" data-name="unionWith" data-category="Relation">
                <a href="#unionWith">
                    unionWith
                    <span data-category="Relation" class="label label-category pull-right">Relation</span>
                </a>
            </li>
            <li class="func" data-name="uniq" data-category="List">
                <a href="#uniq">
                    uniq
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="uniqBy" data-category="List">
                <a href="#uniqBy">
                    uniqBy
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="uniqWith" data-category="List">
                <a href="#uniqWith">
                    uniqWith
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="unless" data-category="Logic">
                <a href="#unless">
                    unless
                    <span data-category="Logic" class="label label-category pull-right">Logic</span>
                </a>
            </li>
            <li class="func" data-name="unnest" data-category="List">
                <a href="#unnest">
                    unnest
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="until" data-category="Logic">
                <a href="#until">
                    until
                    <span data-category="Logic" class="label label-category pull-right">Logic</span>
                </a>
            </li>
            <li class="func" data-name="update" data-category="List">
                <a href="#update">
                    update
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="useWith" data-category="Function">
                <a href="#useWith">
                    useWith
                    <span data-category="Function" class="label label-category pull-right">Function</span>
                </a>
            </li>
            <li class="func" data-name="values" data-category="Object">
                <a href="#values">
                    values
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="valuesIn" data-category="Object">
                <a href="#valuesIn">
                    valuesIn
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="view" data-category="Object">
                <a href="#view">
                    view
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="when" data-category="Logic">
                <a href="#when">
                    when
                    <span data-category="Logic" class="label label-category pull-right">Logic</span>
                </a>
            </li>
            <li class="func" data-name="where" data-category="Object">
                <a href="#where">
                    where
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="whereEq" data-category="Object">
                <a href="#whereEq">
                    whereEq
                    <span data-category="Object" class="label label-category pull-right">Object</span>
                </a>
            </li>
            <li class="func" data-name="without" data-category="List">
                <a href="#without">
                    without
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="xor" data-category="Logic">
                <a href="#xor">
                    xor
                    <span data-category="Logic" class="label label-category pull-right">Logic</span>
                </a>
            </li>
            <li class="func" data-name="xprod" data-category="List">
                <a href="#xprod">
                    xprod
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="zip" data-category="List">
                <a href="#zip">
                    zip
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="zipObj" data-category="List">
                <a href="#zipObj">
                    zipObj
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
            <li class="func" data-name="zipWith" data-category="List">
                <a href="#zipWith">
                    zipWith
                    <span data-category="List" class="label label-category pull-right">List</span>
                </a>
            </li>
        </ul>
    </aside>
    <main class="container-fluid">
        <div id="__" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#__">__</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/__.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>





            <p><small>Added in v0.6.0</small></p>

            <div class="description"><p>A special placeholder value used to specify "gaps" within curried functions,
allowing partial application of any combination of arguments, regardless of
their positions.</p>
<p>If <code>g</code> is a curried ternary function and <code>_</code> is <code>R.__</code>, the following are
equivalent:</p>
<ul>
<li><code>g(1, 2, 3)</code></li>
<li><code>g(_, 2, 3)(1)</code></li>
<li><code>g(_, _, 3)(1)(2)</code></li>
<li><code>g(_, _, 3)(1, 2)</code></li>
<li><code>g(_, 2, _)(1, 3)</code></li>
<li><code>g(_, 2)(1)(3)</code></li>
<li><code>g(_, 2)(1, 3)</code></li>
<li><code>g(_, 2)(_, 3)(1)</code></li>
</ul>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> greet = R.replace(<span class="hljs-string">'{name}'</span>, R.__, <span class="hljs-string">'Hello, {name}!'</span>);
greet(<span class="hljs-string">'Alice'</span>); <span class="hljs-comment">//=&gt; 'Hello, Alice!'</span></code></pre>
        </section>
        <div id="add" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#add">add</a>
                <span class="pull-right">
                        <span class="label label-category">Math</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/add.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → Number → Number</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">a</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">b</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Number</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Adds two values.</p>
</div>



            <div class="see">
                See also
                <a href="#subtract">subtract</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.add(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>);       <span class="hljs-comment">//=&gt;  5</span>
R.add(<span class="hljs-number">7</span>)(<span class="hljs-number">10</span>);      <span class="hljs-comment">//=&gt; 17</span></code></pre>
        </section>
        <div id="addIndex" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#addIndex">addIndex</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/addIndex.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((a … → b) … → [a] → *) → ((a …, Int, [a] → b) … → [a] → *)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>A list iteration function that does not pass index or list to its callback</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">An altered list iteration function that passes (item, index, list) to its callback</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.15.0</small></p>

            <div class="description"><p>Creates a new list iteration function from an existing one by adding two new
parameters to its callback function: the current index, and the entire list.</p>
<p>This would turn, for instance, <a href="#map"><code>R.map</code></a> function into one that
more closely resembles <code>Array.prototype.map</code>. Note that this will only work
for functions in which the iteration callback function is the first
parameter, and where the list is the last parameter. (This latter might be
unimportant if the list parameter is not used.)</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> mapIndexed = R.addIndex(R.map);
mapIndexed(<span class="hljs-function">(<span class="hljs-params">val, idx</span>) =&gt;</span> idx + <span class="hljs-string">'-'</span> + val, [<span class="hljs-string">'f'</span>, <span class="hljs-string">'o'</span>, <span class="hljs-string">'o'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'a'</span>, <span class="hljs-string">'r'</span>]);
<span class="hljs-comment">//=&gt; ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']</span></code></pre>
        </section>
        <div id="adjust" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#adjust">adjust</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/adjust.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → (a → a) → [a] → [a]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">idx</span>
                            <span class="description"><p>The index.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function to apply.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>An array-like object whose value
       at the supplied index will be replaced.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">A copy of the supplied array-like object with
        the element at index 'idx' replaced with the value
        returned by applying 'fn' to the existing element.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.14.0</small></p>

            <div class="description"><p>Applies a function to the value at the given index of an array, returning a
new copy of the array with the element at the given index replaced with the
result of the function application.</p>
</div>



            <div class="see">
                See also
                <a href="#update">update</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.adjust(<span class="hljs-number">1</span>, R.toUpper, [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>, <span class="hljs-string">'d'</span>]);      <span class="hljs-comment">//=&gt; ['a', 'B', 'c', 'd']</span>
R.adjust(<span class="hljs-number">-1</span>, R.toUpper, [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>, <span class="hljs-string">'d'</span>]);     <span class="hljs-comment">//=&gt; ['a', 'b', 'c', 'D']</span></code></pre>
        </section>
        <div id="all" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#all">all</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/all.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(a → Boolean) → [a] → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The predicate function.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The array to consider.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description">'true' if the predicate is satisfied by every element, 'false'
        otherwise.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns <code>true</code> if all elements of the list match the predicate, <code>false</code> if
there are any that don't.</p>
<p>Dispatches to the <code>all</code> method of the second argument, if present.</p>
<p>Acts as a transducer if a transformer is given in list position.</p>
</div>



            <div class="see">
                See also
                <a href="#any">any</a>,
                <a href="#none">none</a>,
                <a href="#transduce">transduce</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> equals3 = R.equals(<span class="hljs-number">3</span>);
R.all(equals3)([<span class="hljs-number">3</span>, <span class="hljs-number">3</span>, <span class="hljs-number">3</span>, <span class="hljs-number">3</span>]); <span class="hljs-comment">//=&gt; true</span>
R.all(equals3)([<span class="hljs-number">3</span>, <span class="hljs-number">3</span>, <span class="hljs-number">1</span>, <span class="hljs-number">3</span>]); <span class="hljs-comment">//=&gt; false</span></code></pre>
        </section>
        <div id="allPass" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#allPass">allPass</a>
                <span class="pull-right">
                        <span class="label label-category">Logic</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/allPass.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[(*… → Boolean)] → (*… → Boolean)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">predicates</span>
                            <span class="description"><p>An array of predicates to check</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">The combined predicate</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.9.0</small></p>

            <div class="description"><p>Takes a list of predicates and returns a predicate that returns true for a
given list of arguments if every one of the provided predicates is satisfied
by those arguments.</p>
<p>The function returned is a curried function whose arity matches that of the
highest-arity predicate.</p>
</div>



            <div class="see">
                See also
                <a href="#anyPass">anyPass</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> isQueen = R.propEq(<span class="hljs-string">'rank'</span>, <span class="hljs-string">'Q'</span>);
<span class="hljs-keyword">const</span> isSpade = R.propEq(<span class="hljs-string">'suit'</span>, <span class="hljs-string">'♠︎'</span>);
<span class="hljs-keyword">const</span> isQueenOfSpades = R.allPass([isQueen, isSpade]);

isQueenOfSpades({<span class="hljs-attr">rank</span>: <span class="hljs-string">'Q'</span>, <span class="hljs-attr">suit</span>: <span class="hljs-string">'♣︎'</span>}); <span class="hljs-comment">//=&gt; false</span>
isQueenOfSpades({<span class="hljs-attr">rank</span>: <span class="hljs-string">'Q'</span>, <span class="hljs-attr">suit</span>: <span class="hljs-string">'♠︎'</span>}); <span class="hljs-comment">//=&gt; true</span></code></pre>
        </section>
        <div id="always" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#always">always</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/always.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>a → (* → a)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">val</span>
                            <span class="description"><p>The value to wrap in a function</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">A Function :: * -&gt; val.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns a function that always returns the given value. Note that for
non-primitives the value returned is a reference to the original value.</p>
<p>This function is known as <code>const</code>, <code>constant</code>, or <code>K</code> (for K combinator) in
other languages and libraries.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> t = R.always(<span class="hljs-string">'Tee'</span>);
t(); <span class="hljs-comment">//=&gt; 'Tee'</span></code></pre>
        </section>
        <div id="and" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#and">and</a>
                <span class="pull-right">
                        <span class="label label-category">Logic</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/and.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>a → b → a | b</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">a</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">b</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Any</span>
                        <span class="description">the first argument if it is falsy, otherwise the second argument.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns <code>true</code> if both arguments are <code>true</code>; <code>false</code> otherwise.</p>
</div>



            <div class="see">
                See also
                <a href="#both">both</a>,
                <a href="#xor">xor</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.and(<span class="hljs-literal">true</span>, <span class="hljs-literal">true</span>); <span class="hljs-comment">//=&gt; true</span>
R.and(<span class="hljs-literal">true</span>, <span class="hljs-literal">false</span>); <span class="hljs-comment">//=&gt; false</span>
R.and(<span class="hljs-literal">false</span>, <span class="hljs-literal">true</span>); <span class="hljs-comment">//=&gt; false</span>
R.and(<span class="hljs-literal">false</span>, <span class="hljs-literal">false</span>); <span class="hljs-comment">//=&gt; false</span></code></pre>
        </section>
        <div id="andThen" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#andThen">andThen</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/andThen.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(a → b) → (Promise e a) → (Promise e b)</code></div>
            <div><code>(a → (Promise e b)) → (Promise e a) → (Promise e b)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">onSuccess</span>
                            <span class="description"><p>The function to apply. Can return a value or a promise of a value.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">p</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Promise</span>
                        <span class="description">The result of calling 'p.then(onSuccess)'</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.27.0</small></p>

            <div class="description"><p>Returns the result of applying the onSuccess function to the value inside
a successfully resolved promise. This is useful for working with promises
inside function compositions.</p>
</div>



            <div class="see">
                See also
                <a href="#otherwise">otherwise</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">var</span> makeQuery = <span class="hljs-function">(<span class="hljs-params">email</span>) =&gt;</span> ({ <span class="hljs-attr">query</span>: { email }});

<span class="hljs-comment">//getMemberName :: String -&gt; Promise ({firstName, lastName})</span>
<span class="hljs-keyword">var</span> getMemberName = R.pipe(
  makeQuery,
  fetchMember,
  R.andThen(R.pick([<span class="hljs-string">'firstName'</span>, <span class="hljs-string">'lastName'</span>]))
);</code></pre>
        </section>
        <div id="any" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#any">any</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/any.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(a → Boolean) → [a] → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The predicate function.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The array to consider.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description">'true' if the predicate is satisfied by at least one element, 'false'
        otherwise.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns <code>true</code> if at least one of the elements of the list match the predicate,
<code>false</code> otherwise.</p>
<p>Dispatches to the <code>any</code> method of the second argument, if present.</p>
<p>Acts as a transducer if a transformer is given in list position.</p>
</div>



            <div class="see">
                See also
                <a href="#all">all</a>,
                <a href="#none">none</a>,
                <a href="#transduce">transduce</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> lessThan0 = R.flip(R.lt)(<span class="hljs-number">0</span>);
<span class="hljs-keyword">const</span> lessThan2 = R.flip(R.lt)(<span class="hljs-number">2</span>);
R.any(lessThan0)([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]); <span class="hljs-comment">//=&gt; false</span>
R.any(lessThan2)([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]); <span class="hljs-comment">//=&gt; true</span></code></pre>
        </section>
        <div id="anyPass" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#anyPass">anyPass</a>
                <span class="pull-right">
                        <span class="label label-category">Logic</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/anyPass.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[(*… → Boolean)] → (*… → Boolean)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">predicates</span>
                            <span class="description"><p>An array of predicates to check</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">The combined predicate</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.9.0</small></p>

            <div class="description"><p>Takes a list of predicates and returns a predicate that returns true for a
given list of arguments if at least one of the provided predicates is
satisfied by those arguments.</p>
<p>The function returned is a curried function whose arity matches that of the
highest-arity predicate.</p>
</div>



            <div class="see">
                See also
                <a href="#allPass">allPass</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> isClub = R.propEq(<span class="hljs-string">'suit'</span>, <span class="hljs-string">'♣'</span>);
<span class="hljs-keyword">const</span> isSpade = R.propEq(<span class="hljs-string">'suit'</span>, <span class="hljs-string">'♠'</span>);
<span class="hljs-keyword">const</span> isBlackCard = R.anyPass([isClub, isSpade]);

isBlackCard({<span class="hljs-attr">rank</span>: <span class="hljs-string">'10'</span>, <span class="hljs-attr">suit</span>: <span class="hljs-string">'♣'</span>}); <span class="hljs-comment">//=&gt; true</span>
isBlackCard({<span class="hljs-attr">rank</span>: <span class="hljs-string">'Q'</span>, <span class="hljs-attr">suit</span>: <span class="hljs-string">'♠'</span>}); <span class="hljs-comment">//=&gt; true</span>
isBlackCard({<span class="hljs-attr">rank</span>: <span class="hljs-string">'Q'</span>, <span class="hljs-attr">suit</span>: <span class="hljs-string">'♦'</span>}); <span class="hljs-comment">//=&gt; false</span></code></pre>
        </section>
        <div id="ap" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#ap">ap</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/ap.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[a → b] → [a] → [b]</code></div>
            <div><code>Apply f =&gt; f (a → b) → f a → f b</code></div>
            <div><code>(r → a → b) → (r → a) → (r → b)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">applyF</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">applyX</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.3.0</small></p>

            <div class="description"><p>ap applies a list of functions to a list of values.</p>
<p>Dispatches to the <code>ap</code> method of the second argument, if present. Also
treats curried functions as applicatives.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.ap([R.multiply(<span class="hljs-number">2</span>), R.add(<span class="hljs-number">3</span>)], [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>]); <span class="hljs-comment">//=&gt; [2, 4, 6, 4, 5, 6]</span>
R.ap([R.concat(<span class="hljs-string">'tasty '</span>), R.toUpper], [<span class="hljs-string">'pizza'</span>, <span class="hljs-string">'salad'</span>]); <span class="hljs-comment">//=&gt; ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]</span>

<span class="hljs-comment">// R.ap can also be used as S combinator</span>
<span class="hljs-comment">// when only two functions are passed</span>
R.ap(R.concat, R.toUpper)(<span class="hljs-string">'Ramda'</span>) <span class="hljs-comment">//=&gt; 'RamdaRAMDA'</span></code></pre>
        </section>
        <div id="aperture" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#aperture">aperture</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/aperture.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → [a] → [[a]]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">n</span>
                            <span class="description"><p>The size of the tuples to create</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The list to split into <code>n</code>-length tuples</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">The resulting list of 'n'-length tuples</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.12.0</small></p>

            <div class="description"><p>Returns a new list, composed of n-tuples of consecutive elements. If <code>n</code> is
greater than the length of the list, an empty list is returned.</p>
<p>Acts as a transducer if a transformer is given in list position.</p>
</div>



            <div class="see">
                See also
                <a href="#transduce">transduce</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.aperture(<span class="hljs-number">2</span>, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>]); <span class="hljs-comment">//=&gt; [[1, 2], [2, 3], [3, 4], [4, 5]]</span>
R.aperture(<span class="hljs-number">3</span>, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>]); <span class="hljs-comment">//=&gt; [[1, 2, 3], [2, 3, 4], [3, 4, 5]]</span>
R.aperture(<span class="hljs-number">7</span>, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>]); <span class="hljs-comment">//=&gt; []</span></code></pre>
        </section>
        <div id="append" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#append">append</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/append.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>a → [a] → [a]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">el</span>
                            <span class="description"><p>The element to add to the end of the new list.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The list of elements to add a new item to.
       list.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">A new list containing the elements of the old list followed by 'el'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns a new list containing the contents of the given list, followed by
the given element.</p>
</div>



            <div class="see">
                See also
                <a href="#prepend">prepend</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.append(<span class="hljs-string">'tests'</span>, [<span class="hljs-string">'write'</span>, <span class="hljs-string">'more'</span>]); <span class="hljs-comment">//=&gt; ['write', 'more', 'tests']</span>
R.append(<span class="hljs-string">'tests'</span>, []); <span class="hljs-comment">//=&gt; ['tests']</span>
R.append([<span class="hljs-string">'tests'</span>], [<span class="hljs-string">'write'</span>, <span class="hljs-string">'more'</span>]); <span class="hljs-comment">//=&gt; ['write', 'more', ['tests']]</span></code></pre>
        </section>
        <div id="apply" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#apply">apply</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/apply.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(*… → a) → [*] → a</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function which will be called with <code>args</code></p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">args</span>
                            <span class="description"><p>The arguments to call <code>fn</code> with</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description">result The result, equivalent to 'fn(...args)'</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.7.0</small></p>

            <div class="description"><p>Applies function <code>fn</code> to the argument list <code>args</code>. This is useful for
creating a fixed-arity function from a variadic function. <code>fn</code> should be a
bound function if context is significant.</p>
</div>



            <div class="see">
                See also
                <a href="#call">call</a>,
                <a href="#unapply">unapply</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> nums = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">-99</span>, <span class="hljs-number">42</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>];
R.apply(<span class="hljs-built_in">Math</span>.max, nums); <span class="hljs-comment">//=&gt; 42</span></code></pre>
        </section>
        <div id="applySpec" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#applySpec">applySpec</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/applySpec.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>{k: ((a, b, …, m) → v)} → ((a, b, …, m) → {k: v})</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">spec</span>
                            <span class="description"><p>an object recursively mapping properties to functions for
       producing the values for these properties.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">A function that returns an object of the same structure
as 'spec', with each property set to the value returned by calling its
associated function with the supplied arguments.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.20.0</small></p>

            <div class="description"><p>Given a spec object recursively mapping properties to functions, creates a
function producing an object of the same structure, by mapping each property
to the result of calling its associated function with the supplied arguments.</p>
</div>



            <div class="see">
                See also
                <a href="#converge">converge</a>,
                <a href="#juxt">juxt</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> getMetrics = R.applySpec({
  <span class="hljs-attr">sum</span>: R.add,
  <span class="hljs-attr">nested</span>: { <span class="hljs-attr">mul</span>: R.multiply }
});
getMetrics(<span class="hljs-number">2</span>, <span class="hljs-number">4</span>); <span class="hljs-comment">// =&gt; { sum: 6, nested: { mul: 8 } }</span></code></pre>
        </section>
        <div id="applyTo" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#applyTo">applyTo</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/applyTo.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>a → (a → b) → b</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">x</span>
                            <span class="description"><p>The value</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">f</span>
                            <span class="description"><p>The function to apply</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description">The result of applying 'f' to 'x'</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.25.0</small></p>

            <div class="description"><p>Takes a value and applies a function to it.</p>
<p>This function is also known as the <code>thrush</code> combinator.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> t42 = R.applyTo(<span class="hljs-number">42</span>);
t42(R.identity); <span class="hljs-comment">//=&gt; 42</span>
t42(R.add(<span class="hljs-number">1</span>)); <span class="hljs-comment">//=&gt; 43</span></code></pre>
        </section>
        <div id="ascend" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#ascend">ascend</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/ascend.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Ord b =&gt; (a → b) → a → a → Number</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>A function of arity one that returns a value that can be compared</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">a</span>
                            <span class="description"><p>The first item to be compared.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">b</span>
                            <span class="description"><p>The second item to be compared.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Number</span>
                        <span class="description">'-1' if fn(a) &lt; fn(b), '1' if fn(b) &lt; fn(a), otherwise '0'</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.23.0</small></p>

            <div class="description"><p>Makes an ascending comparator function out of a function that returns a value
that can be compared with <code>&lt;</code> and <code>&gt;</code>.</p>
</div>



            <div class="see">
                See also
                <a href="#descend">descend</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> byAge = R.ascend(R.prop(<span class="hljs-string">'age'</span>));
<span class="hljs-keyword">const</span> people = [
  { <span class="hljs-attr">name</span>: <span class="hljs-string">'Emma'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">70</span> },
  { <span class="hljs-attr">name</span>: <span class="hljs-string">'Peter'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">78</span> },
  { <span class="hljs-attr">name</span>: <span class="hljs-string">'Mikhail'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">62</span> },
];
<span class="hljs-keyword">const</span> peopleByYoungestFirst = R.sort(byAge, people);
  <span class="hljs-comment">//=&gt; [{ name: 'Mikhail', age: 62 },{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }]</span></code></pre>
        </section>
        <div id="assoc" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#assoc">assoc</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/assoc.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>String → a → {k: v} → {k: v}</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">prop</span>
                            <span class="description"><p>The property name to set</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">val</span>
                            <span class="description"><p>The new value</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"><p>The object to clone</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description">A new object equivalent to the original except for the changed property.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.8.0</small></p>

            <div class="description"><p>Makes a shallow clone of an object, setting or overriding the specified
property with the given value. Note that this copies and flattens prototype
properties onto the new object as well. All non-primitive properties are
copied by reference.</p>
</div>



            <div class="see">
                See also
                <a href="#dissoc">dissoc</a>,
                <a href="#pick">pick</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.assoc(<span class="hljs-string">'c'</span>, <span class="hljs-number">3</span>, {<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>}); <span class="hljs-comment">//=&gt; {a: 1, b: 2, c: 3}</span></code></pre>
        </section>
        <div id="assocPath" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#assocPath">assocPath</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/assocPath.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[Idx] → a → {a} → {a}</code></div>

            <div><code>Idx = String | Int</code></div>

            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">path</span>
                            <span class="description"><p>the path to set</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">val</span>
                            <span class="description"><p>The new value</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"><p>The object to clone</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description">A new object equivalent to the original except along the specified path.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.8.0</small></p>

            <div class="description"><p>Makes a shallow clone of an object, setting or overriding the nodes required
to create the given path, and placing the specific value at the tail end of
that path. Note that this copies and flattens prototype properties onto the
new object as well. All non-primitive properties are copied by reference.</p>
</div>



            <div class="see">
                See also
                <a href="#dissocPath">dissocPath</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.assocPath([<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>], <span class="hljs-number">42</span>, {<span class="hljs-attr">a</span>: {<span class="hljs-attr">b</span>: {<span class="hljs-attr">c</span>: <span class="hljs-number">0</span>}}}); <span class="hljs-comment">//=&gt; {a: {b: {c: 42}}}</span>

<span class="hljs-comment">// Any missing or non-object keys in path will be overridden</span>
R.assocPath([<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>], <span class="hljs-number">42</span>, {<span class="hljs-attr">a</span>: <span class="hljs-number">5</span>}); <span class="hljs-comment">//=&gt; {a: {b: {c: 42}}}</span></code></pre>
        </section>
        <div id="binary" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#binary">binary</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/binary.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(* → c) → (a, b → c)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function to wrap.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">A new function wrapping 'fn'. The new function is guaranteed to be of
        arity 2.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.2.0</small></p>

            <div class="description"><p>Wraps a function of any arity (including nullary) in a function that accepts
exactly 2 parameters. Any extraneous parameters will not be passed to the
supplied function.</p>
</div>



            <div class="see">
                See also
                <a href="#nAry">nAry</a>,
                <a href="#unary">unary</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> takesThreeArgs = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">a, b, c</span>) </span>{
  <span class="hljs-keyword">return</span> [a, b, c];
};
takesThreeArgs.length; <span class="hljs-comment">//=&gt; 3</span>
takesThreeArgs(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">//=&gt; [1, 2, 3]</span>

<span class="hljs-keyword">const</span> takesTwoArgs = R.binary(takesThreeArgs);
takesTwoArgs.length; <span class="hljs-comment">//=&gt; 2</span>
<span class="hljs-comment">// Only 2 arguments are passed to the wrapped function</span>
takesTwoArgs(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">//=&gt; [1, 2, undefined]</span></code></pre>
        </section>
        <div id="bind" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#bind">bind</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/bind.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(* → *) → {*} → (* → *)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function to bind to context</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">thisObj</span>
                            <span class="description"><p>The context to bind <code>fn</code> to</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">A function that will execute in the context of 'thisObj'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.6.0</small></p>

            <div class="description"><p>Creates a function that is bound to a context.
Note: <code>R.bind</code> does not provide the additional argument-binding capabilities of
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind">Function.prototype.bind</a>.</p>
</div>



            <div class="see">
                See also
                <a href="#partial">partial</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> log = R.bind(<span class="hljs-built_in">console</span>.log, <span class="hljs-built_in">console</span>);
R.pipe(R.assoc(<span class="hljs-string">'a'</span>, <span class="hljs-number">2</span>), R.tap(log), R.assoc(<span class="hljs-string">'a'</span>, <span class="hljs-number">3</span>))({<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>}); <span class="hljs-comment">//=&gt; {a: 3}</span>
<span class="hljs-comment">// logs {a: 2}</span></code></pre>
        </section>
        <div id="both" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#both">both</a>
                <span class="pull-right">
                        <span class="label label-category">Logic</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/both.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(*… → Boolean) → (*… → Boolean) → (*… → Boolean)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">f</span>
                            <span class="description"><p>A predicate</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">g</span>
                            <span class="description"><p>Another predicate</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">a function that applies its arguments to 'f' and 'g' and '&amp;&amp;'s their outputs together.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.12.0</small></p>

            <div class="description"><p>A function which calls the two provided functions and returns the <code>&amp;&amp;</code>
of the results.
It returns the result of the first function if it is false-y and the result
of the second function otherwise. Note that this is short-circuited,
meaning that the second function will not be invoked if the first returns a
false-y value.</p>
<p>In addition to functions, <code>R.both</code> also accepts any fantasy-land compatible
applicative functor.</p>
</div>



            <div class="see">
                See also
                <a href="#and">and</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> gt10 = R.gt(R.__, <span class="hljs-number">10</span>)
<span class="hljs-keyword">const</span> lt20 = R.lt(R.__, <span class="hljs-number">20</span>)
<span class="hljs-keyword">const</span> f = R.both(gt10, lt20);
f(<span class="hljs-number">15</span>); <span class="hljs-comment">//=&gt; true</span>
f(<span class="hljs-number">30</span>); <span class="hljs-comment">//=&gt; false</span>

R.both(Maybe.Just(<span class="hljs-literal">false</span>), Maybe.Just(<span class="hljs-number">55</span>)); <span class="hljs-comment">// =&gt; Maybe.Just(false)</span>
R.both([<span class="hljs-literal">false</span>, <span class="hljs-literal">false</span>, <span class="hljs-string">'a'</span>], [<span class="hljs-number">11</span>]); <span class="hljs-comment">//=&gt; [false, false, 11]</span></code></pre>
        </section>
        <div id="call" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#call">call</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/call.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(*… → a),*… → a</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function to apply to the remaining arguments.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">args</span>
                            <span class="description"><p>Any number of positional arguments.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.9.0</small></p>

            <div class="description"><p>Returns the result of calling its first argument with the remaining
arguments. This is occasionally useful as a converging function for
<a href="#converge"><code>R.converge</code></a>: the first branch can produce a function while the
remaining branches produce values to be passed to that function as its
arguments.</p>
</div>



            <div class="see">
                See also
                <a href="#apply">apply</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.call(R.add, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>); <span class="hljs-comment">//=&gt; 3</span>

<span class="hljs-keyword">const</span> indentN = R.pipe(R.repeat(<span class="hljs-string">' '</span>),
                     R.join(<span class="hljs-string">''</span>),
                     R.replace(<span class="hljs-regexp">/^(?!$)/gm</span>));

<span class="hljs-keyword">const</span> format = R.converge(R.call, [
                            R.pipe(R.prop(<span class="hljs-string">'indent'</span>), indentN),
                            R.prop(<span class="hljs-string">'value'</span>)
                        ]);

format({<span class="hljs-attr">indent</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">'foo\nbar\nbaz\n'</span>}); <span class="hljs-comment">//=&gt; '  foo\n  bar\n  baz\n'</span></code></pre>
        </section>
        <div id="chain" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#chain">chain</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/chain.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Chain m =&gt; (a → m b) → m a → m b</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function to map with</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The list to map over</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">The result of flat-mapping 'list' with 'fn'</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.3.0</small></p>

            <div class="description"><p><code>chain</code> maps a function over a list and concatenates the results. <code>chain</code>
is also known as <code>flatMap</code> in some libraries.</p>
<p>Dispatches to the <code>chain</code> method of the second argument, if present,
according to the <a href="https://github.com/fantasyland/fantasy-land#chain">FantasyLand Chain spec</a>.</p>
<p>If second argument is a function, <code>chain(f, g)(x)</code> is equivalent to <code>f(g(x), x)</code>.</p>
<p>Acts as a transducer if a transformer is given in list position.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> duplicate = <span class="hljs-function"><span class="hljs-params">n</span> =&gt;</span> [n, n];
R.chain(duplicate, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]); <span class="hljs-comment">//=&gt; [1, 1, 2, 2, 3, 3]</span>

R.chain(R.append, R.head)([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]); <span class="hljs-comment">//=&gt; [1, 2, 3, 1]</span></code></pre>
        </section>
        <div id="clamp" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#clamp">clamp</a>
                <span class="pull-right">
                        <span class="label label-category">Relation</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/clamp.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Ord a =&gt; a → a → a → a</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">minimum</span>
                            <span class="description"><p>The lower limit of the clamp (inclusive)</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">maximum</span>
                            <span class="description"><p>The upper limit of the clamp (inclusive)</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">value</span>
                            <span class="description"><p>Value to be clamped</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Number</span>
                        <span class="description">Returns 'minimum' when 'val &lt; minimum', 'maximum' when 'val &gt; maximum', returns 'val' otherwise</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.20.0</small></p>

            <div class="description"><p>Restricts a number to be within a range.</p>
<p>Also works for other ordered types such as Strings and Dates.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.clamp(<span class="hljs-number">1</span>, <span class="hljs-number">10</span>, <span class="hljs-number">-5</span>) <span class="hljs-comment">// =&gt; 1</span>
R.clamp(<span class="hljs-number">1</span>, <span class="hljs-number">10</span>, <span class="hljs-number">15</span>) <span class="hljs-comment">// =&gt; 10</span>
R.clamp(<span class="hljs-number">1</span>, <span class="hljs-number">10</span>, <span class="hljs-number">4</span>)  <span class="hljs-comment">// =&gt; 4</span></code></pre>
        </section>
        <div id="clone" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#clone">clone</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/clone.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>{*} → {*}</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">value</span>
                            <span class="description"><p>The object or array to clone</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description">A deeply cloned copy of 'val'</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Creates a deep copy of the value which may contain (nested) <code>Array</code>s and
<code>Object</code>s, <code>Number</code>s, <code>String</code>s, <code>Boolean</code>s and <code>Date</code>s. <code>Function</code>s are
assigned by reference rather than copied</p>
<p>Dispatches to a <code>clone</code> method if present.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> objects = [{}, {}, {}];
<span class="hljs-keyword">const</span> objectsClone = R.clone(objects);
objects === objectsClone; <span class="hljs-comment">//=&gt; false</span>
objects[<span class="hljs-number">0</span>] === objectsClone[<span class="hljs-number">0</span>]; <span class="hljs-comment">//=&gt; false</span></code></pre>
        </section>
        <div id="comparator" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#comparator">comparator</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/comparator.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((a, b) → Boolean) → ((a, b) → Number)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">pred</span>
                            <span class="description"><p>A predicate function of arity two which will return <code>true</code> if the first argument
is less than the second, <code>false</code> otherwise</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">A Function :: a -&gt; b -&gt; Int that returns '-1' if a &lt; b, '1' if b &lt; a, otherwise '0'</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Makes a comparator function out of a function that reports whether the first
element is less than the second.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> byAge = R.comparator(<span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> a.age &lt; b.age);
<span class="hljs-keyword">const</span> people = [
  { <span class="hljs-attr">name</span>: <span class="hljs-string">'Emma'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">70</span> },
  { <span class="hljs-attr">name</span>: <span class="hljs-string">'Peter'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">78</span> },
  { <span class="hljs-attr">name</span>: <span class="hljs-string">'Mikhail'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">62</span> },
];
<span class="hljs-keyword">const</span> peopleByIncreasingAge = R.sort(byAge, people);
  <span class="hljs-comment">//=&gt; [{ name: 'Mikhail', age: 62 },{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }]</span></code></pre>
        </section>
        <div id="complement" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#complement">complement</a>
                <span class="pull-right">
                        <span class="label label-category">Logic</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/complement.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(*… → *) → (*… → Boolean)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">f</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.12.0</small></p>

            <div class="description"><p>Takes a function <code>f</code> and returns a function <code>g</code> such that if called with the same arguments
when <code>f</code> returns a "truthy" value, <code>g</code> returns <code>false</code> and when <code>f</code> returns a "falsy" value <code>g</code> returns <code>true</code>.</p>
<p><code>R.complement</code> may be applied to any functor</p>
</div>



            <div class="see">
                See also
                <a href="#not">not</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> isNotNil = R.complement(R.isNil);
isNil(<span class="hljs-literal">null</span>); <span class="hljs-comment">//=&gt; true</span>
isNotNil(<span class="hljs-literal">null</span>); <span class="hljs-comment">//=&gt; false</span>
isNil(<span class="hljs-number">7</span>); <span class="hljs-comment">//=&gt; false</span>
isNotNil(<span class="hljs-number">7</span>); <span class="hljs-comment">//=&gt; true</span></code></pre>
        </section>
        <div id="compose" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#compose">compose</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/compose.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((y → z), (x → y), …, (o → p), ((a, b, …, n) → o)) → ((a, b, …, n) → z)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">...functions</span>
                            <span class="description"><p>The functions to compose</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Performs right-to-left function composition. The last argument may have
any arity; the remaining arguments must be unary.</p>
<p><strong>Note:</strong> The result of compose is not automatically curried.</p>
</div>



            <div class="see">
                See also
                <a href="#pipe">pipe</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> classyGreeting = <span class="hljs-function">(<span class="hljs-params">firstName, lastName</span>) =&gt;</span> <span class="hljs-string">"The name's "</span> + lastName + <span class="hljs-string">", "</span> + firstName + <span class="hljs-string">" "</span> + lastName
<span class="hljs-keyword">const</span> yellGreeting = R.compose(R.toUpper, classyGreeting);
yellGreeting(<span class="hljs-string">'James'</span>, <span class="hljs-string">'Bond'</span>); <span class="hljs-comment">//=&gt; "THE NAME'S BOND, JAMES BOND"</span>

R.compose(<span class="hljs-built_in">Math</span>.abs, R.add(<span class="hljs-number">1</span>), R.multiply(<span class="hljs-number">2</span>))(<span class="hljs-number">-4</span>) <span class="hljs-comment">//=&gt; 7</span></code></pre>
        </section>
        <div id="composeK" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#composeK">composeK</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/composeK.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>

            <div class="deprecated">
                Deprecated since v0.26.0
            </div>

            <div><code>Chain m =&gt; ((y → m z), (x → m y), …, (a → m b)) → (a → m z)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">...functions</span>
                            <span class="description"><p>The functions to compose</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.16.0</small></p>

            <div class="description"><p>Returns the right-to-left Kleisli composition of the provided functions,
each of which must return a value of a type supported by <a href="#chain"><code>chain</code></a>.</p>
<p><code>R.composeK(h, g, f)</code> is equivalent to <code>R.compose(R.chain(h), R.chain(g), f)</code>.</p>
</div>



            <div class="see">
                See also
                <a href="#pipeK">pipeK</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-comment">//  get :: String -&gt; Object -&gt; Maybe *</span>
 <span class="hljs-keyword">const</span> get = R.curry(<span class="hljs-function">(<span class="hljs-params">propName, obj</span>) =&gt;</span> Maybe(obj[propName]))

 <span class="hljs-comment">//  getStateCode :: Maybe String -&gt; Maybe String</span>
 <span class="hljs-keyword">const</span> getStateCode = R.composeK(
   R.compose(Maybe.of, R.toUpper),
   get(<span class="hljs-string">'state'</span>),
   get(<span class="hljs-string">'address'</span>),
   get(<span class="hljs-string">'user'</span>),
 );
 getStateCode({<span class="hljs-string">"user"</span>:{<span class="hljs-string">"address"</span>:{<span class="hljs-string">"state"</span>:<span class="hljs-string">"ny"</span>}}}); <span class="hljs-comment">//=&gt; Maybe.Just("NY")</span>
 getStateCode({}); <span class="hljs-comment">//=&gt; Maybe.Nothing()</span></code></pre>
        </section>
        <div id="composeP" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#composeP">composeP</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/composeP.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>

            <div class="deprecated">
                Deprecated since v0.26.0
            </div>

            <div><code>((y → Promise z), (x → Promise y), …, (a → Promise b)) → (a → Promise z)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">functions</span>
                            <span class="description"><p>The functions to compose</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.10.0</small></p>

            <div class="description"><p>Performs right-to-left composition of one or more Promise-returning
functions. The last arguments may have any arity; the remaining
arguments must be unary.</p>
</div>



            <div class="see">
                See also
                <a href="#pipeP">pipeP</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> db = {
  <span class="hljs-attr">users</span>: {
    <span class="hljs-attr">JOE</span>: {
      <span class="hljs-attr">name</span>: <span class="hljs-string">'Joe'</span>,
      <span class="hljs-attr">followers</span>: [<span class="hljs-string">'STEVE'</span>, <span class="hljs-string">'SUZY'</span>]
    }
  }
}

<span class="hljs-comment">// We'll pretend to do a db lookup which returns a promise</span>
<span class="hljs-keyword">const</span> lookupUser = <span class="hljs-function">(<span class="hljs-params">userId</span>) =&gt;</span> <span class="hljs-built_in">Promise</span>.resolve(db.users[userId])
<span class="hljs-keyword">const</span> lookupFollowers = <span class="hljs-function">(<span class="hljs-params">user</span>) =&gt;</span> <span class="hljs-built_in">Promise</span>.resolve(user.followers)
lookupUser(<span class="hljs-string">'JOE'</span>).then(lookupFollowers)

<span class="hljs-comment">//  followersForUser :: String -&gt; Promise [UserId]</span>
<span class="hljs-keyword">const</span> followersForUser = R.composeP(lookupFollowers, lookupUser);
followersForUser(<span class="hljs-string">'JOE'</span>).then(<span class="hljs-function"><span class="hljs-params">followers</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Followers:'</span>, followers))
<span class="hljs-comment">// Followers: ["STEVE","SUZY"]</span></code></pre>
        </section>
        <div id="composeWith" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#composeWith">composeWith</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/composeWith.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((* → *), [(y → z), (x → y), …, (o → p), ((a, b, …, n) → o)]) → ((a, b, …, n) → z)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">...functions</span>
                            <span class="description"><p>The functions to compose</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.26.0</small></p>

            <div class="description"><p>Performs right-to-left function composition using transforming function. The last argument may have
any arity; the remaining arguments must be unary.</p>
<p><strong>Note:</strong> The result of compose is not automatically curried. Transforming function is not used on the
last argument.</p>
</div>



            <div class="see">
                See also
                <a href="#compose">compose</a>,
                <a href="#pipeWith">pipeWith</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> composeWhileNotNil = R.composeWith(<span class="hljs-function">(<span class="hljs-params">f, res</span>) =&gt;</span> R.isNil(res) ? res : f(res));

composeWhileNotNil([R.inc, R.prop(<span class="hljs-string">'age'</span>)])({<span class="hljs-attr">age</span>: <span class="hljs-number">1</span>}) <span class="hljs-comment">//=&gt; 2</span>
composeWhileNotNil([R.inc, R.prop(<span class="hljs-string">'age'</span>)])({}) <span class="hljs-comment">//=&gt; undefined</span></code></pre>
        </section>
        <div id="concat" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#concat">concat</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/concat.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[a] → [a] → [a]</code></div>
            <div><code>String → String → String</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">firstList</span>
                            <span class="description"><p>The first list</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">secondList</span>
                            <span class="description"><p>The second list</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">A list consisting of the elements of 'firstList' followed by the elements of
'secondList'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns the result of concatenating the given lists or strings.</p>
<p>Note: <code>R.concat</code> expects both arguments to be of the same type,
unlike the native <code>Array.prototype.concat</code> method. It will throw
an error if you <code>concat</code> an Array with a non-Array value.</p>
<p>Dispatches to the <code>concat</code> method of the first argument, if present.
Can also concatenate two members of a <a href="https://github.com/fantasyland/fantasy-land#semigroup">fantasy-land
compatible semigroup</a>.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.concat(<span class="hljs-string">'ABC'</span>, <span class="hljs-string">'DEF'</span>); <span class="hljs-comment">// 'ABCDEF'</span>
R.concat([<span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>], [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]); <span class="hljs-comment">//=&gt; [4, 5, 6, 1, 2, 3]</span>
R.concat([], []); <span class="hljs-comment">//=&gt; []</span></code></pre>
        </section>
        <div id="cond" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#cond">cond</a>
                <span class="pull-right">
                        <span class="label label-category">Logic</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/cond.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[[(*… → Boolean),(*… → *)]] → (*… → *)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">pairs</span>
                            <span class="description"><p>A list of [predicate, transformer]</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.6.0</small></p>

            <div class="description"><p>Returns a function, <code>fn</code>, which encapsulates <code>if/else, if/else, ...</code> logic.
<code>R.cond</code> takes a list of [predicate, transformer] pairs. All of the arguments
to <code>fn</code> are applied to each of the predicates in turn until one returns a
"truthy" value, at which point <code>fn</code> returns the result of applying its
arguments to the corresponding transformer. If none of the predicates
matches, <code>fn</code> returns undefined.</p>
</div>



            <div class="see">
                See also
                <a href="#ifElse">ifElse</a>,
                <a href="#unless">unless</a>,
                <a href="#when">when</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> fn = R.cond([
  [R.equals(<span class="hljs-number">0</span>),   R.always(<span class="hljs-string">'water freezes at 0°C'</span>)],
  [R.equals(<span class="hljs-number">100</span>), R.always(<span class="hljs-string">'water boils at 100°C'</span>)],
  [R.T,           temp =&gt; <span class="hljs-string">'nothing special happens at '</span> + temp + <span class="hljs-string">'°C'</span>]
]);
fn(<span class="hljs-number">0</span>); <span class="hljs-comment">//=&gt; 'water freezes at 0°C'</span>
fn(<span class="hljs-number">50</span>); <span class="hljs-comment">//=&gt; 'nothing special happens at 50°C'</span>
fn(<span class="hljs-number">100</span>); <span class="hljs-comment">//=&gt; 'water boils at 100°C'</span></code></pre>
        </section>
        <div id="construct" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#construct">construct</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/construct.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(* → {*}) → (* → {*})</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The constructor function to wrap.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">A wrapped, curried constructor function.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Wraps a constructor function inside a curried function that can be called
with the same arguments and returns the same type.</p>
</div>



            <div class="see">
                See also
                <a href="#invoker">invoker</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-comment">// Constructor function</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Animal</span>(<span class="hljs-params">kind</span>) </span>{
  <span class="hljs-keyword">this</span>.kind = kind;
};
Animal.prototype.sighting = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-string">"It's a "</span> + <span class="hljs-keyword">this</span>.kind + <span class="hljs-string">"!"</span>;
}

<span class="hljs-keyword">const</span> AnimalConstructor = R.construct(Animal)

<span class="hljs-comment">// Notice we no longer need the 'new' keyword:</span>
AnimalConstructor(<span class="hljs-string">'Pig'</span>); <span class="hljs-comment">//=&gt; {"kind": "Pig", "sighting": function (){...}};</span>

<span class="hljs-keyword">const</span> animalTypes = [<span class="hljs-string">"Lion"</span>, <span class="hljs-string">"Tiger"</span>, <span class="hljs-string">"Bear"</span>];
<span class="hljs-keyword">const</span> animalSighting = R.invoker(<span class="hljs-number">0</span>, <span class="hljs-string">'sighting'</span>);
<span class="hljs-keyword">const</span> sightNewAnimal = R.compose(animalSighting, AnimalConstructor);
R.map(sightNewAnimal, animalTypes); <span class="hljs-comment">//=&gt; ["It's a Lion!", "It's a Tiger!", "It's a Bear!"]</span></code></pre>
        </section>
        <div id="constructN" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#constructN">constructN</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/constructN.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → (* → {*}) → (* → {*})</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">n</span>
                            <span class="description"><p>The arity of the constructor function.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">Fn</span>
                            <span class="description"><p>The constructor function to wrap.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">A wrapped, curried constructor function.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.4.0</small></p>

            <div class="description"><p>Wraps a constructor function inside a curried function that can be called
with the same arguments and returns the same type. The arity of the function
returned is specified to allow using variadic constructor functions.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-comment">// Variadic Constructor function</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Salad</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">this</span>.ingredients = <span class="hljs-built_in">arguments</span>;
}

Salad.prototype.recipe = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">const</span> instructions = R.map(<span class="hljs-function"><span class="hljs-params">ingredient</span> =&gt;</span> <span class="hljs-string">'Add a dollop of '</span> + ingredient, <span class="hljs-keyword">this</span>.ingredients);
  <span class="hljs-keyword">return</span> R.join(<span class="hljs-string">'\n'</span>, instructions);
};

<span class="hljs-keyword">const</span> ThreeLayerSalad = R.constructN(<span class="hljs-number">3</span>, Salad);

<span class="hljs-comment">// Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.</span>
<span class="hljs-keyword">const</span> salad = ThreeLayerSalad(<span class="hljs-string">'Mayonnaise'</span>)(<span class="hljs-string">'Potato Chips'</span>)(<span class="hljs-string">'Ketchup'</span>);

<span class="hljs-built_in">console</span>.log(salad.recipe());
<span class="hljs-comment">// Add a dollop of Mayonnaise</span>
<span class="hljs-comment">// Add a dollop of Potato Chips</span>
<span class="hljs-comment">// Add a dollop of Ketchup</span></code></pre>
        </section>
        <div id="contains" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#contains">contains</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/contains.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>

            <div class="deprecated">
                Deprecated since v0.26.0
            </div>

            <div><code>a → [a] → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">a</span>
                            <span class="description"><p>The item to compare against.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The array to consider.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description">'true' if an equivalent item is in the list, 'false' otherwise.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns <code>true</code> if the specified value is equal, in <a href="#equals"><code>R.equals</code></a>
terms, to at least one element of the given list; <code>false</code> otherwise.
Works also with strings.</p>
</div>



            <div class="see">
                See also
                <a href="#includes">includes</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.contains(<span class="hljs-number">3</span>, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]); <span class="hljs-comment">//=&gt; true</span>
R.contains(<span class="hljs-number">4</span>, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]); <span class="hljs-comment">//=&gt; false</span>
R.contains({ <span class="hljs-attr">name</span>: <span class="hljs-string">'Fred'</span> }, [{ <span class="hljs-attr">name</span>: <span class="hljs-string">'Fred'</span> }]); <span class="hljs-comment">//=&gt; true</span>
R.contains([<span class="hljs-number">42</span>], [[<span class="hljs-number">42</span>]]); <span class="hljs-comment">//=&gt; true</span>
R.contains(<span class="hljs-string">'ba'</span>, <span class="hljs-string">'banana'</span>); <span class="hljs-comment">//=&gt;true</span></code></pre>
        </section>
        <div id="converge" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#converge">converge</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/converge.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((x1, x2, …) → z) → [((a, b, …) → x1), ((a, b, …) → x2), …] → (a → b → … → z)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">after</span>
                            <span class="description"><p>A function. <code>after</code> will be invoked with the return values of
       <code>fn1</code> and <code>fn2</code> as its arguments.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">functions</span>
                            <span class="description"><p>A list of functions.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">A new function.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.4.2</small></p>

            <div class="description"><p>Accepts a converging function and a list of branching functions and returns
a new function. The arity of the new function is the same as the arity of
the longest branching function. When invoked, this new function is applied
to some arguments, and each branching function is applied to those same
arguments. The results of each branching function are passed as arguments
to the converging function to produce the return value.</p>
</div>



            <div class="see">
                See also
                <a href="#useWith">useWith</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> average = R.converge(R.divide, [R.sum, R.length])
average([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>]) <span class="hljs-comment">//=&gt; 4</span>

<span class="hljs-keyword">const</span> strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
strangeConcat(<span class="hljs-string">"Yodel"</span>) <span class="hljs-comment">//=&gt; "YODELyodel"</span></code></pre>
        </section>
        <div id="countBy" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#countBy">countBy</a>
                <span class="pull-right">
                        <span class="label label-category">Relation</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/countBy.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(a → String) → [a] → {*}</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function used to map values to keys.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The list to count elements from.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description">An object mapping keys to number of occurrences in the list.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Counts the elements of a list according to how many match each value of a
key generated by the supplied function. Returns an object mapping the keys
produced by <code>fn</code> to the number of occurrences in the list. Note that all
keys are coerced to strings because of how JavaScript objects work.</p>
<p>Acts as a transducer if a transformer is given in list position.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> numbers = [<span class="hljs-number">1.0</span>, <span class="hljs-number">1.1</span>, <span class="hljs-number">1.2</span>, <span class="hljs-number">2.0</span>, <span class="hljs-number">3.0</span>, <span class="hljs-number">2.2</span>];
R.countBy(<span class="hljs-built_in">Math</span>.floor)(numbers);    <span class="hljs-comment">//=&gt; {'1': 3, '2': 2, '3': 1}</span>

<span class="hljs-keyword">const</span> letters = [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'A'</span>, <span class="hljs-string">'a'</span>, <span class="hljs-string">'B'</span>, <span class="hljs-string">'c'</span>];
R.countBy(R.toLower)(letters);   <span class="hljs-comment">//=&gt; {'a': 3, 'b': 2, 'c': 1}</span></code></pre>
        </section>
        <div id="curry" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#curry">curry</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/curry.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(* → a) → (* → a)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function to curry.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">A new, curried function.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns a curried equivalent of the provided function. The curried function
has two unusual capabilities. First, its arguments needn't be provided one
at a time. If <code>f</code> is a ternary function and <code>g</code> is <code>R.curry(f)</code>, the
following are equivalent:</p>
<ul>
<li><code>g(1)(2)(3)</code></li>
<li><code>g(1)(2, 3)</code></li>
<li><code>g(1, 2)(3)</code></li>
<li><code>g(1, 2, 3)</code></li>
</ul>
<p>Secondly, the special placeholder value <a href="#__"><code>R.__</code></a> may be used to specify
"gaps", allowing partial application of any combination of arguments,
regardless of their positions. If <code>g</code> is as above and <code>_</code> is <a href="#__"><code>R.__</code></a>,
the following are equivalent:</p>
<ul>
<li><code>g(1, 2, 3)</code></li>
<li><code>g(_, 2, 3)(1)</code></li>
<li><code>g(_, _, 3)(1)(2)</code></li>
<li><code>g(_, _, 3)(1, 2)</code></li>
<li><code>g(_, 2)(1)(3)</code></li>
<li><code>g(_, 2)(1, 3)</code></li>
<li><code>g(_, 2)(_, 3)(1)</code></li>
</ul>
</div>



            <div class="see">
                See also
                <a href="#curryN">curryN</a>,
                <a href="#partial">partial</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> addFourNumbers = <span class="hljs-function">(<span class="hljs-params">a, b, c, d</span>) =&gt;</span> a + b + c + d;

<span class="hljs-keyword">const</span> curriedAddFourNumbers = R.curry(addFourNumbers);
<span class="hljs-keyword">const</span> f = curriedAddFourNumbers(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>);
<span class="hljs-keyword">const</span> g = f(<span class="hljs-number">3</span>);
g(<span class="hljs-number">4</span>); <span class="hljs-comment">//=&gt; 10</span></code></pre>
        </section>
        <div id="curryN" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#curryN">curryN</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/curryN.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → (* → a) → (* → a)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">length</span>
                            <span class="description"><p>The arity for the returned function.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function to curry.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">A new, curried function.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.5.0</small></p>

            <div class="description"><p>Returns a curried equivalent of the provided function, with the specified
arity. The curried function has two unusual capabilities. First, its
arguments needn't be provided one at a time. If <code>g</code> is <code>R.curryN(3, f)</code>, the
following are equivalent:</p>
<ul>
<li><code>g(1)(2)(3)</code></li>
<li><code>g(1)(2, 3)</code></li>
<li><code>g(1, 2)(3)</code></li>
<li><code>g(1, 2, 3)</code></li>
</ul>
<p>Secondly, the special placeholder value <a href="#__"><code>R.__</code></a> may be used to specify
"gaps", allowing partial application of any combination of arguments,
regardless of their positions. If <code>g</code> is as above and <code>_</code> is <a href="#__"><code>R.__</code></a>,
the following are equivalent:</p>
<ul>
<li><code>g(1, 2, 3)</code></li>
<li><code>g(_, 2, 3)(1)</code></li>
<li><code>g(_, _, 3)(1)(2)</code></li>
<li><code>g(_, _, 3)(1, 2)</code></li>
<li><code>g(_, 2)(1)(3)</code></li>
<li><code>g(_, 2)(1, 3)</code></li>
<li><code>g(_, 2)(_, 3)(1)</code></li>
</ul>
</div>



            <div class="see">
                See also
                <a href="#curry">curry</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> sumArgs = <span class="hljs-function">(<span class="hljs-params">...args</span>) =&gt;</span> R.sum(args);

<span class="hljs-keyword">const</span> curriedAddFourNumbers = R.curryN(<span class="hljs-number">4</span>, sumArgs);
<span class="hljs-keyword">const</span> f = curriedAddFourNumbers(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>);
<span class="hljs-keyword">const</span> g = f(<span class="hljs-number">3</span>);
g(<span class="hljs-number">4</span>); <span class="hljs-comment">//=&gt; 10</span></code></pre>
        </section>
        <div id="dec" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#dec">dec</a>
                <span class="pull-right">
                        <span class="label label-category">Math</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/dec.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → Number</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">n</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Number</span>
                        <span class="description">n - 1</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.9.0</small></p>

            <div class="description"><p>Decrements its argument.</p>
</div>



            <div class="see">
                See also
                <a href="#inc">inc</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.dec(<span class="hljs-number">42</span>); <span class="hljs-comment">//=&gt; 41</span></code></pre>
        </section>
        <div id="defaultTo" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#defaultTo">defaultTo</a>
                <span class="pull-right">
                        <span class="label label-category">Logic</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/defaultTo.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>a → b → a | b</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">default</span>
                            <span class="description"><p>The default value.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">val</span>
                            <span class="description"><p><code>val</code> will be returned instead of <code>default</code> unless <code>val</code> is <code>null</code>, <code>undefined</code> or <code>NaN</code>.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description">The second value if it is not 'null', 'undefined' or 'NaN', otherwise the default value</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.10.0</small></p>

            <div class="description"><p>Returns the second argument if it is not <code>null</code>, <code>undefined</code> or <code>NaN</code>;
otherwise the first argument is returned.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> defaultTo42 = R.defaultTo(<span class="hljs-number">42</span>);

defaultTo42(<span class="hljs-literal">null</span>);  <span class="hljs-comment">//=&gt; 42</span>
defaultTo42(<span class="hljs-literal">undefined</span>);  <span class="hljs-comment">//=&gt; 42</span>
defaultTo42(<span class="hljs-literal">false</span>);  <span class="hljs-comment">//=&gt; false</span>
defaultTo42(<span class="hljs-string">'Ramda'</span>);  <span class="hljs-comment">//=&gt; 'Ramda'</span>
<span class="hljs-comment">// parseInt('string') results in NaN</span>
defaultTo42(<span class="hljs-built_in">parseInt</span>(<span class="hljs-string">'string'</span>)); <span class="hljs-comment">//=&gt; 42</span></code></pre>
        </section>
        <div id="descend" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#descend">descend</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/descend.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Ord b =&gt; (a → b) → a → a → Number</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>A function of arity one that returns a value that can be compared</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">a</span>
                            <span class="description"><p>The first item to be compared.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">b</span>
                            <span class="description"><p>The second item to be compared.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Number</span>
                        <span class="description">'-1' if fn(a) &gt; fn(b), '1' if fn(b) &gt; fn(a), otherwise '0'</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.23.0</small></p>

            <div class="description"><p>Makes a descending comparator function out of a function that returns a value
that can be compared with <code>&lt;</code> and <code>&gt;</code>.</p>
</div>



            <div class="see">
                See also
                <a href="#ascend">ascend</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> byAge = R.descend(R.prop(<span class="hljs-string">'age'</span>));
<span class="hljs-keyword">const</span> people = [
  { <span class="hljs-attr">name</span>: <span class="hljs-string">'Emma'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">70</span> },
  { <span class="hljs-attr">name</span>: <span class="hljs-string">'Peter'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">78</span> },
  { <span class="hljs-attr">name</span>: <span class="hljs-string">'Mikhail'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">62</span> },
];
<span class="hljs-keyword">const</span> peopleByOldestFirst = R.sort(byAge, people);
  <span class="hljs-comment">//=&gt; [{ name: 'Peter', age: 78 }, { name: 'Emma', age: 70 }, { name: 'Mikhail', age: 62 }]</span></code></pre>
        </section>
        <div id="difference" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#difference">difference</a>
                <span class="pull-right">
                        <span class="label label-category">Relation</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/difference.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[*] → [*] → [*]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list1</span>
                            <span class="description"><p>The first list.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list2</span>
                            <span class="description"><p>The second list.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">The elements in 'list1' that are not in 'list2'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Finds the set (i.e. no duplicates) of all elements in the first list not
contained in the second list. Objects and Arrays are compared in terms of
value equality, not reference equality.</p>
</div>



            <div class="see">
                See also
                <a href="#differenceWith">differenceWith</a>,
                <a href="#symmetricDifference">symmetricDifference</a>,
                <a href="#symmetricDifferenceWith">symmetricDifferenceWith</a>,
                <a href="#without">without</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.difference([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>], [<span class="hljs-number">7</span>,<span class="hljs-number">6</span>,<span class="hljs-number">5</span>,<span class="hljs-number">4</span>,<span class="hljs-number">3</span>]); <span class="hljs-comment">//=&gt; [1,2]</span>
R.difference([<span class="hljs-number">7</span>,<span class="hljs-number">6</span>,<span class="hljs-number">5</span>,<span class="hljs-number">4</span>,<span class="hljs-number">3</span>], [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>]); <span class="hljs-comment">//=&gt; [7,6,5]</span>
R.difference([{<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>}, {<span class="hljs-attr">b</span>: <span class="hljs-number">2</span>}], [{<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>}, {<span class="hljs-attr">c</span>: <span class="hljs-number">3</span>}]) <span class="hljs-comment">//=&gt; [{b: 2}]</span></code></pre>
        </section>
        <div id="differenceWith" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#differenceWith">differenceWith</a>
                <span class="pull-right">
                        <span class="label label-category">Relation</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/differenceWith.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((a, a) → Boolean) → [a] → [a] → [a]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">pred</span>
                            <span class="description"><p>A predicate used to test whether two items are equal.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list1</span>
                            <span class="description"><p>The first list.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list2</span>
                            <span class="description"><p>The second list.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">The elements in 'list1' that are not in 'list2'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Finds the set (i.e. no duplicates) of all elements in the first list not
contained in the second list. Duplication is determined according to the
value returned by applying the supplied predicate to two list elements.</p>
</div>



            <div class="see">
                See also
                <a href="#difference">difference</a>,
                <a href="#symmetricDifference">symmetricDifference</a>,
                <a href="#symmetricDifferenceWith">symmetricDifferenceWith</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> cmp = <span class="hljs-function">(<span class="hljs-params">x, y</span>) =&gt;</span> x.a === y.a;
<span class="hljs-keyword">const</span> l1 = [{<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>}, {<span class="hljs-attr">a</span>: <span class="hljs-number">2</span>}, {<span class="hljs-attr">a</span>: <span class="hljs-number">3</span>}];
<span class="hljs-keyword">const</span> l2 = [{<span class="hljs-attr">a</span>: <span class="hljs-number">3</span>}, {<span class="hljs-attr">a</span>: <span class="hljs-number">4</span>}];
R.differenceWith(cmp, l1, l2); <span class="hljs-comment">//=&gt; [{a: 1}, {a: 2}]</span></code></pre>
        </section>
        <div id="dissoc" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#dissoc">dissoc</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/dissoc.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>String → {k: v} → {k: v}</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">prop</span>
                            <span class="description"><p>The name of the property to dissociate</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"><p>The object to clone</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description">A new object equivalent to the original but without the specified property</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.10.0</small></p>

            <div class="description"><p>Returns a new object that does not contain a <code>prop</code> property.</p>
</div>



            <div class="see">
                See also
                <a href="#assoc">assoc</a>,
                <a href="#omit">omit</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.dissoc(<span class="hljs-string">'b'</span>, {<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">c</span>: <span class="hljs-number">3</span>}); <span class="hljs-comment">//=&gt; {a: 1, c: 3}</span></code></pre>
        </section>
        <div id="dissocPath" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#dissocPath">dissocPath</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/dissocPath.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[Idx] → {k: v} → {k: v}</code></div>

            <div><code>Idx = String | Int</code></div>

            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">path</span>
                            <span class="description"><p>The path to the value to omit</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"><p>The object to clone</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description">A new object without the property at path</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.11.0</small></p>

            <div class="description"><p>Makes a shallow clone of an object, omitting the property at the given path.
Note that this copies and flattens prototype properties onto the new object
as well. All non-primitive properties are copied by reference.</p>
</div>



            <div class="see">
                See also
                <a href="#assocPath">assocPath</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.dissocPath([<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>], {<span class="hljs-attr">a</span>: {<span class="hljs-attr">b</span>: {<span class="hljs-attr">c</span>: <span class="hljs-number">42</span>}}}); <span class="hljs-comment">//=&gt; {a: {b: {}}}</span></code></pre>
        </section>
        <div id="divide" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#divide">divide</a>
                <span class="pull-right">
                        <span class="label label-category">Math</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/divide.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → Number → Number</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">a</span>
                            <span class="description"><p>The first value.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">b</span>
                            <span class="description"><p>The second value.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Number</span>
                        <span class="description">The result of 'a / b'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Divides two numbers. Equivalent to <code>a / b</code>.</p>
</div>



            <div class="see">
                See also
                <a href="#multiply">multiply</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.divide(<span class="hljs-number">71</span>, <span class="hljs-number">100</span>); <span class="hljs-comment">//=&gt; 0.71</span>

<span class="hljs-keyword">const</span> half = R.divide(R.__, <span class="hljs-number">2</span>);
half(<span class="hljs-number">42</span>); <span class="hljs-comment">//=&gt; 21</span>

<span class="hljs-keyword">const</span> reciprocal = R.divide(<span class="hljs-number">1</span>);
reciprocal(<span class="hljs-number">4</span>);   <span class="hljs-comment">//=&gt; 0.25</span></code></pre>
        </section>
        <div id="drop" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#drop">drop</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/drop.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → [a] → [a]</code></div>
            <div><code>Number → String → String</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">n</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description">A copy of list without the first 'n' elements</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns all but the first <code>n</code> elements of the given list, string, or
transducer/transformer (or object with a <code>drop</code> method).</p>
<p>Dispatches to the <code>drop</code> method of the second argument, if present.</p>
</div>



            <div class="see">
                See also
                <a href="#take">take</a>,
                <a href="#transduce">transduce</a>,
                <a href="#dropLast">dropLast</a>,
                <a href="#dropWhile">dropWhile</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.drop(<span class="hljs-number">1</span>, [<span class="hljs-string">'foo'</span>, <span class="hljs-string">'bar'</span>, <span class="hljs-string">'baz'</span>]); <span class="hljs-comment">//=&gt; ['bar', 'baz']</span>
R.drop(<span class="hljs-number">2</span>, [<span class="hljs-string">'foo'</span>, <span class="hljs-string">'bar'</span>, <span class="hljs-string">'baz'</span>]); <span class="hljs-comment">//=&gt; ['baz']</span>
R.drop(<span class="hljs-number">3</span>, [<span class="hljs-string">'foo'</span>, <span class="hljs-string">'bar'</span>, <span class="hljs-string">'baz'</span>]); <span class="hljs-comment">//=&gt; []</span>
R.drop(<span class="hljs-number">4</span>, [<span class="hljs-string">'foo'</span>, <span class="hljs-string">'bar'</span>, <span class="hljs-string">'baz'</span>]); <span class="hljs-comment">//=&gt; []</span>
R.drop(<span class="hljs-number">3</span>, <span class="hljs-string">'ramda'</span>);               <span class="hljs-comment">//=&gt; 'da'</span></code></pre>
        </section>
        <div id="dropLast" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#dropLast">dropLast</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/dropLast.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → [a] → [a]</code></div>
            <div><code>Number → String → String</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">n</span>
                            <span class="description"><p>The number of elements of <code>list</code> to skip.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The list of elements to consider.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">A copy of the list with only the first 'list.length - n' elements</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.16.0</small></p>

            <div class="description"><p>Returns a list containing all but the last <code>n</code> elements of the given <code>list</code>.</p>
<p>Acts as a transducer if a transformer is given in list position.</p>
</div>



            <div class="see">
                See also
                <a href="#takeLast">takeLast</a>,
                <a href="#drop">drop</a>,
                <a href="#dropWhile">dropWhile</a>,
                <a href="#dropLastWhile">dropLastWhile</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.dropLast(<span class="hljs-number">1</span>, [<span class="hljs-string">'foo'</span>, <span class="hljs-string">'bar'</span>, <span class="hljs-string">'baz'</span>]); <span class="hljs-comment">//=&gt; ['foo', 'bar']</span>
R.dropLast(<span class="hljs-number">2</span>, [<span class="hljs-string">'foo'</span>, <span class="hljs-string">'bar'</span>, <span class="hljs-string">'baz'</span>]); <span class="hljs-comment">//=&gt; ['foo']</span>
R.dropLast(<span class="hljs-number">3</span>, [<span class="hljs-string">'foo'</span>, <span class="hljs-string">'bar'</span>, <span class="hljs-string">'baz'</span>]); <span class="hljs-comment">//=&gt; []</span>
R.dropLast(<span class="hljs-number">4</span>, [<span class="hljs-string">'foo'</span>, <span class="hljs-string">'bar'</span>, <span class="hljs-string">'baz'</span>]); <span class="hljs-comment">//=&gt; []</span>
R.dropLast(<span class="hljs-number">3</span>, <span class="hljs-string">'ramda'</span>);               <span class="hljs-comment">//=&gt; 'ra'</span></code></pre>
        </section>
        <div id="dropLastWhile" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#dropLastWhile">dropLastWhile</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/dropLastWhile.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(a → Boolean) → [a] → [a]</code></div>
            <div><code>(a → Boolean) → String → String</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">predicate</span>
                            <span class="description"><p>The function to be called on each element</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">xs</span>
                            <span class="description"><p>The collection to iterate over.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">A new array without any trailing elements that return 'falsy' values from the 'predicate'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.16.0</small></p>

            <div class="description"><p>Returns a new list excluding all the tailing elements of a given list which
satisfy the supplied predicate function. It passes each value from the right
to the supplied predicate function, skipping elements until the predicate
function returns a <code>falsy</code> value. The predicate function is applied to one argument:
<em>(value)</em>.</p>
<p>Acts as a transducer if a transformer is given in list position.</p>
</div>



            <div class="see">
                See also
                <a href="#takeLastWhile">takeLastWhile</a>,
                <a href="#addIndex">addIndex</a>,
                <a href="#drop">drop</a>,
                <a href="#dropWhile">dropWhile</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> lteThree = <span class="hljs-function"><span class="hljs-params">x</span> =&gt;</span> x &lt;= <span class="hljs-number">3</span>;

R.dropLastWhile(lteThree, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">3</span>, <span class="hljs-number">2</span>, <span class="hljs-number">1</span>]); <span class="hljs-comment">//=&gt; [1, 2, 3, 4]</span>

R.dropLastWhile(<span class="hljs-function"><span class="hljs-params">x</span> =&gt;</span> x !== <span class="hljs-string">'d'</span> , <span class="hljs-string">'Ramda'</span>); <span class="hljs-comment">//=&gt; 'Ramd'</span></code></pre>
        </section>
        <div id="dropRepeats" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#dropRepeats">dropRepeats</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/dropRepeats.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[a] → [a]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The array to consider.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">'list' without repeating elements.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.14.0</small></p>

            <div class="description"><p>Returns a new list without any consecutively repeating elements.
<a href="#equals"><code>R.equals</code></a> is used to determine equality.</p>
<p>Acts as a transducer if a transformer is given in list position.</p>
</div>



            <div class="see">
                See also
                <a href="#transduce">transduce</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.dropRepeats([<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">4</span>, <span class="hljs-number">2</span>, <span class="hljs-number">2</span>]); <span class="hljs-comment">//=&gt; [1, 2, 3, 4, 2]</span></code></pre>
        </section>
        <div id="dropRepeatsWith" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#dropRepeatsWith">dropRepeatsWith</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/dropRepeatsWith.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((a, a) → Boolean) → [a] → [a]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">pred</span>
                            <span class="description"><p>A predicate used to test whether two items are equal.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The array to consider.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">'list' without repeating elements.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.14.0</small></p>

            <div class="description"><p>Returns a new list without any consecutively repeating elements. Equality is
determined by applying the supplied predicate to each pair of consecutive elements. The
first element in a series of equal elements will be preserved.</p>
<p>Acts as a transducer if a transformer is given in list position.</p>
</div>



            <div class="see">
                See also
                <a href="#transduce">transduce</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> l = [<span class="hljs-number">1</span>, <span class="hljs-number">-1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">-4</span>, <span class="hljs-number">-4</span>, <span class="hljs-number">-5</span>, <span class="hljs-number">5</span>, <span class="hljs-number">3</span>, <span class="hljs-number">3</span>];
R.dropRepeatsWith(R.eqBy(<span class="hljs-built_in">Math</span>.abs), l); <span class="hljs-comment">//=&gt; [1, 3, 4, -5, 3]</span></code></pre>
        </section>
        <div id="dropWhile" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#dropWhile">dropWhile</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/dropWhile.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(a → Boolean) → [a] → [a]</code></div>
            <div><code>(a → Boolean) → String → String</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function called per iteration.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">xs</span>
                            <span class="description"><p>The collection to iterate over.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">A new array.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.9.0</small></p>

            <div class="description"><p>Returns a new list excluding the leading elements of a given list which
satisfy the supplied predicate function. It passes each value to the supplied
predicate function, skipping elements while the predicate function returns
<code>true</code>. The predicate function is applied to one argument: <em>(value)</em>.</p>
<p>Dispatches to the <code>dropWhile</code> method of the second argument, if present.</p>
<p>Acts as a transducer if a transformer is given in list position.</p>
</div>



            <div class="see">
                See also
                <a href="#takeWhile">takeWhile</a>,
                <a href="#transduce">transduce</a>,
                <a href="#addIndex">addIndex</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> lteTwo = <span class="hljs-function"><span class="hljs-params">x</span> =&gt;</span> x &lt;= <span class="hljs-number">2</span>;

R.dropWhile(lteTwo, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">3</span>, <span class="hljs-number">2</span>, <span class="hljs-number">1</span>]); <span class="hljs-comment">//=&gt; [3, 4, 3, 2, 1]</span>

R.dropWhile(<span class="hljs-function"><span class="hljs-params">x</span> =&gt;</span> x !== <span class="hljs-string">'d'</span> , <span class="hljs-string">'Ramda'</span>); <span class="hljs-comment">//=&gt; 'da'</span></code></pre>
        </section>
        <div id="either" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#either">either</a>
                <span class="pull-right">
                        <span class="label label-category">Logic</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/either.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(*… → Boolean) → (*… → Boolean) → (*… → Boolean)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">f</span>
                            <span class="description"><p>a predicate</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">g</span>
                            <span class="description"><p>another predicate</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">a function that applies its arguments to 'f' and 'g' and '||'s their outputs together.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.12.0</small></p>

            <div class="description"><p>A function wrapping calls to the two functions in an <code>||</code> operation,
returning the result of the first function if it is truth-y and the result
of the second function otherwise. Note that this is short-circuited,
meaning that the second function will not be invoked if the first returns a
truth-y value.</p>
<p>In addition to functions, <code>R.either</code> also accepts any fantasy-land compatible
applicative functor.</p>
</div>



            <div class="see">
                See also
                <a href="#or">or</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> gt10 = <span class="hljs-function"><span class="hljs-params">x</span> =&gt;</span> x &gt; <span class="hljs-number">10</span>;
<span class="hljs-keyword">const</span> even = <span class="hljs-function"><span class="hljs-params">x</span> =&gt;</span> x % <span class="hljs-number">2</span> === <span class="hljs-number">0</span>;
<span class="hljs-keyword">const</span> f = R.either(gt10, even);
f(<span class="hljs-number">101</span>); <span class="hljs-comment">//=&gt; true</span>
f(<span class="hljs-number">8</span>); <span class="hljs-comment">//=&gt; true</span>

R.either(Maybe.Just(<span class="hljs-literal">false</span>), Maybe.Just(<span class="hljs-number">55</span>)); <span class="hljs-comment">// =&gt; Maybe.Just(55)</span>
R.either([<span class="hljs-literal">false</span>, <span class="hljs-literal">false</span>, <span class="hljs-string">'a'</span>], [<span class="hljs-number">11</span>]) <span class="hljs-comment">// =&gt; [11, 11, "a"]</span></code></pre>
        </section>
        <div id="empty" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#empty">empty</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/empty.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>a → a</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">x</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.3.0</small></p>

            <div class="description"><p>Returns the empty value of its argument's type. Ramda defines the empty
value of Array (<code>[]</code>), Object (<code>{}</code>), String (<code>''</code>), and Arguments. Other
types are supported if they define <code>&lt;Type&gt;.empty</code>,
<code>&lt;Type&gt;.prototype.empty</code> or implement the
<a href="https://github.com/fantasyland/fantasy-land#monoid">FantasyLand Monoid spec</a>.</p>
<p>Dispatches to the <code>empty</code> method of the first argument, if present.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.empty(Just(<span class="hljs-number">42</span>));      <span class="hljs-comment">//=&gt; Nothing()</span>
R.empty([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]);     <span class="hljs-comment">//=&gt; []</span>
R.empty(<span class="hljs-string">'unicorns'</span>);    <span class="hljs-comment">//=&gt; ''</span>
R.empty({<span class="hljs-attr">x</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">2</span>});  <span class="hljs-comment">//=&gt; {}</span></code></pre>
        </section>
        <div id="endsWith" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#endsWith">endsWith</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/endsWith.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[a] → [a] → Boolean</code></div>
            <div><code>String → String → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">suffix</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.24.0</small></p>

            <div class="description"><p>Checks if a list ends with the provided sublist.</p>
<p>Similarly, checks if a string ends with the provided substring.</p>
</div>



            <div class="see">
                See also
                <a href="#startsWith">startsWith</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.endsWith(<span class="hljs-string">'c'</span>, <span class="hljs-string">'abc'</span>)                <span class="hljs-comment">//=&gt; true</span>
R.endsWith(<span class="hljs-string">'b'</span>, <span class="hljs-string">'abc'</span>)                <span class="hljs-comment">//=&gt; false</span>
R.endsWith([<span class="hljs-string">'c'</span>], [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>])    <span class="hljs-comment">//=&gt; true</span>
R.endsWith([<span class="hljs-string">'b'</span>], [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>])    <span class="hljs-comment">//=&gt; false</span></code></pre>
        </section>
        <div id="eqBy" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#eqBy">eqBy</a>
                <span class="pull-right">
                        <span class="label label-category">Relation</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/eqBy.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(a → b) → a → a → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">f</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">x</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">y</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.18.0</small></p>

            <div class="description"><p>Takes a function and two values in its domain and returns <code>true</code> if the
values map to the same value in the codomain; <code>false</code> otherwise.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.eqBy(<span class="hljs-built_in">Math</span>.abs, <span class="hljs-number">5</span>, <span class="hljs-number">-5</span>); <span class="hljs-comment">//=&gt; true</span></code></pre>
        </section>
        <div id="eqProps" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#eqProps">eqProps</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/eqProps.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>k → {k: v} → {k: v} → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">prop</span>
                            <span class="description"><p>The name of the property to compare</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj1</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj2</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Reports whether two objects have the same value, in <a href="#equals"><code>R.equals</code></a>
terms, for the specified property. Useful as a curried predicate.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> o1 = { <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">c</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">d</span>: <span class="hljs-number">4</span> };
<span class="hljs-keyword">const</span> o2 = { <span class="hljs-attr">a</span>: <span class="hljs-number">10</span>, <span class="hljs-attr">b</span>: <span class="hljs-number">20</span>, <span class="hljs-attr">c</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">d</span>: <span class="hljs-number">40</span> };
R.eqProps(<span class="hljs-string">'a'</span>, o1, o2); <span class="hljs-comment">//=&gt; false</span>
R.eqProps(<span class="hljs-string">'c'</span>, o1, o2); <span class="hljs-comment">//=&gt; true</span></code></pre>
        </section>
        <div id="equals" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#equals">equals</a>
                <span class="pull-right">
                        <span class="label label-category">Relation</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/equals.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>a → b → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">a</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">b</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.15.0</small></p>

            <div class="description"><p>Returns <code>true</code> if its arguments are equivalent, <code>false</code> otherwise. Handles
cyclical data structures.</p>
<p>Dispatches symmetrically to the <code>equals</code> methods of both arguments, if
present.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.equals(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>); <span class="hljs-comment">//=&gt; true</span>
R.equals(<span class="hljs-number">1</span>, <span class="hljs-string">'1'</span>); <span class="hljs-comment">//=&gt; false</span>
R.equals([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>], [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]); <span class="hljs-comment">//=&gt; true</span>

<span class="hljs-keyword">const</span> a = {}; a.v = a;
<span class="hljs-keyword">const</span> b = {}; b.v = b;
R.equals(a, b); <span class="hljs-comment">//=&gt; true</span></code></pre>
        </section>
        <div id="evolve" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#evolve">evolve</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/evolve.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>{k: (v → v)} → {k: v} → {k: v}</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">transformations</span>
                            <span class="description"><p>The object specifying transformation functions to apply
       to the object.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">object</span>
                            <span class="description"><p>The object to be transformed.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description">The transformed object.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.9.0</small></p>

            <div class="description"><p>Creates a new object by recursively evolving a shallow copy of <code>object</code>,
according to the <code>transformation</code> functions. All non-primitive properties
are copied by reference.</p>
<p>A <code>transformation</code> function will not be invoked if its corresponding key
does not exist in the evolved object.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> tomato = {<span class="hljs-attr">firstName</span>: <span class="hljs-string">'  Tomato '</span>, <span class="hljs-attr">data</span>: {<span class="hljs-attr">elapsed</span>: <span class="hljs-number">100</span>, <span class="hljs-attr">remaining</span>: <span class="hljs-number">1400</span>}, <span class="hljs-attr">id</span>:<span class="hljs-number">123</span>};
<span class="hljs-keyword">const</span> transformations = {
  <span class="hljs-attr">firstName</span>: R.trim,
  <span class="hljs-attr">lastName</span>: R.trim, <span class="hljs-comment">// Will not get invoked.</span>
  data: {<span class="hljs-attr">elapsed</span>: R.add(<span class="hljs-number">1</span>), <span class="hljs-attr">remaining</span>: R.add(<span class="hljs-number">-1</span>)}
};
R.evolve(transformations, tomato); <span class="hljs-comment">//=&gt; {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}</span></code></pre>
        </section>
        <div id="F" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#F">F</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/F.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>* → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name"></span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.9.0</small></p>

            <div class="description"><p>A function that always returns <code>false</code>. Any passed in parameters are ignored.</p>
</div>



            <div class="see">
                See also
                <a href="#T">T</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.F(); <span class="hljs-comment">//=&gt; false</span></code></pre>
        </section>
        <div id="filter" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#filter">filter</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/filter.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Filterable f =&gt; (a → Boolean) → f a → f a</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">pred</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">filterable</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">Filterable</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Takes a predicate and a <code>Filterable</code>, and returns a new filterable of the
same type containing the members of the given filterable which satisfy the
given predicate. Filterable objects include plain objects or any object
that has a filter method such as <code>Array</code>.</p>
<p>Dispatches to the <code>filter</code> method of the second argument, if present.</p>
<p>Acts as a transducer if a transformer is given in list position.</p>
</div>



            <div class="see">
                See also
                <a href="#reject">reject</a>,
                <a href="#transduce">transduce</a>,
                <a href="#addIndex">addIndex</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> isEven = <span class="hljs-function"><span class="hljs-params">n</span> =&gt;</span> n % <span class="hljs-number">2</span> === <span class="hljs-number">0</span>;

R.filter(isEven, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>]); <span class="hljs-comment">//=&gt; [2, 4]</span>

R.filter(isEven, {<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">c</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">d</span>: <span class="hljs-number">4</span>}); <span class="hljs-comment">//=&gt; {b: 2, d: 4}</span></code></pre>
        </section>
        <div id="find" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#find">find</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/find.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(a → Boolean) → [a] → a | undefined</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The predicate function used to determine if the element is the
       desired one.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The array to consider.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description">The element found, or 'undefined'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns the first element of the list which matches the predicate, or
<code>undefined</code> if no element matches.</p>
<p>Dispatches to the <code>find</code> method of the second argument, if present.</p>
<p>Acts as a transducer if a transformer is given in list position.</p>
</div>



            <div class="see">
                See also
                <a href="#transduce">transduce</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> xs = [{<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>}, {<span class="hljs-attr">a</span>: <span class="hljs-number">2</span>}, {<span class="hljs-attr">a</span>: <span class="hljs-number">3</span>}];
R.find(R.propEq(<span class="hljs-string">'a'</span>, <span class="hljs-number">2</span>))(xs); <span class="hljs-comment">//=&gt; {a: 2}</span>
R.find(R.propEq(<span class="hljs-string">'a'</span>, <span class="hljs-number">4</span>))(xs); <span class="hljs-comment">//=&gt; undefined</span></code></pre>
        </section>
        <div id="findIndex" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#findIndex">findIndex</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/findIndex.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(a → Boolean) → [a] → Number</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The predicate function used to determine if the element is the
desired one.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The array to consider.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Number</span>
                        <span class="description">The index of the element found, or '-1'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.1</small></p>

            <div class="description"><p>Returns the index of the first element of the list which matches the
predicate, or <code>-1</code> if no element matches.</p>
<p>Acts as a transducer if a transformer is given in list position.</p>
</div>



            <div class="see">
                See also
                <a href="#transduce">transduce</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> xs = [{<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>}, {<span class="hljs-attr">a</span>: <span class="hljs-number">2</span>}, {<span class="hljs-attr">a</span>: <span class="hljs-number">3</span>}];
R.findIndex(R.propEq(<span class="hljs-string">'a'</span>, <span class="hljs-number">2</span>))(xs); <span class="hljs-comment">//=&gt; 1</span>
R.findIndex(R.propEq(<span class="hljs-string">'a'</span>, <span class="hljs-number">4</span>))(xs); <span class="hljs-comment">//=&gt; -1</span></code></pre>
        </section>
        <div id="findLast" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#findLast">findLast</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/findLast.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(a → Boolean) → [a] → a | undefined</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The predicate function used to determine if the element is the
desired one.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The array to consider.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description">The element found, or 'undefined'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.1</small></p>

            <div class="description"><p>Returns the last element of the list which matches the predicate, or
<code>undefined</code> if no element matches.</p>
<p>Acts as a transducer if a transformer is given in list position.</p>
</div>



            <div class="see">
                See also
                <a href="#transduce">transduce</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> xs = [{<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">b</span>: <span class="hljs-number">0</span>}, {<span class="hljs-attr">a</span>:<span class="hljs-number">1</span>, <span class="hljs-attr">b</span>: <span class="hljs-number">1</span>}];
R.findLast(R.propEq(<span class="hljs-string">'a'</span>, <span class="hljs-number">1</span>))(xs); <span class="hljs-comment">//=&gt; {a: 1, b: 1}</span>
R.findLast(R.propEq(<span class="hljs-string">'a'</span>, <span class="hljs-number">4</span>))(xs); <span class="hljs-comment">//=&gt; undefined</span></code></pre>
        </section>
        <div id="findLastIndex" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#findLastIndex">findLastIndex</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/findLastIndex.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(a → Boolean) → [a] → Number</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The predicate function used to determine if the element is the
desired one.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The array to consider.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Number</span>
                        <span class="description">The index of the element found, or '-1'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.1</small></p>

            <div class="description"><p>Returns the index of the last element of the list which matches the
predicate, or <code>-1</code> if no element matches.</p>
<p>Acts as a transducer if a transformer is given in list position.</p>
</div>



            <div class="see">
                See also
                <a href="#transduce">transduce</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> xs = [{<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">b</span>: <span class="hljs-number">0</span>}, {<span class="hljs-attr">a</span>:<span class="hljs-number">1</span>, <span class="hljs-attr">b</span>: <span class="hljs-number">1</span>}];
R.findLastIndex(R.propEq(<span class="hljs-string">'a'</span>, <span class="hljs-number">1</span>))(xs); <span class="hljs-comment">//=&gt; 1</span>
R.findLastIndex(R.propEq(<span class="hljs-string">'a'</span>, <span class="hljs-number">4</span>))(xs); <span class="hljs-comment">//=&gt; -1</span></code></pre>
        </section>
        <div id="flatten" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#flatten">flatten</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/flatten.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[a] → [b]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The array to consider.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">The flattened list.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns a new list by pulling every item out of it (and all its sub-arrays)
and putting them in a new array, depth-first.</p>
</div>



            <div class="see">
                See also
                <a href="#unnest">unnest</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.flatten([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>], <span class="hljs-number">5</span>, [<span class="hljs-number">6</span>, [<span class="hljs-number">7</span>, <span class="hljs-number">8</span>, [<span class="hljs-number">9</span>, [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>], <span class="hljs-number">12</span>]]]]);
<span class="hljs-comment">//=&gt; [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]</span></code></pre>
        </section>
        <div id="flip" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#flip">flip</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/flip.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((a, b, c, …) → z) → (b → a → c → … → z)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function to invoke with its first two parameters reversed.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description">The result of invoking 'fn' with its first two parameters' order reversed.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns a new function much like the supplied one, except that the first two
arguments' order is reversed.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> mergeThree = <span class="hljs-function">(<span class="hljs-params">a, b, c</span>) =&gt;</span> [].concat(a, b, c);

mergeThree(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">//=&gt; [1, 2, 3]</span>

R.flip(mergeThree)(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">//=&gt; [2, 1, 3]</span></code></pre>
        </section>
        <div id="forEach" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#forEach">forEach</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/forEach.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(a → *) → [a] → [a]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function to invoke. Receives one argument, <code>value</code>.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The list to iterate over.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">The original list.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.1</small></p>

            <div class="description"><p>Iterate over an input <code>list</code>, calling a provided function <code>fn</code> for each
element in the list.</p>
<p><code>fn</code> receives one argument: <em>(value)</em>.</p>
<p>Note: <code>R.forEach</code> does not skip deleted or unassigned indices (sparse
arrays), unlike the native <code>Array.prototype.forEach</code> method. For more
details on this behavior, see:
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description</a></p>
<p>Also note that, unlike <code>Array.prototype.forEach</code>, Ramda's <code>forEach</code> returns
the original array. In some libraries this function is named <code>each</code>.</p>
<p>Dispatches to the <code>forEach</code> method of the second argument, if present.</p>
</div>



            <div class="see">
                See also
                <a href="#addIndex">addIndex</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> printXPlusFive = <span class="hljs-function"><span class="hljs-params">x</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(x + <span class="hljs-number">5</span>);
R.forEach(printXPlusFive, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]); <span class="hljs-comment">//=&gt; [1, 2, 3]</span>
<span class="hljs-comment">// logs 6</span>
<span class="hljs-comment">// logs 7</span>
<span class="hljs-comment">// logs 8</span></code></pre>
        </section>
        <div id="forEachObjIndexed" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#forEachObjIndexed">forEachObjIndexed</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/forEachObjIndexed.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((a, String, StrMap a) → Any) → StrMap a → StrMap a</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function to invoke. Receives three argument, <code>value</code>, <code>key</code>, <code>obj</code>.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"><p>The object to iterate over.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description">The original object.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.23.0</small></p>

            <div class="description"><p>Iterate over an input <code>object</code>, calling a provided function <code>fn</code> for each
key and value in the object.</p>
<p><code>fn</code> receives three argument: <em>(value, key, obj)</em>.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> printKeyConcatValue = <span class="hljs-function">(<span class="hljs-params">value, key</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(key + <span class="hljs-string">':'</span> + value);
R.forEachObjIndexed(printKeyConcatValue, {<span class="hljs-attr">x</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">2</span>}); <span class="hljs-comment">//=&gt; {x: 1, y: 2}</span>
<span class="hljs-comment">// logs x:1</span>
<span class="hljs-comment">// logs y:2</span></code></pre>
        </section>
        <div id="fromPairs" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#fromPairs">fromPairs</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/fromPairs.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[[k,v]] → {k: v}</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">pairs</span>
                            <span class="description"><p>An array of two-element arrays that will be the keys and values of the output object.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description">The object made by pairing up 'keys' and 'values'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.3.0</small></p>

            <div class="description"><p>Creates a new object from a list key-value pairs. If a key appears in
multiple pairs, the rightmost pair is included in the object.</p>
</div>



            <div class="see">
                See also
                <a href="#toPairs">toPairs</a>,
                <a href="#pair">pair</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.fromPairs([[<span class="hljs-string">'a'</span>, <span class="hljs-number">1</span>], [<span class="hljs-string">'b'</span>, <span class="hljs-number">2</span>], [<span class="hljs-string">'c'</span>, <span class="hljs-number">3</span>]]); <span class="hljs-comment">//=&gt; {a: 1, b: 2, c: 3}</span></code></pre>
        </section>
        <div id="groupBy" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#groupBy">groupBy</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/groupBy.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(a → String) → [a] → {String: [a]}</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>Function :: a -&gt; String</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The array to group</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description">An object with the output of 'fn' for keys, mapped to arrays of elements
        that produced that key when passed to 'fn'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Splits a list into sub-lists stored in an object, based on the result of
calling a String-returning function on each element, and grouping the
results according to values returned.</p>
<p>Dispatches to the <code>groupBy</code> method of the second argument, if present.</p>
<p>Acts as a transducer if a transformer is given in list position.</p>
</div>



            <div class="see">
                See also
                <a href="#reduceBy">reduceBy</a>,
                <a href="#transduce">transduce</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> byGrade = R.groupBy(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">student</span>) </span>{
  <span class="hljs-keyword">const</span> score = student.score;
  <span class="hljs-keyword">return</span> score &lt; <span class="hljs-number">65</span> ? <span class="hljs-string">'F'</span> :
         score &lt; <span class="hljs-number">70</span> ? <span class="hljs-string">'D'</span> :
         score &lt; <span class="hljs-number">80</span> ? <span class="hljs-string">'C'</span> :
         score &lt; <span class="hljs-number">90</span> ? <span class="hljs-string">'B'</span> : <span class="hljs-string">'A'</span>;
});
<span class="hljs-keyword">const</span> students = [{<span class="hljs-attr">name</span>: <span class="hljs-string">'Abby'</span>, <span class="hljs-attr">score</span>: <span class="hljs-number">84</span>},
                {<span class="hljs-attr">name</span>: <span class="hljs-string">'Eddy'</span>, <span class="hljs-attr">score</span>: <span class="hljs-number">58</span>},
                <span class="hljs-comment">// ...</span>
                {<span class="hljs-attr">name</span>: <span class="hljs-string">'Jack'</span>, <span class="hljs-attr">score</span>: <span class="hljs-number">69</span>}];
byGrade(students);
<span class="hljs-comment">// {</span>
<span class="hljs-comment">//   'A': [{name: 'Dianne', score: 99}],</span>
<span class="hljs-comment">//   'B': [{name: 'Abby', score: 84}]</span>
<span class="hljs-comment">//   // ...,</span>
<span class="hljs-comment">//   'F': [{name: 'Eddy', score: 58}]</span>
<span class="hljs-comment">// }</span></code></pre>
        </section>
        <div id="groupWith" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#groupWith">groupWith</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/groupWith.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((a, a) → Boolean) → [a] → [[a]]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>Function for determining whether two given (adjacent)
       elements should be in the same group</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The array to group. Also accepts a string, which will be
       treated as a list of characters.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">List</span>
                        <span class="description">A list that contains sublists of elements,
        whose concatenations are equal to the original list.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.21.0</small></p>

            <div class="description"><p>Takes a list and returns a list of lists where each sublist's elements are
all satisfied pairwise comparison according to the provided function.
Only adjacent elements are passed to the comparison function.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.groupWith(R.equals, [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>, <span class="hljs-number">8</span>, <span class="hljs-number">13</span>, <span class="hljs-number">21</span>])
<span class="hljs-comment">//=&gt; [[0], [1, 1], [2], [3], [5], [8], [13], [21]]</span>

R.groupWith(<span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> a + <span class="hljs-number">1</span> === b, [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>, <span class="hljs-number">8</span>, <span class="hljs-number">13</span>, <span class="hljs-number">21</span>])
<span class="hljs-comment">//=&gt; [[0, 1], [1, 2, 3], [5], [8], [13], [21]]</span>

R.groupWith(<span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> a % <span class="hljs-number">2</span> === b % <span class="hljs-number">2</span>, [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>, <span class="hljs-number">8</span>, <span class="hljs-number">13</span>, <span class="hljs-number">21</span>])
<span class="hljs-comment">//=&gt; [[0], [1, 1], [2], [3, 5], [8], [13, 21]]</span>

R.groupWith(R.eqBy(isVowel), <span class="hljs-string">'aestiou'</span>)
<span class="hljs-comment">//=&gt; ['ae', 'st', 'iou']</span></code></pre>
        </section>
        <div id="gt" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#gt">gt</a>
                <span class="pull-right">
                        <span class="label label-category">Relation</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/gt.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Ord a =&gt; a → a → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">a</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">b</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns <code>true</code> if the first argument is greater than the second; <code>false</code>
otherwise.</p>
</div>



            <div class="see">
                See also
                <a href="#lt">lt</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.gt(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>); <span class="hljs-comment">//=&gt; true</span>
R.gt(<span class="hljs-number">2</span>, <span class="hljs-number">2</span>); <span class="hljs-comment">//=&gt; false</span>
R.gt(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">//=&gt; false</span>
R.gt(<span class="hljs-string">'a'</span>, <span class="hljs-string">'z'</span>); <span class="hljs-comment">//=&gt; false</span>
R.gt(<span class="hljs-string">'z'</span>, <span class="hljs-string">'a'</span>); <span class="hljs-comment">//=&gt; true</span></code></pre>
        </section>
        <div id="gte" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#gte">gte</a>
                <span class="pull-right">
                        <span class="label label-category">Relation</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/gte.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Ord a =&gt; a → a → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">a</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">b</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns <code>true</code> if the first argument is greater than or equal to the second;
<code>false</code> otherwise.</p>
</div>



            <div class="see">
                See also
                <a href="#lte">lte</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.gte(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>); <span class="hljs-comment">//=&gt; true</span>
R.gte(<span class="hljs-number">2</span>, <span class="hljs-number">2</span>); <span class="hljs-comment">//=&gt; true</span>
R.gte(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">//=&gt; false</span>
R.gte(<span class="hljs-string">'a'</span>, <span class="hljs-string">'z'</span>); <span class="hljs-comment">//=&gt; false</span>
R.gte(<span class="hljs-string">'z'</span>, <span class="hljs-string">'a'</span>); <span class="hljs-comment">//=&gt; true</span></code></pre>
        </section>
        <div id="has" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#has">has</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/has.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>s → {s: x} → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">prop</span>
                            <span class="description"><p>The name of the property to check for.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"><p>The object to query.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description">Whether the property exists.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.7.0</small></p>

            <div class="description"><p>Returns whether or not an object has an own property with the specified name</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> hasName = R.has(<span class="hljs-string">'name'</span>);
hasName({<span class="hljs-attr">name</span>: <span class="hljs-string">'alice'</span>});   <span class="hljs-comment">//=&gt; true</span>
hasName({<span class="hljs-attr">name</span>: <span class="hljs-string">'bob'</span>});     <span class="hljs-comment">//=&gt; true</span>
hasName({});                <span class="hljs-comment">//=&gt; false</span>

<span class="hljs-keyword">const</span> point = {<span class="hljs-attr">x</span>: <span class="hljs-number">0</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">0</span>};
<span class="hljs-keyword">const</span> pointHas = R.has(R.__, point);
pointHas(<span class="hljs-string">'x'</span>);  <span class="hljs-comment">//=&gt; true</span>
pointHas(<span class="hljs-string">'y'</span>);  <span class="hljs-comment">//=&gt; true</span>
pointHas(<span class="hljs-string">'z'</span>);  <span class="hljs-comment">//=&gt; false</span></code></pre>
        </section>
        <div id="hasIn" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#hasIn">hasIn</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/hasIn.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>s → {s: x} → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">prop</span>
                            <span class="description"><p>The name of the property to check for.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"><p>The object to query.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description">Whether the property exists.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.7.0</small></p>

            <div class="description"><p>Returns whether or not an object or its prototype chain has a property with
the specified name</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Rectangle</span>(<span class="hljs-params">width, height</span>) </span>{
  <span class="hljs-keyword">this</span>.width = width;
  <span class="hljs-keyword">this</span>.height = height;
}
Rectangle.prototype.area = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.width * <span class="hljs-keyword">this</span>.height;
};

<span class="hljs-keyword">const</span> square = <span class="hljs-keyword">new</span> Rectangle(<span class="hljs-number">2</span>, <span class="hljs-number">2</span>);
R.hasIn(<span class="hljs-string">'width'</span>, square);  <span class="hljs-comment">//=&gt; true</span>
R.hasIn(<span class="hljs-string">'area'</span>, square);  <span class="hljs-comment">//=&gt; true</span></code></pre>
        </section>
        <div id="hasPath" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#hasPath">hasPath</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/hasPath.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[Idx] → {a} → Boolean</code></div>

            <div><code>Idx = String | Int</code></div>

            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">path</span>
                            <span class="description"><p>The path to use.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"><p>The object to check the path in.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description">Whether the path exists.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.26.0</small></p>

            <div class="description"><p>Returns whether or not a path exists in an object. Only the object's
own properties are checked.</p>
</div>



            <div class="see">
                See also
                <a href="#has">has</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.hasPath([<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>], {<span class="hljs-attr">a</span>: {<span class="hljs-attr">b</span>: <span class="hljs-number">2</span>}});         <span class="hljs-comment">// =&gt; true</span>
R.hasPath([<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>], {<span class="hljs-attr">a</span>: {<span class="hljs-attr">b</span>: <span class="hljs-literal">undefined</span>}}); <span class="hljs-comment">// =&gt; true</span>
R.hasPath([<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>], {<span class="hljs-attr">a</span>: {<span class="hljs-attr">c</span>: <span class="hljs-number">2</span>}});         <span class="hljs-comment">// =&gt; false</span>
R.hasPath([<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>], {});                  <span class="hljs-comment">// =&gt; false</span></code></pre>
        </section>
        <div id="head" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#head">head</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/head.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[a] → a | Undefined</code></div>
            <div><code>String → String</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns the first element of the given list or string. In some libraries
this function is named <code>first</code>.</p>
</div>



            <div class="see">
                See also
                <a href="#tail">tail</a>,
                <a href="#init">init</a>,
                <a href="#last">last</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.head([<span class="hljs-string">'fi'</span>, <span class="hljs-string">'fo'</span>, <span class="hljs-string">'fum'</span>]); <span class="hljs-comment">//=&gt; 'fi'</span>
R.head([]); <span class="hljs-comment">//=&gt; undefined</span>

R.head(<span class="hljs-string">'abc'</span>); <span class="hljs-comment">//=&gt; 'a'</span>
R.head(<span class="hljs-string">''</span>); <span class="hljs-comment">//=&gt; ''</span></code></pre>
        </section>
        <div id="identical" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#identical">identical</a>
                <span class="pull-right">
                        <span class="label label-category">Relation</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/identical.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>a → a → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">a</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">b</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.15.0</small></p>

            <div class="description"><p>Returns true if its arguments are identical, false otherwise. Values are
identical if they reference the same memory. <code>NaN</code> is identical to <code>NaN</code>;
<code>0</code> and <code>-0</code> are not identical.</p>
<p>Note this is merely a curried version of ES6 <code>Object.is</code>.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> o = {};
R.identical(o, o); <span class="hljs-comment">//=&gt; true</span>
R.identical(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>); <span class="hljs-comment">//=&gt; true</span>
R.identical(<span class="hljs-number">1</span>, <span class="hljs-string">'1'</span>); <span class="hljs-comment">//=&gt; false</span>
R.identical([], []); <span class="hljs-comment">//=&gt; false</span>
R.identical(<span class="hljs-number">0</span>, <span class="hljs-number">-0</span>); <span class="hljs-comment">//=&gt; false</span>
R.identical(<span class="hljs-literal">NaN</span>, <span class="hljs-literal">NaN</span>); <span class="hljs-comment">//=&gt; true</span></code></pre>
        </section>
        <div id="identity" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#identity">identity</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/identity.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>a → a</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">x</span>
                            <span class="description"><p>The value to return.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description">The input value, 'x'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>A function that does nothing but return the parameter supplied to it. Good
as a default or placeholder function.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.identity(<span class="hljs-number">1</span>); <span class="hljs-comment">//=&gt; 1</span>

<span class="hljs-keyword">const</span> obj = {};
R.identity(obj) === obj; <span class="hljs-comment">//=&gt; true</span></code></pre>
        </section>
        <div id="ifElse" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#ifElse">ifElse</a>
                <span class="pull-right">
                        <span class="label label-category">Logic</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/ifElse.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(*… → Boolean) → (*… → *) → (*… → *) → (*… → *)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">condition</span>
                            <span class="description"><p>A predicate function</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">onTrue</span>
                            <span class="description"><p>A function to invoke when the <code>condition</code> evaluates to a truthy value.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">onFalse</span>
                            <span class="description"><p>A function to invoke when the <code>condition</code> evaluates to a falsy value.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">A new function that will process either the 'onTrue' or the 'onFalse'
                   function depending upon the result of the 'condition' predicate.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.8.0</small></p>

            <div class="description"><p>Creates a function that will process either the <code>onTrue</code> or the <code>onFalse</code>
function depending upon the result of the <code>condition</code> predicate.</p>
</div>



            <div class="see">
                See also
                <a href="#unless">unless</a>,
                <a href="#when">when</a>,
                <a href="#cond">cond</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> incCount = R.ifElse(
  R.has(<span class="hljs-string">'count'</span>),
  R.over(R.lensProp(<span class="hljs-string">'count'</span>), R.inc),
  R.assoc(<span class="hljs-string">'count'</span>, <span class="hljs-number">1</span>)
);
incCount({});           <span class="hljs-comment">//=&gt; { count: 1 }</span>
incCount({ <span class="hljs-attr">count</span>: <span class="hljs-number">1</span> }); <span class="hljs-comment">//=&gt; { count: 2 }</span></code></pre>
        </section>
        <div id="inc" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#inc">inc</a>
                <span class="pull-right">
                        <span class="label label-category">Math</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/inc.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → Number</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">n</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Number</span>
                        <span class="description">n + 1</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.9.0</small></p>

            <div class="description"><p>Increments its argument.</p>
</div>



            <div class="see">
                See also
                <a href="#dec">dec</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.inc(<span class="hljs-number">42</span>); <span class="hljs-comment">//=&gt; 43</span></code></pre>
        </section>
        <div id="includes" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#includes">includes</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/includes.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>a → [a] → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">a</span>
                            <span class="description"><p>The item to compare against.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The array to consider.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description">'true' if an equivalent item is in the list, 'false' otherwise.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.26.0</small></p>

            <div class="description"><p>Returns <code>true</code> if the specified value is equal, in <a href="#equals"><code>R.equals</code></a>
terms, to at least one element of the given list; <code>false</code> otherwise.
Works also with strings.</p>
</div>



            <div class="see">
                See also
                <a href="#any">any</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.includes(<span class="hljs-number">3</span>, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]); <span class="hljs-comment">//=&gt; true</span>
R.includes(<span class="hljs-number">4</span>, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]); <span class="hljs-comment">//=&gt; false</span>
R.includes({ <span class="hljs-attr">name</span>: <span class="hljs-string">'Fred'</span> }, [{ <span class="hljs-attr">name</span>: <span class="hljs-string">'Fred'</span> }]); <span class="hljs-comment">//=&gt; true</span>
R.includes([<span class="hljs-number">42</span>], [[<span class="hljs-number">42</span>]]); <span class="hljs-comment">//=&gt; true</span>
R.includes(<span class="hljs-string">'ba'</span>, <span class="hljs-string">'banana'</span>); <span class="hljs-comment">//=&gt;true</span></code></pre>
        </section>
        <div id="indexBy" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#indexBy">indexBy</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/indexBy.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(a → String) → [{k: v}] → {k: {k: v}}</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>Function :: a -&gt; String</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">array</span>
                            <span class="description"><p>The array of objects to index</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description">An object indexing each array element by the given property.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.19.0</small></p>

            <div class="description"><p>Given a function that generates a key, turns a list of objects into an
object indexing the objects by the given key. Note that if multiple
objects generate the same value for the indexing key only the last value
will be included in the generated object.</p>
<p>Acts as a transducer if a transformer is given in list position.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> list = [{<span class="hljs-attr">id</span>: <span class="hljs-string">'xyz'</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">'A'</span>}, {<span class="hljs-attr">id</span>: <span class="hljs-string">'abc'</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">'B'</span>}];
R.indexBy(R.prop(<span class="hljs-string">'id'</span>), list);
<span class="hljs-comment">//=&gt; {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}</span></code></pre>
        </section>
        <div id="indexOf" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#indexOf">indexOf</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/indexOf.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>a → [a] → Number</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">target</span>
                            <span class="description"><p>The item to find.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">xs</span>
                            <span class="description"><p>The array to search in.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Number</span>
                        <span class="description">the index of the target, or -1 if the target is not found.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns the position of the first occurrence of an item in an array, or -1
if the item is not included in the array. <a href="#equals"><code>R.equals</code></a> is used to
determine equality.</p>
</div>



            <div class="see">
                See also
                <a href="#lastIndexOf">lastIndexOf</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.indexOf(<span class="hljs-number">3</span>, [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>]); <span class="hljs-comment">//=&gt; 2</span>
R.indexOf(<span class="hljs-number">10</span>, [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>]); <span class="hljs-comment">//=&gt; -1</span></code></pre>
        </section>
        <div id="init" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#init">init</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/init.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[a] → [a]</code></div>
            <div><code>String → String</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.9.0</small></p>

            <div class="description"><p>Returns all but the last element of the given list or string.</p>
</div>



            <div class="see">
                See also
                <a href="#last">last</a>,
                <a href="#head">head</a>,
                <a href="#tail">tail</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.init([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]);  <span class="hljs-comment">//=&gt; [1, 2]</span>
R.init([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]);     <span class="hljs-comment">//=&gt; [1]</span>
R.init([<span class="hljs-number">1</span>]);        <span class="hljs-comment">//=&gt; []</span>
R.init([]);         <span class="hljs-comment">//=&gt; []</span>

R.init(<span class="hljs-string">'abc'</span>);  <span class="hljs-comment">//=&gt; 'ab'</span>
R.init(<span class="hljs-string">'ab'</span>);   <span class="hljs-comment">//=&gt; 'a'</span>
R.init(<span class="hljs-string">'a'</span>);    <span class="hljs-comment">//=&gt; ''</span>
R.init(<span class="hljs-string">''</span>);     <span class="hljs-comment">//=&gt; ''</span></code></pre>
        </section>
        <div id="innerJoin" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#innerJoin">innerJoin</a>
                <span class="pull-right">
                        <span class="label label-category">Relation</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/innerJoin.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((a, b) → Boolean) → [a] → [b] → [a]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">pred</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">xs</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">ys</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.24.0</small></p>

            <div class="description"><p>Takes a predicate <code>pred</code>, a list <code>xs</code>, and a list <code>ys</code>, and returns a list
<code>xs'</code> comprising each of the elements of <code>xs</code> which is equal to one or more
elements of <code>ys</code> according to <code>pred</code>.</p>
<p><code>pred</code> must be a binary function expecting an element from each list.</p>
<p><code>xs</code>, <code>ys</code>, and <code>xs'</code> are treated as sets, semantically, so ordering should
not be significant, but since <code>xs'</code> is ordered the implementation guarantees
that its values are in the same order as they appear in <code>xs</code>. Duplicates are
not removed, so <code>xs'</code> may contain duplicates if <code>xs</code> contains duplicates.</p>
</div>



            <div class="see">
                See also
                <a href="#intersection">intersection</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.innerJoin(
  <span class="hljs-function">(<span class="hljs-params">record, id</span>) =&gt;</span> record.id === id,
  [{<span class="hljs-attr">id</span>: <span class="hljs-number">824</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">'Richie Furay'</span>},
   {<span class="hljs-attr">id</span>: <span class="hljs-number">956</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">'Dewey Martin'</span>},
   {<span class="hljs-attr">id</span>: <span class="hljs-number">313</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">'Bruce Palmer'</span>},
   {<span class="hljs-attr">id</span>: <span class="hljs-number">456</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">'Stephen Stills'</span>},
   {<span class="hljs-attr">id</span>: <span class="hljs-number">177</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">'Neil Young'</span>}],
  [<span class="hljs-number">177</span>, <span class="hljs-number">456</span>, <span class="hljs-number">999</span>]
);
<span class="hljs-comment">//=&gt; [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]</span></code></pre>
        </section>
        <div id="insert" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#insert">insert</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/insert.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → a → [a] → [a]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">index</span>
                            <span class="description"><p>The position to insert the element</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">elt</span>
                            <span class="description"><p>The element to insert into the Array</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The list to insert into</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">A new Array with 'elt' inserted at 'index'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.2.2</small></p>

            <div class="description"><p>Inserts the supplied element into the list, at the specified <code>index</code>. <em>Note that
this is not destructive</em>: it returns a copy of the list with the changes.
<small>No lists have been harmed in the application of this function.</small></p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.insert(<span class="hljs-number">2</span>, <span class="hljs-string">'x'</span>, [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>]); <span class="hljs-comment">//=&gt; [1,2,'x',3,4]</span></code></pre>
        </section>
        <div id="insertAll" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#insertAll">insertAll</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/insertAll.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → [a] → [a] → [a]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">index</span>
                            <span class="description"><p>The position to insert the sub-list</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">elts</span>
                            <span class="description"><p>The sub-list to insert into the Array</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The list to insert the sub-list into</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">A new Array with 'elts' inserted starting at 'index'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.9.0</small></p>

            <div class="description"><p>Inserts the sub-list into the list, at the specified <code>index</code>. <em>Note that this is not
destructive</em>: it returns a copy of the list with the changes.
<small>No lists have been harmed in the application of this function.</small></p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.insertAll(<span class="hljs-number">2</span>, [<span class="hljs-string">'x'</span>,<span class="hljs-string">'y'</span>,<span class="hljs-string">'z'</span>], [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>]); <span class="hljs-comment">//=&gt; [1,2,'x','y','z',3,4]</span></code></pre>
        </section>
        <div id="intersection" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#intersection">intersection</a>
                <span class="pull-right">
                        <span class="label label-category">Relation</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/intersection.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[*] → [*] → [*]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list1</span>
                            <span class="description"><p>The first list.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list2</span>
                            <span class="description"><p>The second list.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">The list of elements found in both 'list1' and 'list2'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Combines two lists into a set (i.e. no duplicates) composed of those
elements common to both lists.</p>
</div>



            <div class="see">
                See also
                <a href="#innerJoin">innerJoin</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.intersection([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>], [<span class="hljs-number">7</span>,<span class="hljs-number">6</span>,<span class="hljs-number">5</span>,<span class="hljs-number">4</span>,<span class="hljs-number">3</span>]); <span class="hljs-comment">//=&gt; [4, 3]</span></code></pre>
        </section>
        <div id="intersperse" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#intersperse">intersperse</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/intersperse.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>a → [a] → [a]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">separator</span>
                            <span class="description"><p>The element to add to the list.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The list to be interposed.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">The new list.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.14.0</small></p>

            <div class="description"><p>Creates a new list with the separator interposed between elements.</p>
<p>Dispatches to the <code>intersperse</code> method of the second argument, if present.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.intersperse(<span class="hljs-string">'a'</span>, [<span class="hljs-string">'b'</span>, <span class="hljs-string">'n'</span>, <span class="hljs-string">'n'</span>, <span class="hljs-string">'s'</span>]); <span class="hljs-comment">//=&gt; ['b', 'a', 'n', 'a', 'n', 'a', 's']</span></code></pre>
        </section>
        <div id="into" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#into">into</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/into.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>a → (b → b) → [c] → a</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">acc</span>
                            <span class="description"><p>The initial accumulator value.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">xf</span>
                            <span class="description"><p>The transducer function. Receives a transformer and returns a transformer.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The list to iterate over.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description">The final, accumulated value.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.12.0</small></p>

            <div class="description"><p>Transforms the items of the list with the transducer and appends the
transformed items to the accumulator using an appropriate iterator function
based on the accumulator type.</p>
<p>The accumulator can be an array, string, object or a transformer. Iterated
items will be appended to arrays and concatenated to strings. Objects will
be merged directly or 2-item arrays will be merged as key, value pairs.</p>
<p>The accumulator can also be a transformer object that provides a 2-arity
reducing iterator function, step, 0-arity initial value function, init, and
1-arity result extraction function result. The step function is used as the
iterator function in reduce. The result function is used to convert the
final accumulator into the return type and in most cases is R.identity. The
init function is used to provide the initial accumulator.</p>
<p>The iteration is performed with <a href="#reduce"><code>R.reduce</code></a> after initializing the
transducer.</p>
</div>



            <div class="see">
                See also
                <a href="#transduce">transduce</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> numbers = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>];
<span class="hljs-keyword">const</span> transducer = R.compose(R.map(R.add(<span class="hljs-number">1</span>)), R.take(<span class="hljs-number">2</span>));

R.into([], transducer, numbers); <span class="hljs-comment">//=&gt; [2, 3]</span>

<span class="hljs-keyword">const</span> intoArray = R.into([]);
intoArray(transducer, numbers); <span class="hljs-comment">//=&gt; [2, 3]</span></code></pre>
        </section>
        <div id="invert" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#invert">invert</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/invert.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>{s: x} → {x: [ s, … ]}</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"><p>The object or array to invert</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description">out A new object with keys in an array.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.9.0</small></p>

            <div class="description"><p>Same as <a href="#invertObj"><code>R.invertObj</code></a>, however this accounts for objects with
duplicate values by putting the values into an array.</p>
</div>



            <div class="see">
                See also
                <a href="#invertObj">invertObj</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> raceResultsByFirstName = {
  <span class="hljs-attr">first</span>: <span class="hljs-string">'alice'</span>,
  <span class="hljs-attr">second</span>: <span class="hljs-string">'jake'</span>,
  <span class="hljs-attr">third</span>: <span class="hljs-string">'alice'</span>,
};
R.invert(raceResultsByFirstName);
<span class="hljs-comment">//=&gt; { 'alice': ['first', 'third'], 'jake':['second'] }</span></code></pre>
        </section>
        <div id="invertObj" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#invertObj">invertObj</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/invertObj.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>{s: x} → {x: s}</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"><p>The object or array to invert</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description">out A new object</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.9.0</small></p>

            <div class="description"><p>Returns a new object with the keys of the given object as values, and the
values of the given object, which are coerced to strings, as keys. Note
that the last key found is preferred when handling the same value.</p>
</div>



            <div class="see">
                See also
                <a href="#invert">invert</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> raceResults = {
  <span class="hljs-attr">first</span>: <span class="hljs-string">'alice'</span>,
  <span class="hljs-attr">second</span>: <span class="hljs-string">'jake'</span>
};
R.invertObj(raceResults);
<span class="hljs-comment">//=&gt; { 'alice': 'first', 'jake':'second' }</span>

<span class="hljs-comment">// Alternatively:</span>
<span class="hljs-keyword">const</span> raceResults = [<span class="hljs-string">'alice'</span>, <span class="hljs-string">'jake'</span>];
R.invertObj(raceResults);
<span class="hljs-comment">//=&gt; { 'alice': '0', 'jake':'1' }</span></code></pre>
        </section>
        <div id="invoker" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#invoker">invoker</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/invoker.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → String → (a → b → … → n → Object → *)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">arity</span>
                            <span class="description"><p>Number of arguments the returned function should take
       before the target object.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">method</span>
                            <span class="description"><p>Name of any of the target object's methods to call.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">A new curried function.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Turns a named method with a specified arity into a function that can be
called directly supplied with arguments and a target object.</p>
<p>The returned function is curried and accepts <code>arity + 1</code> parameters where
the final parameter is the target object.</p>
</div>



            <div class="see">
                See also
                <a href="#construct">construct</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> sliceFrom = R.invoker(<span class="hljs-number">1</span>, <span class="hljs-string">'slice'</span>);
sliceFrom(<span class="hljs-number">6</span>, <span class="hljs-string">'abcdefghijklm'</span>); <span class="hljs-comment">//=&gt; 'ghijklm'</span>
<span class="hljs-keyword">const</span> sliceFrom6 = R.invoker(<span class="hljs-number">2</span>, <span class="hljs-string">'slice'</span>)(<span class="hljs-number">6</span>);
sliceFrom6(<span class="hljs-number">8</span>, <span class="hljs-string">'abcdefghijklm'</span>); <span class="hljs-comment">//=&gt; 'gh'</span>

<span class="hljs-keyword">const</span> dog = {
  <span class="hljs-attr">speak</span>: <span class="hljs-keyword">async</span> () =&gt; <span class="hljs-string">'Woof!'</span>
};
<span class="hljs-keyword">const</span> speak = R.invoker(<span class="hljs-number">0</span>, <span class="hljs-string">'speak'</span>);
speak(dog).then(<span class="hljs-built_in">console</span>.log) <span class="hljs-comment">//~&gt; 'Woof!'</span></code></pre>
        </section>
        <div id="is" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#is">is</a>
                <span class="pull-right">
                        <span class="label label-category">Type</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/is.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(* → {*}) → a → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">ctor</span>
                            <span class="description"><p>A constructor</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">val</span>
                            <span class="description"><p>The value to test</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.3.0</small></p>

            <div class="description"><p>See if an object (<code>val</code>) is an instance of the supplied constructor. This
function will check up the inheritance chain, if any.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.is(<span class="hljs-built_in">Object</span>, {}); <span class="hljs-comment">//=&gt; true</span>
R.is(<span class="hljs-built_in">Number</span>, <span class="hljs-number">1</span>); <span class="hljs-comment">//=&gt; true</span>
R.is(<span class="hljs-built_in">Object</span>, <span class="hljs-number">1</span>); <span class="hljs-comment">//=&gt; false</span>
R.is(<span class="hljs-built_in">String</span>, <span class="hljs-string">'s'</span>); <span class="hljs-comment">//=&gt; true</span>
R.is(<span class="hljs-built_in">String</span>, <span class="hljs-keyword">new</span> <span class="hljs-built_in">String</span>(<span class="hljs-string">''</span>)); <span class="hljs-comment">//=&gt; true</span>
R.is(<span class="hljs-built_in">Object</span>, <span class="hljs-keyword">new</span> <span class="hljs-built_in">String</span>(<span class="hljs-string">''</span>)); <span class="hljs-comment">//=&gt; true</span>
R.is(<span class="hljs-built_in">Object</span>, <span class="hljs-string">'s'</span>); <span class="hljs-comment">//=&gt; false</span>
R.is(<span class="hljs-built_in">Number</span>, {}); <span class="hljs-comment">//=&gt; false</span></code></pre>
        </section>
        <div id="isEmpty" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#isEmpty">isEmpty</a>
                <span class="pull-right">
                        <span class="label label-category">Logic</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/isEmpty.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>a → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">x</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns <code>true</code> if the given value is its type's empty value; <code>false</code>
otherwise.</p>
</div>



            <div class="see">
                See also
                <a href="#empty">empty</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.isEmpty([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]);   <span class="hljs-comment">//=&gt; false</span>
R.isEmpty([]);          <span class="hljs-comment">//=&gt; true</span>
R.isEmpty(<span class="hljs-string">''</span>);          <span class="hljs-comment">//=&gt; true</span>
R.isEmpty(<span class="hljs-literal">null</span>);        <span class="hljs-comment">//=&gt; false</span>
R.isEmpty({});          <span class="hljs-comment">//=&gt; true</span>
R.isEmpty({<span class="hljs-attr">length</span>: <span class="hljs-number">0</span>}); <span class="hljs-comment">//=&gt; false</span></code></pre>
        </section>
        <div id="isNil" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#isNil">isNil</a>
                <span class="pull-right">
                        <span class="label label-category">Type</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/isNil.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>* → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">x</span>
                            <span class="description"><p>The value to test.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description">'true' if 'x' is 'undefined' or 'null', otherwise 'false'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.9.0</small></p>

            <div class="description"><p>Checks if the input value is <code>null</code> or <code>undefined</code>.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.isNil(<span class="hljs-literal">null</span>); <span class="hljs-comment">//=&gt; true</span>
R.isNil(<span class="hljs-literal">undefined</span>); <span class="hljs-comment">//=&gt; true</span>
R.isNil(<span class="hljs-number">0</span>); <span class="hljs-comment">//=&gt; false</span>
R.isNil([]); <span class="hljs-comment">//=&gt; false</span></code></pre>
        </section>
        <div id="join" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#join">join</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/join.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>String → [a] → String</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">separator</span>
                            <span class="description"><p>The string used to separate the elements.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">xs</span>
                            <span class="description"><p>The elements to join into a string.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">String</span>
                        <span class="description">str The string made by concatenating 'xs' with 'separator'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns a string made by inserting the <code>separator</code> between each element and
concatenating all the elements into a single string.</p>
</div>



            <div class="see">
                See also
                <a href="#split">split</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> spacer = R.join(<span class="hljs-string">' '</span>);
spacer([<span class="hljs-string">'a'</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3.4</span>]);   <span class="hljs-comment">//=&gt; 'a 2 3.4'</span>
R.join(<span class="hljs-string">'|'</span>, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]);    <span class="hljs-comment">//=&gt; '1|2|3'</span></code></pre>
        </section>
        <div id="juxt" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#juxt">juxt</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/juxt.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[(a, b, …, m) → n] → ((a, b, …, m) → [n])</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fns</span>
                            <span class="description"><p>An array of functions</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">A function that returns a list of values after applying each of the original 'fns' to its parameters.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.19.0</small></p>

            <div class="description"><p>juxt applies a list of functions to a list of values.</p>
</div>



            <div class="see">
                See also
                <a href="#applySpec">applySpec</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> getRange = R.juxt([<span class="hljs-built_in">Math</span>.min, <span class="hljs-built_in">Math</span>.max]);
getRange(<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">9</span>, <span class="hljs-number">-3</span>); <span class="hljs-comment">//=&gt; [-3, 9]</span></code></pre>
        </section>
        <div id="keys" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#keys">keys</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/keys.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>{k: v} → [k]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"><p>The object to extract properties from</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">An array of the object's own properties.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns a list containing the names of all the enumerable own properties of
the supplied object.
Note that the order of the output array is not guaranteed to be consistent
across different JS platforms.</p>
</div>



            <div class="see">
                See also
                <a href="#keysIn">keysIn</a>,
                <a href="#values">values</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.keys({<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">c</span>: <span class="hljs-number">3</span>}); <span class="hljs-comment">//=&gt; ['a', 'b', 'c']</span></code></pre>
        </section>
        <div id="keysIn" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#keysIn">keysIn</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/keysIn.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>{k: v} → [k]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"><p>The object to extract properties from</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">An array of the object's own and prototype properties.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.2.0</small></p>

            <div class="description"><p>Returns a list containing the names of all the properties of the supplied
object, including prototype properties.
Note that the order of the output array is not guaranteed to be consistent
across different JS platforms.</p>
</div>



            <div class="see">
                See also
                <a href="#keys">keys</a>,
                <a href="#valuesIn">valuesIn</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> F = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{ <span class="hljs-keyword">this</span>.x = <span class="hljs-string">'X'</span>; };
F.prototype.y = <span class="hljs-string">'Y'</span>;
<span class="hljs-keyword">const</span> f = <span class="hljs-keyword">new</span> F();
R.keysIn(f); <span class="hljs-comment">//=&gt; ['x', 'y']</span></code></pre>
        </section>
        <div id="last" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#last">last</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/last.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[a] → a | Undefined</code></div>
            <div><code>String → String</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.4</small></p>

            <div class="description"><p>Returns the last element of the given list or string.</p>
</div>



            <div class="see">
                See also
                <a href="#init">init</a>,
                <a href="#head">head</a>,
                <a href="#tail">tail</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.last([<span class="hljs-string">'fi'</span>, <span class="hljs-string">'fo'</span>, <span class="hljs-string">'fum'</span>]); <span class="hljs-comment">//=&gt; 'fum'</span>
R.last([]); <span class="hljs-comment">//=&gt; undefined</span>

R.last(<span class="hljs-string">'abc'</span>); <span class="hljs-comment">//=&gt; 'c'</span>
R.last(<span class="hljs-string">''</span>); <span class="hljs-comment">//=&gt; ''</span></code></pre>
        </section>
        <div id="lastIndexOf" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#lastIndexOf">lastIndexOf</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/lastIndexOf.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>a → [a] → Number</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">target</span>
                            <span class="description"><p>The item to find.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">xs</span>
                            <span class="description"><p>The array to search in.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Number</span>
                        <span class="description">the index of the target, or -1 if the target is not found.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns the position of the last occurrence of an item in an array, or -1 if
the item is not included in the array. <a href="#equals"><code>R.equals</code></a> is used to
determine equality.</p>
</div>



            <div class="see">
                See also
                <a href="#indexOf">indexOf</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.lastIndexOf(<span class="hljs-number">3</span>, [<span class="hljs-number">-1</span>,<span class="hljs-number">3</span>,<span class="hljs-number">3</span>,<span class="hljs-number">0</span>,<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>]); <span class="hljs-comment">//=&gt; 6</span>
R.lastIndexOf(<span class="hljs-number">10</span>, [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>]); <span class="hljs-comment">//=&gt; -1</span></code></pre>
        </section>
        <div id="length" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#length">length</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/length.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[a] → Number</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The array to inspect.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Number</span>
                        <span class="description">The length of the array.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.3.0</small></p>

            <div class="description"><p>Returns the number of elements in the array by returning <code>list.length</code>.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.length([]); <span class="hljs-comment">//=&gt; 0</span>
R.length([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]); <span class="hljs-comment">//=&gt; 3</span></code></pre>
        </section>
        <div id="lens" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#lens">lens</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/lens.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(s → a) → ((a, s) → s) → Lens s a</code></div>

            <div><code>Lens s a = Functor f =&gt; (a → f a) → s → f s</code></div>

            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">getter</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">setter</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Lens</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.8.0</small></p>

            <div class="description"><p>Returns a lens for the given getter and setter functions. The getter "gets"
the value of the focus; the setter "sets" the value of the focus. The setter
should not mutate the data structure.</p>
</div>



            <div class="see">
                See also
                <a href="#view">view</a>,
                <a href="#set">set</a>,
                <a href="#over">over</a>,
                <a href="#lensIndex">lensIndex</a>,
                <a href="#lensProp">lensProp</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> xLens = R.lens(R.prop(<span class="hljs-string">'x'</span>), R.assoc(<span class="hljs-string">'x'</span>));

R.view(xLens, {<span class="hljs-attr">x</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">2</span>});            <span class="hljs-comment">//=&gt; 1</span>
R.set(xLens, <span class="hljs-number">4</span>, {<span class="hljs-attr">x</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">2</span>});          <span class="hljs-comment">//=&gt; {x: 4, y: 2}</span>
R.over(xLens, R.negate, {<span class="hljs-attr">x</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">2</span>});  <span class="hljs-comment">//=&gt; {x: -1, y: 2}</span></code></pre>
        </section>
        <div id="lensIndex" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#lensIndex">lensIndex</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/lensIndex.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → Lens s a</code></div>

            <div><code>Lens s a = Functor f =&gt; (a → f a) → s → f s</code></div>

            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">n</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Lens</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.14.0</small></p>

            <div class="description"><p>Returns a lens whose focus is the specified index.</p>
</div>



            <div class="see">
                See also
                <a href="#view">view</a>,
                <a href="#set">set</a>,
                <a href="#over">over</a>,
                <a href="#nth">nth</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> headLens = R.lensIndex(<span class="hljs-number">0</span>);

R.view(headLens, [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>]);            <span class="hljs-comment">//=&gt; 'a'</span>
R.set(headLens, <span class="hljs-string">'x'</span>, [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>]);        <span class="hljs-comment">//=&gt; ['x', 'b', 'c']</span>
R.over(headLens, R.toUpper, [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>]); <span class="hljs-comment">//=&gt; ['A', 'b', 'c']</span></code></pre>
        </section>
        <div id="lensPath" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#lensPath">lensPath</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/lensPath.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[Idx] → Lens s a</code></div>

            <div><code>Idx = String | Int</code></div>
            <div><code>Lens s a = Functor f =&gt; (a → f a) → s → f s</code></div>

            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">path</span>
                            <span class="description"><p>The path to use.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Lens</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.19.0</small></p>

            <div class="description"><p>Returns a lens whose focus is the specified path.</p>
</div>



            <div class="see">
                See also
                <a href="#view">view</a>,
                <a href="#set">set</a>,
                <a href="#over">over</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> xHeadYLens = R.lensPath([<span class="hljs-string">'x'</span>, <span class="hljs-number">0</span>, <span class="hljs-string">'y'</span>]);

R.view(xHeadYLens, {<span class="hljs-attr">x</span>: [{<span class="hljs-attr">y</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">z</span>: <span class="hljs-number">3</span>}, {<span class="hljs-attr">y</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">z</span>: <span class="hljs-number">5</span>}]});
<span class="hljs-comment">//=&gt; 2</span>
R.set(xHeadYLens, <span class="hljs-number">1</span>, {<span class="hljs-attr">x</span>: [{<span class="hljs-attr">y</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">z</span>: <span class="hljs-number">3</span>}, {<span class="hljs-attr">y</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">z</span>: <span class="hljs-number">5</span>}]});
<span class="hljs-comment">//=&gt; {x: [{y: 1, z: 3}, {y: 4, z: 5}]}</span>
R.over(xHeadYLens, R.negate, {<span class="hljs-attr">x</span>: [{<span class="hljs-attr">y</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">z</span>: <span class="hljs-number">3</span>}, {<span class="hljs-attr">y</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">z</span>: <span class="hljs-number">5</span>}]});
<span class="hljs-comment">//=&gt; {x: [{y: -2, z: 3}, {y: 4, z: 5}]}</span></code></pre>
        </section>
        <div id="lensProp" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#lensProp">lensProp</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/lensProp.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>String → Lens s a</code></div>

            <div><code>Lens s a = Functor f =&gt; (a → f a) → s → f s</code></div>

            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">k</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Lens</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.14.0</small></p>

            <div class="description"><p>Returns a lens whose focus is the specified property.</p>
</div>



            <div class="see">
                See also
                <a href="#view">view</a>,
                <a href="#set">set</a>,
                <a href="#over">over</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> xLens = R.lensProp(<span class="hljs-string">'x'</span>);

R.view(xLens, {<span class="hljs-attr">x</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">2</span>});            <span class="hljs-comment">//=&gt; 1</span>
R.set(xLens, <span class="hljs-number">4</span>, {<span class="hljs-attr">x</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">2</span>});          <span class="hljs-comment">//=&gt; {x: 4, y: 2}</span>
R.over(xLens, R.negate, {<span class="hljs-attr">x</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">2</span>});  <span class="hljs-comment">//=&gt; {x: -1, y: 2}</span></code></pre>
        </section>
        <div id="lift" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#lift">lift</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/lift.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(*… → *) → ([*]… → [*])</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function to lift into higher context</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">The lifted function.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.7.0</small></p>

            <div class="description"><p>"lifts" a function of arity &gt; 1 so that it may "map over" a list, Function or other
object that satisfies the <a href="https://github.com/fantasyland/fantasy-land#apply">FantasyLand Apply spec</a>.</p>
</div>



            <div class="see">
                See also
                <a href="#liftN">liftN</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> madd3 = R.lift(<span class="hljs-function">(<span class="hljs-params">a, b, c</span>) =&gt;</span> a + b + c);

madd3([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>], [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>], [<span class="hljs-number">1</span>]); <span class="hljs-comment">//=&gt; [3, 4, 5, 4, 5, 6, 5, 6, 7]</span>

<span class="hljs-keyword">const</span> madd5 = R.lift(<span class="hljs-function">(<span class="hljs-params">a, b, c, d, e</span>) =&gt;</span> a + b + c + d + e);

madd5([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>], [<span class="hljs-number">3</span>], [<span class="hljs-number">4</span>, <span class="hljs-number">5</span>], [<span class="hljs-number">6</span>], [<span class="hljs-number">7</span>, <span class="hljs-number">8</span>]); <span class="hljs-comment">//=&gt; [21, 22, 22, 23, 22, 23, 23, 24]</span></code></pre>
        </section>
        <div id="liftN" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#liftN">liftN</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/liftN.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → (*… → *) → ([*]… → [*])</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function to lift into higher context</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">The lifted function.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.7.0</small></p>

            <div class="description"><p>"lifts" a function to be the specified arity, so that it may "map over" that
many lists, Functions or other objects that satisfy the <a href="https://github.com/fantasyland/fantasy-land#apply">FantasyLand Apply spec</a>.</p>
</div>



            <div class="see">
                See also
                <a href="#lift">lift</a>,
                <a href="#ap">ap</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> madd3 = R.liftN(<span class="hljs-number">3</span>, (...args) =&gt; R.sum(args));
madd3([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>], [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>], [<span class="hljs-number">1</span>]); <span class="hljs-comment">//=&gt; [3, 4, 5, 4, 5, 6, 5, 6, 7]</span></code></pre>
        </section>
        <div id="lt" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#lt">lt</a>
                <span class="pull-right">
                        <span class="label label-category">Relation</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/lt.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Ord a =&gt; a → a → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">a</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">b</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns <code>true</code> if the first argument is less than the second; <code>false</code>
otherwise.</p>
</div>



            <div class="see">
                See also
                <a href="#gt">gt</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.lt(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>); <span class="hljs-comment">//=&gt; false</span>
R.lt(<span class="hljs-number">2</span>, <span class="hljs-number">2</span>); <span class="hljs-comment">//=&gt; false</span>
R.lt(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">//=&gt; true</span>
R.lt(<span class="hljs-string">'a'</span>, <span class="hljs-string">'z'</span>); <span class="hljs-comment">//=&gt; true</span>
R.lt(<span class="hljs-string">'z'</span>, <span class="hljs-string">'a'</span>); <span class="hljs-comment">//=&gt; false</span></code></pre>
        </section>
        <div id="lte" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#lte">lte</a>
                <span class="pull-right">
                        <span class="label label-category">Relation</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/lte.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Ord a =&gt; a → a → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">a</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">b</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns <code>true</code> if the first argument is less than or equal to the second;
<code>false</code> otherwise.</p>
</div>



            <div class="see">
                See also
                <a href="#gte">gte</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.lte(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>); <span class="hljs-comment">//=&gt; false</span>
R.lte(<span class="hljs-number">2</span>, <span class="hljs-number">2</span>); <span class="hljs-comment">//=&gt; true</span>
R.lte(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">//=&gt; true</span>
R.lte(<span class="hljs-string">'a'</span>, <span class="hljs-string">'z'</span>); <span class="hljs-comment">//=&gt; true</span>
R.lte(<span class="hljs-string">'z'</span>, <span class="hljs-string">'a'</span>); <span class="hljs-comment">//=&gt; false</span></code></pre>
        </section>
        <div id="map" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#map">map</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/map.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Functor f =&gt; (a → b) → f a → f b</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function to be called on every element of the input <code>list</code>.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The list to be iterated over.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">The new list.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Takes a function and
a <a href="https://github.com/fantasyland/fantasy-land#functor">functor</a>,
applies the function to each of the functor's values, and returns
a functor of the same shape.</p>
<p>Ramda provides suitable <code>map</code> implementations for <code>Array</code> and <code>Object</code>,
so this function may be applied to <code>[1, 2, 3]</code> or <code>{x: 1, y: 2, z: 3}</code>.</p>
<p>Dispatches to the <code>map</code> method of the second argument, if present.</p>
<p>Acts as a transducer if a transformer is given in list position.</p>
<p>Also treats functions as functors and will compose them together.</p>
</div>



            <div class="see">
                See also
                <a href="#transduce">transduce</a>,
                <a href="#addIndex">addIndex</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> double = <span class="hljs-function"><span class="hljs-params">x</span> =&gt;</span> x * <span class="hljs-number">2</span>;

R.map(double, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]); <span class="hljs-comment">//=&gt; [2, 4, 6]</span>

R.map(double, {<span class="hljs-attr">x</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">z</span>: <span class="hljs-number">3</span>}); <span class="hljs-comment">//=&gt; {x: 2, y: 4, z: 6}</span></code></pre>
        </section>
        <div id="mapAccum" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#mapAccum">mapAccum</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/mapAccum.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((acc, x) → (acc, y)) → acc → [x] → (acc, [y])</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function to be called on every element of the input <code>list</code>.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">acc</span>
                            <span class="description"><p>The accumulator value.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The list to iterate over.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description">The final, accumulated value.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.10.0</small></p>

            <div class="description"><p>The <code>mapAccum</code> function behaves like a combination of map and reduce; it
applies a function to each element of a list, passing an accumulating
parameter from left to right, and returning a final value of this
accumulator together with the new list.</p>
<p>The iterator function receives two arguments, <em>acc</em> and <em>value</em>, and should
return a tuple <em>[acc, value]</em>.</p>
</div>



            <div class="see">
                See also
                <a href="#scan">scan</a>,
                <a href="#addIndex">addIndex</a>,
                <a href="#mapAccumRight">mapAccumRight</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> digits = [<span class="hljs-string">'1'</span>, <span class="hljs-string">'2'</span>, <span class="hljs-string">'3'</span>, <span class="hljs-string">'4'</span>];
<span class="hljs-keyword">const</span> appender = <span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> [a + b, a + b];

R.mapAccum(appender, <span class="hljs-number">0</span>, digits); <span class="hljs-comment">//=&gt; ['01234', ['01', '012', '0123', '01234']]</span></code></pre>
        </section>
        <div id="mapAccumRight" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#mapAccumRight">mapAccumRight</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/mapAccumRight.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((acc, x) → (acc, y)) → acc → [x] → (acc, [y])</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function to be called on every element of the input <code>list</code>.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">acc</span>
                            <span class="description"><p>The accumulator value.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The list to iterate over.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description">The final, accumulated value.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.10.0</small></p>

            <div class="description"><p>The <code>mapAccumRight</code> function behaves like a combination of map and reduce; it
applies a function to each element of a list, passing an accumulating
parameter from right to left, and returning a final value of this
accumulator together with the new list.</p>
<p>Similar to <a href="#mapAccum"><code>mapAccum</code></a>, except moves through the input list from
the right to the left.</p>
<p>The iterator function receives two arguments, <em>acc</em> and <em>value</em>, and should
return a tuple <em>[acc, value]</em>.</p>
</div>



            <div class="see">
                See also
                <a href="#addIndex">addIndex</a>,
                <a href="#mapAccum">mapAccum</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> digits = [<span class="hljs-string">'1'</span>, <span class="hljs-string">'2'</span>, <span class="hljs-string">'3'</span>, <span class="hljs-string">'4'</span>];
<span class="hljs-keyword">const</span> appender = <span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> [b + a, b + a];

R.mapAccumRight(appender, <span class="hljs-number">5</span>, digits); <span class="hljs-comment">//=&gt; ['12345', ['12345', '2345', '345', '45']]</span></code></pre>
        </section>
        <div id="mapObjIndexed" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#mapObjIndexed">mapObjIndexed</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/mapObjIndexed.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((*, String, Object) → *) → Object → Object</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.9.0</small></p>

            <div class="description"><p>An Object-specific version of <a href="#map"><code>map</code></a>. The function is applied to three
arguments: <em>(value, key, obj)</em>. If only the value is significant, use
<a href="#map"><code>map</code></a> instead.</p>
</div>



            <div class="see">
                See also
                <a href="#map">map</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> xyz = { <span class="hljs-attr">x</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">z</span>: <span class="hljs-number">3</span> };
<span class="hljs-keyword">const</span> prependKeyAndDouble = <span class="hljs-function">(<span class="hljs-params">num, key, obj</span>) =&gt;</span> key + (num * <span class="hljs-number">2</span>);

R.mapObjIndexed(prependKeyAndDouble, xyz); <span class="hljs-comment">//=&gt; { x: 'x2', y: 'y4', z: 'z6' }</span></code></pre>
        </section>
        <div id="match" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#match">match</a>
                <span class="pull-right">
                        <span class="label label-category">String</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/match.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>RegExp → String → [String | Undefined]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">rx</span>
                            <span class="description"><p>A regular expression.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">str</span>
                            <span class="description"><p>The string to match against</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">The list of matches or empty array.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Tests a regular expression against a String. Note that this function will
return an empty array when there are no matches. This differs from
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match"><code>String.prototype.match</code></a>
which returns <code>null</code> when there are no matches.</p>
</div>



            <div class="see">
                See also
                <a href="#test">test</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.match(<span class="hljs-regexp">/([a-z]a)/g</span>, <span class="hljs-string">'bananas'</span>); <span class="hljs-comment">//=&gt; ['ba', 'na', 'na']</span>
R.match(<span class="hljs-regexp">/a/</span>, <span class="hljs-string">'b'</span>); <span class="hljs-comment">//=&gt; []</span>
R.match(<span class="hljs-regexp">/a/</span>, <span class="hljs-literal">null</span>); <span class="hljs-comment">//=&gt; TypeError: null does not have a method named "match"</span></code></pre>
        </section>
        <div id="mathMod" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#mathMod">mathMod</a>
                <span class="pull-right">
                        <span class="label label-category">Math</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/mathMod.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → Number → Number</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">m</span>
                            <span class="description"><p>The dividend.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">p</span>
                            <span class="description"><p>the modulus.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Number</span>
                        <span class="description">The result of 'b mod a'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.3.0</small></p>

            <div class="description"><p><code>mathMod</code> behaves like the modulo operator should mathematically, unlike the
<code>%</code> operator (and by extension, <a href="#modulo"><code>R.modulo</code></a>). So while
<code>-17 % 5</code> is <code>-2</code>, <code>mathMod(-17, 5)</code> is <code>3</code>. <code>mathMod</code> requires Integer
arguments, and returns NaN when the modulus is zero or negative.</p>
</div>



            <div class="see">
                See also
                <a href="#modulo">modulo</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.mathMod(<span class="hljs-number">-17</span>, <span class="hljs-number">5</span>);  <span class="hljs-comment">//=&gt; 3</span>
R.mathMod(<span class="hljs-number">17</span>, <span class="hljs-number">5</span>);   <span class="hljs-comment">//=&gt; 2</span>
R.mathMod(<span class="hljs-number">17</span>, <span class="hljs-number">-5</span>);  <span class="hljs-comment">//=&gt; NaN</span>
R.mathMod(<span class="hljs-number">17</span>, <span class="hljs-number">0</span>);   <span class="hljs-comment">//=&gt; NaN</span>
R.mathMod(<span class="hljs-number">17.2</span>, <span class="hljs-number">5</span>); <span class="hljs-comment">//=&gt; NaN</span>
R.mathMod(<span class="hljs-number">17</span>, <span class="hljs-number">5.3</span>); <span class="hljs-comment">//=&gt; NaN</span>

<span class="hljs-keyword">const</span> clock = R.mathMod(R.__, <span class="hljs-number">12</span>);
clock(<span class="hljs-number">15</span>); <span class="hljs-comment">//=&gt; 3</span>
clock(<span class="hljs-number">24</span>); <span class="hljs-comment">//=&gt; 0</span>

<span class="hljs-keyword">const</span> seventeenMod = R.mathMod(<span class="hljs-number">17</span>);
seventeenMod(<span class="hljs-number">3</span>);  <span class="hljs-comment">//=&gt; 2</span>
seventeenMod(<span class="hljs-number">4</span>);  <span class="hljs-comment">//=&gt; 1</span>
seventeenMod(<span class="hljs-number">10</span>); <span class="hljs-comment">//=&gt; 7</span></code></pre>
        </section>
        <div id="max" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#max">max</a>
                <span class="pull-right">
                        <span class="label label-category">Relation</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/max.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Ord a =&gt; a → a → a</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">a</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">b</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns the larger of its two arguments.</p>
</div>



            <div class="see">
                See also
                <a href="#maxBy">maxBy</a>,
                <a href="#min">min</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.max(<span class="hljs-number">789</span>, <span class="hljs-number">123</span>); <span class="hljs-comment">//=&gt; 789</span>
R.max(<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>); <span class="hljs-comment">//=&gt; 'b'</span></code></pre>
        </section>
        <div id="maxBy" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#maxBy">maxBy</a>
                <span class="pull-right">
                        <span class="label label-category">Relation</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/maxBy.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Ord b =&gt; (a → b) → a → a → a</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">f</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">a</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">b</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.8.0</small></p>

            <div class="description"><p>Takes a function and two values, and returns whichever value produces the
larger result when passed to the provided function.</p>
</div>



            <div class="see">
                See also
                <a href="#max">max</a>,
                <a href="#minBy">minBy</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-comment">//  square :: Number -&gt; Number</span>
<span class="hljs-keyword">const</span> square = <span class="hljs-function"><span class="hljs-params">n</span> =&gt;</span> n * n;

R.maxBy(square, <span class="hljs-number">-3</span>, <span class="hljs-number">2</span>); <span class="hljs-comment">//=&gt; -3</span>

R.reduce(R.maxBy(square), <span class="hljs-number">0</span>, [<span class="hljs-number">3</span>, <span class="hljs-number">-5</span>, <span class="hljs-number">4</span>, <span class="hljs-number">1</span>, <span class="hljs-number">-2</span>]); <span class="hljs-comment">//=&gt; -5</span>
R.reduce(R.maxBy(square), <span class="hljs-number">0</span>, []); <span class="hljs-comment">//=&gt; 0</span></code></pre>
        </section>
        <div id="mean" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#mean">mean</a>
                <span class="pull-right">
                        <span class="label label-category">Math</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/mean.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[Number] → Number</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Number</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.14.0</small></p>

            <div class="description"><p>Returns the mean of the given list of numbers.</p>
</div>



            <div class="see">
                See also
                <a href="#median">median</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.mean([<span class="hljs-number">2</span>, <span class="hljs-number">7</span>, <span class="hljs-number">9</span>]); <span class="hljs-comment">//=&gt; 6</span>
R.mean([]); <span class="hljs-comment">//=&gt; NaN</span></code></pre>
        </section>
        <div id="median" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#median">median</a>
                <span class="pull-right">
                        <span class="label label-category">Math</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/median.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[Number] → Number</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Number</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.14.0</small></p>

            <div class="description"><p>Returns the median of the given list of numbers.</p>
</div>



            <div class="see">
                See also
                <a href="#mean">mean</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.median([<span class="hljs-number">2</span>, <span class="hljs-number">9</span>, <span class="hljs-number">7</span>]); <span class="hljs-comment">//=&gt; 7</span>
R.median([<span class="hljs-number">7</span>, <span class="hljs-number">2</span>, <span class="hljs-number">10</span>, <span class="hljs-number">9</span>]); <span class="hljs-comment">//=&gt; 8</span>
R.median([]); <span class="hljs-comment">//=&gt; NaN</span></code></pre>
        </section>
        <div id="memoizeWith" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#memoizeWith">memoizeWith</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/memoizeWith.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(*… → String) → (*… → a) → (*… → a)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function to generate the cache key.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function to memoize.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">Memoized version of 'fn'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.24.0</small></p>

            <div class="description"><p>Creates a new function that, when invoked, caches the result of calling <code>fn</code>
for a given argument set and returns the result. Subsequent calls to the
memoized <code>fn</code> with the same argument set will not result in an additional
call to <code>fn</code>; instead, the cached result for that set of arguments will be
returned.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">let</span> count = <span class="hljs-number">0</span>;
<span class="hljs-keyword">const</span> factorial = R.memoizeWith(R.identity, n =&gt; {
  count += <span class="hljs-number">1</span>;
  <span class="hljs-keyword">return</span> R.product(R.range(<span class="hljs-number">1</span>, n + <span class="hljs-number">1</span>));
});
factorial(<span class="hljs-number">5</span>); <span class="hljs-comment">//=&gt; 120</span>
factorial(<span class="hljs-number">5</span>); <span class="hljs-comment">//=&gt; 120</span>
factorial(<span class="hljs-number">5</span>); <span class="hljs-comment">//=&gt; 120</span>
count; <span class="hljs-comment">//=&gt; 1</span></code></pre>
        </section>
        <div id="merge" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#merge">merge</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/merge.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>

            <div class="deprecated">
                Deprecated since v0.26.0
            </div>

            <div><code>{k: v} → {k: v} → {k: v}</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">l</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">r</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Create a new object with the own properties of the first object merged with
the own properties of the second object. If a key exists in both objects,
the value from the second object will be used.</p>
</div>



            <div class="see">
                See also
                <a href="#mergeRight">mergeRight</a>,
                <a href="#mergeDeepRight">mergeDeepRight</a>,
                <a href="#mergeWith">mergeWith</a>,
                <a href="#mergeWithKey">mergeWithKey</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.merge({ <span class="hljs-string">'name'</span>: <span class="hljs-string">'fred'</span>, <span class="hljs-string">'age'</span>: <span class="hljs-number">10</span> }, { <span class="hljs-string">'age'</span>: <span class="hljs-number">40</span> });
<span class="hljs-comment">//=&gt; { 'name': 'fred', 'age': 40 }</span>

<span class="hljs-keyword">const</span> withDefaults = R.merge({<span class="hljs-attr">x</span>: <span class="hljs-number">0</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">0</span>});
withDefaults({<span class="hljs-attr">y</span>: <span class="hljs-number">2</span>}); <span class="hljs-comment">//=&gt; {x: 0, y: 2}</span></code></pre>
        </section>
        <div id="mergeAll" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#mergeAll">mergeAll</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/mergeAll.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[{k: v}] → {k: v}</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>An array of objects</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description">A merged object.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.10.0</small></p>

            <div class="description"><p>Merges a list of objects together into one object.</p>
</div>



            <div class="see">
                See also
                <a href="#reduce">reduce</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.mergeAll([{<span class="hljs-attr">foo</span>:<span class="hljs-number">1</span>},{<span class="hljs-attr">bar</span>:<span class="hljs-number">2</span>},{<span class="hljs-attr">baz</span>:<span class="hljs-number">3</span>}]); <span class="hljs-comment">//=&gt; {foo:1,bar:2,baz:3}</span>
R.mergeAll([{<span class="hljs-attr">foo</span>:<span class="hljs-number">1</span>},{<span class="hljs-attr">foo</span>:<span class="hljs-number">2</span>},{<span class="hljs-attr">bar</span>:<span class="hljs-number">2</span>}]); <span class="hljs-comment">//=&gt; {foo:2,bar:2}</span></code></pre>
        </section>
        <div id="mergeDeepLeft" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#mergeDeepLeft">mergeDeepLeft</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/mergeDeepLeft.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>{a} → {a} → {a}</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">lObj</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">rObj</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.24.0</small></p>

            <div class="description"><p>Creates a new object with the own properties of the first object merged with
the own properties of the second object. If a key exists in both objects:</p>
<ul>
<li>and both values are objects, the two values will be recursively merged</li>
<li>otherwise the value from the first object will be used.</li>
</ul>
</div>



            <div class="see">
                See also
                <a href="#merge">merge</a>,
                <a href="#mergeDeepRight">mergeDeepRight</a>,
                <a href="#mergeDeepWith">mergeDeepWith</a>,
                <a href="#mergeDeepWithKey">mergeDeepWithKey</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.mergeDeepLeft({ <span class="hljs-attr">name</span>: <span class="hljs-string">'fred'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">10</span>, <span class="hljs-attr">contact</span>: { <span class="hljs-attr">email</span>: <span class="hljs-string">'moo@example.com'</span> }},
                { <span class="hljs-attr">age</span>: <span class="hljs-number">40</span>, <span class="hljs-attr">contact</span>: { <span class="hljs-attr">email</span>: <span class="hljs-string">'baa@example.com'</span> }});
<span class="hljs-comment">//=&gt; { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}</span></code></pre>
        </section>
        <div id="mergeDeepRight" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#mergeDeepRight">mergeDeepRight</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/mergeDeepRight.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>{a} → {a} → {a}</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">lObj</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">rObj</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.24.0</small></p>

            <div class="description"><p>Creates a new object with the own properties of the first object merged with
the own properties of the second object. If a key exists in both objects:</p>
<ul>
<li>and both values are objects, the two values will be recursively merged</li>
<li>otherwise the value from the second object will be used.</li>
</ul>
</div>



            <div class="see">
                See also
                <a href="#merge">merge</a>,
                <a href="#mergeDeepLeft">mergeDeepLeft</a>,
                <a href="#mergeDeepWith">mergeDeepWith</a>,
                <a href="#mergeDeepWithKey">mergeDeepWithKey</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.mergeDeepRight({ <span class="hljs-attr">name</span>: <span class="hljs-string">'fred'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">10</span>, <span class="hljs-attr">contact</span>: { <span class="hljs-attr">email</span>: <span class="hljs-string">'moo@example.com'</span> }},
                 { <span class="hljs-attr">age</span>: <span class="hljs-number">40</span>, <span class="hljs-attr">contact</span>: { <span class="hljs-attr">email</span>: <span class="hljs-string">'baa@example.com'</span> }});
<span class="hljs-comment">//=&gt; { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}</span></code></pre>
        </section>
        <div id="mergeDeepWith" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#mergeDeepWith">mergeDeepWith</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/mergeDeepWith.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((a, a) → a) → {a} → {a} → {a}</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">lObj</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">rObj</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.24.0</small></p>

            <div class="description"><p>Creates a new object with the own properties of the two provided objects.
If a key exists in both objects:</p>
<ul>
<li>and both associated values are also objects then the values will be
recursively merged.</li>
<li>otherwise the provided function is applied to associated values using the
resulting value as the new value associated with the key.
If a key only exists in one object, the value will be associated with the key
of the resulting object.</li>
</ul>
</div>



            <div class="see">
                See also
                <a href="#mergeWith">mergeWith</a>,
                <a href="#mergeDeepWithKey">mergeDeepWithKey</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.mergeDeepWith(R.concat,
                { <span class="hljs-attr">a</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">c</span>: { <span class="hljs-attr">values</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">20</span>] }},
                { <span class="hljs-attr">b</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">c</span>: { <span class="hljs-attr">values</span>: [<span class="hljs-number">15</span>, <span class="hljs-number">35</span>] }});
<span class="hljs-comment">//=&gt; { a: true, b: true, c: { values: [10, 20, 15, 35] }}</span></code></pre>
        </section>
        <div id="mergeDeepWithKey" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#mergeDeepWithKey">mergeDeepWithKey</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/mergeDeepWithKey.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((String, a, a) → a) → {a} → {a} → {a}</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">lObj</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">rObj</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.24.0</small></p>

            <div class="description"><p>Creates a new object with the own properties of the two provided objects.
If a key exists in both objects:</p>
<ul>
<li>and both associated values are also objects then the values will be
recursively merged.</li>
<li>otherwise the provided function is applied to the key and associated values
using the resulting value as the new value associated with the key.
If a key only exists in one object, the value will be associated with the key
of the resulting object.</li>
</ul>
</div>



            <div class="see">
                See also
                <a href="#mergeWithKey">mergeWithKey</a>,
                <a href="#mergeDeepWith">mergeDeepWith</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">let</span> concatValues = <span class="hljs-function">(<span class="hljs-params">k, l, r</span>) =&gt;</span> k == <span class="hljs-string">'values'</span> ? R.concat(l, r) : r
R.mergeDeepWithKey(concatValues,
                   { <span class="hljs-attr">a</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">c</span>: { <span class="hljs-attr">thing</span>: <span class="hljs-string">'foo'</span>, <span class="hljs-attr">values</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">20</span>] }},
                   { <span class="hljs-attr">b</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">c</span>: { <span class="hljs-attr">thing</span>: <span class="hljs-string">'bar'</span>, <span class="hljs-attr">values</span>: [<span class="hljs-number">15</span>, <span class="hljs-number">35</span>] }});
<span class="hljs-comment">//=&gt; { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}</span></code></pre>
        </section>
        <div id="mergeLeft" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#mergeLeft">mergeLeft</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/mergeLeft.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>{k: v} → {k: v} → {k: v}</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">l</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">r</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.26.0</small></p>

            <div class="description"><p>Create a new object with the own properties of the first object merged with
the own properties of the second object. If a key exists in both objects,
the value from the first object will be used.</p>
</div>



            <div class="see">
                See also
                <a href="#mergeRight">mergeRight</a>,
                <a href="#mergeDeepLeft">mergeDeepLeft</a>,
                <a href="#mergeWith">mergeWith</a>,
                <a href="#mergeWithKey">mergeWithKey</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.mergeLeft({ <span class="hljs-string">'age'</span>: <span class="hljs-number">40</span> }, { <span class="hljs-string">'name'</span>: <span class="hljs-string">'fred'</span>, <span class="hljs-string">'age'</span>: <span class="hljs-number">10</span> });
<span class="hljs-comment">//=&gt; { 'name': 'fred', 'age': 40 }</span>

<span class="hljs-keyword">const</span> resetToDefault = R.mergeLeft({<span class="hljs-attr">x</span>: <span class="hljs-number">0</span>});
resetToDefault({<span class="hljs-attr">x</span>: <span class="hljs-number">5</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">2</span>}); <span class="hljs-comment">//=&gt; {x: 0, y: 2}</span></code></pre>
        </section>
        <div id="mergeRight" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#mergeRight">mergeRight</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/mergeRight.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>{k: v} → {k: v} → {k: v}</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">l</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">r</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.26.0</small></p>

            <div class="description"><p>Create a new object with the own properties of the first object merged with
the own properties of the second object. If a key exists in both objects,
the value from the second object will be used.</p>
</div>



            <div class="see">
                See also
                <a href="#mergeLeft">mergeLeft</a>,
                <a href="#mergeDeepRight">mergeDeepRight</a>,
                <a href="#mergeWith">mergeWith</a>,
                <a href="#mergeWithKey">mergeWithKey</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.mergeRight({ <span class="hljs-string">'name'</span>: <span class="hljs-string">'fred'</span>, <span class="hljs-string">'age'</span>: <span class="hljs-number">10</span> }, { <span class="hljs-string">'age'</span>: <span class="hljs-number">40</span> });
<span class="hljs-comment">//=&gt; { 'name': 'fred', 'age': 40 }</span>

<span class="hljs-keyword">const</span> withDefaults = R.mergeRight({<span class="hljs-attr">x</span>: <span class="hljs-number">0</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">0</span>});
withDefaults({<span class="hljs-attr">y</span>: <span class="hljs-number">2</span>}); <span class="hljs-comment">//=&gt; {x: 0, y: 2}</span></code></pre>
        </section>
        <div id="mergeWith" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#mergeWith">mergeWith</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/mergeWith.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((a, a) → a) → {a} → {a} → {a}</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">l</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">r</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.19.0</small></p>

            <div class="description"><p>Creates a new object with the own properties of the two provided objects. If
a key exists in both objects, the provided function is applied to the values
associated with the key in each object, with the result being used as the
value associated with the key in the returned object.</p>
</div>



            <div class="see">
                See also
                <a href="#mergeDeepWith">mergeDeepWith</a>,
                <a href="#merge">merge</a>,
                <a href="#mergeWithKey">mergeWithKey</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.mergeWith(R.concat,
            { <span class="hljs-attr">a</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">values</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">20</span>] },
            { <span class="hljs-attr">b</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">values</span>: [<span class="hljs-number">15</span>, <span class="hljs-number">35</span>] });
<span class="hljs-comment">//=&gt; { a: true, b: true, values: [10, 20, 15, 35] }</span></code></pre>
        </section>
        <div id="mergeWithKey" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#mergeWithKey">mergeWithKey</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/mergeWithKey.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((String, a, a) → a) → {a} → {a} → {a}</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">l</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">r</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.19.0</small></p>

            <div class="description"><p>Creates a new object with the own properties of the two provided objects. If
a key exists in both objects, the provided function is applied to the key
and the values associated with the key in each object, with the result being
used as the value associated with the key in the returned object.</p>
</div>



            <div class="see">
                See also
                <a href="#mergeDeepWithKey">mergeDeepWithKey</a>,
                <a href="#merge">merge</a>,
                <a href="#mergeWith">mergeWith</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">let</span> concatValues = <span class="hljs-function">(<span class="hljs-params">k, l, r</span>) =&gt;</span> k == <span class="hljs-string">'values'</span> ? R.concat(l, r) : r
R.mergeWithKey(concatValues,
               { <span class="hljs-attr">a</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">thing</span>: <span class="hljs-string">'foo'</span>, <span class="hljs-attr">values</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">20</span>] },
               { <span class="hljs-attr">b</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">thing</span>: <span class="hljs-string">'bar'</span>, <span class="hljs-attr">values</span>: [<span class="hljs-number">15</span>, <span class="hljs-number">35</span>] });
<span class="hljs-comment">//=&gt; { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }</span></code></pre>
        </section>
        <div id="min" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#min">min</a>
                <span class="pull-right">
                        <span class="label label-category">Relation</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/min.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Ord a =&gt; a → a → a</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">a</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">b</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns the smaller of its two arguments.</p>
</div>



            <div class="see">
                See also
                <a href="#minBy">minBy</a>,
                <a href="#max">max</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.min(<span class="hljs-number">789</span>, <span class="hljs-number">123</span>); <span class="hljs-comment">//=&gt; 123</span>
R.min(<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>); <span class="hljs-comment">//=&gt; 'a'</span></code></pre>
        </section>
        <div id="minBy" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#minBy">minBy</a>
                <span class="pull-right">
                        <span class="label label-category">Relation</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/minBy.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Ord b =&gt; (a → b) → a → a → a</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">f</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">a</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">b</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.8.0</small></p>

            <div class="description"><p>Takes a function and two values, and returns whichever value produces the
smaller result when passed to the provided function.</p>
</div>



            <div class="see">
                See also
                <a href="#min">min</a>,
                <a href="#maxBy">maxBy</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-comment">//  square :: Number -&gt; Number</span>
<span class="hljs-keyword">const</span> square = <span class="hljs-function"><span class="hljs-params">n</span> =&gt;</span> n * n;

R.minBy(square, <span class="hljs-number">-3</span>, <span class="hljs-number">2</span>); <span class="hljs-comment">//=&gt; 2</span>

R.reduce(R.minBy(square), <span class="hljs-literal">Infinity</span>, [<span class="hljs-number">3</span>, <span class="hljs-number">-5</span>, <span class="hljs-number">4</span>, <span class="hljs-number">1</span>, <span class="hljs-number">-2</span>]); <span class="hljs-comment">//=&gt; 1</span>
R.reduce(R.minBy(square), <span class="hljs-literal">Infinity</span>, []); <span class="hljs-comment">//=&gt; Infinity</span></code></pre>
        </section>
        <div id="modulo" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#modulo">modulo</a>
                <span class="pull-right">
                        <span class="label label-category">Math</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/modulo.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → Number → Number</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">a</span>
                            <span class="description"><p>The value to the divide.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">b</span>
                            <span class="description"><p>The pseudo-modulus</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Number</span>
                        <span class="description">The result of 'b % a'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.1</small></p>

            <div class="description"><p>Divides the first parameter by the second and returns the remainder. Note
that this function preserves the JavaScript-style behavior for modulo. For
mathematical modulo see <a href="#mathMod"><code>mathMod</code></a>.</p>
</div>



            <div class="see">
                See also
                <a href="#mathMod">mathMod</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.modulo(<span class="hljs-number">17</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">//=&gt; 2</span>
<span class="hljs-comment">// JS behavior:</span>
R.modulo(<span class="hljs-number">-17</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">//=&gt; -2</span>
R.modulo(<span class="hljs-number">17</span>, <span class="hljs-number">-3</span>); <span class="hljs-comment">//=&gt; 2</span>

<span class="hljs-keyword">const</span> isOdd = R.modulo(R.__, <span class="hljs-number">2</span>);
isOdd(<span class="hljs-number">42</span>); <span class="hljs-comment">//=&gt; 0</span>
isOdd(<span class="hljs-number">21</span>); <span class="hljs-comment">//=&gt; 1</span></code></pre>
        </section>
        <div id="move" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#move">move</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/move.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → Number → [a] → [a]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">from</span>
                            <span class="description"><p>The source index</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">to</span>
                            <span class="description"><p>The destination index</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The list which will serve to realise the move</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">The new list reordered</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.27.0</small></p>

            <div class="description"><p>Move an item, at index <code>from</code>, to index <code>to</code>, in a list of elements.
A new list will be created containing the new elements order.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.move(<span class="hljs-number">0</span>, <span class="hljs-number">2</span>, [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>, <span class="hljs-string">'d'</span>, <span class="hljs-string">'e'</span>, <span class="hljs-string">'f'</span>]); <span class="hljs-comment">//=&gt; ['b', 'c', 'a', 'd', 'e', 'f']</span>
R.move(<span class="hljs-number">-1</span>, <span class="hljs-number">0</span>, [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>, <span class="hljs-string">'d'</span>, <span class="hljs-string">'e'</span>, <span class="hljs-string">'f'</span>]); <span class="hljs-comment">//=&gt; ['f', 'a', 'b', 'c', 'd', 'e'] list rotation</span></code></pre>
        </section>
        <div id="multiply" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#multiply">multiply</a>
                <span class="pull-right">
                        <span class="label label-category">Math</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/multiply.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → Number → Number</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">a</span>
                            <span class="description"><p>The first value.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">b</span>
                            <span class="description"><p>The second value.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Number</span>
                        <span class="description">The result of 'a * b'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Multiplies two numbers. Equivalent to <code>a * b</code> but curried.</p>
</div>



            <div class="see">
                See also
                <a href="#divide">divide</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> double = R.multiply(<span class="hljs-number">2</span>);
<span class="hljs-keyword">const</span> triple = R.multiply(<span class="hljs-number">3</span>);
double(<span class="hljs-number">3</span>);       <span class="hljs-comment">//=&gt;  6</span>
triple(<span class="hljs-number">4</span>);       <span class="hljs-comment">//=&gt; 12</span>
R.multiply(<span class="hljs-number">2</span>, <span class="hljs-number">5</span>);  <span class="hljs-comment">//=&gt; 10</span></code></pre>
        </section>
        <div id="nAry" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#nAry">nAry</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/nAry.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → (* → a) → (* → a)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">n</span>
                            <span class="description"><p>The desired arity of the new function.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function to wrap.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">A new function wrapping 'fn'. The new function is guaranteed to be of
        arity 'n'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Wraps a function of any arity (including nullary) in a function that accepts
exactly <code>n</code> parameters. Any extraneous parameters will not be passed to the
supplied function.</p>
</div>



            <div class="see">
                See also
                <a href="#binary">binary</a>,
                <a href="#unary">unary</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> takesTwoArgs = <span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> [a, b];

takesTwoArgs.length; <span class="hljs-comment">//=&gt; 2</span>
takesTwoArgs(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>); <span class="hljs-comment">//=&gt; [1, 2]</span>

<span class="hljs-keyword">const</span> takesOneArg = R.nAry(<span class="hljs-number">1</span>, takesTwoArgs);
takesOneArg.length; <span class="hljs-comment">//=&gt; 1</span>
<span class="hljs-comment">// Only 'n' arguments are passed to the wrapped function</span>
takesOneArg(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>); <span class="hljs-comment">//=&gt; [1, undefined]</span></code></pre>
        </section>
        <div id="negate" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#negate">negate</a>
                <span class="pull-right">
                        <span class="label label-category">Math</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/negate.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → Number</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">n</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Number</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.9.0</small></p>

            <div class="description"><p>Negates its argument.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.negate(<span class="hljs-number">42</span>); <span class="hljs-comment">//=&gt; -42</span></code></pre>
        </section>
        <div id="none" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#none">none</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/none.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(a → Boolean) → [a] → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The predicate function.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The array to consider.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description">'true' if the predicate is not satisfied by every element, 'false' otherwise.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.12.0</small></p>

            <div class="description"><p>Returns <code>true</code> if no elements of the list match the predicate, <code>false</code>
otherwise.</p>
<p>Dispatches to the <code>all</code> method of the second argument, if present.</p>
<p>Acts as a transducer if a transformer is given in list position.</p>
</div>



            <div class="see">
                See also
                <a href="#all">all</a>,
                <a href="#any">any</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> isEven = <span class="hljs-function"><span class="hljs-params">n</span> =&gt;</span> n % <span class="hljs-number">2</span> === <span class="hljs-number">0</span>;
<span class="hljs-keyword">const</span> isOdd = <span class="hljs-function"><span class="hljs-params">n</span> =&gt;</span> n % <span class="hljs-number">2</span> === <span class="hljs-number">1</span>;

R.none(isEven, [<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>, <span class="hljs-number">7</span>, <span class="hljs-number">9</span>, <span class="hljs-number">11</span>]); <span class="hljs-comment">//=&gt; true</span>
R.none(isOdd, [<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">11</span>]); <span class="hljs-comment">//=&gt; false</span></code></pre>
        </section>
        <div id="not" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#not">not</a>
                <span class="pull-right">
                        <span class="label label-category">Logic</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/not.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>* → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">a</span>
                            <span class="description"><p>any value</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description">the logical inverse of passed argument.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>A function that returns the <code>!</code> of its argument. It will return <code>true</code> when
passed false-y value, and <code>false</code> when passed a truth-y one.</p>
</div>



            <div class="see">
                See also
                <a href="#complement">complement</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.not(<span class="hljs-literal">true</span>); <span class="hljs-comment">//=&gt; false</span>
R.not(<span class="hljs-literal">false</span>); <span class="hljs-comment">//=&gt; true</span>
R.not(<span class="hljs-number">0</span>); <span class="hljs-comment">//=&gt; true</span>
R.not(<span class="hljs-number">1</span>); <span class="hljs-comment">//=&gt; false</span></code></pre>
        </section>
        <div id="nth" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#nth">nth</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/nth.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → [a] → a | Undefined</code></div>
            <div><code>Number → String → String</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">offset</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns the nth element of the given list or string. If n is negative the
element at index length + n is returned.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> list = [<span class="hljs-string">'foo'</span>, <span class="hljs-string">'bar'</span>, <span class="hljs-string">'baz'</span>, <span class="hljs-string">'quux'</span>];
R.nth(<span class="hljs-number">1</span>, list); <span class="hljs-comment">//=&gt; 'bar'</span>
R.nth(<span class="hljs-number">-1</span>, list); <span class="hljs-comment">//=&gt; 'quux'</span>
R.nth(<span class="hljs-number">-99</span>, list); <span class="hljs-comment">//=&gt; undefined</span>

R.nth(<span class="hljs-number">2</span>, <span class="hljs-string">'abc'</span>); <span class="hljs-comment">//=&gt; 'c'</span>
R.nth(<span class="hljs-number">3</span>, <span class="hljs-string">'abc'</span>); <span class="hljs-comment">//=&gt; ''</span></code></pre>
        </section>
        <div id="nthArg" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#nthArg">nthArg</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/nthArg.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → *… → *</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">n</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.9.0</small></p>

            <div class="description"><p>Returns a function which returns its nth argument.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.nthArg(<span class="hljs-number">1</span>)(<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>); <span class="hljs-comment">//=&gt; 'b'</span>
R.nthArg(<span class="hljs-number">-1</span>)(<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>); <span class="hljs-comment">//=&gt; 'c'</span></code></pre>
        </section>
        <div id="o" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#o">o</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/o.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(b → c) → (a → b) → a → c</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">f</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">g</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.24.0</small></p>

            <div class="description"><p><code>o</code> is a curried composition function that returns a unary function.
Like <a href="#compose"><code>compose</code></a>, <code>o</code> performs right-to-left function composition.
Unlike <a href="#compose"><code>compose</code></a>, the rightmost function passed to <code>o</code> will be
invoked with only one argument. Also, unlike <a href="#compose"><code>compose</code></a>, <code>o</code> is
limited to accepting only 2 unary functions. The name o was chosen because
of its similarity to the mathematical composition operator ∘.</p>
</div>



            <div class="see">
                See also
                <a href="#compose">compose</a>,
                <a href="#pipe">pipe</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> classyGreeting = <span class="hljs-function"><span class="hljs-params">name</span> =&gt;</span> <span class="hljs-string">"The name's "</span> + name.last + <span class="hljs-string">", "</span> + name.first + <span class="hljs-string">" "</span> + name.last
<span class="hljs-keyword">const</span> yellGreeting = R.o(R.toUpper, classyGreeting);
yellGreeting({<span class="hljs-attr">first</span>: <span class="hljs-string">'James'</span>, <span class="hljs-attr">last</span>: <span class="hljs-string">'Bond'</span>}); <span class="hljs-comment">//=&gt; "THE NAME'S BOND, JAMES BOND"</span>

R.o(R.multiply(<span class="hljs-number">10</span>), R.add(<span class="hljs-number">10</span>))(<span class="hljs-number">-4</span>) <span class="hljs-comment">//=&gt; 60</span></code></pre>
        </section>
        <div id="objOf" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#objOf">objOf</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/objOf.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>String → a → {String:a}</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">key</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">val</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.18.0</small></p>

            <div class="description"><p>Creates an object containing a single key:value pair.</p>
</div>



            <div class="see">
                See also
                <a href="#pair">pair</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> matchPhrases = R.compose(
  R.objOf(<span class="hljs-string">'must'</span>),
  R.map(R.objOf(<span class="hljs-string">'match_phrase'</span>))
);
matchPhrases([<span class="hljs-string">'foo'</span>, <span class="hljs-string">'bar'</span>, <span class="hljs-string">'baz'</span>]); <span class="hljs-comment">//=&gt; {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}</span></code></pre>
        </section>
        <div id="of" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#of">of</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/of.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>a → [a]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">x</span>
                            <span class="description"><p>any value</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">An array wrapping 'x'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.3.0</small></p>

            <div class="description"><p>Returns a singleton array containing the value provided.</p>
<p>Note this <code>of</code> is different from the ES6 <code>of</code>; See
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of</a></p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.of(<span class="hljs-literal">null</span>); <span class="hljs-comment">//=&gt; [null]</span>
R.of([<span class="hljs-number">42</span>]); <span class="hljs-comment">//=&gt; [[42]]</span></code></pre>
        </section>
        <div id="omit" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#omit">omit</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/omit.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[String] → {String: *} → {String: *}</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">names</span>
                            <span class="description"><p>an array of String property names to omit from the new object</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"><p>The object to copy from</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description">A new object with properties from 'names' not on it.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns a partial copy of an object omitting the keys specified.</p>
</div>



            <div class="see">
                See also
                <a href="#pick">pick</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.omit([<span class="hljs-string">'a'</span>, <span class="hljs-string">'d'</span>], {<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">c</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">d</span>: <span class="hljs-number">4</span>}); <span class="hljs-comment">//=&gt; {b: 2, c: 3}</span></code></pre>
        </section>
        <div id="once" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#once">once</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/once.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(a… → b) → (a… → b)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function to wrap in a call-only-once wrapper.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">The wrapped function.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Accepts a function <code>fn</code> and returns a function that guards invocation of
<code>fn</code> such that <code>fn</code> can only ever be called once, no matter how many times
the returned function is invoked. The first value calculated is returned in
subsequent invocations.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> addOneOnce = R.once(<span class="hljs-function"><span class="hljs-params">x</span> =&gt;</span> x + <span class="hljs-number">1</span>);
addOneOnce(<span class="hljs-number">10</span>); <span class="hljs-comment">//=&gt; 11</span>
addOneOnce(addOneOnce(<span class="hljs-number">50</span>)); <span class="hljs-comment">//=&gt; 11</span></code></pre>
        </section>
        <div id="or" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#or">or</a>
                <span class="pull-right">
                        <span class="label label-category">Logic</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/or.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>a → b → a | b</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">a</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">b</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Any</span>
                        <span class="description">the first argument if truthy, otherwise the second argument.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns <code>true</code> if one or both of its arguments are <code>true</code>. Returns <code>false</code>
if both arguments are <code>false</code>.</p>
</div>



            <div class="see">
                See also
                <a href="#either">either</a>,
                <a href="#xor">xor</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.or(<span class="hljs-literal">true</span>, <span class="hljs-literal">true</span>); <span class="hljs-comment">//=&gt; true</span>
R.or(<span class="hljs-literal">true</span>, <span class="hljs-literal">false</span>); <span class="hljs-comment">//=&gt; true</span>
R.or(<span class="hljs-literal">false</span>, <span class="hljs-literal">true</span>); <span class="hljs-comment">//=&gt; true</span>
R.or(<span class="hljs-literal">false</span>, <span class="hljs-literal">false</span>); <span class="hljs-comment">//=&gt; false</span></code></pre>
        </section>
        <div id="otherwise" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#otherwise">otherwise</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/otherwise.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(e → b) → (Promise e a) → (Promise e b)</code></div>
            <div><code>(e → (Promise f b)) → (Promise e a) → (Promise f b)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">onFailure</span>
                            <span class="description"><p>The function to apply. Can return a value or a promise of a value.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">p</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Promise</span>
                        <span class="description">The result of calling 'p.then(null, onFailure)'</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.26.0</small></p>

            <div class="description"><p>Returns the result of applying the onFailure function to the value inside
a failed promise. This is useful for handling rejected promises
inside function compositions.</p>
</div>



            <div class="see">
                See also
                <a href="#then">then</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">var</span> failedFetch = <span class="hljs-function">(<span class="hljs-params">id</span>) =&gt;</span> <span class="hljs-built_in">Promise</span>.reject(<span class="hljs-string">'bad ID'</span>);
<span class="hljs-keyword">var</span> useDefault = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> ({ <span class="hljs-attr">firstName</span>: <span class="hljs-string">'Bob'</span>, <span class="hljs-attr">lastName</span>: <span class="hljs-string">'Loblaw'</span> })

<span class="hljs-comment">//recoverFromFailure :: String -&gt; Promise ({firstName, lastName})</span>
<span class="hljs-keyword">var</span> recoverFromFailure = R.pipe(
  failedFetch,
  R.otherwise(useDefault),
  R.then(R.pick([<span class="hljs-string">'firstName'</span>, <span class="hljs-string">'lastName'</span>])),
);
recoverFromFailure(<span class="hljs-number">12345</span>).then(<span class="hljs-built_in">console</span>.log)</code></pre>
        </section>
        <div id="over" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#over">over</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/over.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Lens s a → (a → a) → s → s</code></div>

            <div><code>Lens s a = Functor f =&gt; (a → f a) → s → f s</code></div>

            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">lens</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">v</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">x</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.16.0</small></p>

            <div class="description"><p>Returns the result of "setting" the portion of the given data structure
focused by the given lens to the result of applying the given function to
the focused value.</p>
</div>



            <div class="see">
                See also
                <a href="#prop">prop</a>,
                <a href="#lensIndex">lensIndex</a>,
                <a href="#lensProp">lensProp</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> headLens = R.lensIndex(<span class="hljs-number">0</span>);

R.over(headLens, R.toUpper, [<span class="hljs-string">'foo'</span>, <span class="hljs-string">'bar'</span>, <span class="hljs-string">'baz'</span>]); <span class="hljs-comment">//=&gt; ['FOO', 'bar', 'baz']</span></code></pre>
        </section>
        <div id="pair" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#pair">pair</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/pair.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>a → b → (a,b)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fst</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">snd</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.18.0</small></p>

            <div class="description"><p>Takes two arguments, <code>fst</code> and <code>snd</code>, and returns <code>[fst, snd]</code>.</p>
</div>



            <div class="see">
                See also
                <a href="#objOf">objOf</a>,
                <a href="#of">of</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.pair(<span class="hljs-string">'foo'</span>, <span class="hljs-string">'bar'</span>); <span class="hljs-comment">//=&gt; ['foo', 'bar']</span></code></pre>
        </section>
        <div id="partial" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#partial">partial</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/partial.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((a, b, c, …, n) → x) → [a, b, c, …] → ((d, e, f, …, n) → x)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">f</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">args</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.10.0</small></p>

            <div class="description"><p>Takes a function <code>f</code> and a list of arguments, and returns a function <code>g</code>.
When applied, <code>g</code> returns the result of applying <code>f</code> to the arguments
provided initially followed by the arguments provided to <code>g</code>.</p>
</div>



            <div class="see">
                See also
                <a href="#partialRight">partialRight</a>,
                <a href="#curry">curry</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> multiply2 = <span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> a * b;
<span class="hljs-keyword">const</span> double = R.partial(multiply2, [<span class="hljs-number">2</span>]);
double(<span class="hljs-number">2</span>); <span class="hljs-comment">//=&gt; 4</span>

<span class="hljs-keyword">const</span> greet = <span class="hljs-function">(<span class="hljs-params">salutation, title, firstName, lastName</span>) =&gt;</span>
  salutation + <span class="hljs-string">', '</span> + title + <span class="hljs-string">' '</span> + firstName + <span class="hljs-string">' '</span> + lastName + <span class="hljs-string">'!'</span>;

<span class="hljs-keyword">const</span> sayHello = R.partial(greet, [<span class="hljs-string">'Hello'</span>]);
<span class="hljs-keyword">const</span> sayHelloToMs = R.partial(sayHello, [<span class="hljs-string">'Ms.'</span>]);
sayHelloToMs(<span class="hljs-string">'Jane'</span>, <span class="hljs-string">'Jones'</span>); <span class="hljs-comment">//=&gt; 'Hello, Ms. Jane Jones!'</span></code></pre>
        </section>
        <div id="partialRight" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#partialRight">partialRight</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/partialRight.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((a, b, c, …, n) → x) → [d, e, f, …, n] → ((a, b, c, …) → x)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">f</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">args</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.10.0</small></p>

            <div class="description"><p>Takes a function <code>f</code> and a list of arguments, and returns a function <code>g</code>.
When applied, <code>g</code> returns the result of applying <code>f</code> to the arguments
provided to <code>g</code> followed by the arguments provided initially.</p>
</div>



            <div class="see">
                See also
                <a href="#partial">partial</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> greet = <span class="hljs-function">(<span class="hljs-params">salutation, title, firstName, lastName</span>) =&gt;</span>
  salutation + <span class="hljs-string">', '</span> + title + <span class="hljs-string">' '</span> + firstName + <span class="hljs-string">' '</span> + lastName + <span class="hljs-string">'!'</span>;

<span class="hljs-keyword">const</span> greetMsJaneJones = R.partialRight(greet, [<span class="hljs-string">'Ms.'</span>, <span class="hljs-string">'Jane'</span>, <span class="hljs-string">'Jones'</span>]);

greetMsJaneJones(<span class="hljs-string">'Hello'</span>); <span class="hljs-comment">//=&gt; 'Hello, Ms. Jane Jones!'</span></code></pre>
        </section>
        <div id="partition" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#partition">partition</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/partition.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Filterable f =&gt; (a → Boolean) → f a → [f a, f a]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">pred</span>
                            <span class="description"><p>A predicate to determine which side the element belongs to.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">filterable</span>
                            <span class="description"><p>the list (or other filterable) to partition.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">An array, containing first the subset of elements that satisfy the
        predicate, and second the subset of elements that do not satisfy.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.4</small></p>

            <div class="description"><p>Takes a predicate and a list or other <code>Filterable</code> object and returns the
pair of filterable objects of the same type of elements which do and do not
satisfy, the predicate, respectively. Filterable objects include plain objects or any object
that has a filter method such as <code>Array</code>.</p>
</div>



            <div class="see">
                See also
                <a href="#filter">filter</a>,
                <a href="#reject">reject</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.partition(R.includes(<span class="hljs-string">'s'</span>), [<span class="hljs-string">'sss'</span>, <span class="hljs-string">'ttt'</span>, <span class="hljs-string">'foo'</span>, <span class="hljs-string">'bars'</span>]);
<span class="hljs-comment">// =&gt; [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]</span>

R.partition(R.includes(<span class="hljs-string">'s'</span>), { <span class="hljs-attr">a</span>: <span class="hljs-string">'sss'</span>, <span class="hljs-attr">b</span>: <span class="hljs-string">'ttt'</span>, <span class="hljs-attr">foo</span>: <span class="hljs-string">'bars'</span> });
<span class="hljs-comment">// =&gt; [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]</span></code></pre>
        </section>
        <div id="path" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#path">path</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/path.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[Idx] → {a} → a | Undefined</code></div>

            <div><code>Idx = String | Int</code></div>

            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">path</span>
                            <span class="description"><p>The path to use.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"><p>The object to retrieve the nested property from.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description">The data at 'path'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.2.0</small></p>

            <div class="description"><p>Retrieve the value at a given path.</p>
</div>



            <div class="see">
                See also
                <a href="#prop">prop</a>,
                <a href="#nth">nth</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.path([<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>], {<span class="hljs-attr">a</span>: {<span class="hljs-attr">b</span>: <span class="hljs-number">2</span>}}); <span class="hljs-comment">//=&gt; 2</span>
R.path([<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>], {<span class="hljs-attr">c</span>: {<span class="hljs-attr">b</span>: <span class="hljs-number">2</span>}}); <span class="hljs-comment">//=&gt; undefined</span>
R.path([<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-number">0</span>], {<span class="hljs-attr">a</span>: {<span class="hljs-attr">b</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]}}); <span class="hljs-comment">//=&gt; 1</span>
R.path([<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-number">-2</span>], {<span class="hljs-attr">a</span>: {<span class="hljs-attr">b</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]}}); <span class="hljs-comment">//=&gt; 2</span></code></pre>
        </section>
        <div id="pathEq" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#pathEq">pathEq</a>
                <span class="pull-right">
                        <span class="label label-category">Relation</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/pathEq.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[Idx] → a → {a} → Boolean</code></div>

            <div><code>Idx = String | Int</code></div>

            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">path</span>
                            <span class="description"><p>The path of the nested property to use</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">val</span>
                            <span class="description"><p>The value to compare the nested property with</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"><p>The object to check the nested property in</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description">'true' if the value equals the nested object property,
        'false' otherwise.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.7.0</small></p>

            <div class="description"><p>Determines whether a nested path on an object has a specific value, in
<a href="#equals"><code>R.equals</code></a> terms. Most likely used to filter a list.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> user1 = { <span class="hljs-attr">address</span>: { <span class="hljs-attr">zipCode</span>: <span class="hljs-number">90210</span> } };
<span class="hljs-keyword">const</span> user2 = { <span class="hljs-attr">address</span>: { <span class="hljs-attr">zipCode</span>: <span class="hljs-number">55555</span> } };
<span class="hljs-keyword">const</span> user3 = { <span class="hljs-attr">name</span>: <span class="hljs-string">'Bob'</span> };
<span class="hljs-keyword">const</span> users = [ user1, user2, user3 ];
<span class="hljs-keyword">const</span> isFamous = R.pathEq([<span class="hljs-string">'address'</span>, <span class="hljs-string">'zipCode'</span>], <span class="hljs-number">90210</span>);
R.filter(isFamous, users); <span class="hljs-comment">//=&gt; [ user1 ]</span></code></pre>
        </section>
        <div id="pathOr" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#pathOr">pathOr</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/pathOr.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>a → [Idx] → {a} → a</code></div>

            <div><code>Idx = String | Int</code></div>

            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">d</span>
                            <span class="description"><p>The default value.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">p</span>
                            <span class="description"><p>The path to use.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"><p>The object to retrieve the nested property from.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description">The data at 'path' of the supplied object or the default value.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.18.0</small></p>

            <div class="description"><p>If the given, non-null object has a value at the given path, returns the
value at that path. Otherwise returns the provided default value.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.pathOr(<span class="hljs-string">'N/A'</span>, [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>], {<span class="hljs-attr">a</span>: {<span class="hljs-attr">b</span>: <span class="hljs-number">2</span>}}); <span class="hljs-comment">//=&gt; 2</span>
R.pathOr(<span class="hljs-string">'N/A'</span>, [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>], {<span class="hljs-attr">c</span>: {<span class="hljs-attr">b</span>: <span class="hljs-number">2</span>}}); <span class="hljs-comment">//=&gt; "N/A"</span></code></pre>
        </section>
        <div id="paths" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#paths">paths</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/paths.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[Idx] → {a} → [a | Undefined]</code></div>

            <div><code>Idx = [String | Int]</code></div>

            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">pathsArray</span>
                            <span class="description"><p>The array of paths to be fetched.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"><p>The object to retrieve the nested properties from.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">A list consisting of values at paths specified by "pathsArray".</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.27.0</small></p>

            <div class="description"><p>Retrieves the values at given paths of an object.</p>
</div>



            <div class="see">
                See also
                <a href="#path">path</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.paths([[<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>], [<span class="hljs-string">'p'</span>, <span class="hljs-number">0</span>, <span class="hljs-string">'q'</span>]], {<span class="hljs-attr">a</span>: {<span class="hljs-attr">b</span>: <span class="hljs-number">2</span>}, <span class="hljs-attr">p</span>: [{<span class="hljs-attr">q</span>: <span class="hljs-number">3</span>}]}); <span class="hljs-comment">//=&gt; [2, 3]</span>
R.paths([[<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>], [<span class="hljs-string">'p'</span>, <span class="hljs-string">'r'</span>]], {<span class="hljs-attr">a</span>: {<span class="hljs-attr">b</span>: <span class="hljs-number">2</span>}, <span class="hljs-attr">p</span>: [{<span class="hljs-attr">q</span>: <span class="hljs-number">3</span>}]}); <span class="hljs-comment">//=&gt; [2, undefined]</span></code></pre>
        </section>
        <div id="pathSatisfies" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#pathSatisfies">pathSatisfies</a>
                <span class="pull-right">
                        <span class="label label-category">Logic</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/pathSatisfies.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(a → Boolean) → [Idx] → {a} → Boolean</code></div>

            <div><code>Idx = String | Int</code></div>

            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">pred</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">propPath</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.19.0</small></p>

            <div class="description"><p>Returns <code>true</code> if the specified object property at given path satisfies the
given predicate; <code>false</code> otherwise.</p>
</div>



            <div class="see">
                See also
                <a href="#propSatisfies">propSatisfies</a>,
                <a href="#path">path</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.pathSatisfies(<span class="hljs-function"><span class="hljs-params">y</span> =&gt;</span> y &gt; <span class="hljs-number">0</span>, [<span class="hljs-string">'x'</span>, <span class="hljs-string">'y'</span>], {<span class="hljs-attr">x</span>: {<span class="hljs-attr">y</span>: <span class="hljs-number">2</span>}}); <span class="hljs-comment">//=&gt; true</span>
R.pathSatisfies(R.is(<span class="hljs-built_in">Object</span>), [], {<span class="hljs-attr">x</span>: {<span class="hljs-attr">y</span>: <span class="hljs-number">2</span>}}); <span class="hljs-comment">//=&gt; true</span></code></pre>
        </section>
        <div id="pick" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#pick">pick</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/pick.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[k] → {k: v} → {k: v}</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">names</span>
                            <span class="description"><p>an array of String property names to copy onto a new object</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"><p>The object to copy from</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description">A new object with only properties from 'names' on it.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns a partial copy of an object containing only the keys specified. If
the key does not exist, the property is ignored.</p>
</div>



            <div class="see">
                See also
                <a href="#omit">omit</a>,
                <a href="#props">props</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.pick([<span class="hljs-string">'a'</span>, <span class="hljs-string">'d'</span>], {<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">c</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">d</span>: <span class="hljs-number">4</span>}); <span class="hljs-comment">//=&gt; {a: 1, d: 4}</span>
R.pick([<span class="hljs-string">'a'</span>, <span class="hljs-string">'e'</span>, <span class="hljs-string">'f'</span>], {<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">c</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">d</span>: <span class="hljs-number">4</span>}); <span class="hljs-comment">//=&gt; {a: 1}</span></code></pre>
        </section>
        <div id="pickAll" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#pickAll">pickAll</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/pickAll.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[k] → {k: v} → {k: v}</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">names</span>
                            <span class="description"><p>an array of String property names to copy onto a new object</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"><p>The object to copy from</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description">A new object with only properties from 'names' on it.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Similar to <code>pick</code> except that this one includes a <code>key: undefined</code> pair for
properties that don't exist.</p>
</div>



            <div class="see">
                See also
                <a href="#pick">pick</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.pickAll([<span class="hljs-string">'a'</span>, <span class="hljs-string">'d'</span>], {<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">c</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">d</span>: <span class="hljs-number">4</span>}); <span class="hljs-comment">//=&gt; {a: 1, d: 4}</span>
R.pickAll([<span class="hljs-string">'a'</span>, <span class="hljs-string">'e'</span>, <span class="hljs-string">'f'</span>], {<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">c</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">d</span>: <span class="hljs-number">4</span>}); <span class="hljs-comment">//=&gt; {a: 1, e: undefined, f: undefined}</span></code></pre>
        </section>
        <div id="pickBy" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#pickBy">pickBy</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/pickBy.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((v, k) → Boolean) → {k: v} → {k: v}</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">pred</span>
                            <span class="description"><p>A predicate to determine whether or not a key
       should be included on the output object.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"><p>The object to copy from</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description">A new object with only properties that satisfy 'pred'
        on it.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.8.0</small></p>

            <div class="description"><p>Returns a partial copy of an object containing only the keys that satisfy
the supplied predicate.</p>
</div>



            <div class="see">
                See also
                <a href="#pick">pick</a>,
                <a href="#filter">filter</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> isUpperCase = <span class="hljs-function">(<span class="hljs-params">val, key</span>) =&gt;</span> key.toUpperCase() === key;
R.pickBy(isUpperCase, {<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">A</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">B</span>: <span class="hljs-number">4</span>}); <span class="hljs-comment">//=&gt; {A: 3, B: 4}</span></code></pre>
        </section>
        <div id="pipe" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#pipe">pipe</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/pipe.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(((a, b, …, n) → o), (o → p), …, (x → y), (y → z)) → ((a, b, …, n) → z)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">functions</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Performs left-to-right function composition. The first argument may have
any arity; the remaining arguments must be unary.</p>
<p>In some libraries this function is named <code>sequence</code>.</p>
<p><strong>Note:</strong> The result of pipe is not automatically curried.</p>
</div>



            <div class="see">
                See also
                <a href="#compose">compose</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> f = R.pipe(<span class="hljs-built_in">Math</span>.pow, R.negate, R.inc);

f(<span class="hljs-number">3</span>, <span class="hljs-number">4</span>); <span class="hljs-comment">// -(3^4) + 1</span></code></pre>
        </section>
        <div id="pipeK" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#pipeK">pipeK</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/pipeK.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>

            <div class="deprecated">
                Deprecated since v0.26.0
            </div>

            <div><code>Chain m =&gt; ((a → m b), (b → m c), …, (y → m z)) → (a → m z)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name"></span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.16.0</small></p>

            <div class="description"><p>Returns the left-to-right Kleisli composition of the provided functions,
each of which must return a value of a type supported by <a href="#chain"><code>chain</code></a>.</p>
<p><code>R.pipeK(f, g, h)</code> is equivalent to <code>R.pipe(f, R.chain(g), R.chain(h))</code>.</p>
</div>



            <div class="see">
                See also
                <a href="#composeK">composeK</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-comment">//  parseJson :: String -&gt; Maybe *</span>
<span class="hljs-comment">//  get :: String -&gt; Object -&gt; Maybe *</span>

<span class="hljs-comment">//  getStateCode :: Maybe String -&gt; Maybe String</span>
<span class="hljs-keyword">const</span> getStateCode = R.pipeK(
  parseJson,
  get(<span class="hljs-string">'user'</span>),
  get(<span class="hljs-string">'address'</span>),
  get(<span class="hljs-string">'state'</span>),
  R.compose(Maybe.of, R.toUpper)
);

getStateCode(<span class="hljs-string">'{"user":{"address":{"state":"ny"}}}'</span>);
<span class="hljs-comment">//=&gt; Just('NY')</span>
getStateCode(<span class="hljs-string">'[Invalid JSON]'</span>);
<span class="hljs-comment">//=&gt; Nothing()</span></code></pre>
        </section>
        <div id="pipeP" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#pipeP">pipeP</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/pipeP.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>

            <div class="deprecated">
                Deprecated since v0.26.0
            </div>

            <div><code>((a → Promise b), (b → Promise c), …, (y → Promise z)) → (a → Promise z)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">functions</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.10.0</small></p>

            <div class="description"><p>Performs left-to-right composition of one or more Promise-returning
functions. The first argument may have any arity; the remaining arguments
must be unary.</p>
</div>



            <div class="see">
                See also
                <a href="#composeP">composeP</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-comment">//  followersForUser :: String -&gt; Promise [User]</span>
<span class="hljs-keyword">const</span> followersForUser = R.pipeP(db.getUserById, db.getFollowers);</code></pre>
        </section>
        <div id="pipeWith" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#pipeWith">pipeWith</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/pipeWith.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((* → *), [((a, b, …, n) → o), (o → p), …, (x → y), (y → z)]) → ((a, b, …, n) → z)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">functions</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.26.0</small></p>

            <div class="description"><p>Performs left-to-right function composition using transforming function. The first argument may have
any arity; the remaining arguments must be unary.</p>
<p><strong>Note:</strong> The result of pipeWith is not automatically curried. Transforming function is not used on the
first argument.</p>
</div>



            <div class="see">
                See also
                <a href="#composeWith">composeWith</a>,
                <a href="#pipe">pipe</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> pipeWhileNotNil = R.pipeWith(<span class="hljs-function">(<span class="hljs-params">f, res</span>) =&gt;</span> R.isNil(res) ? res : f(res));
<span class="hljs-keyword">const</span> f = pipeWhileNotNil([<span class="hljs-built_in">Math</span>.pow, R.negate, R.inc])

f(<span class="hljs-number">3</span>, <span class="hljs-number">4</span>); <span class="hljs-comment">// -(3^4) + 1</span></code></pre>
        </section>
        <div id="pluck" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#pluck">pluck</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/pluck.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Functor f =&gt; k → f {k: v} → f v</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">key</span>
                            <span class="description"><p>The key name to pluck off of each object.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">f</span>
                            <span class="description"><p>The array or functor to consider.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">The list of values for the given key.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns a new list by plucking the same named property off all objects in
the list supplied.</p>
<p><code>pluck</code> will work on
any <a href="https://github.com/fantasyland/fantasy-land#functor">functor</a> in
addition to arrays, as it is equivalent to <code>R.map(R.prop(k), f)</code>.</p>
</div>



            <div class="see">
                See also
                <a href="#props">props</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">var</span> getAges = R.pluck(<span class="hljs-string">'age'</span>);
getAges([{<span class="hljs-attr">name</span>: <span class="hljs-string">'fred'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">29</span>}, {<span class="hljs-attr">name</span>: <span class="hljs-string">'wilma'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">27</span>}]); <span class="hljs-comment">//=&gt; [29, 27]</span>

R.pluck(<span class="hljs-number">0</span>, [[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>], [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>]]);               <span class="hljs-comment">//=&gt; [1, 3]</span>
R.pluck(<span class="hljs-string">'val'</span>, {<span class="hljs-attr">a</span>: {<span class="hljs-attr">val</span>: <span class="hljs-number">3</span>}, <span class="hljs-attr">b</span>: {<span class="hljs-attr">val</span>: <span class="hljs-number">5</span>}}); <span class="hljs-comment">//=&gt; {a: 3, b: 5}</span></code></pre>
        </section>
        <div id="prepend" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#prepend">prepend</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/prepend.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>a → [a] → [a]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">el</span>
                            <span class="description"><p>The item to add to the head of the output list.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The array to add to the tail of the output list.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">A new array.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns a new list with the given element at the front, followed by the
contents of the list.</p>
</div>



            <div class="see">
                See also
                <a href="#append">append</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.prepend(<span class="hljs-string">'fee'</span>, [<span class="hljs-string">'fi'</span>, <span class="hljs-string">'fo'</span>, <span class="hljs-string">'fum'</span>]); <span class="hljs-comment">//=&gt; ['fee', 'fi', 'fo', 'fum']</span></code></pre>
        </section>
        <div id="product" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#product">product</a>
                <span class="pull-right">
                        <span class="label label-category">Math</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/product.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[Number] → Number</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>An array of numbers</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Number</span>
                        <span class="description">The product of all the numbers in the list.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Multiplies together all the elements of a list.</p>
</div>



            <div class="see">
                See also
                <a href="#reduce">reduce</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.product([<span class="hljs-number">2</span>,<span class="hljs-number">4</span>,<span class="hljs-number">6</span>,<span class="hljs-number">8</span>,<span class="hljs-number">100</span>,<span class="hljs-number">1</span>]); <span class="hljs-comment">//=&gt; 38400</span></code></pre>
        </section>
        <div id="project" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#project">project</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/project.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[k] → [{k: v}] → [{k: v}]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">props</span>
                            <span class="description"><p>The property names to project</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">objs</span>
                            <span class="description"><p>The objects to query</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">An array of objects with just the 'props' properties.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Reasonable analog to SQL <code>select</code> statement.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> abby = {<span class="hljs-attr">name</span>: <span class="hljs-string">'Abby'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">7</span>, <span class="hljs-attr">hair</span>: <span class="hljs-string">'blond'</span>, <span class="hljs-attr">grade</span>: <span class="hljs-number">2</span>};
<span class="hljs-keyword">const</span> fred = {<span class="hljs-attr">name</span>: <span class="hljs-string">'Fred'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">12</span>, <span class="hljs-attr">hair</span>: <span class="hljs-string">'brown'</span>, <span class="hljs-attr">grade</span>: <span class="hljs-number">7</span>};
<span class="hljs-keyword">const</span> kids = [abby, fred];
R.project([<span class="hljs-string">'name'</span>, <span class="hljs-string">'grade'</span>], kids); <span class="hljs-comment">//=&gt; [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]</span></code></pre>
        </section>
        <div id="prop" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#prop">prop</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/prop.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Idx → {s: a} → a | Undefined</code></div>

            <div><code>Idx = String | Int</code></div>

            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">p</span>
                            <span class="description"><p>The property name or array index</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"><p>The object to query</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description">The value at 'obj.p'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns a function that when supplied an object returns the indicated
property of that object, if it exists.</p>
</div>



            <div class="see">
                See also
                <a href="#path">path</a>,
                <a href="#nth">nth</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.prop(<span class="hljs-string">'x'</span>, {<span class="hljs-attr">x</span>: <span class="hljs-number">100</span>}); <span class="hljs-comment">//=&gt; 100</span>
R.prop(<span class="hljs-string">'x'</span>, {}); <span class="hljs-comment">//=&gt; undefined</span>
R.prop(<span class="hljs-number">0</span>, [<span class="hljs-number">100</span>]); <span class="hljs-comment">//=&gt; 100</span>
R.compose(R.inc, R.prop(<span class="hljs-string">'x'</span>))({ <span class="hljs-attr">x</span>: <span class="hljs-number">3</span> }) <span class="hljs-comment">//=&gt; 4</span></code></pre>
        </section>
        <div id="propEq" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#propEq">propEq</a>
                <span class="pull-right">
                        <span class="label label-category">Relation</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/propEq.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>String → a → Object → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">name</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">val</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns <code>true</code> if the specified object property is equal, in
<a href="#equals"><code>R.equals</code></a> terms, to the given value; <code>false</code> otherwise.
You can test multiple properties with <a href="#whereEq"><code>R.whereEq</code></a>.</p>
</div>



            <div class="see">
                See also
                <a href="#whereEq">whereEq</a>,
                <a href="#propSatisfies">propSatisfies</a>,
                <a href="#equals">equals</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> abby = {<span class="hljs-attr">name</span>: <span class="hljs-string">'Abby'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">7</span>, <span class="hljs-attr">hair</span>: <span class="hljs-string">'blond'</span>};
<span class="hljs-keyword">const</span> fred = {<span class="hljs-attr">name</span>: <span class="hljs-string">'Fred'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">12</span>, <span class="hljs-attr">hair</span>: <span class="hljs-string">'brown'</span>};
<span class="hljs-keyword">const</span> rusty = {<span class="hljs-attr">name</span>: <span class="hljs-string">'Rusty'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">10</span>, <span class="hljs-attr">hair</span>: <span class="hljs-string">'brown'</span>};
<span class="hljs-keyword">const</span> alois = {<span class="hljs-attr">name</span>: <span class="hljs-string">'Alois'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">15</span>, <span class="hljs-attr">disposition</span>: <span class="hljs-string">'surly'</span>};
<span class="hljs-keyword">const</span> kids = [abby, fred, rusty, alois];
<span class="hljs-keyword">const</span> hasBrownHair = R.propEq(<span class="hljs-string">'hair'</span>, <span class="hljs-string">'brown'</span>);
R.filter(hasBrownHair, kids); <span class="hljs-comment">//=&gt; [fred, rusty]</span></code></pre>
        </section>
        <div id="propIs" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#propIs">propIs</a>
                <span class="pull-right">
                        <span class="label label-category">Type</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/propIs.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Type → String → Object → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">type</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">name</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.16.0</small></p>

            <div class="description"><p>Returns <code>true</code> if the specified object property is of the given type;
<code>false</code> otherwise.</p>
</div>



            <div class="see">
                See also
                <a href="#is">is</a>,
                <a href="#propSatisfies">propSatisfies</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.propIs(<span class="hljs-built_in">Number</span>, <span class="hljs-string">'x'</span>, {<span class="hljs-attr">x</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">2</span>});  <span class="hljs-comment">//=&gt; true</span>
R.propIs(<span class="hljs-built_in">Number</span>, <span class="hljs-string">'x'</span>, {<span class="hljs-attr">x</span>: <span class="hljs-string">'foo'</span>});    <span class="hljs-comment">//=&gt; false</span>
R.propIs(<span class="hljs-built_in">Number</span>, <span class="hljs-string">'x'</span>, {});            <span class="hljs-comment">//=&gt; false</span></code></pre>
        </section>
        <div id="propOr" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#propOr">propOr</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/propOr.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>a → String → Object → a</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">val</span>
                            <span class="description"><p>The default value.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">p</span>
                            <span class="description"><p>The name of the property to return.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"><p>The object to query.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description">The value of given property of the supplied object or the default value.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.6.0</small></p>

            <div class="description"><p>If the given, non-null object has an own property with the specified name,
returns the value of that property. Otherwise returns the provided default
value.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> alice = {
  <span class="hljs-attr">name</span>: <span class="hljs-string">'ALICE'</span>,
  <span class="hljs-attr">age</span>: <span class="hljs-number">101</span>
};
<span class="hljs-keyword">const</span> favorite = R.prop(<span class="hljs-string">'favoriteLibrary'</span>);
<span class="hljs-keyword">const</span> favoriteWithDefault = R.propOr(<span class="hljs-string">'Ramda'</span>, <span class="hljs-string">'favoriteLibrary'</span>);

favorite(alice);  <span class="hljs-comment">//=&gt; undefined</span>
favoriteWithDefault(alice);  <span class="hljs-comment">//=&gt; 'Ramda'</span></code></pre>
        </section>
        <div id="props" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#props">props</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/props.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[k] → {k: v} → [v]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">ps</span>
                            <span class="description"><p>The property names to fetch</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"><p>The object to query</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">The corresponding values or partially applied function.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Acts as multiple <code>prop</code>: array of keys in, array of values out. Preserves
order.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.props([<span class="hljs-string">'x'</span>, <span class="hljs-string">'y'</span>], {<span class="hljs-attr">x</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">2</span>}); <span class="hljs-comment">//=&gt; [1, 2]</span>
R.props([<span class="hljs-string">'c'</span>, <span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>], {<span class="hljs-attr">b</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">a</span>: <span class="hljs-number">1</span>}); <span class="hljs-comment">//=&gt; [undefined, 1, 2]</span>

<span class="hljs-keyword">const</span> fullName = R.compose(R.join(<span class="hljs-string">' '</span>), R.props([<span class="hljs-string">'first'</span>, <span class="hljs-string">'last'</span>]));
fullName({<span class="hljs-attr">last</span>: <span class="hljs-string">'Bullet-Tooth'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">33</span>, <span class="hljs-attr">first</span>: <span class="hljs-string">'Tony'</span>}); <span class="hljs-comment">//=&gt; 'Tony Bullet-Tooth'</span></code></pre>
        </section>
        <div id="propSatisfies" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#propSatisfies">propSatisfies</a>
                <span class="pull-right">
                        <span class="label label-category">Logic</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/propSatisfies.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(a → Boolean) → String → {String: a} → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">pred</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">name</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.16.0</small></p>

            <div class="description"><p>Returns <code>true</code> if the specified object property satisfies the given
predicate; <code>false</code> otherwise. You can test multiple properties with
<a href="#where"><code>R.where</code></a>.</p>
</div>



            <div class="see">
                See also
                <a href="#where">where</a>,
                <a href="#propEq">propEq</a>,
                <a href="#propIs">propIs</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.propSatisfies(<span class="hljs-function"><span class="hljs-params">x</span> =&gt;</span> x &gt; <span class="hljs-number">0</span>, <span class="hljs-string">'x'</span>, {<span class="hljs-attr">x</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">2</span>}); <span class="hljs-comment">//=&gt; true</span></code></pre>
        </section>
        <div id="range" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#range">range</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/range.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → Number → [Number]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">from</span>
                            <span class="description"><p>The first number in the list.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">to</span>
                            <span class="description"><p>One more than the last number in the list.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">The list of numbers in the set '[a, b)'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns a list of numbers from <code>from</code> (inclusive) to <code>to</code> (exclusive).</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.range(<span class="hljs-number">1</span>, <span class="hljs-number">5</span>);    <span class="hljs-comment">//=&gt; [1, 2, 3, 4]</span>
R.range(<span class="hljs-number">50</span>, <span class="hljs-number">53</span>);  <span class="hljs-comment">//=&gt; [50, 51, 52]</span></code></pre>
        </section>
        <div id="reduce" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#reduce">reduce</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/reduce.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((a, b) → a) → a → [b] → a</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The iterator function. Receives two values, the accumulator and the
       current element from the array.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">acc</span>
                            <span class="description"><p>The accumulator value.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The list to iterate over.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description">The final, accumulated value.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns a single item by iterating through the list, successively calling
the iterator function and passing it an accumulator value and the current
value from the array, and then passing the result to the next call.</p>
<p>The iterator function receives two values: <em>(acc, value)</em>. It may use
<a href="#reduced"><code>R.reduced</code></a> to shortcut the iteration.</p>
<p>The arguments' order of <a href="#reduceRight"><code>reduceRight</code></a>'s iterator function
is <em>(value, acc)</em>.</p>
<p>Note: <code>R.reduce</code> does not skip deleted or unassigned indices (sparse
arrays), unlike the native <code>Array.prototype.reduce</code> method. For more details
on this behavior, see:
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description</a></p>
<p>Dispatches to the <code>reduce</code> method of the third argument, if present. When
doing so, it is up to the user to handle the <a href="#reduced"><code>R.reduced</code></a>
shortcuting, as this is not implemented by <code>reduce</code>.</p>
</div>



            <div class="see">
                See also
                <a href="#reduced">reduced</a>,
                <a href="#addIndex">addIndex</a>,
                <a href="#reduceRight">reduceRight</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.reduce(R.subtract, <span class="hljs-number">0</span>, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>]) <span class="hljs-comment">// =&gt; ((((0 - 1) - 2) - 3) - 4) = -10</span>
<span class="hljs-comment">//          -               -10</span>
<span class="hljs-comment">//         / \              / \</span>
<span class="hljs-comment">//        -   4           -6   4</span>
<span class="hljs-comment">//       / \              / \</span>
<span class="hljs-comment">//      -   3   ==&gt;     -3   3</span>
<span class="hljs-comment">//     / \              / \</span>
<span class="hljs-comment">//    -   2           -1   2</span>
<span class="hljs-comment">//   / \              / \</span>
<span class="hljs-comment">//  0   1            0   1</span></code></pre>
        </section>
        <div id="reduceBy" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#reduceBy">reduceBy</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/reduceBy.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((a, b) → a) → a → (b → String) → [b] → {String: a}</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">valueFn</span>
                            <span class="description"><p>The function that reduces the elements of each group to a single
       value. Receives two values, accumulator for a particular group and the current element.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">acc</span>
                            <span class="description"><p>The (initial) accumulator value for each group.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">keyFn</span>
                            <span class="description"><p>The function that maps the list's element into a key.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The array to group.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description">An object with the output of 'keyFn' for keys, mapped to the output of
        'valueFn' for elements which produced that key when passed to 'keyFn'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.20.0</small></p>

            <div class="description"><p>Groups the elements of the list according to the result of calling
the String-returning function <code>keyFn</code> on each element and reduces the elements
of each group to a single value via the reducer function <code>valueFn</code>.</p>
<p>This function is basically a more general <a href="#groupBy"><code>groupBy</code></a> function.</p>
<p>Acts as a transducer if a transformer is given in list position.</p>
</div>



            <div class="see">
                See also
                <a href="#groupBy">groupBy</a>,
                <a href="#reduce">reduce</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> groupNames = <span class="hljs-function">(<span class="hljs-params">acc, {name}</span>) =&gt;</span> acc.concat(name)
<span class="hljs-keyword">const</span> toGrade = <span class="hljs-function">(<span class="hljs-params">{score}</span>) =&gt;</span>
  score &lt; <span class="hljs-number">65</span> ? <span class="hljs-string">'F'</span> :
  score &lt; <span class="hljs-number">70</span> ? <span class="hljs-string">'D'</span> :
  score &lt; <span class="hljs-number">80</span> ? <span class="hljs-string">'C'</span> :
  score &lt; <span class="hljs-number">90</span> ? <span class="hljs-string">'B'</span> : <span class="hljs-string">'A'</span>

<span class="hljs-keyword">var</span> students = [
  {<span class="hljs-attr">name</span>: <span class="hljs-string">'Abby'</span>, <span class="hljs-attr">score</span>: <span class="hljs-number">83</span>},
  {<span class="hljs-attr">name</span>: <span class="hljs-string">'Bart'</span>, <span class="hljs-attr">score</span>: <span class="hljs-number">62</span>},
  {<span class="hljs-attr">name</span>: <span class="hljs-string">'Curt'</span>, <span class="hljs-attr">score</span>: <span class="hljs-number">88</span>},
  {<span class="hljs-attr">name</span>: <span class="hljs-string">'Dora'</span>, <span class="hljs-attr">score</span>: <span class="hljs-number">92</span>},
]

reduceBy(groupNames, [], toGrade, students)
<span class="hljs-comment">//=&gt; {"A": ["Dora"], "B": ["Abby", "Curt"], "F": ["Bart"]}</span></code></pre>
        </section>
        <div id="reduced" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#reduced">reduced</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/reduced.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>a → *</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">x</span>
                            <span class="description"><p>The final value of the reduce.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description">The wrapped value.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.15.0</small></p>

            <div class="description"><p>Returns a value wrapped to indicate that it is the final value of the reduce
and transduce functions. The returned value should be considered a black
box: the internal structure is not guaranteed to be stable.</p>
<p>Note: this optimization is only available to the below functions:</p>
<ul>
<li><a href="#reduce"><code>reduce</code></a></li>
<li><a href="#reduceWhile"><code>reduceWhile</code></a></li>
<li><a href="#transduce"><code>transduce</code></a></li>
</ul>
</div>



            <div class="see">
                See also
                <a href="#reduce">reduce</a>,
                <a href="#reduceWhile">reduceWhile</a>,
                <a href="#transduce">transduce</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.reduce(
 <span class="hljs-function">(<span class="hljs-params">acc, item</span>) =&gt;</span> item &gt; <span class="hljs-number">3</span> ? R.reduced(acc) : acc.concat(item),
 [],
 [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>]) <span class="hljs-comment">// [1, 2, 3]</span></code></pre>
        </section>
        <div id="reduceRight" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#reduceRight">reduceRight</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/reduceRight.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((a, b) → b) → b → [a] → b</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The iterator function. Receives two values, the current element from the array
       and the accumulator.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">acc</span>
                            <span class="description"><p>The accumulator value.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The list to iterate over.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description">The final, accumulated value.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns a single item by iterating through the list, successively calling
the iterator function and passing it an accumulator value and the current
value from the array, and then passing the result to the next call.</p>
<p>Similar to <a href="#reduce"><code>reduce</code></a>, except moves through the input list from the
right to the left.</p>
<p>The iterator function receives two values: <em>(value, acc)</em>, while the arguments'
order of <code>reduce</code>'s iterator function is <em>(acc, value)</em>.</p>
<p>Note: <code>R.reduceRight</code> does not skip deleted or unassigned indices (sparse
arrays), unlike the native <code>Array.prototype.reduceRight</code> method. For more details
on this behavior, see:
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description</a></p>
</div>



            <div class="see">
                See also
                <a href="#reduce">reduce</a>,
                <a href="#addIndex">addIndex</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.reduceRight(R.subtract, <span class="hljs-number">0</span>, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>]) <span class="hljs-comment">// =&gt; (1 - (2 - (3 - (4 - 0)))) = -2</span>
<span class="hljs-comment">//    -               -2</span>
<span class="hljs-comment">//   / \              / \</span>
<span class="hljs-comment">//  1   -            1   3</span>
<span class="hljs-comment">//     / \              / \</span>
<span class="hljs-comment">//    2   -     ==&gt;    2  -1</span>
<span class="hljs-comment">//       / \              / \</span>
<span class="hljs-comment">//      3   -            3   4</span>
<span class="hljs-comment">//         / \              / \</span>
<span class="hljs-comment">//        4   0            4   0</span></code></pre>
        </section>
        <div id="reduceWhile" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#reduceWhile">reduceWhile</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/reduceWhile.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((a, b) → Boolean) → ((a, b) → a) → a → [b] → a</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">pred</span>
                            <span class="description"><p>The predicate. It is passed the accumulator and the
       current element.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The iterator function. Receives two values, the
       accumulator and the current element.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">a</span>
                            <span class="description"><p>The accumulator value.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The list to iterate over.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description">The final, accumulated value.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.22.0</small></p>

            <div class="description"><p>Like <a href="#reduce"><code>reduce</code></a>, <code>reduceWhile</code> returns a single item by iterating
through the list, successively calling the iterator function. <code>reduceWhile</code>
also takes a predicate that is evaluated before each step. If the predicate
returns <code>false</code>, it "short-circuits" the iteration and returns the current
value of the accumulator.</p>
</div>



            <div class="see">
                See also
                <a href="#reduce">reduce</a>,
                <a href="#reduced">reduced</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> isOdd = <span class="hljs-function">(<span class="hljs-params">acc, x</span>) =&gt;</span> x % <span class="hljs-number">2</span> === <span class="hljs-number">1</span>;
<span class="hljs-keyword">const</span> xs = [<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>, <span class="hljs-number">60</span>, <span class="hljs-number">777</span>, <span class="hljs-number">800</span>];
R.reduceWhile(isOdd, R.add, <span class="hljs-number">0</span>, xs); <span class="hljs-comment">//=&gt; 9</span>

<span class="hljs-keyword">const</span> ys = [<span class="hljs-number">2</span>, <span class="hljs-number">4</span>, <span class="hljs-number">6</span>]
R.reduceWhile(isOdd, R.add, <span class="hljs-number">111</span>, ys); <span class="hljs-comment">//=&gt; 111</span></code></pre>
        </section>
        <div id="reject" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#reject">reject</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/reject.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Filterable f =&gt; (a → Boolean) → f a → f a</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">pred</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">filterable</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>The complement of <a href="#filter"><code>filter</code></a>.</p>
<p>Acts as a transducer if a transformer is given in list position. Filterable
objects include plain objects or any object that has a filter method such
as <code>Array</code>.</p>
</div>



            <div class="see">
                See also
                <a href="#filter">filter</a>,
                <a href="#transduce">transduce</a>,
                <a href="#addIndex">addIndex</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> isOdd = <span class="hljs-function">(<span class="hljs-params">n</span>) =&gt;</span> n % <span class="hljs-number">2</span> === <span class="hljs-number">1</span>;

R.reject(isOdd, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>]); <span class="hljs-comment">//=&gt; [2, 4]</span>

R.reject(isOdd, {<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">c</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">d</span>: <span class="hljs-number">4</span>}); <span class="hljs-comment">//=&gt; {b: 2, d: 4}</span></code></pre>
        </section>
        <div id="remove" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#remove">remove</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/remove.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → Number → [a] → [a]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">start</span>
                            <span class="description"><p>The position to start removing elements</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">count</span>
                            <span class="description"><p>The number of elements to remove</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The list to remove from</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">A new Array with 'count' elements from 'start' removed.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.2.2</small></p>

            <div class="description"><p>Removes the sub-list of <code>list</code> starting at index <code>start</code> and containing
<code>count</code> elements. <em>Note that this is not destructive</em>: it returns a copy of
the list with the changes.
<small>No lists have been harmed in the application of this function.</small></p>
</div>



            <div class="see">
                See also
                <a href="#without">without</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.remove(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>, [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>,<span class="hljs-number">6</span>,<span class="hljs-number">7</span>,<span class="hljs-number">8</span>]); <span class="hljs-comment">//=&gt; [1,2,6,7,8]</span></code></pre>
        </section>
        <div id="repeat" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#repeat">repeat</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/repeat.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>a → n → [a]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">value</span>
                            <span class="description"><p>The value to repeat.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">n</span>
                            <span class="description"><p>The desired size of the output list.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">A new array containing 'n' 'value's.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.1</small></p>

            <div class="description"><p>Returns a fixed list of size <code>n</code> containing a specified identical value.</p>
</div>



            <div class="see">
                See also
                <a href="#times">times</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.repeat(<span class="hljs-string">'hi'</span>, <span class="hljs-number">5</span>); <span class="hljs-comment">//=&gt; ['hi', 'hi', 'hi', 'hi', 'hi']</span>

<span class="hljs-keyword">const</span> obj = {};
<span class="hljs-keyword">const</span> repeatedObjs = R.repeat(obj, <span class="hljs-number">5</span>); <span class="hljs-comment">//=&gt; [{}, {}, {}, {}, {}]</span>
repeatedObjs[<span class="hljs-number">0</span>] === repeatedObjs[<span class="hljs-number">1</span>]; <span class="hljs-comment">//=&gt; true</span></code></pre>
        </section>
        <div id="replace" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#replace">replace</a>
                <span class="pull-right">
                        <span class="label label-category">String</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/replace.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>RegExp|String → String → String → String</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">pattern</span>
                            <span class="description"><p>A regular expression or a substring to match.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">replacement</span>
                            <span class="description"><p>The string to replace the matches with.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">str</span>
                            <span class="description"><p>The String to do the search and replacement in.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">String</span>
                        <span class="description">The result.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.7.0</small></p>

            <div class="description"><p>Replace a substring or regex match in a string with a replacement.</p>
<p>The first two parameters correspond to the parameters of the
<code>String.prototype.replace()</code> function, so the second parameter can also be a
function.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.replace(<span class="hljs-string">'foo'</span>, <span class="hljs-string">'bar'</span>, <span class="hljs-string">'foo foo foo'</span>); <span class="hljs-comment">//=&gt; 'bar foo foo'</span>
R.replace(<span class="hljs-regexp">/foo/</span>, <span class="hljs-string">'bar'</span>, <span class="hljs-string">'foo foo foo'</span>); <span class="hljs-comment">//=&gt; 'bar foo foo'</span>

<span class="hljs-comment">// Use the "g" (global) flag to replace all occurrences:</span>
R.replace(<span class="hljs-regexp">/foo/g</span>, <span class="hljs-string">'bar'</span>, <span class="hljs-string">'foo foo foo'</span>); <span class="hljs-comment">//=&gt; 'bar bar bar'</span></code></pre>
        </section>
        <div id="reverse" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#reverse">reverse</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/reverse.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[a] → [a]</code></div>
            <div><code>String → String</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns a new list or string with the elements or characters in reverse
order.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.reverse([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]);  <span class="hljs-comment">//=&gt; [3, 2, 1]</span>
R.reverse([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]);     <span class="hljs-comment">//=&gt; [2, 1]</span>
R.reverse([<span class="hljs-number">1</span>]);        <span class="hljs-comment">//=&gt; [1]</span>
R.reverse([]);         <span class="hljs-comment">//=&gt; []</span>

R.reverse(<span class="hljs-string">'abc'</span>);      <span class="hljs-comment">//=&gt; 'cba'</span>
R.reverse(<span class="hljs-string">'ab'</span>);       <span class="hljs-comment">//=&gt; 'ba'</span>
R.reverse(<span class="hljs-string">'a'</span>);        <span class="hljs-comment">//=&gt; 'a'</span>
R.reverse(<span class="hljs-string">''</span>);         <span class="hljs-comment">//=&gt; ''</span></code></pre>
        </section>
        <div id="scan" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#scan">scan</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/scan.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((a, b) → a) → a → [b] → [a]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The iterator function. Receives two values, the accumulator and the
       current element from the array</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">acc</span>
                            <span class="description"><p>The accumulator value.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The list to iterate over.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">A list of all intermediately reduced values.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.10.0</small></p>

            <div class="description"><p>Scan is similar to <a href="#reduce"><code>reduce</code></a>, but returns a list of successively
reduced values from the left</p>
</div>



            <div class="see">
                See also
                <a href="#reduce">reduce</a>,
                <a href="#mapAccum">mapAccum</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> numbers = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>];
<span class="hljs-keyword">const</span> factorials = R.scan(R.multiply, <span class="hljs-number">1</span>, numbers); <span class="hljs-comment">//=&gt; [1, 1, 2, 6, 24]</span></code></pre>
        </section>
        <div id="sequence" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#sequence">sequence</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/sequence.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(Applicative f, Traversable t) =&gt; (a → f a) → t (f a) → f (t a)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">of</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">traversable</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.19.0</small></p>

            <div class="description"><p>Transforms a <a href="https://github.com/fantasyland/fantasy-land#traversable">Traversable</a>
of <a href="https://github.com/fantasyland/fantasy-land#applicative">Applicative</a> into an
Applicative of Traversable.</p>
<p>Dispatches to the <code>sequence</code> method of the second argument, if present.</p>
</div>



            <div class="see">
                See also
                <a href="#traverse">traverse</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.sequence(Maybe.of, [Just(<span class="hljs-number">1</span>), Just(<span class="hljs-number">2</span>), Just(<span class="hljs-number">3</span>)]);   <span class="hljs-comment">//=&gt; Just([1, 2, 3])</span>
R.sequence(Maybe.of, [Just(<span class="hljs-number">1</span>), Just(<span class="hljs-number">2</span>), Nothing()]); <span class="hljs-comment">//=&gt; Nothing()</span>

R.sequence(R.of, Just([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>])); <span class="hljs-comment">//=&gt; [Just(1), Just(2), Just(3)]</span>
R.sequence(R.of, Nothing());       <span class="hljs-comment">//=&gt; [Nothing()]</span></code></pre>
        </section>
        <div id="set" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#set">set</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/set.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Lens s a → a → s → s</code></div>

            <div><code>Lens s a = Functor f =&gt; (a → f a) → s → f s</code></div>

            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">lens</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">v</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">x</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.16.0</small></p>

            <div class="description"><p>Returns the result of "setting" the portion of the given data structure
focused by the given lens to the given value.</p>
</div>



            <div class="see">
                See also
                <a href="#prop">prop</a>,
                <a href="#lensIndex">lensIndex</a>,
                <a href="#lensProp">lensProp</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> xLens = R.lensProp(<span class="hljs-string">'x'</span>);

R.set(xLens, <span class="hljs-number">4</span>, {<span class="hljs-attr">x</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">2</span>});  <span class="hljs-comment">//=&gt; {x: 4, y: 2}</span>
R.set(xLens, <span class="hljs-number">8</span>, {<span class="hljs-attr">x</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">2</span>});  <span class="hljs-comment">//=&gt; {x: 8, y: 2}</span></code></pre>
        </section>
        <div id="slice" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#slice">slice</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/slice.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → Number → [a] → [a]</code></div>
            <div><code>Number → Number → String → String</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fromIndex</span>
                            <span class="description"><p>The start index (inclusive).</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">toIndex</span>
                            <span class="description"><p>The end index (exclusive).</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.4</small></p>

            <div class="description"><p>Returns the elements of the given list or string (or object with a <code>slice</code>
method) from <code>fromIndex</code> (inclusive) to <code>toIndex</code> (exclusive).</p>
<p>Dispatches to the <code>slice</code> method of the third argument, if present.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.slice(<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>, <span class="hljs-string">'d'</span>]);        <span class="hljs-comment">//=&gt; ['b', 'c']</span>
R.slice(<span class="hljs-number">1</span>, <span class="hljs-literal">Infinity</span>, [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>, <span class="hljs-string">'d'</span>]); <span class="hljs-comment">//=&gt; ['b', 'c', 'd']</span>
R.slice(<span class="hljs-number">0</span>, <span class="hljs-number">-1</span>, [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>, <span class="hljs-string">'d'</span>]);       <span class="hljs-comment">//=&gt; ['a', 'b', 'c']</span>
R.slice(<span class="hljs-number">-3</span>, <span class="hljs-number">-1</span>, [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>, <span class="hljs-string">'d'</span>]);      <span class="hljs-comment">//=&gt; ['b', 'c']</span>
R.slice(<span class="hljs-number">0</span>, <span class="hljs-number">3</span>, <span class="hljs-string">'ramda'</span>);                     <span class="hljs-comment">//=&gt; 'ram'</span></code></pre>
        </section>
        <div id="sort" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#sort">sort</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/sort.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((a, a) → Number) → [a] → [a]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">comparator</span>
                            <span class="description"><p>A sorting function :: a -&gt; b -&gt; Int</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The list to sort</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">a new array with its elements sorted by the comparator function.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns a copy of the list, sorted according to the comparator function,
which should accept two values at a time and return a negative number if the
first value is smaller, a positive number if it's larger, and zero if they
are equal. Please note that this is a <strong>copy</strong> of the list. It does not
modify the original.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> diff = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">a, b</span>) </span>{ <span class="hljs-keyword">return</span> a - b; };
R.sort(diff, [<span class="hljs-number">4</span>,<span class="hljs-number">2</span>,<span class="hljs-number">7</span>,<span class="hljs-number">5</span>]); <span class="hljs-comment">//=&gt; [2, 4, 5, 7]</span></code></pre>
        </section>
        <div id="sortBy" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#sortBy">sortBy</a>
                <span class="pull-right">
                        <span class="label label-category">Relation</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/sortBy.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Ord b =&gt; (a → b) → [a] → [a]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The list to sort.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">A new list sorted by the keys generated by 'fn'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Sorts the list according to the supplied function.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> sortByFirstItem = R.sortBy(R.prop(<span class="hljs-number">0</span>));
<span class="hljs-keyword">const</span> pairs = [[<span class="hljs-number">-1</span>, <span class="hljs-number">1</span>], [<span class="hljs-number">-2</span>, <span class="hljs-number">2</span>], [<span class="hljs-number">-3</span>, <span class="hljs-number">3</span>]];
sortByFirstItem(pairs); <span class="hljs-comment">//=&gt; [[-3, 3], [-2, 2], [-1, 1]]</span>

<span class="hljs-keyword">const</span> sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop(<span class="hljs-string">'name'</span>)));
<span class="hljs-keyword">const</span> alice = {
  <span class="hljs-attr">name</span>: <span class="hljs-string">'ALICE'</span>,
  <span class="hljs-attr">age</span>: <span class="hljs-number">101</span>
};
<span class="hljs-keyword">const</span> bob = {
  <span class="hljs-attr">name</span>: <span class="hljs-string">'Bob'</span>,
  <span class="hljs-attr">age</span>: <span class="hljs-number">-10</span>
};
<span class="hljs-keyword">const</span> clara = {
  <span class="hljs-attr">name</span>: <span class="hljs-string">'clara'</span>,
  <span class="hljs-attr">age</span>: <span class="hljs-number">314.159</span>
};
<span class="hljs-keyword">const</span> people = [clara, bob, alice];
sortByNameCaseInsensitive(people); <span class="hljs-comment">//=&gt; [alice, bob, clara]</span></code></pre>
        </section>
        <div id="sortWith" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#sortWith">sortWith</a>
                <span class="pull-right">
                        <span class="label label-category">Relation</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/sortWith.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[(a, a) → Number] → [a] → [a]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">functions</span>
                            <span class="description"><p>A list of comparator functions.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The list to sort.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">A new list sorted according to the comarator functions.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.23.0</small></p>

            <div class="description"><p>Sorts a list according to a list of comparators.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> alice = {
  <span class="hljs-attr">name</span>: <span class="hljs-string">'alice'</span>,
  <span class="hljs-attr">age</span>: <span class="hljs-number">40</span>
};
<span class="hljs-keyword">const</span> bob = {
  <span class="hljs-attr">name</span>: <span class="hljs-string">'bob'</span>,
  <span class="hljs-attr">age</span>: <span class="hljs-number">30</span>
};
<span class="hljs-keyword">const</span> clara = {
  <span class="hljs-attr">name</span>: <span class="hljs-string">'clara'</span>,
  <span class="hljs-attr">age</span>: <span class="hljs-number">40</span>
};
<span class="hljs-keyword">const</span> people = [clara, bob, alice];
<span class="hljs-keyword">const</span> ageNameSort = R.sortWith([
  R.descend(R.prop(<span class="hljs-string">'age'</span>)),
  R.ascend(R.prop(<span class="hljs-string">'name'</span>))
]);
ageNameSort(people); <span class="hljs-comment">//=&gt; [alice, clara, bob]</span></code></pre>
        </section>
        <div id="split" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#split">split</a>
                <span class="pull-right">
                        <span class="label label-category">String</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/split.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(String | RegExp) → String → [String]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">sep</span>
                            <span class="description"><p>The pattern.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">str</span>
                            <span class="description"><p>The string to separate into an array.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">The array of strings from 'str' separated by 'sep'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Splits a string into an array of strings based on the given
separator.</p>
</div>



            <div class="see">
                See also
                <a href="#join">join</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> pathComponents = R.split(<span class="hljs-string">'/'</span>);
R.tail(pathComponents(<span class="hljs-string">'/usr/local/bin/node'</span>)); <span class="hljs-comment">//=&gt; ['usr', 'local', 'bin', 'node']</span>

R.split(<span class="hljs-string">'.'</span>, <span class="hljs-string">'a.b.c.xyz.d'</span>); <span class="hljs-comment">//=&gt; ['a', 'b', 'c', 'xyz', 'd']</span></code></pre>
        </section>
        <div id="splitAt" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#splitAt">splitAt</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/splitAt.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → [a] → [[a], [a]]</code></div>
            <div><code>Number → String → [String, String]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">index</span>
                            <span class="description"><p>The index where the array/string is split.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">array</span>
                            <span class="description"><p>The array/string to be split.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.19.0</small></p>

            <div class="description"><p>Splits a given list or string at a given index.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.splitAt(<span class="hljs-number">1</span>, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]);          <span class="hljs-comment">//=&gt; [[1], [2, 3]]</span>
R.splitAt(<span class="hljs-number">5</span>, <span class="hljs-string">'hello world'</span>);      <span class="hljs-comment">//=&gt; ['hello', ' world']</span>
R.splitAt(<span class="hljs-number">-1</span>, <span class="hljs-string">'foobar'</span>);          <span class="hljs-comment">//=&gt; ['fooba', 'r']</span></code></pre>
        </section>
        <div id="splitEvery" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#splitEvery">splitEvery</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/splitEvery.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → [a] → [[a]]</code></div>
            <div><code>Number → String → [String]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">n</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.16.0</small></p>

            <div class="description"><p>Splits a collection into slices of the specified length.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.splitEvery(<span class="hljs-number">3</span>, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>]); <span class="hljs-comment">//=&gt; [[1, 2, 3], [4, 5, 6], [7]]</span>
R.splitEvery(<span class="hljs-number">3</span>, <span class="hljs-string">'foobarbaz'</span>); <span class="hljs-comment">//=&gt; ['foo', 'bar', 'baz']</span></code></pre>
        </section>
        <div id="splitWhen" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#splitWhen">splitWhen</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/splitWhen.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(a → Boolean) → [a] → [[a], [a]]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">pred</span>
                            <span class="description"><p>The predicate that determines where the array is split.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The array to be split.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.19.0</small></p>

            <div class="description"><p>Takes a list and a predicate and returns a pair of lists with the following properties:</p>
<ul>
<li>the result of concatenating the two output lists is equivalent to the input list;</li>
<li>none of the elements of the first output list satisfies the predicate; and</li>
<li>if the second output list is non-empty, its first element satisfies the predicate.</li>
</ul>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.splitWhen(R.equals(<span class="hljs-number">2</span>), [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]);   <span class="hljs-comment">//=&gt; [[1], [2, 3, 1, 2, 3]]</span></code></pre>
        </section>
        <div id="startsWith" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#startsWith">startsWith</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/startsWith.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[a] → [a] → Boolean</code></div>
            <div><code>String → String → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">prefix</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.24.0</small></p>

            <div class="description"><p>Checks if a list starts with the provided sublist.</p>
<p>Similarly, checks if a string starts with the provided substring.</p>
</div>



            <div class="see">
                See also
                <a href="#endsWith">endsWith</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.startsWith(<span class="hljs-string">'a'</span>, <span class="hljs-string">'abc'</span>)                <span class="hljs-comment">//=&gt; true</span>
R.startsWith(<span class="hljs-string">'b'</span>, <span class="hljs-string">'abc'</span>)                <span class="hljs-comment">//=&gt; false</span>
R.startsWith([<span class="hljs-string">'a'</span>], [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>])    <span class="hljs-comment">//=&gt; true</span>
R.startsWith([<span class="hljs-string">'b'</span>], [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>])    <span class="hljs-comment">//=&gt; false</span></code></pre>
        </section>
        <div id="subtract" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#subtract">subtract</a>
                <span class="pull-right">
                        <span class="label label-category">Math</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/subtract.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → Number → Number</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">a</span>
                            <span class="description"><p>The first value.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">b</span>
                            <span class="description"><p>The second value.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Number</span>
                        <span class="description">The result of 'a - b'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Subtracts its second argument from its first argument.</p>
</div>



            <div class="see">
                See also
                <a href="#add">add</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.subtract(<span class="hljs-number">10</span>, <span class="hljs-number">8</span>); <span class="hljs-comment">//=&gt; 2</span>

<span class="hljs-keyword">const</span> minus5 = R.subtract(R.__, <span class="hljs-number">5</span>);
minus5(<span class="hljs-number">17</span>); <span class="hljs-comment">//=&gt; 12</span>

<span class="hljs-keyword">const</span> complementaryAngle = R.subtract(<span class="hljs-number">90</span>);
complementaryAngle(<span class="hljs-number">30</span>); <span class="hljs-comment">//=&gt; 60</span>
complementaryAngle(<span class="hljs-number">72</span>); <span class="hljs-comment">//=&gt; 18</span></code></pre>
        </section>
        <div id="sum" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#sum">sum</a>
                <span class="pull-right">
                        <span class="label label-category">Math</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/sum.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[Number] → Number</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>An array of numbers</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Number</span>
                        <span class="description">The sum of all the numbers in the list.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Adds together all the elements of a list.</p>
</div>



            <div class="see">
                See also
                <a href="#reduce">reduce</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.sum([<span class="hljs-number">2</span>,<span class="hljs-number">4</span>,<span class="hljs-number">6</span>,<span class="hljs-number">8</span>,<span class="hljs-number">100</span>,<span class="hljs-number">1</span>]); <span class="hljs-comment">//=&gt; 121</span></code></pre>
        </section>
        <div id="symmetricDifference" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#symmetricDifference">symmetricDifference</a>
                <span class="pull-right">
                        <span class="label label-category">Relation</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/symmetricDifference.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[*] → [*] → [*]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list1</span>
                            <span class="description"><p>The first list.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list2</span>
                            <span class="description"><p>The second list.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">The elements in 'list1' or 'list2', but not both.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.19.0</small></p>

            <div class="description"><p>Finds the set (i.e. no duplicates) of all elements contained in the first or
second list, but not both.</p>
</div>



            <div class="see">
                See also
                <a href="#symmetricDifferenceWith">symmetricDifferenceWith</a>,
                <a href="#difference">difference</a>,
                <a href="#differenceWith">differenceWith</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.symmetricDifference([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>], [<span class="hljs-number">7</span>,<span class="hljs-number">6</span>,<span class="hljs-number">5</span>,<span class="hljs-number">4</span>,<span class="hljs-number">3</span>]); <span class="hljs-comment">//=&gt; [1,2,7,6,5]</span>
R.symmetricDifference([<span class="hljs-number">7</span>,<span class="hljs-number">6</span>,<span class="hljs-number">5</span>,<span class="hljs-number">4</span>,<span class="hljs-number">3</span>], [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>]); <span class="hljs-comment">//=&gt; [7,6,5,1,2]</span></code></pre>
        </section>
        <div id="symmetricDifferenceWith" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#symmetricDifferenceWith">symmetricDifferenceWith</a>
                <span class="pull-right">
                        <span class="label label-category">Relation</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/symmetricDifferenceWith.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((a, a) → Boolean) → [a] → [a] → [a]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">pred</span>
                            <span class="description"><p>A predicate used to test whether two items are equal.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list1</span>
                            <span class="description"><p>The first list.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list2</span>
                            <span class="description"><p>The second list.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">The elements in 'list1' or 'list2', but not both.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.19.0</small></p>

            <div class="description"><p>Finds the set (i.e. no duplicates) of all elements contained in the first or
second list, but not both. Duplication is determined according to the value
returned by applying the supplied predicate to two list elements.</p>
</div>



            <div class="see">
                See also
                <a href="#symmetricDifference">symmetricDifference</a>,
                <a href="#difference">difference</a>,
                <a href="#differenceWith">differenceWith</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> eqA = R.eqBy(R.prop(<span class="hljs-string">'a'</span>));
<span class="hljs-keyword">const</span> l1 = [{<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>}, {<span class="hljs-attr">a</span>: <span class="hljs-number">2</span>}, {<span class="hljs-attr">a</span>: <span class="hljs-number">3</span>}, {<span class="hljs-attr">a</span>: <span class="hljs-number">4</span>}];
<span class="hljs-keyword">const</span> l2 = [{<span class="hljs-attr">a</span>: <span class="hljs-number">3</span>}, {<span class="hljs-attr">a</span>: <span class="hljs-number">4</span>}, {<span class="hljs-attr">a</span>: <span class="hljs-number">5</span>}, {<span class="hljs-attr">a</span>: <span class="hljs-number">6</span>}];
R.symmetricDifferenceWith(eqA, l1, l2); <span class="hljs-comment">//=&gt; [{a: 1}, {a: 2}, {a: 5}, {a: 6}]</span></code></pre>
        </section>
        <div id="T" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#T">T</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/T.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>* → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name"></span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.9.0</small></p>

            <div class="description"><p>A function that always returns <code>true</code>. Any passed in parameters are ignored.</p>
</div>



            <div class="see">
                See also
                <a href="#F">F</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.T(); <span class="hljs-comment">//=&gt; true</span></code></pre>
        </section>
        <div id="tail" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#tail">tail</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/tail.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[a] → [a]</code></div>
            <div><code>String → String</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns all but the first element of the given list or string (or object
with a <code>tail</code> method).</p>
<p>Dispatches to the <code>slice</code> method of the first argument, if present.</p>
</div>



            <div class="see">
                See also
                <a href="#head">head</a>,
                <a href="#init">init</a>,
                <a href="#last">last</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.tail([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]);  <span class="hljs-comment">//=&gt; [2, 3]</span>
R.tail([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]);     <span class="hljs-comment">//=&gt; [2]</span>
R.tail([<span class="hljs-number">1</span>]);        <span class="hljs-comment">//=&gt; []</span>
R.tail([]);         <span class="hljs-comment">//=&gt; []</span>

R.tail(<span class="hljs-string">'abc'</span>);  <span class="hljs-comment">//=&gt; 'bc'</span>
R.tail(<span class="hljs-string">'ab'</span>);   <span class="hljs-comment">//=&gt; 'b'</span>
R.tail(<span class="hljs-string">'a'</span>);    <span class="hljs-comment">//=&gt; ''</span>
R.tail(<span class="hljs-string">''</span>);     <span class="hljs-comment">//=&gt; ''</span></code></pre>
        </section>
        <div id="take" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#take">take</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/take.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → [a] → [a]</code></div>
            <div><code>Number → String → String</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">n</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns the first <code>n</code> elements of the given list, string, or
transducer/transformer (or object with a <code>take</code> method).</p>
<p>Dispatches to the <code>take</code> method of the second argument, if present.</p>
</div>



            <div class="see">
                See also
                <a href="#drop">drop</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.take(<span class="hljs-number">1</span>, [<span class="hljs-string">'foo'</span>, <span class="hljs-string">'bar'</span>, <span class="hljs-string">'baz'</span>]); <span class="hljs-comment">//=&gt; ['foo']</span>
R.take(<span class="hljs-number">2</span>, [<span class="hljs-string">'foo'</span>, <span class="hljs-string">'bar'</span>, <span class="hljs-string">'baz'</span>]); <span class="hljs-comment">//=&gt; ['foo', 'bar']</span>
R.take(<span class="hljs-number">3</span>, [<span class="hljs-string">'foo'</span>, <span class="hljs-string">'bar'</span>, <span class="hljs-string">'baz'</span>]); <span class="hljs-comment">//=&gt; ['foo', 'bar', 'baz']</span>
R.take(<span class="hljs-number">4</span>, [<span class="hljs-string">'foo'</span>, <span class="hljs-string">'bar'</span>, <span class="hljs-string">'baz'</span>]); <span class="hljs-comment">//=&gt; ['foo', 'bar', 'baz']</span>
R.take(<span class="hljs-number">3</span>, <span class="hljs-string">'ramda'</span>);               <span class="hljs-comment">//=&gt; 'ram'</span>

<span class="hljs-keyword">const</span> personnel = [
  <span class="hljs-string">'Dave Brubeck'</span>,
  <span class="hljs-string">'Paul Desmond'</span>,
  <span class="hljs-string">'Eugene Wright'</span>,
  <span class="hljs-string">'Joe Morello'</span>,
  <span class="hljs-string">'Gerry Mulligan'</span>,
  <span class="hljs-string">'Bob Bates'</span>,
  <span class="hljs-string">'Joe Dodge'</span>,
  <span class="hljs-string">'Ron Crotty'</span>
];

<span class="hljs-keyword">const</span> takeFive = R.take(<span class="hljs-number">5</span>);
takeFive(personnel);
<span class="hljs-comment">//=&gt; ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']</span></code></pre>
        </section>
        <div id="takeLast" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#takeLast">takeLast</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/takeLast.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → [a] → [a]</code></div>
            <div><code>Number → String → String</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">n</span>
                            <span class="description"><p>The number of elements to return.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">xs</span>
                            <span class="description"><p>The collection to consider.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.16.0</small></p>

            <div class="description"><p>Returns a new list containing the last <code>n</code> elements of the given list.
If <code>n &gt; list.length</code>, returns a list of <code>list.length</code> elements.</p>
</div>



            <div class="see">
                See also
                <a href="#dropLast">dropLast</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.takeLast(<span class="hljs-number">1</span>, [<span class="hljs-string">'foo'</span>, <span class="hljs-string">'bar'</span>, <span class="hljs-string">'baz'</span>]); <span class="hljs-comment">//=&gt; ['baz']</span>
R.takeLast(<span class="hljs-number">2</span>, [<span class="hljs-string">'foo'</span>, <span class="hljs-string">'bar'</span>, <span class="hljs-string">'baz'</span>]); <span class="hljs-comment">//=&gt; ['bar', 'baz']</span>
R.takeLast(<span class="hljs-number">3</span>, [<span class="hljs-string">'foo'</span>, <span class="hljs-string">'bar'</span>, <span class="hljs-string">'baz'</span>]); <span class="hljs-comment">//=&gt; ['foo', 'bar', 'baz']</span>
R.takeLast(<span class="hljs-number">4</span>, [<span class="hljs-string">'foo'</span>, <span class="hljs-string">'bar'</span>, <span class="hljs-string">'baz'</span>]); <span class="hljs-comment">//=&gt; ['foo', 'bar', 'baz']</span>
R.takeLast(<span class="hljs-number">3</span>, <span class="hljs-string">'ramda'</span>);               <span class="hljs-comment">//=&gt; 'mda'</span></code></pre>
        </section>
        <div id="takeLastWhile" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#takeLastWhile">takeLastWhile</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/takeLastWhile.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(a → Boolean) → [a] → [a]</code></div>
            <div><code>(a → Boolean) → String → String</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function called per iteration.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">xs</span>
                            <span class="description"><p>The collection to iterate over.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">A new array.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.16.0</small></p>

            <div class="description"><p>Returns a new list containing the last <code>n</code> elements of a given list, passing
each value to the supplied predicate function, and terminating when the
predicate function returns <code>false</code>. Excludes the element that caused the
predicate function to fail. The predicate function is passed one argument:
<em>(value)</em>.</p>
</div>



            <div class="see">
                See also
                <a href="#dropLastWhile">dropLastWhile</a>,
                <a href="#addIndex">addIndex</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> isNotOne = <span class="hljs-function"><span class="hljs-params">x</span> =&gt;</span> x !== <span class="hljs-number">1</span>;

R.takeLastWhile(isNotOne, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>]); <span class="hljs-comment">//=&gt; [2, 3, 4]</span>

R.takeLastWhile(<span class="hljs-function"><span class="hljs-params">x</span> =&gt;</span> x !== <span class="hljs-string">'R'</span> , <span class="hljs-string">'Ramda'</span>); <span class="hljs-comment">//=&gt; 'amda'</span></code></pre>
        </section>
        <div id="takeWhile" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#takeWhile">takeWhile</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/takeWhile.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(a → Boolean) → [a] → [a]</code></div>
            <div><code>(a → Boolean) → String → String</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function called per iteration.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">xs</span>
                            <span class="description"><p>The collection to iterate over.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">A new array.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns a new list containing the first <code>n</code> elements of a given list,
passing each value to the supplied predicate function, and terminating when
the predicate function returns <code>false</code>. Excludes the element that caused the
predicate function to fail. The predicate function is passed one argument:
<em>(value)</em>.</p>
<p>Dispatches to the <code>takeWhile</code> method of the second argument, if present.</p>
<p>Acts as a transducer if a transformer is given in list position.</p>
</div>



            <div class="see">
                See also
                <a href="#dropWhile">dropWhile</a>,
                <a href="#transduce">transduce</a>,
                <a href="#addIndex">addIndex</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> isNotFour = <span class="hljs-function"><span class="hljs-params">x</span> =&gt;</span> x !== <span class="hljs-number">4</span>;

R.takeWhile(isNotFour, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">3</span>, <span class="hljs-number">2</span>, <span class="hljs-number">1</span>]); <span class="hljs-comment">//=&gt; [1, 2, 3]</span>

R.takeWhile(<span class="hljs-function"><span class="hljs-params">x</span> =&gt;</span> x !== <span class="hljs-string">'d'</span> , <span class="hljs-string">'Ramda'</span>); <span class="hljs-comment">//=&gt; 'Ram'</span></code></pre>
        </section>
        <div id="tap" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#tap">tap</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/tap.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(a → *) → a → a</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function to call with <code>x</code>. The return value of <code>fn</code> will be thrown away.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">x</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description">'x'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Runs the given function with the supplied object, then returns the object.</p>
<p>Acts as a transducer if a transformer is given as second parameter.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> sayX = <span class="hljs-function"><span class="hljs-params">x</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'x is '</span> + x);
R.tap(sayX, <span class="hljs-number">100</span>); <span class="hljs-comment">//=&gt; 100</span>
<span class="hljs-comment">// logs 'x is 100'</span></code></pre>
        </section>
        <div id="test" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#test">test</a>
                <span class="pull-right">
                        <span class="label label-category">String</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/test.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>RegExp → String → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">pattern</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">str</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.12.0</small></p>

            <div class="description"><p>Determines whether a given string matches a given regular expression.</p>
</div>



            <div class="see">
                See also
                <a href="#match">match</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.test(<span class="hljs-regexp">/^x/</span>, <span class="hljs-string">'xyz'</span>); <span class="hljs-comment">//=&gt; true</span>
R.test(<span class="hljs-regexp">/^y/</span>, <span class="hljs-string">'xyz'</span>); <span class="hljs-comment">//=&gt; false</span></code></pre>
        </section>
        <div id="thunkify" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#thunkify">thunkify</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/thunkify.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((a, b, …, j) → k) → (a, b, …, j) → (() → k)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>A function to wrap in a thunk</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">Expects arguments for 'fn' and returns a new function
 that, when called, applies those arguments to 'fn'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.26.0</small></p>

            <div class="description"><p>Creates a thunk out of a function. A thunk delays a calculation until
its result is needed, providing lazy evaluation of arguments.</p>
</div>



            <div class="see">
                See also
                <a href="#partial">partial</a>,
                <a href="#partialRight">partialRight</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.thunkify(R.identity)(<span class="hljs-number">42</span>)(); <span class="hljs-comment">//=&gt; 42</span>
R.thunkify(<span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> a + b)(<span class="hljs-number">25</span>, <span class="hljs-number">17</span>)(); <span class="hljs-comment">//=&gt; 42</span></code></pre>
        </section>
        <div id="times" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#times">times</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/times.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(Number → a) → Number → [a]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function to invoke. Passed one argument, the current value of <code>n</code>.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">n</span>
                            <span class="description"><p>A value between <code>0</code> and <code>n - 1</code>. Increments after each function call.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">An array containing the return values of all calls to 'fn'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.2.3</small></p>

            <div class="description"><p>Calls an input function <code>n</code> times, returning an array containing the results
of those function calls.</p>
<p><code>fn</code> is passed one argument: The current value of <code>n</code>, which begins at <code>0</code>
and is gradually incremented to <code>n - 1</code>.</p>
</div>



            <div class="see">
                See also
                <a href="#repeat">repeat</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.times(R.identity, <span class="hljs-number">5</span>); <span class="hljs-comment">//=&gt; [0, 1, 2, 3, 4]</span></code></pre>
        </section>
        <div id="toLower" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#toLower">toLower</a>
                <span class="pull-right">
                        <span class="label label-category">String</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/toLower.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>String → String</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">str</span>
                            <span class="description"><p>The string to lower case.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">String</span>
                        <span class="description">The lower case version of 'str'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.9.0</small></p>

            <div class="description"><p>The lower case version of a string.</p>
</div>



            <div class="see">
                See also
                <a href="#toUpper">toUpper</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.toLower(<span class="hljs-string">'XYZ'</span>); <span class="hljs-comment">//=&gt; 'xyz'</span></code></pre>
        </section>
        <div id="toPairs" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#toPairs">toPairs</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/toPairs.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>{String: *} → [[String,*]]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"><p>The object to extract from</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">An array of key, value arrays from the object's own properties.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.4.0</small></p>

            <div class="description"><p>Converts an object into an array of key, value arrays. Only the object's
own properties are used.
Note that the order of the output array is not guaranteed to be consistent
across different JS platforms.</p>
</div>



            <div class="see">
                See also
                <a href="#fromPairs">fromPairs</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.toPairs({<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">c</span>: <span class="hljs-number">3</span>}); <span class="hljs-comment">//=&gt; [['a', 1], ['b', 2], ['c', 3]]</span></code></pre>
        </section>
        <div id="toPairsIn" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#toPairsIn">toPairsIn</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/toPairsIn.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>{String: *} → [[String,*]]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"><p>The object to extract from</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">An array of key, value arrays from the object's own
        and prototype properties.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.4.0</small></p>

            <div class="description"><p>Converts an object into an array of key, value arrays. The object's own
properties and prototype properties are used. Note that the order of the
output array is not guaranteed to be consistent across different JS
platforms.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> F = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{ <span class="hljs-keyword">this</span>.x = <span class="hljs-string">'X'</span>; };
F.prototype.y = <span class="hljs-string">'Y'</span>;
<span class="hljs-keyword">const</span> f = <span class="hljs-keyword">new</span> F();
R.toPairsIn(f); <span class="hljs-comment">//=&gt; [['x','X'], ['y','Y']]</span></code></pre>
        </section>
        <div id="toString" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#toString">toString</a>
                <span class="pull-right">
                        <span class="label label-category">String</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/toString.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>* → String</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">val</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">String</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.14.0</small></p>

            <div class="description"><p>Returns the string representation of the given value. <code>eval</code>'ing the output
should result in a value equivalent to the input value. Many of the built-in
<code>toString</code> methods do not satisfy this requirement.</p>
<p>If the given value is an <code>[object Object]</code> with a <code>toString</code> method other
than <code>Object.prototype.toString</code>, this method is invoked with no arguments
to produce the return value. This means user-defined constructor functions
can provide a suitable <code>toString</code> method. For example:</p>
<pre><code>function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return 'new Point(' + this.x + ', ' + this.y + ')';
};

R.toString(new Point(1, 2)); //=&gt; 'new Point(1, 2)'
</code></pre></div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.toString(<span class="hljs-number">42</span>); <span class="hljs-comment">//=&gt; '42'</span>
R.toString(<span class="hljs-string">'abc'</span>); <span class="hljs-comment">//=&gt; '"abc"'</span>
R.toString([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]); <span class="hljs-comment">//=&gt; '[1, 2, 3]'</span>
R.toString({<span class="hljs-attr">foo</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">bar</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">baz</span>: <span class="hljs-number">3</span>}); <span class="hljs-comment">//=&gt; '{"bar": 2, "baz": 3, "foo": 1}'</span>
R.toString(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(<span class="hljs-string">'2001-02-03T04:05:06Z'</span>)); <span class="hljs-comment">//=&gt; 'new Date("2001-02-03T04:05:06.000Z")'</span></code></pre>
        </section>
        <div id="toUpper" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#toUpper">toUpper</a>
                <span class="pull-right">
                        <span class="label label-category">String</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/toUpper.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>String → String</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">str</span>
                            <span class="description"><p>The string to upper case.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">String</span>
                        <span class="description">The upper case version of 'str'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.9.0</small></p>

            <div class="description"><p>The upper case version of a string.</p>
</div>



            <div class="see">
                See also
                <a href="#toLower">toLower</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.toUpper(<span class="hljs-string">'abc'</span>); <span class="hljs-comment">//=&gt; 'ABC'</span></code></pre>
        </section>
        <div id="transduce" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#transduce">transduce</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/transduce.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(c → c) → ((a, b) → a) → a → [b] → a</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">xf</span>
                            <span class="description"><p>The transducer function. Receives a transformer and returns a transformer.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The iterator function. Receives two values, the accumulator and the
       current element from the array. Wrapped as transformer, if necessary, and used to
       initialize the transducer</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">acc</span>
                            <span class="description"><p>The initial accumulator value.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The list to iterate over.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description">The final, accumulated value.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.12.0</small></p>

            <div class="description"><p>Initializes a transducer using supplied iterator function. Returns a single
item by iterating through the list, successively calling the transformed
iterator function and passing it an accumulator value and the current value
from the array, and then passing the result to the next call.</p>
<p>The iterator function receives two values: <em>(acc, value)</em>. It will be
wrapped as a transformer to initialize the transducer. A transformer can be
passed directly in place of an iterator function. In both cases, iteration
may be stopped early with the <a href="#reduced"><code>R.reduced</code></a> function.</p>
<p>A transducer is a function that accepts a transformer and returns a
transformer and can be composed directly.</p>
<p>A transformer is an an object that provides a 2-arity reducing iterator
function, step, 0-arity initial value function, init, and 1-arity result
extraction function, result. The step function is used as the iterator
function in reduce. The result function is used to convert the final
accumulator into the return type and in most cases is
<a href="#identity"><code>R.identity</code></a>. The init function can be used to provide an
initial accumulator, but is ignored by transduce.</p>
<p>The iteration is performed with <a href="#reduce"><code>R.reduce</code></a> after initializing the transducer.</p>
</div>



            <div class="see">
                See also
                <a href="#reduce">reduce</a>,
                <a href="#reduced">reduced</a>,
                <a href="#into">into</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> numbers = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>];
<span class="hljs-keyword">const</span> transducer = R.compose(R.map(R.add(<span class="hljs-number">1</span>)), R.take(<span class="hljs-number">2</span>));
R.transduce(transducer, R.flip(R.append), [], numbers); <span class="hljs-comment">//=&gt; [2, 3]</span>

<span class="hljs-keyword">const</span> isOdd = <span class="hljs-function">(<span class="hljs-params">x</span>) =&gt;</span> x % <span class="hljs-number">2</span> === <span class="hljs-number">1</span>;
<span class="hljs-keyword">const</span> firstOddTransducer = R.compose(R.filter(isOdd), R.take(<span class="hljs-number">1</span>));
R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(<span class="hljs-number">0</span>, <span class="hljs-number">100</span>)); <span class="hljs-comment">//=&gt; [1]</span></code></pre>
        </section>
        <div id="transpose" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#transpose">transpose</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/transpose.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[[a]] → [[a]]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>A 2D list</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">A 2D list</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.19.0</small></p>

            <div class="description"><p>Transposes the rows and columns of a 2D list.
When passed a list of <code>n</code> lists of length <code>x</code>,
returns a list of <code>x</code> lists of length <code>n</code>.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.transpose([[<span class="hljs-number">1</span>, <span class="hljs-string">'a'</span>], [<span class="hljs-number">2</span>, <span class="hljs-string">'b'</span>], [<span class="hljs-number">3</span>, <span class="hljs-string">'c'</span>]]) <span class="hljs-comment">//=&gt; [[1, 2, 3], ['a', 'b', 'c']]</span>
R.transpose([[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>], [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>]]) <span class="hljs-comment">//=&gt; [[1, 'a'], [2, 'b'], [3, 'c']]</span>

<span class="hljs-comment">// If some of the rows are shorter than the following rows, their elements are skipped:</span>
R.transpose([[<span class="hljs-number">10</span>, <span class="hljs-number">11</span>], [<span class="hljs-number">20</span>], [], [<span class="hljs-number">30</span>, <span class="hljs-number">31</span>, <span class="hljs-number">32</span>]]) <span class="hljs-comment">//=&gt; [[10, 20, 30], [11, 31], [32]]</span></code></pre>
        </section>
        <div id="traverse" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#traverse">traverse</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/traverse.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(Applicative f, Traversable t) =&gt; (a → f a) → (a → f b) → t a → f (t b)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">of</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">f</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">traversable</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.19.0</small></p>

            <div class="description"><p>Maps an <a href="https://github.com/fantasyland/fantasy-land#applicative">Applicative</a>-returning
function over a <a href="https://github.com/fantasyland/fantasy-land#traversable">Traversable</a>,
then uses <a href="#sequence"><code>sequence</code></a> to transform the resulting Traversable of Applicative
into an Applicative of Traversable.</p>
<p>Dispatches to the <code>traverse</code> method of the third argument, if present.</p>
</div>



            <div class="see">
                See also
                <a href="#sequence">sequence</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-comment">// Returns 'Maybe.Nothing' if the given divisor is '0'</span>
<span class="hljs-keyword">const</span> safeDiv = <span class="hljs-function"><span class="hljs-params">n</span> =&gt;</span> d =&gt; d === <span class="hljs-number">0</span> ? Maybe.Nothing() : Maybe.Just(n / d)

R.traverse(Maybe.of, safeDiv(<span class="hljs-number">10</span>), [<span class="hljs-number">2</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>]); <span class="hljs-comment">//=&gt; Maybe.Just([5, 2.5, 2])</span>
R.traverse(Maybe.of, safeDiv(<span class="hljs-number">10</span>), [<span class="hljs-number">2</span>, <span class="hljs-number">0</span>, <span class="hljs-number">5</span>]); <span class="hljs-comment">//=&gt; Maybe.Nothing</span></code></pre>
        </section>
        <div id="trim" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#trim">trim</a>
                <span class="pull-right">
                        <span class="label label-category">String</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/trim.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>String → String</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">str</span>
                            <span class="description"><p>The string to trim.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">String</span>
                        <span class="description">Trimmed version of 'str'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.6.0</small></p>

            <div class="description"><p>Removes (strips) whitespace from both ends of the string.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.trim(<span class="hljs-string">'   xyz  '</span>); <span class="hljs-comment">//=&gt; 'xyz'</span>
R.map(R.trim, R.split(<span class="hljs-string">','</span>, <span class="hljs-string">'x, y, z'</span>)); <span class="hljs-comment">//=&gt; ['x', 'y', 'z']</span></code></pre>
        </section>
        <div id="tryCatch" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#tryCatch">tryCatch</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/tryCatch.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(…x → a) → ((e, …x) → a) → (…x → a)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">tryer</span>
                            <span class="description"><p>The function that may throw.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">catcher</span>
                            <span class="description"><p>The function that will be evaluated if <code>tryer</code> throws.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">A new function that will catch exceptions and send then to the catcher.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.20.0</small></p>

            <div class="description"><p><code>tryCatch</code> takes two functions, a <code>tryer</code> and a <code>catcher</code>. The returned
function evaluates the <code>tryer</code>; if it does not throw, it simply returns the
result. If the <code>tryer</code> <em>does</em> throw, the returned function evaluates the
<code>catcher</code> function and returns its result. Note that for effective
composition with this function, both the <code>tryer</code> and <code>catcher</code> functions
must return the same type of results.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.tryCatch(R.prop(<span class="hljs-string">'x'</span>), R.F)({<span class="hljs-attr">x</span>: <span class="hljs-literal">true</span>}); <span class="hljs-comment">//=&gt; true</span>
R.tryCatch(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> { <span class="hljs-keyword">throw</span> <span class="hljs-string">'foo'</span>}, R.always(<span class="hljs-string">'catched'</span>))(<span class="hljs-string">'bar'</span>) <span class="hljs-comment">// =&gt; 'catched'</span>
R.tryCatch(R.times(R.identity), R.always([]))(<span class="hljs-string">'s'</span>) <span class="hljs-comment">// =&gt; []</span>
R.tryCatch(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> { <span class="hljs-keyword">throw</span> <span class="hljs-string">'this is not a valid value'</span>}, (err, value)=&gt;({<span class="hljs-attr">error</span> : err,  value }))(<span class="hljs-string">'bar'</span>) <span class="hljs-comment">// =&gt; {'error': 'this is not a valid value', 'value': 'bar'}</span></code></pre>
        </section>
        <div id="type" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#type">type</a>
                <span class="pull-right">
                        <span class="label label-category">Type</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/type.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(* → {*}) → String</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">val</span>
                            <span class="description"><p>The value to test</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">String</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.8.0</small></p>

            <div class="description"><p>Gives a single-word string description of the (native) type of a value,
returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
attempt to distinguish user Object types any further, reporting them all as
'Object'.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.type({}); <span class="hljs-comment">//=&gt; "Object"</span>
R.type(<span class="hljs-number">1</span>); <span class="hljs-comment">//=&gt; "Number"</span>
R.type(<span class="hljs-literal">false</span>); <span class="hljs-comment">//=&gt; "Boolean"</span>
R.type(<span class="hljs-string">'s'</span>); <span class="hljs-comment">//=&gt; "String"</span>
R.type(<span class="hljs-literal">null</span>); <span class="hljs-comment">//=&gt; "Null"</span>
R.type([]); <span class="hljs-comment">//=&gt; "Array"</span>
R.type(<span class="hljs-regexp">/[A-z]/</span>); <span class="hljs-comment">//=&gt; "RegExp"</span>
R.type(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {}); <span class="hljs-comment">//=&gt; "Function"</span>
R.type(<span class="hljs-literal">undefined</span>); <span class="hljs-comment">//=&gt; "Undefined"</span></code></pre>
        </section>
        <div id="unapply" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#unapply">unapply</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/unapply.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>([*…] → a) → (*… → a)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.8.0</small></p>

            <div class="description"><p>Takes a function <code>fn</code>, which takes a single array argument, and returns a
function which:</p>
<ul>
<li>takes any number of positional arguments;</li>
<li>passes these arguments to <code>fn</code> as an array; and</li>
<li>returns the result.</li>
</ul>
<p>In other words, <code>R.unapply</code> derives a variadic function from a function which
takes an array. <code>R.unapply</code> is the inverse of <a href="#apply"><code>R.apply</code></a>.</p>
</div>



            <div class="see">
                See also
                <a href="#apply">apply</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.unapply(<span class="hljs-built_in">JSON</span>.stringify)(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">//=&gt; '[1,2,3]'</span></code></pre>
        </section>
        <div id="unary" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#unary">unary</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/unary.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(* → b) → (a → b)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function to wrap.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">A new function wrapping 'fn'. The new function is guaranteed to be of
        arity 1.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.2.0</small></p>

            <div class="description"><p>Wraps a function of any arity (including nullary) in a function that accepts
exactly 1 parameter. Any extraneous parameters will not be passed to the
supplied function.</p>
</div>



            <div class="see">
                See also
                <a href="#binary">binary</a>,
                <a href="#nAry">nAry</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> takesTwoArgs = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">a, b</span>) </span>{
  <span class="hljs-keyword">return</span> [a, b];
};
takesTwoArgs.length; <span class="hljs-comment">//=&gt; 2</span>
takesTwoArgs(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>); <span class="hljs-comment">//=&gt; [1, 2]</span>

<span class="hljs-keyword">const</span> takesOneArg = R.unary(takesTwoArgs);
takesOneArg.length; <span class="hljs-comment">//=&gt; 1</span>
<span class="hljs-comment">// Only 1 argument is passed to the wrapped function</span>
takesOneArg(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>); <span class="hljs-comment">//=&gt; [1, undefined]</span></code></pre>
        </section>
        <div id="uncurryN" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#uncurryN">uncurryN</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/uncurryN.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → (a → b) → (a → c)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">length</span>
                            <span class="description"><p>The arity for the returned function.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function to uncurry.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">A new function.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.14.0</small></p>

            <div class="description"><p>Returns a function of arity <code>n</code> from a (manually) curried function.</p>
</div>



            <div class="see">
                See also
                <a href="#curry">curry</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> addFour = <span class="hljs-function"><span class="hljs-params">a</span> =&gt;</span> b =&gt; <span class="hljs-function"><span class="hljs-params">c</span> =&gt;</span> d =&gt; a + b + c + d;

<span class="hljs-keyword">const</span> uncurriedAddFour = R.uncurryN(<span class="hljs-number">4</span>, addFour);
uncurriedAddFour(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>); <span class="hljs-comment">//=&gt; 10</span></code></pre>
        </section>
        <div id="unfold" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#unfold">unfold</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/unfold.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(a → [b]) → * → [b]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The iterator function. receives one argument, <code>seed</code>, and returns
       either false to quit iteration or an array of length two to proceed. The element
       at index 0 of this array will be added to the resulting array, and the element
       at index 1 will be passed to the next call to <code>fn</code>.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">seed</span>
                            <span class="description"><p>The seed value.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">The final list.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.10.0</small></p>

            <div class="description"><p>Builds a list from a seed value. Accepts an iterator function, which returns
either false to stop iteration or an array of length 2 containing the value
to add to the resulting list and the seed to be used in the next call to the
iterator function.</p>
<p>The iterator function receives one argument: <em>(seed)</em>.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> f = <span class="hljs-function"><span class="hljs-params">n</span> =&gt;</span> n &gt; <span class="hljs-number">50</span> ? <span class="hljs-literal">false</span> : [-n, n + <span class="hljs-number">10</span>];
R.unfold(f, <span class="hljs-number">10</span>); <span class="hljs-comment">//=&gt; [-10, -20, -30, -40, -50]</span></code></pre>
        </section>
        <div id="union" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#union">union</a>
                <span class="pull-right">
                        <span class="label label-category">Relation</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/union.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[*] → [*] → [*]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">as</span>
                            <span class="description"><p>The first list.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">bs</span>
                            <span class="description"><p>The second list.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">The first and second lists concatenated, with
        duplicates removed.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Combines two lists into a set (i.e. no duplicates) composed of the elements
of each list.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.union([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>], [<span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>]); <span class="hljs-comment">//=&gt; [1, 2, 3, 4]</span></code></pre>
        </section>
        <div id="unionWith" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#unionWith">unionWith</a>
                <span class="pull-right">
                        <span class="label label-category">Relation</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/unionWith.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((a, a) → Boolean) → [*] → [*] → [*]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">pred</span>
                            <span class="description"><p>A predicate used to test whether two items are equal.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list1</span>
                            <span class="description"><p>The first list.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list2</span>
                            <span class="description"><p>The second list.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">The first and second lists concatenated, with
        duplicates removed.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Combines two lists into a set (i.e. no duplicates) composed of the elements
of each list. Duplication is determined according to the value returned by
applying the supplied predicate to two list elements.</p>
</div>



            <div class="see">
                See also
                <a href="#union">union</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> l1 = [{<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>}, {<span class="hljs-attr">a</span>: <span class="hljs-number">2</span>}];
<span class="hljs-keyword">const</span> l2 = [{<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>}, {<span class="hljs-attr">a</span>: <span class="hljs-number">4</span>}];
R.unionWith(R.eqBy(R.prop(<span class="hljs-string">'a'</span>)), l1, l2); <span class="hljs-comment">//=&gt; [{a: 1}, {a: 2}, {a: 4}]</span></code></pre>
        </section>
        <div id="uniq" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#uniq">uniq</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/uniq.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[a] → [a]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The array to consider.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">The list of unique items.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns a new list containing only one copy of each element in the original
list. <a href="#equals"><code>R.equals</code></a> is used to determine equality.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.uniq([<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">1</span>]); <span class="hljs-comment">//=&gt; [1, 2]</span>
R.uniq([<span class="hljs-number">1</span>, <span class="hljs-string">'1'</span>]);     <span class="hljs-comment">//=&gt; [1, '1']</span>
R.uniq([[<span class="hljs-number">42</span>], [<span class="hljs-number">42</span>]]); <span class="hljs-comment">//=&gt; [[42]]</span></code></pre>
        </section>
        <div id="uniqBy" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#uniqBy">uniqBy</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/uniqBy.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(a → b) → [a] → [a]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>A function used to produce a value to use during comparisons.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The array to consider.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">The list of unique items.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.16.0</small></p>

            <div class="description"><p>Returns a new list containing only one copy of each element in the original
list, based upon the value returned by applying the supplied function to
each list element. Prefers the first item if the supplied function produces
the same value on two items. <a href="#equals"><code>R.equals</code></a> is used for comparison.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.uniqBy(<span class="hljs-built_in">Math</span>.abs, [<span class="hljs-number">-1</span>, <span class="hljs-number">-5</span>, <span class="hljs-number">2</span>, <span class="hljs-number">10</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>]); <span class="hljs-comment">//=&gt; [-1, -5, 2, 10]</span></code></pre>
        </section>
        <div id="uniqWith" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#uniqWith">uniqWith</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/uniqWith.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((a, a) → Boolean) → [a] → [a]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">pred</span>
                            <span class="description"><p>A predicate used to test whether two items are equal.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The array to consider.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">The list of unique items.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.2.0</small></p>

            <div class="description"><p>Returns a new list containing only one copy of each element in the original
list, based upon the value returned by applying the supplied predicate to
two list elements. Prefers the first item if two items compare equal based
on the predicate.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> strEq = R.eqBy(<span class="hljs-built_in">String</span>);
R.uniqWith(strEq)([<span class="hljs-number">1</span>, <span class="hljs-string">'1'</span>, <span class="hljs-number">2</span>, <span class="hljs-number">1</span>]); <span class="hljs-comment">//=&gt; [1, 2]</span>
R.uniqWith(strEq)([{}, {}]);       <span class="hljs-comment">//=&gt; [{}]</span>
R.uniqWith(strEq)([<span class="hljs-number">1</span>, <span class="hljs-string">'1'</span>, <span class="hljs-number">1</span>]);    <span class="hljs-comment">//=&gt; [1]</span>
R.uniqWith(strEq)([<span class="hljs-string">'1'</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>]);    <span class="hljs-comment">//=&gt; ['1']</span></code></pre>
        </section>
        <div id="unless" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#unless">unless</a>
                <span class="pull-right">
                        <span class="label label-category">Logic</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/unless.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(a → Boolean) → (a → a) → a → a</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">pred</span>
                            <span class="description"><p>A predicate function</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">whenFalseFn</span>
                            <span class="description"><p>A function to invoke when the <code>pred</code> evaluates
                              to a falsy value.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">x</span>
                            <span class="description"><p>An object to test with the <code>pred</code> function and
                              pass to <code>whenFalseFn</code> if necessary.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description">Either 'x' or the result of applying 'x' to 'whenFalseFn'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.18.0</small></p>

            <div class="description"><p>Tests the final argument by passing it to the given predicate function. If
the predicate is not satisfied, the function will return the result of
calling the <code>whenFalseFn</code> function with the same argument. If the predicate
is satisfied, the argument is returned as is.</p>
</div>



            <div class="see">
                See also
                <a href="#ifElse">ifElse</a>,
                <a href="#when">when</a>,
                <a href="#cond">cond</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">let</span> safeInc = R.unless(R.isNil, R.inc);
safeInc(<span class="hljs-literal">null</span>); <span class="hljs-comment">//=&gt; null</span>
safeInc(<span class="hljs-number">1</span>); <span class="hljs-comment">//=&gt; 2</span></code></pre>
        </section>
        <div id="unnest" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#unnest">unnest</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/unnest.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Chain c =&gt; c (c a) → c a</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.3.0</small></p>

            <div class="description"><p>Shorthand for <code>R.chain(R.identity)</code>, which removes one level of nesting from
any <a href="https://github.com/fantasyland/fantasy-land#chain">Chain</a>.</p>
</div>



            <div class="see">
                See also
                <a href="#flatten">flatten</a>,
                <a href="#chain">chain</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.unnest([<span class="hljs-number">1</span>, [<span class="hljs-number">2</span>], [[<span class="hljs-number">3</span>]]]); <span class="hljs-comment">//=&gt; [1, 2, [3]]</span>
R.unnest([[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>], [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>], [<span class="hljs-number">5</span>, <span class="hljs-number">6</span>]]); <span class="hljs-comment">//=&gt; [1, 2, 3, 4, 5, 6]</span></code></pre>
        </section>
        <div id="until" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#until">until</a>
                <span class="pull-right">
                        <span class="label label-category">Logic</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/until.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(a → Boolean) → (a → a) → a → a</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">pred</span>
                            <span class="description"><p>A predicate function</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The iterator function</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">init</span>
                            <span class="description"><p>Initial value</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description">Final value that satisfies predicate</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.20.0</small></p>

            <div class="description"><p>Takes a predicate, a transformation function, and an initial value,
and returns a value of the same type as the initial value.
It does so by applying the transformation until the predicate is satisfied,
at which point it returns the satisfactory value.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.until(R.gt(R.__, <span class="hljs-number">100</span>), R.multiply(<span class="hljs-number">2</span>))(<span class="hljs-number">1</span>) <span class="hljs-comment">// =&gt; 128</span></code></pre>
        </section>
        <div id="update" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#update">update</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/update.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Number → a → [a] → [a]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">idx</span>
                            <span class="description"><p>The index to update.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">x</span>
                            <span class="description"><p>The value to exist at the given index of the returned array.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list</span>
                            <span class="description"><p>The source array-like object to be updated.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">A copy of 'list' with the value at index 'idx' replaced with 'x'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.14.0</small></p>

            <div class="description"><p>Returns a new copy of the array with the element at the provided index
replaced with the given value.</p>
</div>



            <div class="see">
                See also
                <a href="#adjust">adjust</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.update(<span class="hljs-number">1</span>, <span class="hljs-string">'_'</span>, [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>]);      <span class="hljs-comment">//=&gt; ['a', '_', 'c']</span>
R.update(<span class="hljs-number">-1</span>, <span class="hljs-string">'_'</span>, [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>]);     <span class="hljs-comment">//=&gt; ['a', 'b', '_']</span></code></pre>
        </section>
        <div id="useWith" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#useWith">useWith</a>
                <span class="pull-right">
                        <span class="label label-category">Function</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/useWith.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((x1, x2, …) → z) → [(a → x1), (b → x2), …] → (a → b → … → z)</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function to wrap.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">transformers</span>
                            <span class="description"><p>A list of transformer functions</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">function</span>
                        <span class="description">The wrapped function.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Accepts a function <code>fn</code> and a list of transformer functions and returns a
new curried function. When the new function is invoked, it calls the
function <code>fn</code> with parameters consisting of the result of calling each
supplied handler on successive arguments to the new function.</p>
<p>If more arguments are passed to the returned function than transformer
functions, those arguments are passed directly to <code>fn</code> as additional
parameters. If you expect additional arguments that don't need to be
transformed, although you can ignore them, it's best to pass an identity
function so that the new function reports the correct arity.</p>
</div>



            <div class="see">
                See also
                <a href="#converge">converge</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.useWith(<span class="hljs-built_in">Math</span>.pow, [R.identity, R.identity])(<span class="hljs-number">3</span>, <span class="hljs-number">4</span>); <span class="hljs-comment">//=&gt; 81</span>
R.useWith(<span class="hljs-built_in">Math</span>.pow, [R.identity, R.identity])(<span class="hljs-number">3</span>)(<span class="hljs-number">4</span>); <span class="hljs-comment">//=&gt; 81</span>
R.useWith(<span class="hljs-built_in">Math</span>.pow, [R.dec, R.inc])(<span class="hljs-number">3</span>, <span class="hljs-number">4</span>); <span class="hljs-comment">//=&gt; 32</span>
R.useWith(<span class="hljs-built_in">Math</span>.pow, [R.dec, R.inc])(<span class="hljs-number">3</span>)(<span class="hljs-number">4</span>); <span class="hljs-comment">//=&gt; 32</span></code></pre>
        </section>
        <div id="values" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#values">values</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/values.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>{k: v} → [v]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"><p>The object to extract values from</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">An array of the values of the object's own properties.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Returns a list of all the enumerable own properties of the supplied object.
Note that the order of the output array is not guaranteed across different
JS platforms.</p>
</div>



            <div class="see">
                See also
                <a href="#valuesIn">valuesIn</a>,
                <a href="#keys">keys</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.values({<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">c</span>: <span class="hljs-number">3</span>}); <span class="hljs-comment">//=&gt; [1, 2, 3]</span></code></pre>
        </section>
        <div id="valuesIn" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#valuesIn">valuesIn</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/valuesIn.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>{k: v} → [v]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">obj</span>
                            <span class="description"><p>The object to extract values from</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">An array of the values of the object's own and prototype properties.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.2.0</small></p>

            <div class="description"><p>Returns a list of all the properties, including prototype properties, of the
supplied object.
Note that the order of the output array is not guaranteed to be consistent
across different JS platforms.</p>
</div>



            <div class="see">
                See also
                <a href="#values">values</a>,
                <a href="#keysIn">keysIn</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> F = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{ <span class="hljs-keyword">this</span>.x = <span class="hljs-string">'X'</span>; };
F.prototype.y = <span class="hljs-string">'Y'</span>;
<span class="hljs-keyword">const</span> f = <span class="hljs-keyword">new</span> F();
R.valuesIn(f); <span class="hljs-comment">//=&gt; ['X', 'Y']</span></code></pre>
        </section>
        <div id="view" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#view">view</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/view.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>Lens s a → s → a</code></div>

            <div><code>Lens s a = Functor f =&gt; (a → f a) → s → f s</code></div>

            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">lens</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">x</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.16.0</small></p>

            <div class="description"><p>Returns a "view" of the given data structure, determined by the given lens.
The lens's focus determines which portion of the data structure is visible.</p>
</div>



            <div class="see">
                See also
                <a href="#prop">prop</a>,
                <a href="#lensIndex">lensIndex</a>,
                <a href="#lensProp">lensProp</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> xLens = R.lensProp(<span class="hljs-string">'x'</span>);

R.view(xLens, {<span class="hljs-attr">x</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">2</span>});  <span class="hljs-comment">//=&gt; 1</span>
R.view(xLens, {<span class="hljs-attr">x</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">2</span>});  <span class="hljs-comment">//=&gt; 4</span></code></pre>
        </section>
        <div id="when" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#when">when</a>
                <span class="pull-right">
                        <span class="label label-category">Logic</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/when.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>(a → Boolean) → (a → a) → a → a</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">pred</span>
                            <span class="description"><p>A predicate function</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">whenTrueFn</span>
                            <span class="description"><p>A function to invoke when the <code>condition</code>
                             evaluates to a truthy value.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">x</span>
                            <span class="description"><p>An object to test with the <code>pred</code> function and
                             pass to <code>whenTrueFn</code> if necessary.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">*</span>
                        <span class="description">Either 'x' or the result of applying 'x' to 'whenTrueFn'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.18.0</small></p>

            <div class="description"><p>Tests the final argument by passing it to the given predicate function. If
the predicate is satisfied, the function will return the result of calling
the <code>whenTrueFn</code> function with the same argument. If the predicate is not
satisfied, the argument is returned as is.</p>
</div>



            <div class="see">
                See also
                <a href="#ifElse">ifElse</a>,
                <a href="#unless">unless</a>,
                <a href="#cond">cond</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-comment">// truncate :: String -&gt; String</span>
<span class="hljs-keyword">const</span> truncate = R.when(
  R.propSatisfies(R.gt(R.__, <span class="hljs-number">10</span>), <span class="hljs-string">'length'</span>),
  R.pipe(R.take(<span class="hljs-number">10</span>), R.append(<span class="hljs-string">'…'</span>), R.join(<span class="hljs-string">''</span>))
);
truncate(<span class="hljs-string">'12345'</span>);         <span class="hljs-comment">//=&gt; '12345'</span>
truncate(<span class="hljs-string">'0123456789ABC'</span>); <span class="hljs-comment">//=&gt; '0123456789…'</span></code></pre>
        </section>
        <div id="where" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#where">where</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/where.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>{String: (* → Boolean)} → {String: *} → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">spec</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">testObj</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.1</small></p>

            <div class="description"><p>Takes a spec object and a test object; returns true if the test satisfies
the spec. Each of the spec's own properties must be a predicate function.
Each predicate is applied to the value of the corresponding property of the
test object. <code>where</code> returns true if all the predicates return true, false
otherwise.</p>
<p><code>where</code> is well suited to declaratively expressing constraints for other
functions such as <a href="#filter"><code>filter</code></a> and <a href="#find"><code>find</code></a>.</p>
</div>



            <div class="see">
                See also
                <a href="#propSatisfies">propSatisfies</a>,
                <a href="#whereEq">whereEq</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-comment">// pred :: Object -&gt; Boolean</span>
<span class="hljs-keyword">const</span> pred = R.where({
  <span class="hljs-attr">a</span>: R.equals(<span class="hljs-string">'foo'</span>),
  <span class="hljs-attr">b</span>: R.complement(R.equals(<span class="hljs-string">'bar'</span>)),
  <span class="hljs-attr">x</span>: R.gt(R.__, <span class="hljs-number">10</span>),
  <span class="hljs-attr">y</span>: R.lt(R.__, <span class="hljs-number">20</span>)
});

pred({<span class="hljs-attr">a</span>: <span class="hljs-string">'foo'</span>, <span class="hljs-attr">b</span>: <span class="hljs-string">'xxx'</span>, <span class="hljs-attr">x</span>: <span class="hljs-number">11</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">19</span>}); <span class="hljs-comment">//=&gt; true</span>
pred({<span class="hljs-attr">a</span>: <span class="hljs-string">'xxx'</span>, <span class="hljs-attr">b</span>: <span class="hljs-string">'xxx'</span>, <span class="hljs-attr">x</span>: <span class="hljs-number">11</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">19</span>}); <span class="hljs-comment">//=&gt; false</span>
pred({<span class="hljs-attr">a</span>: <span class="hljs-string">'foo'</span>, <span class="hljs-attr">b</span>: <span class="hljs-string">'bar'</span>, <span class="hljs-attr">x</span>: <span class="hljs-number">11</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">19</span>}); <span class="hljs-comment">//=&gt; false</span>
pred({<span class="hljs-attr">a</span>: <span class="hljs-string">'foo'</span>, <span class="hljs-attr">b</span>: <span class="hljs-string">'xxx'</span>, <span class="hljs-attr">x</span>: <span class="hljs-number">10</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">19</span>}); <span class="hljs-comment">//=&gt; false</span>
pred({<span class="hljs-attr">a</span>: <span class="hljs-string">'foo'</span>, <span class="hljs-attr">b</span>: <span class="hljs-string">'xxx'</span>, <span class="hljs-attr">x</span>: <span class="hljs-number">11</span>, <span class="hljs-attr">y</span>: <span class="hljs-number">20</span>}); <span class="hljs-comment">//=&gt; false</span></code></pre>
        </section>
        <div id="whereEq" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#whereEq">whereEq</a>
                <span class="pull-right">
                        <span class="label label-category">Object</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/whereEq.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>{String: *} → {String: *} → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">spec</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">testObj</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description"></span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.14.0</small></p>

            <div class="description"><p>Takes a spec object and a test object; returns true if the test satisfies
the spec, false otherwise. An object satisfies the spec if, for each of the
spec's own properties, accessing that property of the object gives the same
value (in <a href="#equals"><code>R.equals</code></a> terms) as accessing that property of the
spec.</p>
<p><code>whereEq</code> is a specialization of <a href="#where"><code>where</code></a>.</p>
</div>



            <div class="see">
                See also
                <a href="#propEq">propEq</a>,
                <a href="#where">where</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-comment">// pred :: Object -&gt; Boolean</span>
<span class="hljs-keyword">const</span> pred = R.whereEq({<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>});

pred({<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>});              <span class="hljs-comment">//=&gt; false</span>
pred({<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>});        <span class="hljs-comment">//=&gt; true</span>
pred({<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">b</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">c</span>: <span class="hljs-number">3</span>});  <span class="hljs-comment">//=&gt; true</span>
pred({<span class="hljs-attr">a</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">b</span>: <span class="hljs-number">1</span>});        <span class="hljs-comment">//=&gt; false</span></code></pre>
        </section>
        <div id="without" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#without">without</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/without.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[a] → [a] → [a]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list1</span>
                            <span class="description"><p>The values to be removed from <code>list2</code>.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list2</span>
                            <span class="description"><p>The array to remove values from.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">The new array without values in 'list1'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.19.0</small></p>

            <div class="description"><p>Returns a new list without values in the first argument.
<a href="#equals"><code>R.equals</code></a> is used to determine equality.</p>
<p>Acts as a transducer if a transformer is given in list position.</p>
</div>



            <div class="see">
                See also
                <a href="#transduce">transduce</a>,
                <a href="#difference">difference</a>,
                <a href="#remove">remove</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.without([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>], [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>]); <span class="hljs-comment">//=&gt; [3, 4]</span></code></pre>
        </section>
        <div id="xor" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#xor">xor</a>
                <span class="pull-right">
                        <span class="label label-category">Logic</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/xor.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>a → b → Boolean</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">a</span>
                            <span class="description"></span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">b</span>
                            <span class="description"></span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Boolean</span>
                        <span class="description">true if one of the arguments is truthy and the other is falsy</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.27.0</small></p>

            <div class="description"><p>Exclusive disjunction logical operation.
Returns <code>true</code> if one of the arguments is truthy and the other is falsy.
Otherwise, it returns <code>false</code>.</p>
</div>



            <div class="see">
                See also
                <a href="#or">or</a>,
                <a href="#and">and</a>.
            </div>

	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.xor(<span class="hljs-literal">true</span>, <span class="hljs-literal">true</span>); <span class="hljs-comment">//=&gt; false</span>
R.xor(<span class="hljs-literal">true</span>, <span class="hljs-literal">false</span>); <span class="hljs-comment">//=&gt; true</span>
R.xor(<span class="hljs-literal">false</span>, <span class="hljs-literal">true</span>); <span class="hljs-comment">//=&gt; true</span>
R.xor(<span class="hljs-literal">false</span>, <span class="hljs-literal">false</span>); <span class="hljs-comment">//=&gt; false</span></code></pre>
        </section>
        <div id="xprod" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#xprod">xprod</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/xprod.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[a] → [b] → [[a,b]]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">as</span>
                            <span class="description"><p>The first list.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">bs</span>
                            <span class="description"><p>The second list.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">The list made by combining each possible pair from
        'as' and 'bs' into pairs ('[a, b]').</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Creates a new list out of the two supplied by creating each possible pair
from the lists.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.xprod([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>], [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>]); <span class="hljs-comment">//=&gt; [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]</span></code></pre>
        </section>
        <div id="zip" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#zip">zip</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/zip.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[a] → [b] → [[a,b]]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list1</span>
                            <span class="description"><p>The first array to consider.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list2</span>
                            <span class="description"><p>The second array to consider.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">The list made by pairing up same-indexed elements of 'list1' and 'list2'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Creates a new list out of the two supplied by pairing up equally-positioned
items from both lists. The returned list is truncated to the length of the
shorter of the two input lists.
Note: <code>zip</code> is equivalent to <code>zipWith(function(a, b) { return [a, b] })</code>.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.zip([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>], [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>]); <span class="hljs-comment">//=&gt; [[1, 'a'], [2, 'b'], [3, 'c']]</span></code></pre>
        </section>
        <div id="zipObj" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#zipObj">zipObj</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/zipObj.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>[String] → [*] → {String: *}</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">keys</span>
                            <span class="description"><p>The array that will be properties on the output object.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">values</span>
                            <span class="description"><p>The list of values on the output object.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Object</span>
                        <span class="description">The object made by pairing up same-indexed elements of 'keys' and 'values'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.3.0</small></p>

            <div class="description"><p>Creates a new object out of a list of keys and a list of values.
Key/value pairing is truncated to the length of the shorter of the two lists.
Note: <code>zipObj</code> is equivalent to <code>pipe(zip, fromPairs)</code>.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript">R.zipObj([<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>], [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]); <span class="hljs-comment">//=&gt; {a: 1, b: 2, c: 3}</span></code></pre>
        </section>
        <div id="zipWith" class="section-id"></div>
        <section class="card">
            <h2>
                <a tabindex="2" class="name" href="#zipWith">zipWith</a>
                <span class="pull-right">
                        <span class="label label-category">List</span>
                        <a target="_blank" title="View source on GitHub" href="https://github.com/ramda/ramda/tree/v0.27.0/source/zipWith.js"><small class="glyphicon glyphicon-new-window"></small></a>
                </span>
            </h2>


            <div><code>((a, b) → c) → [a] → [b] → [c]</code></div>


            <div class="params" data-expanded="false">
                <a href="#expand" class="toggle-params">Parameters</a>
                <div class="details panel panel-default">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">fn</span>
                            <span class="description"><p>The function used to combine the two elements into one value.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list1</span>
                            <span class="description"><p>The first array to consider.</p>
</span>
                        </li>
                        <li class="list-group-item">
                            <span class="type">
                            </span>
                            <span class="name">list2</span>
                            <span class="description"><p>The second array to consider.</p>
</span>
                        </li>
                    </ul>
                    <div class="panel-body">
                        <span class="returns">Returns</span>
                        <span class="type">Array</span>
                        <span class="description">The list made by combining same-indexed elements of 'list1' and 'list2'
        using 'fn'.</span>
                    </div>
                </div>
            </div>

            <p><small>Added in v0.1.0</small></p>

            <div class="description"><p>Creates a new list out of the two supplied by applying the function to each
equally-positioned pair in the lists. The returned list is truncated to the
length of the shorter of the two input lists.</p>
</div>




	    <pre><div class="try-repl"><button class="send-repl" data-ramda-version="0.27.0">Open in REPL</button><button class="run-here" data-ramda-version="0.27.0">Run it here</button></div><code class="hljs javascript"><span class="hljs-keyword">const</span> f = <span class="hljs-function">(<span class="hljs-params">x, y</span>) =&gt;</span> {
  <span class="hljs-comment">// ...</span>
};
R.zipWith(f, [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>], [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>]);
<span class="hljs-comment">//=&gt; [f(1, 'a'), f(2, 'b'), f(3, 'c')]</span></code></pre>
        </section>
    </main>
    <script src="dist/ramda.js"></script>
    <script src="main.js"></script>
    <script src="https://embed.runkit.com"></script><div style="width: 0px; height: 0px; position: fixed; left: 0px; top: 0px; overflow: hidden;"><iframe frameborder="0" src="https://runkit.com/e/application-sha256-954f32edccbd0ff210030459f05bd827a682131a808d3bbfbc8dd03bfa0f25a2#https%3A%2F%2Framdajs.com" name="runkit-application" style="padding: 0px; margin: 0px; border: 0px; height: 100vh; width: 0px; background: transparent;"></iframe></div>
`