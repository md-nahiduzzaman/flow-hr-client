import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useState } from "react";
import CheckoutForm from "../Form/CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export default function PayModal({ paymentInfo, refetch }) {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  //   const months = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "August",
  //     "September",
  //     "October",
  //     "November",
  //     "December",
  //   ];

  return (
    <>
      <Button
        // onClick={open}
        onClick={() => setIsOpen(true)}
        className="btn btn-xs"
        disabled={!paymentInfo?.user?.verified}
      >
        Pay
      </Button>

      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <DialogTitle as="h3" className="text-base/7 font-medium ">
                    {paymentInfo?.user?.name}
                  </DialogTitle>
                  <p className="mt-2 text-sm/6 ">{paymentInfo?.user?.email}</p>
                  <p className="mt-2 text-sm/6 ">
                    $ {paymentInfo?.user?.salary}
                  </p>
                  {/* <div className="mt-4 mb-8">
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
                            <option
                              key={index}
                              value={month.toLocaleLowerCase()}
                            >
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
                  </div> */}
                  <Elements stripe={stripePromise}>
                    {/* checkout form */}
                    <CheckoutForm
                      paymentInfo={paymentInfo}
                      close={close}
                      refetch={refetch}
                    />
                  </Elements>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
