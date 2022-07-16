import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: 'recoil-persist',
    storage: localStorage,
});

export const listState = atom({
    key: 'listState',
    default: [{}],
    effects_UNSTABLE: [persistAtom],
});