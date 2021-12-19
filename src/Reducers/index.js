// import {data} from '../Api/data'
const InitialState = {
    items:[
        {
            id:Math.random().toFixed(1),
            code:'Ca61',
            domain: 'bestcanadiancasinos-online.com',
            cpanel: 'http://161.129.139.26:2082/',
            username:'bestcana',
            password: 'X6zD7]c4zwBT@7',
            owner:'Phillipp'
            },
            {
            id:Math.random().toFixed(1),
            code:'Fi85',
            domain: 'bestcanadiancasinos-online.com',
            cpanel: 'http://161.129.139.26:2082/',
            username:'bestcana',
            password: 'X6zD7]c4zwBT@7',
            owner:'Pasha'
         },
         {
            id:Math.random().toFixed(1),
            code:'Fi86',
            domain: 'bestcanadiancasinos-online.com',
            cpanel: 'http://161.129.139.26:2082/',
            username:'bestcana',
            password: 'X6zD7]c4zwBT@7',
            owner:'Pasha'
         }
    ]
}
export const reducer = (state=InitialState,action) =>{
    switch(action.type){
        case 'Deleteitem':
            return { items:[...state.items.filter((item)=> item.id !== action.payload)]};
        case 'Copyitem':
            return{
                items:[...state.items, ...state.items.filter((item) => item.id === action.payload)]
            }
        case 'FETCHDATA':
            console.log('Fetched data',action.website)
            return state
        case 'FETCHDATAERR':
            console.log('There is error',action.err)
            return state
        default:
            return state
    }
}