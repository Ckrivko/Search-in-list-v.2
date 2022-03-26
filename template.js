import { render, html } from './node_modules/lit-html/lit-html.js'


const templateTown = (town) => html`

<li>${town}</li>

`

const mainTemplate = (towns) => html`

<ul>${towns.map(templateTown)}</ul>

`
export { mainTemplate };