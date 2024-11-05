const options = [
  {
    key: "Timeframe",
    value: "All-Time",
  },
  {
    key: "People",
    value: "All",
  },
  {
    key: "Topics",
    value: "All",
  },
];

function Dropdown() {
  return (
    <div className="my-7 w-full flex gap-x-[10px] text-[16px] font-medium">
      {options.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full bg-white h-[49px] flex items-center px-4 rounded-[20px] justify-between"
          >
            <div>
              {item.key} : {item.value}
            </div>
            <div>
              <svg
                width="8"
                height="6"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.472614 2.41374L3.03053 5.00374C3.41569 5.39373 4.03789 5.39373 4.42306 5.00374L6.98097 2.41374C7.60316 1.78374 7.15874 0.703735 6.27976 0.703735H1.16394C0.284968 0.703735 -0.149581 1.78374 0.472614 2.41374Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Dropdown;
