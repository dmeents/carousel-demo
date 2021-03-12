const React = require('react');
const Enzyme = require('enzyme');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

global.React = React;

Enzyme.configure({ adapter: new Adapter() });
