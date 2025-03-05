import useCounterStore from "../Zustand/counter_store";

export default function CounterZustand(props) {
    const { count, increment, decrement } = useCounterStore(state => state);
    return<>
    <p>la valeur du count {count}</p>
    </>
}