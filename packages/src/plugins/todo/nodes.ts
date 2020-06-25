/** todolist */
export const todoItemSpec = {
  attrs: {
    done: { default: false },
  },
  content: 'paragraph block*',
  toDOM(node) {
    const { done } = node.attrs;

    return [
      'li',
      {
        'data-type': 'todo_item',
        'data-done': done.toString(),
      },
      [
        'span',
        {
          class: 'todo-checkbox todo-checkbox-unchecked',
          contenteditable: 'false',
        },
      ],
      [
        'span',
        {
          class: 'todo-checkbox todo-checkbox-checked',
          contenteditable: 'false',
        },
      ],
      ['div', { class: 'todo-content' }, 0],
    ];
  },
  parseDOM: [
    {
      priority: 51, // Needs higher priority than other nodes that use a "li" tag
      tag: '[data-type="todo_item"]',
      getAttrs(dom) {
        return {
          done: dom.getAttribute('data-done') === 'true',
        };
      },
    },
  ],
};

export const todoListSpec = {
  group: 'block',
  content: 'todo_item+ | list_item+',
  toDOM(node) {
    return [
      'ul',
      {
        'data-type': 'todo_list',
      },
      0,
    ];
  },
  parseDOM: [
    {
      priority: 51, // Needs higher priority than other nodes that use a "ul" tag
      tag: '[data-type="todo_list"]',
    },
  ],
};
