const posts = (state = [], action) => {
  switch (action.type) {
    // Case yang akan dijalankan jika type yg di dispatch adalah ADD POST
    case "ADD POST":
      return [action.post, ...state];
    // Case yang akan dijalankan jika type yg di dispatch adalah DELETE POST
    case "DELETE POST":
      state.splice(action.index, 1);
      return [...state];
    // Case yang akan dijalankan jika type yg di dispatch adalah UPDATE POST
    case "UPDATE POST":
      state[action.index] = action.post;
      return [...state];
    default:
      return state;
  }
};

export default posts;
