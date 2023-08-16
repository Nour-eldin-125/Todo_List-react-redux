const add ="ADD"
const remove ="REMOVE"

export const actionTypes = {
    add,
    remove
}

export const Add = (payload) => {
    return {
        type: actionTypes.add,
        payload
    }
}

export const Remove = (payload) => {
    return {
        type: actionTypes.remove,
        payload
    }
}
