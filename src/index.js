import React, { Component } from "react";
import { render } from "react-dom";
import { highlight } from "highlight.js";

import { Demo } from "./demo";

import config from "../config";

const buildClass = (className, property, value) => {
  return `.${className} { ${property}: ${value}; }`;
};

class Textarea extends Component {
  shouldComponentUpdate = () => false;
  render() {
    return (
      <div>
        <h2>Input </h2>
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

class App extends Component {
  state = config;
  buildSpacingCss = spacing => {
    const { state, getDirections } = this;
    const spacing_alias = state[spacing];
    const spacing_values = state[`${spacing}_values`];
    const spacing_unit = state[`${spacing}_unit`];
    const directions = getDirections();
    let classes = [
      `
/* ${spacing} */
`
    ];
    spacing_values.forEach(value => {
      classes.push(
        buildClass(
          `${spacing_alias}\\:${value}`,
          spacing,
          `${value}${spacing_unit}`
        )
      );
      directions.forEach(direction => {
        const name = Object.keys(direction)[0];
        const alias = direction[name];
        classes.push(
          buildClass(
            `${spacing_alias}-${alias}\\:${value}`,
            `${spacing}-${name}`,
            `${value}${spacing_unit}`
          )
        );
      });
    });
    return classes.join("\n");
  };
  buildCss = () => {
    const buildSpacingCss = this.buildSpacingCss;
    return ["margin", "padding"]
      .map(property => {
        return buildSpacingCss(property);
      })
      .join("\n");
  };
  getDirections = () => {
    const { top, right, bottom, left } = this.state;
    return [{ top: top }, { right: right }, { bottom: bottom }, { left: left }];
  };
  handleChange = ({ target }) => {
    try {
      this.setState(JSON.parse(target.value));
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    const { buildCss, handleChange, state } = this;
    const css = buildCss();
    return (
      <div>
        <h1>Utility CSS Generator</h1>
        <div className="grid">
          <style
            dangerouslySetInnerHTML={{
              __html: css
            }}
          />
          <Textarea handleChange={handleChange} />
          <div>
            <h2>Output</h2>
            <pre className="card">
              <code
                className="html hljs"
                dangerouslySetInnerHTML={{
                  __html: highlight("css", css).value
                }}
              />
            </pre>
          </div>
          <div>
            <h2>Usage</h2>
            <Demo>
              <div className="p:20">mundi cool yo</div>
              <div>mundi cool yo</div>
            </Demo>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
