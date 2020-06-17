import { baseUrl } from '../shared/baseUrl';

export const ADD_ITEM = 'ADD_ITEM';
export const ITEM_FAILED = 'ITEM_FAILED';

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item
});



const getAll = () => {
    return fetch(baseUrl + "todo")
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            (error) => {
                var errmess = new Error(error.message);
                throw errmess;
            });

}

export const fetchTodo = () => (dispatch) => {
    return getAll()
        .then(response => response.json())
        .then(item => dispatch(addItem(item)))
        .catch(error => dispatch(itemFailed(error.message)));
}

export const removeItem = (item) => (dispatch) =>{
    return fetch(baseUrl + 'todo/' + item.id, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                return getAll();
            }
            else {
                var error = new Error('Error ' + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            (error) => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => dispatch(addItem(response)))
        .catch(error => {
            console.log('DELETE item ', error.message)
            alert('Your item could not be deleted\nError:' + error.message)
        });

    }

export const itemFailed = (errmess) => ({
    type: ITEM_FAILED,
    payload: errmess
});

export const postTodo = (value) => (dispatch) => {
    const newTodo = {
        text: value,
        completed: false
    }
    return fetch(baseUrl + 'todo', {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return getAll();
            }
            else {
                var error = new Error('Error ' + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            (error) => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => {console.log(response);dispatch(addItem(response))})
        .catch(error => {
            console.log('POST item ', error.message)
            alert('Your item could not be posted\nError:' + error.message)
        });
}

export const updateTodo = (id, text, completed) => (dispatch) => {
    const newTodo = {
        id: id,
        text: text,
        completed: completed
    }
    console.log(newTodo);
    return fetch(baseUrl + 'todo/' + id, {
        method: 'PUT',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return getAll();
            }
            else {
                var error = new Error('Error ' + response.status + ':' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            (error) => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => dispatch(addItem(response)))
        .catch(error => {
            console.log('Update item ', error.message)
            alert('Your item could not be updated\nError:' + error.message)
        });
};
