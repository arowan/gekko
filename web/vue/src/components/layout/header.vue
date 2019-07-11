<template lang='pug'>
  div
    #top
    header.bg--off-white.grd
      .contain.grd-row
        h3.py1.px2.col-2 Gekko UI
        div.btn--menu(v-on:click.prevent='switchToggle').btn--primary.h3.py1.px2.col-2 &#9776;
    nav.bg--light-gray
      .menu(v-bind:class='{ showMenu: !isVisible }').contain
        router-link(to='/home').py1 Home
        router-link(to='/live-gekkos').py1 Live Gekkos
        router-link(to='/backtest').py1 Backtest
        router-link(to='/data').py1 Local data
        router-link(to='/config').py1 Config
        a(href='https://gekko.wizb.it/docs/introduction/about_gekko.html', target='_blank').py1 Documentation

</template>

<script>
export default {
  name: 'header',
  data: () => {
    return {
      isVisible: true
    };
  },
  methods: {
    switchToggle: function() {
      this.isVisible = !this.isVisible
    }
  }
}
</script>

<style>
.menu {
  display: flex;
  flex-direction: row;
  margin-top: 0;
  margin-bottom: 2rem;
}

.menu a {
  flex: 1 1 100%;
  display: block;
  text-align: center;
  text-decoration: none;
  color: inherit;
}

.menu .router-link-active {
  background-color: rgba(250,250,250,.99);
}

.menu a:hover {
  text-decoration: underline;
}

.btn--primary.btn--menu{
  display: none;
}

@media(max-width:767px){
  .btn--primary.btn--menu{
    position: absolute;
    right: 10px;
    height: 44px;
    display: block;
  }
  .menu{
    flex-direction: column;
    max-height: 0px;
    overflow: hidden;
    /* Set our transitions up. */
    -webkit-transition: max-height 0.8s;
    -moz-transition: max-height 0.8s;
    transition: max-height 0.8s;
  }
  .menu.showMenu{
    max-height: 800px;
  }
}

</style>
