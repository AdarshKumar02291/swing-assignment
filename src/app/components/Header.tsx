function Header() {
  return (
    <>
      <div className="my-9 w-full flex justify-between">
        {" "}
        <div className="text-[24px] font-bold">Reports</div>
        <div className="flex gap-x-2 items-center text-[14px] font-semibold">
          <div>
            <svg
              width="14"
              height="17"
              viewBox="0 0 14 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2075 6.25H9.75004V1.66667C9.75004 1.1625 9.33754 0.75 8.83337 0.75H5.16671C4.66254 0.75 4.25004 1.1625 4.25004 1.66667V6.25H2.79254C1.97671 6.25 1.56421 7.24 2.14171 7.8175L6.34921 12.025C6.70671 12.3825 7.28421 12.3825 7.64171 12.025L11.8492 7.8175C12.4267 7.24 12.0234 6.25 11.2075 6.25ZM0.583374 15.4167C0.583374 15.9208 0.995874 16.3333 1.50004 16.3333H12.5C13.0042 16.3333 13.4167 15.9208 13.4167 15.4167C13.4167 14.9125 13.0042 14.5 12.5 14.5H1.50004C0.995874 14.5 0.583374 14.9125 0.583374 15.4167Z"
                fill="#4D4D4D"
              />
            </svg>
          </div>
          <div>Download</div>
        </div>
      </div>
      <div className=" w-full border-b border-[2px]"></div>
    </>
  );
}

export default Header;
