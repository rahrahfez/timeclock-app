import { Timestamp } from './timestamp.model';

// export class User {
//     constructor(
//         public id: string,
//         public clockIn?: Timestamp[],
//         public clockOut?: Timestamp[]) {}
// }
    
export interface User {
    id: string;
    clockIn: Timestamp[],
    clockOut: Timestamp[]
}
