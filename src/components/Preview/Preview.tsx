import { useEffect, useRef } from "react";

interface PreviewProps {
  code: string
}

const html = `
    <html lang="en">
      <head>
       <title>CyberPunk Editor</title>
      </head>
      <body>
        <div id="root"></div>
        <script>
          window.addEventListener('message', (event) => {
            try {
            eval(event.data)  
            } catch(err) {
              console.log('%c error', 'background: white; color: red', err);
              const root = document.querySelector('#root')
              root.innerHTML = '<div style="color: red">' + err + '</div>'
            }
          }, false)
        </script>
      </body>  
    </html>
  `

const Preview = ({ code }: PreviewProps) => {
  const iframe = useRef<any>()
  useEffect(() => {
    iframe.current.contentWindow.postMessage(code, "*")
  }, [code])

  return <iframe
    title='preview'
    ref={iframe}
    sandbox='allow-scripts'
    srcDoc={html}

  ></iframe>
}

export default Preview
