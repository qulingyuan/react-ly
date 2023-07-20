import React, { Component } from "react";

/**
 *
 * 1. 获取 DOM 节点(三种使用方式)
 */

//1.String Refs(废弃，尽量避免使用)
class StringRefs extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    setTimeout(() => {
      // 2. 通过 this.refs.xxx 获取 DOM 节点
      this.refs.textInput.value = "new value";
    }, 2000);
  }
  render() {
    // 1. ref 直接传入一个字符串
    return (
      <div>
        <input ref="textInput" value="value" />
      </div>
    );
  }
}
//2. callback Refs
class CallbackRefs extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    setTimeout(() => {
      // 2. 通过实例属性获取 DOM 节点
      this.textInput.value = "new value";
    }, 2000);
  }
  render() {
    // 1. ref 传入一个回调函数
    // 该函数中接受 React 组件实例或 DOM 元素作为参数
    // 我们通常会将其存储到具体的实例属性（this.textInput）
    return (
      <div>
        <input
          ref={(element) => {
            this.textInput = element;
          }}
          value="value"
        />
      </div>
    );
  }
}

//3. createRef(最为推荐的使用方式)
class CreateRef extends React.Component {
  constructor(props) {
    super(props);
    // 1. 使用 createRef 创建 Refs
    // 并将 Refs 分配给实例属性 textInputRef，以便在整个组件中引用
    this.textInputRef = React.createRef();
  }
  componentDidMount() {
    setTimeout(() => {
      // 3. 通过 Refs 的 current 属性进行引用
      this.textInputRef.current.value = "new value";
    }, 2000);
  }
  render() {
    // 2. 通过 ref 属性附加到 React 元素
    return (
      <div>
        <input ref={this.textInputRef} value="value" />
      </div>
    );
  }
}

/**
 *
 * 2. 获取Class组件的实例,注意:不能在函数组件上使用 ref 属性，因为函数组件没有实例。
 */
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.textInputRef = React.createRef();
  }
  handleFocus() {
    this.textInputRef.current.focus();
  }
  render() {
    return <input ref={this.textInputRef} value="value" />;
  }
}

class ClassInstance extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    setTimeout(() => {
      this.inputRef.current.handleFocus();
    }, 2000);
  }
  render() {
    return (
      <div>
        <Input ref={this.inputRef} value="value" />
      </div>
    );
  }
}
