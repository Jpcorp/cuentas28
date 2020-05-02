module.exports = {

    entityToDomain(typeEntityServices) {
        const { id, name, createAt } = typeEntityServices
        return { id, name, createAt };
    }
};