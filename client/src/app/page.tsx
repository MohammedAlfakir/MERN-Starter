import CreateUser from "@/Components/CreateUser";
import axios from "axios";

export default async function Home() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_API}/users`
  );
  const posts = response.data;

  return (
    <main>
      <div className="card">
        <ul>
          {posts.map(
            (post: {
              _id: string;
              name: string;
              age: number;
              email: string;
            }) => (
              <li key={post._id}>
                <p>Name: {post.name}</p>
                <p>Age: {post.age}</p>
                <p>Email: {post.email}</p>
              </li>
            )
          )}
        </ul>
      </div>
      <div>
        <CreateUser />
      </div>
    </main>
  );
}
