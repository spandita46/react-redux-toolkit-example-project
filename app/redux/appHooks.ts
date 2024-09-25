import { useDispatch, useSelector } from "react-redux";
import store from "./store";

// App Level State Type
export type RootState = ReturnType<typeof store.getState>;

// App Level Type-Aware Dispatcher
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// App Level Type-Aware Selector
export const useAppSelector = useSelector.withTypes<RootState>();
