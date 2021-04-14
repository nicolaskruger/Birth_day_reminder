import { PeopleState } from "../actions/types";
import { IPeople } from "../app/People";

const peoples: IPeople[] = [
    {
        name: "Bertie Yates",
        age: 29,
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
    },
    {
        name: "Hester Hogan",
        age: 32,
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg"
    },
    {
        name: "Larry Litttle",
        age: 36,
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
    },
    {
        name: "Sean Walsh",
        age: 34,
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
    },
    {
        name: "Lola Gardner",
        age: 29,
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
    },
]

export const inithialState: PeopleState = {
    peoples: peoples
}