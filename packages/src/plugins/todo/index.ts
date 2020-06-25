function getCheckboxEditable() {
  return true;
}

function toggleTodoItemAction(state, pos, todoItemNode) {
    return state.tr.setNodeMarkup(pos, null, { done: !todoItemNode.attrs.done });
  }

export function handleClickOn(editorView, pos, node, nodePos, event) {
  if (event.target.classList.contains('todo-checkbox')) {
    editorView.dispatch(toggleTodoItemAction(editorView.state, nodePos, node));
    return true;
  }
}

