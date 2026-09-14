export default function Form() {
  return (
    <div className="w-2/3">
      <h2>New Device</h2>
      <form className=" grid grid-cols-4 pt-10 h-[150px] bg-gray-300" action="">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="customer-name"
          >
            Customer Name
          </label>
          <input
            className="p-2 h-[40px] border-b-2  rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="customer-name"
            id="customer-name"
          />
        </div>

        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="device-type"
          >
            Choose Device
          </label>
          <select
            className="p-2 h-[40px] rounded-xl border-b-2 "
            name="device-type"
            id="device-type"
          >
            <option value="phone">Phone</option>
            <option value="laptop">Laptop</option>
            <option value="printer">Printer</option>
          </select>
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="issue"
          >
            Issue
          </label>
          <input
            className="p-2 h-[40px] rounded-xl border-b-2 "
            type="text"
            name="issue"
            id="issue"
          />
        </div>
        <div>
          <button className="p-5 ml-7 bg-green-500 rounded-xl">
            Add ticket
          </button>
        </div>
      </form>
    </div>
  );
}
