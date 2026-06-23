
  # Customizable Figma Editor

  This is a code bundle for Customizable Figma Editor. The original project is available at https://www.figma.com/design/4BY8OLcGBnkNun6dCKosmZ/Customizable-Figma-Editor.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
## Build

```
npx vite build --config vite.config.figma.ts --base /social-editor
```
copy dist/* to medialibraryonline/core

## API

https://mlol.link/api/v1/enti.json

static json, generated every 2 hours, with this SQL query

```sql
SET SESSION group_concat_max_len = 1000000;

SELECT CONCAT('[',
    GROUP_CONCAT(
        JSON_OBJECT(
            'name', NOME,
            'url', Dominio,
            'logo', CONCAT('https://sites.mlolcdn.net/themes/', id, '/Images/logo.png')
        )
        ORDER BY NOME
        SEPARATOR ','
    ),
']') AS json_output
FROM enti
WHERE ATTIVO > 0
  AND ID < 1000
  AND TEST = 0;
```
