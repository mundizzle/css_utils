import React, { Component } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { highlight } from "highlight.js";
import { html } from "js-beautify";

class Textarea extends Component {
  shouldComponentUpdate = () => false;
  render() {
    return (
      <textarea
        data-index={this.props.index}
        onChange={this.props.handleChange}
        className="card"
        defaultValue={html(renderToStaticMarkup(this.props.demo), {})}
      />
    );
  }
}

class Demo extends Component {
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
    let demos = this.props.children || [];
    demos = demos.length ? demos : [demos];
    return demos.map((demo, key) => {
      return (
        <div className="demo" key={key}>
          <Textarea index={key} demo={demo} handleChange={this.handleChange} />
          <div id={`card_${key}`} className="card">
            {demo}
          </div>
        </div>
      );
    });
  }
}

export { Demo };
