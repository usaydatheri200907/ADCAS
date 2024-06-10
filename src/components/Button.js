 export function Example({
    placeholder,
}) {
  return (
    <div className="fixed bottom-0 right-0 p-3 m-4 pr-10 pb-10">
      <button className="inline-flex items-center rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 mt-2">
        {placeholder}
        </button>
    </div>
  );
}

export default Example;