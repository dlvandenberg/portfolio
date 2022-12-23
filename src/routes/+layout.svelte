<script>
  import { slide } from 'svelte/transition';
  import "../app.scss";

  let menuOpen = false
</script>

<header class="header">
  <div class="brand">
    <a href="/" class="brand-link">devd.be</a>
  </div>
  <div class="nav-toggle" class:active={ menuOpen } on:click={ () => menuOpen = !menuOpen } ></div>
</header>

{#if menuOpen}
  <div class="nav-container" in:slide out:slide>
    <nav class="nav-menu">
      <a href="/" class="nav-menu-link active">home</a>
      <a href="/" class="nav-menu-link">projects</a>
      <a href="/" class="nav-menu-link">blog</a>
    </nav>
  </div>
{/if}

<div id="content">
  <slot></slot>
</div>

<style lang="scss">
  #content {
    background-image: radial-gradient(rgb(163, 144, 0, 0.2) 1px, #342E37 1px);
    background-position: 0 0;
    background-size: 1em 1em;
    min-height: calc(100vh - $header-height);
    width: 100vw;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    padding: 0 1rem;
  }

  .brand-link {
    font-size: xx-large;
    font-weight: 100;
    color: $color-white;
  }

  .nav-toggle {
    position: relative;
    width: 50px;
    height: 50px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;

    &.active::before {
      transform: translateY(0) rotate(45deg);
      box-shadow: 0 0 0 $color-white;
    }

    &::before {
      content: '';
      position: absolute;
      width: 28px;
      height: 2px;
      transition: 0.2s;
      background-color: $color-white;
      transform: translateY(-10px);
      box-shadow: 0 10px 0 $color-white;
    }

    &.active::after {
      transform: translateY(0) rotate(-45deg);
    }

    &::after {
      content: '';
      background-color: $color-white;
      position: absolute;
      width: 28px;
      height: 2px;
      transition: 0.2s;
      transform: translateY(10px);
    }
  }

  .nav-container {
    position: absolute;
    top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 4rem);
    width: 100vw;
    background-color: $color-coffee;
  }

  .nav-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 40%;
  }

  .nav-menu-link {
    font-size: x-large;
    font-weight: 100;
    color: $color-white;

    &.active {
      color: $color-blue;
    }

    &:hover {
      color: $color-yellow;
    }

    &:active {
      color: $color-gold;
    }
  }
</style>