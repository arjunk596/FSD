// Using useFetch in different components!
import useFetch from './useFetch';

// Component 1: Users List
function UsersList() {
  const { data: users, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');
  
  if (loading) return <div>Loading users... </div>;
  if (error) return <div>Error: {error} </div>;
  
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>👥 Users</h2>
      <ul>
        {users?.slice(0, 5).map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

// Component 2: Posts List
function PostsList() {
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');
  
  if (loading) return <div>Loading posts... ⏳</div>;
  if (error) return <div>Error: {error} </div>;
  
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>📝 Posts</h2>
      <ul>
        {posts?.slice(0, 5).map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p style={{ fontSize: '12px' }}>{post.body.slice(0, 50)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Component 3: Todo List
function TodoList() {
  const { data: todos, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');
  
  if (loading) return <div>Loading todos... </div>;
  if (error) return <div>Error: {error} </div>;
  
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', margin: '10px' }}>
      <h2> Todos</h2>
      <ul>
        {todos?.slice(0, 5).map(todo => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? 'Done' : 'Pending'}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Custom Hook - useFetch</h1>
      <p>All components use the SAME fetch logic!</p>
      <UsersList />
      <PostsList />
      <TodoList />
    </div>
  );
}

export default App;