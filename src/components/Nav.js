import React from 'react'
import '../styles/styles.sass'
import '../styles/button.css'


const Nav = () => {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <nav>

        <p class="buttons is-outlined is-centered">

          <a href="/"><button class="button is-outlined"> <span class="icon">
          <i class="fas fa-home"></i>
          </span>
          <span>Home</span>
          </button></a>


          <a href="/projects"><button class="button is-outlined"><span class="icon">
          <i class="fas fa-rocket"></i>
          </span>
          <span>Projects</span>
          </button></a>

          <a href="/experience"><button class="button is-outlined"><span class="icon">
          <i class="fas fa-laptop"></i>
          </span>
          <span>Experience</span>
          </button></a>

          <a href="/resume.pdf"><button class="button is-outlined"> <span class="icon">
          <i class="far fa-file"></i>
          </span>
          <span>Résumé</span>
          </button></a>

        </p>

      </nav>
    </div>
  )
}

export default Nav
