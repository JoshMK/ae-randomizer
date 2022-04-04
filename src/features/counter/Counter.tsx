import React from "react";
import { useAppSelector } from "../../app/hooks";
import { useAppDispatch } from "../../app/hooks";
import {
  setRandomPageValue,
  setRandomSubpageValue,
  selectPageValue,
  selectSubpageValue,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const dispatch = useAppDispatch();
  const pageValue = useAppSelector(selectPageValue);
  const subpageValue = useAppSelector(selectSubpageValue);

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(setRandomPageValue())}
        >
          Random Page
        </button>
        <p>{pageValue}/549</p>
        <button
          className={styles.button}
          onClick={() => dispatch(setRandomSubpageValue())}
        >
          Random Subpage
        </button>
        <p>{subpageValue}/20</p>
      </div>
    </div>
  );
}
