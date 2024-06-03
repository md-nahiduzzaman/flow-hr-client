import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Message = () => {
  // get messages
  const {
    data: messages = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/messages`);
      return data;
    },
  });

  return (
    <div>
      <h1>this is message</h1>
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
