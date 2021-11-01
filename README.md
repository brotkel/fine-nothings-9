# Composer-enabled Drupal template

## Installation

### Dependencies
* PHP 7.4
* Composer 2.1
* Node 16
* Lando 3.4.2
* Docker v3.6

### Updating dependencies
`lando composer install`

### Syncing with Pantheon
`lando pull --database=live --files=live`
## Running Locally

### Drupal: 
* `lando start`
* Load https://fine-nothings-9.lndo.site/
### Node/Gulp/Patternlab: 
* `cd web/themes/finenothings/`
* `npm run watch`
* Load http://localhost:3000

## Building for Pantheon
* `npm run build`
* `lando push -m "Commit message" --database=dev`

## Development

### Creating a new component in Patternlab
* `cd web/themes/finenothings/`
* `yo mc-d8-theme:component 'Card'`