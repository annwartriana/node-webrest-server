import { Router } from "express";
import { TodosController } from "./controller";
import { TodoDatasourceImpl } from "../../infrastructure/datasources/todo.datasource.impl";
import { TodoRepository } from "../../domain";
import { TodoRepositoryImpl } from "../../infrastructure/repositories/todo.repository.impl";


export class TodoRoutes {
    
    static get routes(): Router{
        const router = Router();

        const dataSourceImpl = new TodoDatasourceImpl();
        const todoRepository = new TodoRepositoryImpl(dataSourceImpl);
        const todoController= new TodosController(todoRepository);

        router.get('/',  todoController.getTodos);
        router.get('/:id',  todoController.getTodoById );
        router.post('/',  todoController.createTodo );
        router.patch('/:id',  todoController.updateTodo );
        router.delete('/:id', todoController.deleteTodo );
        return router;
    }
}