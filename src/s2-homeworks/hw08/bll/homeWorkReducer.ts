import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const compareFunctionUp = (a:UserType, b:UserType) =>{
                if(a.name > b.name){
                    return 1
                }
                if(a.name < b.name){
                    return -1
                }
                return 0;
            }
            const compareFunctionDown = (a:UserType, b:UserType) => {
                if(a.name < b.name) {
                    return 1
                }
                if(a.name > b.name){
                    return -1
                }
                return 0
            }
            const compareFunction = action.payload === "up" ? compareFunctionUp : compareFunctionDown
            let stateCopy = [...state]
            return stateCopy.sort(compareFunction)
            // let stateCopy = [...state]
            // const compareFunctionUp = (a:UserType, b:UserType) => {
            //     stateCopy.sort((a, b)=>
            //     a.name > b.name ? 1 : -1)
            // }
            // const compareFunctionDown = (a:UserType, b:UserType) => {
            //     stateCopy.sort((a, b)=>
            //         a.name < b.name ? 1 : -1)
            // }
            // const CompareFunction = action.payload === "up" ? compareFunctionUp : compareFunctionDown
            // return state.sort(CompareFunction)
            }
            // let stateCopy = [...state]
            // let sortArray = stateCopy.sort((a,b) =>
            // a.name > b.name ? 1 : -1 )
            // state = sortArray
            // return state // need to fix
        case 'check': {
            let stateCopy = [...state]
            let filteredState = stateCopy.filter(el=>el.age >= action.payload)
            state = filteredState
            return state // need to fix
        }
        default:
            return state
    }
}
