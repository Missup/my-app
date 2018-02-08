import React from 'react'
import ReactDom from 'react-dom'
import Component1 from './components/Component.jsx'
import ShoppingList from './components/Test.jsx'

ReactDom.render(
	<div>
    <Component1 />
    <ShoppingList name="Sup" age="20" />
  </div>,
  document.getElementById('content')
)