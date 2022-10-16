import MonacoEditor from "@monaco-editor/react"
import prettier from "prettier"
import parserBabel from "prettier/parser-babel"

import "./CodeEditor.scss"

interface CodeEditorProps {
  onChange: (value: string) => void
  initialValue: string
}

const CodeEditor = (props: CodeEditorProps) => {
  const onEditorChange = (code: string | undefined) => {
    props.onChange(code || "")
  }

  const onFormatClick = () => {
    const formattedCode = prettier
      .format(props.initialValue, {
        parser: "babel",
        plugins: [parserBabel],
        useTabs: false,
        semi: false,
        singleQuote: true,
      })
      .replace(/\n$/, "")
    props.onChange(formattedCode)
  }

  return (
    <div className="WrapperEditor">
      <button
        className="button button-format is-success is-small is-inverted"
        onClick={onFormatClick}
      >
        FORMAT
      </button>
      <MonacoEditor
        theme="vs-dark"
        height={400}
        defaultLanguage="javascript"
        defaultValue=""
        value={props.initialValue}
        onChange={onEditorChange}
        options={{
          minimap: {
            enabled: false,
          },
          wordWrap: "on",
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
        }}
      />
    </div>
  )
}

export default CodeEditor
