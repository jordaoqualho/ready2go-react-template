import { useDispatch, useSelector } from "react-redux";
import { saveUsers, selectUser } from "store/userSlice";

export function useRedux() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const setRedux = (slice = "", data = []) => {
    switch (slice) {
      case "user":
        dispatch(saveUsers(data));
        break;

      default:
        return undefined;
    }
  };

  return [{ user }, setRedux];
}
