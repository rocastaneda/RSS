import {Helmet} from 'react-helmet'

export default function html({markup, initialState}) {

  const helmet = Helmet.renderStatic()

  return `
    <!DOCTYPE html>
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <div id="root">${markup}</div>
        <script>
          window.initialState = ${JSON.stringify(initialState)};
        </script>
        <script src="/app/vendor.bundle.js"></script>
        <script src="/app/main.bundle.js"></script>
      </body>
    </html>
  `;
}
