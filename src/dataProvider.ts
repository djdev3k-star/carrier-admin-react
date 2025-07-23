import { DataProvider } from 'react-admin';

// Placeholder functions for each required data op; implement Airtable calls next phase
const dataProvider: DataProvider = {
    getList: (resource, params) =>
        Promise.resolve({ data: [], total: 0 }),
    getOne: (resource, params) =>
        Promise.resolve({ data: {} }),
    getMany: (resource, params) =>
        Promise.resolve({ data: [] }),
    getManyReference: (resource, params) =>
        Promise.resolve({ data: [], total: 0 }),
    update: (resource, params) =>
        Promise.resolve({ data: params.data }),
    updateMany: (resource, params) =>
        Promise.resolve({ data: params.ids }),
    create: (resource, params) =>
        Promise.resolve({ data: { ...params.data, id: Date.now() } }),
    delete: (resource, params) =>
        Promise.resolve({ data: params.previousData }),
    deleteMany: (resource, params) =>
        Promise.resolve({ data: params.ids }),
};

export default dataProvider;
