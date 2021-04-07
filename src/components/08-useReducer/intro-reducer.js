const initialState = [
  {
    id: 1,
    tod: 'Comprar pan',
    donde: false,
  },
];

const todoRefucer = (state = initialState, action) => {
  if (action?.type === 'agregar') {
    return [...state, action.paylod];
  }

  return state;
};

let todos = todoRefucer();

const newTodo = [
  {
    id: 2,
    tod: 'Comprar leche',
    donde: false,
  },
];

const agregarTodoAction = {
  type: 'agregar',
  paylod: newTodo,
};

todos = todoRefucer(todos, agregarTodoAction);

console.log(todos);
