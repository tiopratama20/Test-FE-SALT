<template>
    <div class="navigation">
        <ul id="menu-desk">
            <li><a href="javasript:;">Home</a></li>
            <li><a href="javasript:;">News</a></li>
            <li><a href="javasript:;">Contact</a></li>
            <li><a href="javasript:;">About</a></li>
        </ul>
        <div id="sidemenu">

            <div class="a-header">
                <input type="checkbox" name="main-nav" id="main-nav" class="burger-check">
                <label for="main-nav" class="burger menu"><span></span></label>
                <ul>
                    <li><a href="javasript:;">Home</a></li>
                    <li><a href="javasript:;">News</a></li>
                    <li><a href="javasript:;">Contact</a></li>
                    <li><a href="javasript:;">About</a></li>
                  </ul>
            </div>
        </div>
    </div>
</template>

<script>
    // var sidemenu = new Vue({
    //     el: '#sidemenu',
    //     data: {
    //         navOpen: true,
    //     },
    // })
</script>

<style lang="scss">
    .navigation {
        margin-left: auto;
        filter: drop-shadow(0px 8px 32px rgba(0, 0, 0, 0.08));

        ul#menu-desk {
           
            @media (max-width:768px) {
                display: none;
            }

            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-column-gap: 25px;
            grid-row-gap: 25px;
            list-style: none;

            li {
                text-align: center;

                a {
                    color: var(--vt-c-text-default);
                    font-weight: 600;
                    font-size: 18px;

                    &:hover {
                        background-color: var(--vt-c-white);
                        color: var(--vt-c-text-hover);
                    }
                }
            }
        }
    }

    #sidemenu {
        @media (min-width:768px) {
            display: none;
        }

        position: absolute;
        top: -28px;
        right: -13px;
        text-align: right;
        background: #fff;

        nav {
            width: 200px;
            background: var(--vt-c-white);
            position: fixed;
            top: 0;
            left: 0;
            z-index: 99;
        }

       
    }

    .burger-check {
        display: none;
    }
    .burger {
        position: relative;
        float: left;
        margin-left: 10px;
        width: 60px;
        height: 60px;
        cursor: pointer;
    }

    .burger:after {
        content: 'Menu';
        position: absolute;
        bottom: 7px;
        left: 0px;
        width: 100%;
        text-align: center;
        font-size: 13px;
    }
    .burger span,
    .burger span:before,
    .burger span:after {
        position: absolute;
        left: 10px;
        top: 22px;
        width: 40px;
        height: 4px;
        background: #333;
        border-radius: 0.2em;
    }

    .burger span:before,
    .burger span:after {
        content: '';
        left: 0;
    }

    .burger span:before {
        top: -8px;
    }
    .burger span:after {
        top: 8px;
    }

    .burger-check:checked+.burger:after {
        content: '';
    }

    .burger-check:checked+.burger span {
        height: 0;
        width: 0;
    }
    .burger-check:checked+.burger span:before,
    .burger-check:checked+.burger span:after {
        top: 6px;
    }

    .burger-check:checked+.burger span:before {
        -webkit-transform: rotate(225deg);
        -ms-transform: rotate(225deg);
        transform: rotate(225deg);
    }

    .burger-check:checked+.burger span:after {
        -webkit-transform: rotate(-225deg);
        -ms-transform: rotate(225deg);
        transform: rotate(-225deg);
    }

    span.boo {
        width: auto;
        margin-top: 0;
        line-height: 60px;
        height: 0;
        overflow: hidden;
    }

    #main-nav-test:checked~.boo {
        height: 50px;
    }

    .a-header {
        position: relative;
        float: left;
        width: calc(100% - 20px);
        margin: 0;
        min-height: 50px;
        background: transparent;
        overflow: hidden;
    }

    .a-header ul {
        position: relative;
        float: right;
        width: 100%;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .a-header ul a {
        position: relative;
        float: right;
        width: 100%;
        height: 0;
        line-height: 50px;
        padding: 0 15px;
        text-decoration: none;
        overflow: hidden;
        color: #333;
        text-align: left;
    }

    .a-header ul a:hover,
    .a-header ul a:active,
    .a-header ul a:focus,
    .a-header ul a:visited {
        text-decoration: none;
        background: #fff;
        border-bottom-color: #08c;
    }

    /* Animate height of 'a' element in order to reveal the menu on check (IE9 or higher) */
    #main-nav:checked~ul a {
        height: 50px;
    }
</style>