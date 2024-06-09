import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../../components/LoadingSpinner";

import { Chart } from "react-google-charts";

const EmployeeDetails = () => {
  const { email } = useParams();
  console.log(email);

  // get user
  const { data: user = [], isLoading: userIsLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/users-details/${email}`
      );
      return data;
    },
  });
  console.log(user);

  // get payments
  const { data: payments = [], isLoading: paymentsIsLoading } = useQuery({
    queryKey: ["payments-details", email],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/payment-details/${email}`
      );
      return data;
    },
  });
  console.log("paymetssssss", payments);

  const data = payments.map((payment) => {
    const month = payment?.month;
    const year = payment?.year;
    const date = `${month}'${year}`;
    const salary = parseInt(payment?.amount);
    const data = [date, salary];
    return data;
  });

  data.unshift(["Month & Year", "Salary"]);

  // const data = [
  //   ["Year", "Sales", "Expenses", "Profit"],
  //   ["2014", 1000, 400, 200],
  //   ["2015", 1170, 460, 250],
  //   ["2016", 660, 1120, 300],
  //   ["2017", 1030, 540, 350],
  // ];

  const options = {
    chart: {
      title: "Payment History",
      subtitle: "Month, Year & Salary",
    },
  };

  console.log(data);

  if (userIsLoading || paymentsIsLoading) return <LoadingSpinner />;

  return (
    <div>
      {/* user profile */}
      <div>
        <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800 items-center">
          <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
            <img
              src={user?.photo}
              alt=""
              className="object-cover rounded-full object-center w-full h-full dark:bg-gray-500"
            />
          </div>
          <div className="flex flex-col">
            <div>
              <h2 className="text-2xl font-semibold">{user?.name}</h2>
              <span className="text-sm dark:text-gray-600">
                General manager
              </span>
            </div>
            <div className="space-y-1">
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="Email address"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                  ></path>
                </svg>
                <span className="dark:text-gray-600">{user?.email}</span>
              </span>
            </div>
          </div>
        </div>
        {/* chart */}
        <div>
          <div className="w-[40%]">
            <Chart
              chartType="Bar"
              width="100%"
              height="400px"
              data={data}
              options={options}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
