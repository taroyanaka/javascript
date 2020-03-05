const ramdajshtml = 
`    <input type="checkbox" id="open-nav">
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

        </ul>
    </aside>
    <main class="container-fluid">


    
    </main>
    <script src="dist/ramda.js"></script>
    <script src="main.js"></script>
    <script src="https://embed.runkit.com"></script><div style="width: 0px; height: 0px; position: fixed; left: 0px; top: 0px; overflow: hidden;"><iframe frameborder="0" src="https://runkit.com/e/application-sha256-954f32edccbd0ff210030459f05bd827a682131a808d3bbfbc8dd03bfa0f25a2#https%3A%2F%2Framdajs.com" name="runkit-application" style="padding: 0px; margin: 0px; border: 0px; height: 100vh; width: 0px; background: transparent;"></iframe></div>
`