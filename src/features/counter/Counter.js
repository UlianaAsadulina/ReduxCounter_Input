import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset, selectCount } from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(1);

  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>{count}</span>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          style={{ width: "50px", height: "50px" }}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement(incrementAmount))}
        >
          -
        </button>
        <input
          type="number"
          min="1"
          step="1"
          className={styles.numinput}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
        />
        <button
          className={styles.button}
          style={{ width: "50px", height: "50px" }}
          aria-label="Increment value"
          onClick={() => dispatch(increment(incrementAmount))}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          style={{ height: "50px" }}
          aria-label="Reset"
          onClick={() => {
            setIncrementAmount(1);
            dispatch(reset());
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
