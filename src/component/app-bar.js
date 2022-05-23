class AppBarr extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
	<!--* navigasi mobile *-->
    <div class="menumob">
        <button class="iconmenu" id="menu" aria-label="navigation-menu"><i class="fa-solid fa-bars"></i></button>
        <div class="logomob">Laper Apps</div>
    </div>
    <nav id="drawer" class="navmob">
        <ul class="navlistmob">
            <li class="navitemsmob"><a href="#/Home"><i class="fa-solid fa-house"></i> Home</a></li>
            <li class="navitemsmob"><a href="#/Favorite"><i class="fa-solid fa-heart"></i> Favorite</a></li>
            <li class="navitemsmob"><a target="_blank" href="https://github.com/anriansihotang" rel="noopener"><i class="fa-solid fa-user"></i> About Us</a></li>
        </ul>
    </nav> 
    <!--* navigasi dekstop *--> 
    <nav class="nav">
        <h1 class="logo">Laper Apps</h1>
        <ul class="navdesk">
            <li class="navitems"><a href="#/Home"><i class="fa-solid fa-house"></i> Home</a></li>
            <li class="navitems"><a href="#/Favorite"><i class="fa-solid fa-heart"></i> Favorite</a></li>
            <li class="navitems"><a target="_blank" href="https://github.com/anriansihotang" rel="noopener"><i class="fa-solid fa-user"></i> About Us</a></li>
        </ul>
    </nav>
	`;
  }
}

customElements.define('app-bar', AppBarr);
