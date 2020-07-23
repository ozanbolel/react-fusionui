import * as React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import css from "./Snippet.module.scss";

const Snippet: React.FC<{ code: string; language?: Language; preview?: JSX.Element; margin?: boolean }> = ({ code, language = "jsx", preview, margin }) => {
  return (
    <div className={css.snippet + (margin ? " " + css.margin : "")}>
      <Highlight {...defaultProps} code={code} language={language}>
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre className={css.code} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>

      {preview ? <div className={css.preview}>{preview}</div> : null}
    </div>
  );
};

export default Snippet;
