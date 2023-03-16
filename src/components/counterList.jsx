import React, { useState } from 'react';
import Counter from './counter';

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: 'ненужная вещь' },
    { id: 1, value: 0, name: 'ложка' },
    { id: 2, value: 0, name: 'вилка' },
    { id: 3, value: 0, name: 'тарелка' },
    { id: 4, value: 0, name: 'ножик' },
  ];

  const [counters, setCounter] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounter(newCounters);
  };

  const handleReset = () => {
    setCounter(initialState);
  };

  const handelIncrement = (id) => {
    setCounter(
      counters.map((counter) => {
        if (counter.id === id) {
          counter.value = counter.value + 1;
        }

        return counter;
      }),
    );
  };

  const handelDecrement = (id) => {
    setCounter(
      counters.map((counter) => {
        if (counter.id === id) {
          counter.value = counter.value - 1;
        }

        return counter;
      }),
    );
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handelIncrement}
          onDecrement={handelDecrement}
          {...count}
        />
      ))}
      <button className='btn btn-primary btn-sm m-2' onClick={handleReset}>
        сброс
      </button>
    </>
  );
};

export default CountersList;
