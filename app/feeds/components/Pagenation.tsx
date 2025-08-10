import React, { useState } from "react";

interface PageninationProps {
  setLimit: (value: number) => void;
  nextList: () => void;
}
export default function Pagination({ setLimit, nextList }: PageninationProps) {
  const [activePage, setActivePage] = useState(1);
  const [currentGroup, setCurrentGroup] = useState(0);

  const pageNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const pagesPerGroup = 3;
  const totalGroups = Math.ceil(pageNumber.length / pagesPerGroup);

  let limitValue = 0;
  if (activePage === 1) {
    limitValue = 0;
    console.log(limitValue);
  }
  else if (activePage === 2) {
    limitValue = 10;
    console.log(limitValue);
  }
  else if (activePage === 3) {
    limitValue = 20;
    console.log(limitValue);
  } else {
    console.log(limitValue);
  }
  const handleNext = () => {
    if (currentGroup < totalGroups - 1) {
      const newGroup = currentGroup + 1;
      setCurrentGroup(newGroup);
      // Set active page to first page of next group
      const firstPageOfNextGroup = pageNumber[newGroup * pagesPerGroup];
      setActivePage(firstPageOfNextGroup);
    }
  };

  const handlePrev = () => {
    if (currentGroup > 0) {
      const newGroup = currentGroup - 1;
      setCurrentGroup(newGroup);
      // Set active page to first page of previous group
      const firstPageOfPrevGroup = pageNumber[newGroup * pagesPerGroup];
      setActivePage(firstPageOfPrevGroup);
    }
  };

  // Get current pages to display
  const startIndex = currentGroup * pagesPerGroup;
  const currentPages = pageNumber.slice(startIndex, startIndex + pagesPerGroup);

  const isPrevDisabled = currentGroup === 0;
  const isNextDisabled = currentGroup === totalGroups - 1;

  return (
    <div className="flex justify-center items-center gap-3">
      <button
        className={`cursor-pointer px-3.5 py-1.5 border rounded-md w-fit ${
          isPrevDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
        }`}
        onClick={handlePrev}
        disabled={isPrevDisabled}
      >
        Prev
      </button>

      {currentPages.map((num) => (
        <div
          className={`cursor-pointer px-3.5 py-1.5 rounded-md transition-colors ${
            activePage === num
              ? "bg-blue-500 text-white border-0"
              : "text-black border hover:bg-gray-100"
          }`}
          key={num}
          onClick={() => {
            setActivePage(num);
            setLimit(limitValue);
            nextList()
          }}
        >
          {num}
        </div>
      ))}

      {!isNextDisabled && (
        <div className="cursor-pointer px-3.5 py-1.5 border rounded-md">
          ...
        </div>
      )}

      <button
        className={`cursor-pointer px-3.5 py-1.5 border rounded-md w-fit ${
          isNextDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
        }`}
        onClick={handleNext}
        disabled={isNextDisabled}
      >
        Next
      </button>
    </div>
  );
}
