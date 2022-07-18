import { nanoid } from "nanoid";

export const getTodos = (
    async() => {
        const response = await fetch('https://mytodo-node-backend.herokuapp.com/api/', {
			method: 'GET',
            headers: {
                'Content-Type': 'application/json',
				'Accept': 'application/json'
            },
		});
        if (response.ok) {
            const todos = await response.json();
            return { todos };
        }
    }
);

export const addTodos = (
    async(newTodo) => {
        const response = await fetch('https://mytodo-node-backend.herokuapp.com/api/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: nanoid(), name: newTodo.name, completed: false })
        });
        if (response.ok) {
            const todos = await response.json();
            return { todos };
        }
    }
);

export const deleteTodo = (
	async (id) => {
		const resp = await fetch(`https://mytodo-node-backend.herokuapp.com/api/${id}`, {
			method: 'DELETE',
		});

		if (resp.ok) {
			return { id: id };
		}
	}
);

export const toggleComplete = (
	async (id, completed) => {
		const resp = await fetch(`api/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ completed: !completed }),
		});

		if (resp.ok) {
			const todo = await resp.json();
			return { todo };
		}
	}
);
