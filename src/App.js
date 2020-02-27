import React from 'react';
import {SiblingCommunicationSimple} from "./examples/02_FunctionalSiblingCommUsingHooks";
import {FunctionalParentChildComm} from "./examples/00_FunctionalParentChildComm";
import {FunctionalChildParentComm} from "./examples/01_FunctionalChildParentComm";


// Ex 00:
// const App = () => <FunctionalParentChildComm/>;

// Ex 01:
// const App = () => <FunctionalChildParentComm/>;

// Ex 02:
const App = () => <SiblingCommunicationSimple/>;

// Ex 03:
// - ref: https://www.robinwieruch.de/react-function-component#react-function-component-props
// - ref: https://app.pluralsight.com/guides/react-communicating-between-components
// - beautiful visualization:https://towardsdatascience.com/passing-data-between-react-components-parent-children-siblings-a64f89e24ecf
// const App = () => <SiblingCommunication/>;

export default App;
