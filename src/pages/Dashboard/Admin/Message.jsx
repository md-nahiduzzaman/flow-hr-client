import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../../components/LoadingSpinner";

const Message = () => {
  // get messages
  const { data: messages = [], isLoading } = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/messages`);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div>
      <h1 className="font-bold text-2xl mb-8">Messages</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {messages.map((message) => (
                <tr key={message._id}>
                  <td>{message?.name}</td>
                  <td>{message?.email}</td>
                  <td>
                    {/* <button className="btn btn-ghost btn-xs">
                      Show Message
                    </button> */}
                    {message?.message}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Message;
