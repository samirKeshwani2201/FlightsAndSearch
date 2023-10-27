class CrudService {
    constructor(repository) {
        this.repository = repository;
    }

    async create(data) {
        try {
            const response = await this.repository.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in crud service ");
            throw { error };
        }
    }


    async destroy(modelId) {
        try {
            await this.repository.destroy(modelId);
            return true;
        } catch (error) {
            console.log("Something went wrong in crud service ");
            throw { error };
        }

    }
    async get(modelId) {
        try {
            const result = await this.repository.get(modelId);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud service ");
            throw { error };
        }

    }

    async getAll() {
        try {
            const response = await this.repository.getAll();
            return response;
        } catch (error) {
            console.log("Something went wrong in crud service ");
            throw { error };
        }
    }

    async update(modelId, data) {
        try {
            const response = await this.repository.update(id, data);
            return response;
        } catch (error) {
            console.log("Something went wrong in crud service ");
            throw { error };
        }

    }
}
module.exports = CrudService;