import React, { Component } from "react";
import { render } from "react-dom";
import { renderToStaticMarkup } from "react-dom/server";
import { highlight } from "highlight.js";
import { html } from "js-beautify";

import config from "../config";
import generators from "./generators";
import examples from "./examples";

class Config extends Component {
  shouldComponentUpdate = () => false;
  render() {
    return (
      <div>
        <h2>Config</h2>
        <textarea
          onChange={this.props.handleChange}
          className="config card"
          ref={config => {
            this.config = config;
          }}
          defaultValue={JSON.stringify(config, null, 2)}
        />
      </div>
    );
  }
}

class Output extends Component {
  render() {
    return (
      <div>
        <h2>Output</h2>
        <pre className="card">
          <code
            className="html hljs"
            dangerouslySetInnerHTML={{
              __html: highlight("css", this.props.css).value
            }}
          />
        </pre>
      </div>
    );
  }
}

class Usage extends Component {
  shouldComponentUpdate = () => false;
  handleChange = ({ target }) => {
    const { state } = this;
    const { dataset, value } = target;
    try {
      document.getElementById(`card_${dataset.index}`).innerHTML = value;
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    const { examples } = this.props;
    return (
      <div>
        <h2>Usage</h2>
        {examples.map((example, key) => {
          const { name, Example } = example;
          return (
            <div key={key}>
              <h3 className="example_h3">{name}</h3>
              <div className="example">
                <textarea
                  data-index={key}
                  onChange={this.handleChange}
                  className="card"
                  defaultValue={html(renderToStaticMarkup(<Example />), {})}
                />
                <div id={`card_${key}`} className="card ">
                  <Example />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

class App extends Component {
  state = config;
  generateCss = () => {
    const { props, state } = this;
    return props.generators
      .map(generator => {
        return generator(state);
      })
      .join("\n");
  };
  handleChange = ({ target }) => {
    console.log(target);
    try {
      this.setState(JSON.parse(target.value));
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    const { generateCss, handleChange, state } = this;
    const css = generateCss();
    return (
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html: css
          }}
        />
        <h1>Utility CSS Generator</h1>
        <div className="grid">
          <Config handleChange={handleChange} />
          <Output css={css} />
          <Usage examples={examples} />
        </div>
      </div>
    );
  }
}

render(<App generators={generators} />, document.getElementById("root"));
