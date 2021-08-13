export default function OtherTasks() {
  return (
    <div class="p-8 sm:p-16 bg-gray-500 text-white">
      <div class="m-auto max-w-md w-full overflow-hidden">
        <h1 class="uppercase text-2xl block font-bold py-6 text-gray-400 tracking-widest text-center">
          Focus
        </h1>
        <div class="flex items-center justify-between relative">
          <input
            placeholder="Add new item..."
            type="text"
            class="p-4 pr-20 border-t-2 border-green-500 rounded bg-gray-900 text-white w-full shadow-inner outline-none"
          />
          <button
            class="text-green-400 hover:text-green-300 bg-gray-900 font-semibold py-2 px-4 absolute right-0 mr-2 focus:outline-none"
          >
            Add
          </button>
        </div>
        <ul class="m-0 my-4 p-0 list-none w-full"></ul>
        <div class="flex py-4 border-t border-gray-900 justify-between">
          <div>
            <button
              class="text-xs mr-3 font-bold hover:underline text-gray-500 text-green-500 focus:outline-none"
            >
              All
            </button>
            <button
              class="text-xs mr-3  hover:underline text-gray-500 focus:outline-none"
            >
              Active
            </button>
          </div>
          <div>
            <button
              id="js-filter-clear"
              class="text-xs mr-3 text-red-500 focus:outline-none hover:underline"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
