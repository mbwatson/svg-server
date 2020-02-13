const express = require('express')
const router = express.Router()
const singleLineString = require('../utils/string-to-single-line')

const COLORS = [
    'coral',
    'darkcyan',
    'salmon',
    'darkred',
    'lightslategrey'
]

router.get('/', (req, res) => {
    // check query string for comma-separated list of numeric strings
    const values = req.query.values.split(',').filter(value => !isNaN(value)).map(value => +value)

    const SVG_WIDTH = 400
    const SVG_HEIGHT = 400
    const BAR_GAP = 1
    const MARGIN = 20
    const scaleFactor = Math.max(...values) / SVG_HEIGHT
    const BAR_WIDTH = (SVG_WIDTH - 2 * MARGIN - values.length * BAR_GAP) / values.length 

    const bars = values.map((value, i) => {
        const barHeight = value * scaleFactor
        return `
            <rect
                x="${ i * (BAR_WIDTH + BAR_GAP) }"
                y="${ SVG_HEIGHT - barHeight }"
                width="${ BAR_WIDTH }"
                height="${ barHeight }"
                class="bar"
                fill="${ COLORS[i % COLORS.length] }"
                stroke="white"
                strokeWidth="1"
            />
        `
    })

    const svg = `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="${ SVG_WIDTH }px" height="${ SVG_HEIGHT }px" viewBox="0 0 ${ SVG_WIDTH } ${ SVG_HEIGHT }">
            <style>
                .bar { transition: filter 250ms; }
                .bar:hover { filter: brightness(0.75); }
            </style>
            <g transform="translate(${ MARGIN } -${ MARGIN })">
                ${ bars.join('') }
            </g>
        </svg>
    `
    res.status(200).type('application/xml').send(singleLineString(svg))
})

module.exports = router

