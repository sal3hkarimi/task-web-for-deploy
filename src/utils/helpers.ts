

export const checkStatusClass =(status:string):string =>{
    switch (status) {
        case 'completed':
            return 'bg-green-400';
            break;
        case 'uncompleted':
            return 'bg-orange-600';
            break;
        case 'inprocess':
            return 'bg-purple-600'
            break;
        case 'expired':
            return 'red-400';
            break;
        default :
            return 'purple-400';
        break;
    }
}
