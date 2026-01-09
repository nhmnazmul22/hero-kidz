
const CheckoutForm = () => {
  return (
    <div className="card bg-base-100 border border-base-200">
      <div className="card-body">
        <h2 className="font-semibold text-lg">ডেলিভারি তথ্য</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <input className="input input-bordered" placeholder="নাম" />
          <input className="input input-bordered" placeholder="মোবাইল নম্বর" />
          <input
            className="input input-bordered md:col-span-2"
            placeholder="সম্পূর্ণ ঠিকানা"
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
