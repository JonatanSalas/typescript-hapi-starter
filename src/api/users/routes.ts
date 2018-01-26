import { inject, injectable } from 'inversify';
import BaseRouter from '../../common/base-router';
import { ICrudController, IRouteConfiguration } from '../../interfaces';
import Types from '../../ioc/types';
import validate from './validate';

@injectable()
export default class UserRoutes extends BaseRouter {
    private controller: ICrudController;

    constructor(@inject(Types.Controllers.UsersController) controller: ICrudController) {
        super();

        this.controller = controller;
    }

    public routes(): IRouteConfiguration[] {
        return [
            {
                method: 'POST',
                path: '/api/users',
                config: {
                    handler: this.controller.create,
                    validate: validate.create,
                    description: 'Method that creates a new user.',
                    tags: ['api', 'users'],
                    auth: false,
                },
            },
            {
                method: 'PUT',
                path: '/api/users/{id}',
                config: {
                    handler: this.controller.updateById,
                    validate: validate.updateById,
                    description: 'Method that updates a user by its id.',
                    tags: ['api', 'users'],
                    auth: false,
                },
            },
            {
                method: 'GET',
                path: '/api/users/{id}',
                config: {
                    handler: this.controller.getById,
                    validate: validate.getById,
                    description: 'Method that get a user by its id.',
                    tags: ['api', 'users'],
                    auth: false,
                },
            },
            {
                method: 'GET',
                path: '/api/users',
                config: {
                    handler: this.controller.getAll,
                    description: 'Method that gets all users.',
                    tags: ['api', 'users'],
                    auth: false,
                },
            },
            {
                method: 'DELETE',
                path: '/api/users/{id}',
                config: {
                    handler: this.controller.deleteById,
                    validate: validate.deleteById,
                    description: 'Method that deletes a user by its id.',
                    tags: ['api', 'users'],
                    auth: false,
                },
            },
        ];
    }
}
