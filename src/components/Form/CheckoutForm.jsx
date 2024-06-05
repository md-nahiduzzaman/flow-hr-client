// This example shows you how to set up React Stripe.js and use Elements.
// Learn how to accept a payment using the official Stripe docs.
// https://stripe.com/docs/payments/accept-a-payment#web

// import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";

const CheckoutForm = ({ close, paymentInfo, refetch }) => {
  const stripe = useStripe();
  const elements = useElements();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div>
        <div className="mt-4 mb-8">
          <div className="">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Month</span>
              </div>
              <select
                name="month"
                id="month"
                className="input input-bordered  max-w-xs"
              >
                {months.map((month, index) => (
                  <option key={index} value={month.toLocaleLowerCase()}>
                    {month}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Year</span>
              </div>
              <input
                type="number"
                name="year"
                className="input input-bordered max-w-xs"
                required
              />
            </label>
          </div>
        </div>
      </div>
      <div className="flex mt-2 justify-around">
        <button
          disabled={!stripe}
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
        >
          {" "}
          Pay $ {paymentInfo?.user?.salary}
        </button>
        <button
          onClick={close}
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

export default CheckoutForm;
