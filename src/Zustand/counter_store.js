import {create} from 'zustand'

const useCounterStore= create((set) => ({
    count :0,
    addOne: () => {set((oldstate)=> oldstate + 1) },
    decrement: ()=> {set((oldstate)=> oldstate - 1);},
    reset: ()=> {set({count:0});}
}))

export default useCounterStore;