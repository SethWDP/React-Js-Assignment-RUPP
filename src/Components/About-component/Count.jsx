import React, { useState, useEffect } from "react";
import "./count.css";

const Count = () => {
  // Initialize state for our three counters
  const [counters, setCounters] = useState({
    customers: 0,
    booksSold: 0,
    allBooks: 0,
    reader: 0,
  });

  // This effect runs once when the component mounts
  useEffect(() => {
    // We'll count up to these final numbers
    const targets = {
      customers: 150,
      booksSold: 168,
      allBooks: 170,
      reader: 168,
    };

    // Update numbers every 60 milliseconds
    const timer = setInterval(() => {
      setCounters((prevCounts) => ({
        // For each counter, either add 1 or stop at target
        customers:
          prevCounts.customers < targets.customers
            ? prevCounts.customers + 3
            : targets.customers,
        booksSold:
          prevCounts.booksSold < targets.booksSold
            ? prevCounts.booksSold + 3
            : targets.booksSold,
        allBooks:
          prevCounts.allBooks < targets.allBooks
            ? prevCounts.allBooks + 3
            : targets.allBooks,
        reader:
          prevCounts.reader < targets.reader
            ? prevCounts.reader + 3
            : targets.reader,
      }));
    }, 60);

    // Stop the timer when all counters reach their targets
    if (
      counters.customers === targets.customers &&
      counters.booksSold === targets.booksSold &&
      counters.allBooks === targets.allBooks &&
      counters.reader === targets.reader
    ) {
      clearInterval(timer);
    }

    // Cleanup: clear the timer if component unmounts
    return () => clearInterval(timer);
  }, [counters]); // Run effect when counters change

  return (
    <>
      <section className="count">
        {/* Main container */}
        <div className="container countitem">
          {/* Counter Card 1 */}
          <div className="customer">
            <h2 className="">{counters.customers}+</h2>
            <p className="">Happy Customers</p>
          </div>

          {/* Counter Card 2 */}
          <div className="book-sold">
            <h2 className="">{counters.booksSold}+</h2>
            <p className="">Books Sold</p>
          </div>

          {/* Counter Card 3 */}
          <div className="allBook">
            <h2 className="">{counters.allBooks}+</h2>
            <p className="">All Books</p>
          </div>
          <div className="reader">
            <h2 className="">{counters.reader}+</h2>
            <p className="">Readers</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Count;
